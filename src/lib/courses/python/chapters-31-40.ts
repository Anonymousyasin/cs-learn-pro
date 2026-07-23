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
    description: "What is the sorted list?",
    instructions: ["Sort by string length using a lambda key", "Type the sorted list"],
    code: 'names = ["Bob", "Alice", "Eve"]\nsorted_names = sorted(names, key=lambda x: len(x))\nprint(sorted_names)',
    correctOutput: "['Eve', 'Bob', 'Alice']",
    hint: "Lengths: Eve=3, Bob=3, Alice=5. Sort by length: Eve(3), Bob(3), Alice(5).",
  },
  {
    id: "py31-ex8", type: "exercise", title: "Lambda in sorted() descending",
    description: "What's the sorted list in descending order?",
    instructions: ["Use reverse=True with sorted()", "Type the result"],
    code: 'grades = [("Alice", 85), ("Bob", 72), ("Charlie", 95)]\nresult = sorted(grades, key=lambda s: s[1], reverse=True)\nprint(result)',
    correctOutput: "[('Charlie', 95), ('Alice', 85), ('Bob', 72)]",
    hint: "Highest grade first: Charlie 95, Alice 85, Bob 72.",
  },
  {
    id: "py31-ex9", type: "exercise", title: "Lambda with filter()",
    description: "Using filter() with a lambda...",
    instructions: ["filter() keeps items where the lambda returns True", "Type the result"],
    code: 'nums = [1, 2, 3, 4, 5, 6]\nresult = list(filter(lambda x: x % 3 == 0, nums))\nprint(result)',
    correctOutput: "[3, 6]",
    hint: "Numbers divisible by 3: 3, 6.",
  },
  {
    id: "py31-ex10", type: "exercise", title: "Lambda with map()",
    description: "Using map() with a lambda...",
    instructions: ["map() transforms each element", "Type the result"],
    code: 'nums = [1, 2, 3]\nresult = list(map(lambda x: x ** 2, nums))\nprint(result)',
    correctOutput: "[1, 4, 9]",
    hint: "1^2=1, 2^2=4, 3^2=9.",
  },
];

const ch31Exam: ExamQuestion[] = [
  { id: "py31-q1", type: "multiple-choice", difficulty: "easy", question: "What keyword creates an anonymous function in Python?", options: [{ id: "a", text: "def" }, { id: "b", text: "lambda" }, { id: "c", text: "fn" }, { id: "d", text: "function" }], correctAnswer: "b", explanation: "The lambda keyword creates anonymous functions." },
  { id: "py31-q2", type: "true-false", difficulty: "easy", question: "A lambda function can contain multiple statements.", correctAnswer: false, explanation: "Lambdas can only contain a single expression — no statements." },
  { id: "py31-q3", type: "fill-blank", difficulty: "easy", question: "Lambda syntax: lambda args: ___", correctAnswer: "expression", acceptableAnswers: ["expr", "return value"], explanation: "lambda args: expression — the expression is evaluated and returned." },
  { id: "py31-q4", type: "multiple-choice", difficulty: "medium", question: "What does `sorted(data, key=lambda x: x[1])` sort by?", options: [{ id: "a", text: "First element" }, { id: "b", text: "Second element" }, { id: "c", text: "Length" }, { id: "d", text: "Sum of elements" }], correctAnswer: "b", explanation: "x[1] extracts the second element (0-indexed) as the sort key." },
  { id: "py31-q5", type: "code-order", difficulty: "medium", question: "Arrange a lambda that returns the larger of two numbers.", codeLines: ["lambda a, b: a if a > b else b", "a if a > b else b", "lambda a, b:", "result = (lambda a, b: a if a > b else b)(10, 5)"], correctOrder: [2, 1, 0, 3], explanation: "lambda keyword, then the expression with ternary, then wrap as lambda, then call it." },
  { id: "py31-q6", type: "match-pairs", difficulty: "medium", question: "Match each higher-order function to its behavior.", leftItems: ["sorted()", "filter()", "map()", "max()"], rightItems: ["Returns sorted list with key", "Keeps items where condition is true", "Transforms each item", "Returns the largest item by key"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "sorted sorts, filter filters, map transforms, max finds maximum." },
  { id: "py31-q7", type: "true-false", difficulty: "medium", question: "Lambda functions can use the `return` keyword.", correctAnswer: false, explanation: "Lambdas implicitly return the expression value — no `return` keyword allowed." },
  { id: "py31-q8", type: "fill-blank", difficulty: "medium", question: "A lambda that takes no arguments looks like: lambda ___: expression", correctAnswer: "", acceptableAnswers: ["", " "], explanation: "lambda: expression — no arguments, just a colon." },
  { id: "py31-q9", type: "multiple-choice", difficulty: "hard", question: "What does `sorted([3, -1, 2], key=lambda x: x if x >= 0 else -x)` return?", options: [{ id: "a", text: "[-1, 2, 3]" }, { id: "b", text: "[3, 2, -1]" }, { id: "c", text: "[-1, 2, 3]" }, { id: "d", text: "[2, 3, -1]" }], correctAnswer: "a", explanation: "The key returns absolute value (since -x for negatives). So keys are: 3->3, -1->1, 2->2. Sorted by key: -1(1), 2(2), 3(3)." },
  { id: "py31-q10", type: "code-order", difficulty: "hard", question: "Arrange code to sort a list of dicts by the 'age' key.", codeLines: ['people = [{"name": "A", "age": 30}, {"name": "B", "age": 20}]', 'sorted_people = sorted(people, key=lambda p: p["age"])', 'print(sorted_people)', 'from pprint import pprint'], correctOrder: [0, 1, 2], explanation: "Define data, sort with lambda key, print result." },
];

const ch31: Chapter = {
  id: "python-ch31", courseId: "python", title: "Lambda Functions", order: 31,
  sections: ch31Sections, examPool: ch31Exam, xpReward: 200, estimatedMinutes: 35,
  prerequisites: ["python-ch24"],
  keyPoints: [
    "`lambda args: expression` creates an anonymous function that returns the expression",
    "Lambdas can only contain a single expression — no statements or multiple lines",
    "Most commonly used with `sorted()`, `max()`, `min()`, `map()`, and `filter()`",
    "Use lambdas for simple, one-off functions; use `def` for anything complex or reused",
    "Lambdas support default arguments and variable arguments: `lambda x, y=10: x + y`",
    "Ternary expressions work in lambdas: `lambda x: \"even\" if x % 2 == 0 else \"odd\"`",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 32 – Map, Filter, Reduce
// Topics: map(), filter(), functools.reduce(), pipelines
// ───────────────────────────────────────────────────────────────────
const ch32Sections: Section[] = [
  {
    type: "text",
    content:
      "## `map()` — Transform Each Element\n\nThe `map()` function applies a given function to every element of an iterable and returns a `map` object (an iterator). The function can be a regular function, a lambda, or any callable.\n\n```python\nnumbers = [1, 2, 3, 4, 5]\n\n# Square each number using map with a lambda\nsquared = map(lambda x: x ** 2, numbers)\nprint(list(squared))  # [1, 4, 9, 16, 25]\n\n# Map with multiple iterables\na = [1, 2, 3]\nb = [10, 20, 30]\nsums = map(lambda x, y: x + y, a, b)\nprint(list(sums))  # [11, 22, 33]\n```\n\n`map()` stops when the shortest iterable is exhausted.",
  },
  {
    type: "code",
    language: "python",
    caption: "Working with map(): passing multiple iterables and using list() to consume:",
    content:
      '# String transformation\nnames = ["alice", "bob", "charlie"]\ncapitalized = map(str.capitalize, names)\nprint(list(capitalized))  # ["Alice", "Bob", "Charlie"]\n\n# Converting types\nstrings = ["1", "2", "3"]\nnumbers = list(map(int, strings))\nprint(numbers)  # [1, 2, 3]\n\n# map with multiple iterables — computes element-wise\nnums1 = [1, 2, 3]\nnums2 = [4, 5, 6]\nproducts = map(lambda a, b: a * b, nums1, nums2)\nprint(list(products))  # [4, 10, 18]',
  },
  {
    type: "text",
    content:
      "## `filter()` — Keep Matching Elements\n\nThe `filter()` function keeps only elements for which the given function returns `True`. Like `map()`, it returns a lazy iterator.\n\n```python\nnumbers = [1, 2, 3, 4, 5, 6]\n\n# Keep only even numbers\nevens = filter(lambda x: x % 2 == 0, numbers)\nprint(list(evens))  # [2, 4, 6]\n\n# Filter with None — keeps truthy values\ndata = [0, 1, \"\", \"hello\", [], [1, 2], None]\ntruthy = filter(None, data)\nprint(list(truthy))  # [1, \"hello\", [1, 2]]\n```\n\nUsing `filter(None, iterable)` is a common idiom for removing falsy values.",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical filtering — selecting elements by complex conditions:",
    content:
      "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\n# Filter to find primes in a range\nnums = range(1, 31)\nprimes = list(filter(is_prime, nums))\nprint(primes)\n# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]\n\n# Filter strings by length\nwords = [\"cat\", \"elephant\", \"dog\", \"giraffe\", \"ant\"]\nlong_words = list(filter(lambda w: len(w) >= 5, words))\nprint(long_words)  # [\"elephant\", \"giraffe\"]",
  },
  {
    type: "callout",
    style: "important",
    content:
      "**map() and filter() return iterators, not lists.** Both functions produce lazy iterators (map object, filter object). You must call `list()` on them (or iterate with a for loop) to actually execute the transformations. This is memory-efficient for large data — nothing is computed until needed.",
  },
  {
    type: "text",
    content:
      "## `functools.reduce()` — Cumulative Reduction\n\nThe `reduce()` function from the `functools` module applies a function cumulatively to the items of an iterable, reducing it to a single value. Unlike `map()` and `filter()`, `reduce()` needs to be imported.\n\n```python\nfrom functools import reduce\n\n# Sum all numbers — equivalent to sum()\nnumbers = [1, 2, 3, 4, 5]\ntotal = reduce(lambda a, b: a + b, numbers)\nprint(total)  # 15\n\n# Find the maximum\nmaximum = reduce(lambda a, b: a if a > b else b, numbers)\nprint(maximum)  # 5\n\n# With initial value (starts with 100, then adds each number)\ntotal_with_init = reduce(lambda a, b: a + b, numbers, 100)\nprint(total_with_init)  # 115\n```\n\n`reduce()` is useful but often clearer as a loop. Use it when the operation is a natural reduction (product, max, sum).",
  },
  {
    type: "code",
    language: "python",
    caption: "reduce() in action — factorial, flattening, and more:",
    content:
      "from functools import reduce\n\n# Factorial with reduce\nn = 5\nfactorial = reduce(lambda a, b: a * b, range(1, n + 1))\nprint(factorial)  # 120\n\n# Flatten a list of lists\nnested = [[1, 2], [3, 4, 5], [6]]\nflat = reduce(lambda acc, lst: acc + lst, nested, [])\nprint(flat)  # [1, 2, 3, 4, 5, 6]\n\n# Build a dictionary from pairs\npairs = [(\"a\", 1), (\"b\", 2), (\"c\", 3)]\nd = reduce(lambda acc, kv: {**acc, kv[0]: kv[1]}, pairs, {})\nprint(d)  # {\"a\": 1, \"b\": 2, \"c\": 3}",
  },
  {
    type: "comparison",
    title: "map vs filter vs reduce",
    headers: ["Aspect", "map()", "filter()", "reduce()"],
    rows: [
      ["Purpose", "Transform each element", "Keep/remove elements", "Combine into one value"],
      ["Output length", "Same as input", "\u2264 input length", "Always 1 value"],
      ["Lazy", "Yes (map object)", "Yes (filter object)", "No (eager)"],
      ["Arguments", "func, *iterables", "func, iterable", "func, iterable [, initial]"],
      ["Import", "Built-in", "Built-in", "from functools import reduce"],
    ],
  },
  {
    type: "text",
    content:
      "## Combining map, filter, and reduce\n\nThese three functions compose naturally into **data pipelines** — filter to remove unwanted items, map to transform, and reduce to aggregate.\n\n```python\nfrom functools import reduce\n\ndata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# Pipeline: filter even \u2192 square them \u2192 sum the squares\nresult = reduce(\n    lambda a, b: a + b,\n    map(lambda x: x ** 2,\n        filter(lambda x: x % 2 == 0, data))\n)\nprint(result)  # 220  (4 + 16 + 36 + 64 + 100)\n```\n\nWhile powerful, complex pipelines are more readable with generator expressions.",
  },
  {
    type: "code",
    language: "python",
    caption: "Real-world data pipeline with map/filter/reduce:",
    content:
      "from functools import reduce\n\nsales = [\n    {\"product\": \"Laptop\", \"price\": 1200, \"quantity\": 3},\n    {\"product\": \"Mouse\", \"price\": 25, \"quantity\": 10},\n    {\"product\": \"Monitor\", \"price\": 400, \"quantity\": 2},\n    {\"product\": \"Cable\", \"price\": 10, \"quantity\": 0},\n]\n\n# Total revenue from items with quantity > 0\nrevenue = reduce(\n    lambda total, item: total + item[\"price\"] * item[\"quantity\"],\n    filter(lambda item: item[\"quantity\"] > 0, sales),\n    0\n)\nprint(f\"Total revenue: ${revenue}\")  # Total revenue: $4650\n# Laptop: 1200*3 = 3600 + Mouse: 25*10 = 250 + Monitor: 400*2 = 800 = 4650",
  },
  {
    type: "key-points",
    points: [
      "`map(func, iterable)` transforms each element \u2014 returns a lazy iterator",
      "`filter(func, iterable)` keeps elements where func returns True \u2014 returns a lazy iterator",
      "`filter(None, iterable)` removes falsy values (0, '', None, False, [])",
      "`reduce(func, iterable)` cumulatively reduces to a single value \u2014 import from functools",
      "map/filter/reduce compose well for data pipelines",
      "All three work with lambda or any callable \u2014 use list() to materialize results",
    ],
  },
];

const ch32Exercises: ExerciseSection[] = [
  {
    id: "py32-ex1", type: "exercise", title: "Basic map",
    description: "What does map() produce?",
    instructions: ["map applies a function to each element", "Type the list output"],
    code: "result = list(map(lambda x: x + 1, [1, 2, 3]))\nprint(result)",
    correctOutput: "[2, 3, 4]",
    hint: "Each element is incremented by 1: 1\u21922, 2\u21923, 3\u21924.",
  },
  {
    id: "py32-ex2", type: "exercise", title: "Basic filter",
    description: "What does filter() keep?",
    instructions: ["filter keeps items where the condition is True", "Type the result"],
    code: "result = list(filter(lambda x: x > 2, [1, 2, 3, 4]))\nprint(result)",
    correctOutput: "[3, 4]",
    hint: "3 and 4 are greater than 2.",
  },
  {
    id: "py32-ex3", type: "exercise", title: "map with str method",
    description: "What does map with str.upper do?",
    instructions: ["str.upper is a method reference passed to map", "Type the result"],
    code: 'result = list(map(str.upper, ["a", "b", "c"]))\nprint(result)',
    correctOutput: "['A', 'B', 'C']",
    hint: "str.upper converts each string to uppercase.",
  },
  {
    id: "py32-ex4", type: "exercise", title: "filter with None",
    description: "What does filter(None, ...) remove?",
    instructions: ["filter(None, ...) keeps only truthy values", "Type the result"],
    code: 'result = list(filter(None, [0, 1, "", "hi", None, []]))\nprint(result)',
    correctOutput: "[1, 'hi']",
    hint: "0, '', None, and [] are falsy. 1 and 'hi' are truthy.",
  },
  {
    id: "py32-ex5", type: "exercise", title: "Basic reduce",
    description: "What does reduce with sum do?",
    instructions: ["reduce cumulatively applies the lambda", "Type the result"],
    code: "from functools import reduce\nresult = reduce(lambda a, b: a + b, [1, 2, 3, 4])\nprint(result)",
    correctOutput: "10",
    hint: "1+2=3, 3+3=6, 6+4=10.",
  },
  {
    id: "py32-ex6", type: "exercise", title: "reduce with initial",
    description: "What happens when reduce has an initial value?",
    instructions: ["The initial value is the starting accumulator", "Type the result"],
    code: "from functools import reduce\nresult = reduce(lambda a, b: a + b, [1, 2, 3], 10)\nprint(result)",
    correctOutput: "16",
    hint: "Starts at 10: 10+1=11, 11+2=13, 13+3=16.",
  },
  {
    id: "py32-ex7", type: "exercise", title: "map with multiple iterables",
    description: "map can take multiple iterables.",
    instructions: ["Elements are taken pair-wise from each iterable", "Type the result"],
    code: "result = list(map(lambda a, b: a + b, [1, 2, 3], [10, 20, 30]))\nprint(result)",
    correctOutput: "[11, 22, 33]",
    hint: "1+10=11, 2+20=22, 3+30=33.",
  },
  {
    id: "py32-ex8", type: "exercise", title: "filter odd numbers",
    description: "Keep only odd numbers using filter.",
    instructions: ["x % 2 == 1 checks for odd", "Type the result"],
    code: "result = list(filter(lambda x: x % 2 == 1, [1, 2, 3, 4, 5]))\nprint(result)",
    correctOutput: "[1, 3, 5]",
    hint: "1, 3, 5 are odd.",
  },
  {
    id: "py32-ex9", type: "exercise", title: "reduce for product",
    description: "Use reduce to multiply all numbers together.",
    instructions: ["Product of 1 through 5", "Type the result"],
    code: "from functools import reduce\nresult = reduce(lambda a, b: a * b, [1, 2, 3, 4, 5])\nprint(result)",
    correctOutput: "120",
    hint: "1*2*3*4*5 = 120.",
  },
  {
    id: "py32-ex10", type: "exercise", title: "Map and Filter Chain",
    description: "Chain filter then map in sequence.",
    instructions: ["First filter evens, then square them", "Type the result"],
    code: "nums = [1, 2, 3, 4, 5, 6]\nfiltered = filter(lambda x: x % 2 == 0, nums)\nresult = list(map(lambda x: x ** 2, filtered))\nprint(result)",
    correctOutput: "[4, 16, 36]",
    hint: "Filter evens: 2,4,6. Square: 4,16,36.",
  },
];

const ch32Exam: ExamQuestion[] = [
  { id: "py32-q1", type: "multiple-choice", difficulty: "easy", question: "What does map() return?", options: [{ id: "a", text: "A list" }, { id: "b", text: "A map object (iterator)" }, { id: "c", text: "A tuple" }, { id: "d", text: "A generator" }], correctAnswer: "b", explanation: "map() returns a lazy map object (iterator), not a list." },
  { id: "py32-q2", type: "true-false", difficulty: "easy", question: "filter() returns only elements where the function returns True.", correctAnswer: true, explanation: "filter() keeps elements where the function returns a truthy value." },
  { id: "py32-q3", type: "fill-blank", difficulty: "easy", question: "To use reduce(), you must import it from the ___ module.", correctAnswer: "functools", acceptableAnswers: ["functools"], explanation: "from functools import reduce" },
  { id: "py32-q4", type: "multiple-choice", difficulty: "medium", question: "What does `filter(None, [0, 1, None, 2])` return?", options: [{ id: "a", text: "[0, 1, None, 2]" }, { id: "b", text: "[0, 1, 2]" }, { id: "c", text: "[1, 2]" }, { id: "d", text: "[0, None]" }], correctAnswer: "c", explanation: "filter(None, ...) keeps truthy values: 1 and 2 are truthy; 0 and None are falsy." },
  { id: "py32-q5", type: "code-order", difficulty: "medium", question: "Arrange code to convert strings to integers using map.", codeLines: ['strings = ["1", "2", "3"]', 'numbers = list(map(int, strings))', 'print(numbers)'], correctOrder: [0, 1, 2], explanation: "Define data, map with int function, print result." },
  { id: "py32-q6", type: "match-pairs", difficulty: "medium", question: "Match each operation to its result on [1, 2, 3, 4].", leftItems: ["map(lambda x: x*2)", "filter(lambda x: x%2==0)", "reduce(lambda a,b: a+b)", "map(str)"], rightItems: ["[2, 4, 6, 8]", "[2, 4]", "10", "['1', '2', '3', '4']"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "Double, keep evens, sum, convert to strings." },
  { id: "py32-q7", type: "true-false", difficulty: "medium", question: "map() and filter() compute results immediately when called.", correctAnswer: false, explanation: "Both return lazy iterators \u2014 results are computed only when iterated over." },
  { id: "py32-q8", type: "fill-blank", difficulty: "medium", question: "If reduce() is called with an empty iterable and no initial value, it raises ___.", correctAnswer: "TypeError", acceptableAnswers: ["TypeError"], explanation: "reduce() needs at least one value; with an empty iterable and no initial, it raises TypeError." },
  { id: "py32-q9", type: "multiple-choice", difficulty: "hard", question: "What does `reduce(lambda a, b: a if a > b else b, [3, 1, 4, 1, 5, 9])` compute?", options: [{ id: "a", text: "The sum" }, { id: "b", text: "The maximum" }, { id: "c", text: "The minimum" }, { id: "d", text: "The count" }], correctAnswer: "b", explanation: "The lambda keeps the larger of a and b at each step \u2014 cumulatively finds the maximum (9)." },
  { id: "py32-q10", type: "code-order", difficulty: "hard", question: "Arrange a pipeline: filter > 0, convert to string, join.", codeLines: ['nums = [-1, 2, -3, 4]', 'positive = filter(lambda x: x > 0, nums)', 'strings = map(str, positive)', 'result = ", ".join(strings)'], correctOrder: [0, 1, 2, 3], explanation: "Define data, filter positive, map to strings, join with comma." },
];

const ch32: Chapter = {
  id: "python-ch32", courseId: "python", title: "Map, Filter, Reduce", order: 32,
  sections: ch32Sections, examPool: ch32Exam, xpReward: 205, estimatedMinutes: 40,
  prerequisites: ["python-ch31"],
  keyPoints: [
    "`map(func, iterable)` transforms each element \u2014 returns a lazy iterator",
    "`filter(func, iterable)` keeps elements where func returns True \u2014 returns a lazy iterator",
    "`filter(None, iterable)` removes falsy values (0, '', None, False, [])",
    "`reduce(func, iterable)` cumulatively reduces to a single value \u2014 import from functools",
    "map/filter/reduce compose well for data pipelines",
    "All three work with lambda or any callable \u2014 use list() to materialize results",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 33 – Advanced Comprehensions
// Topics: nested comprehensions, dict/set comprehensions, conditional logic
// ───────────────────────────────────────────────────────────────────
const ch33Sections: Section[] = [
  {
    type: "text",
    content:
      "## Nested List Comprehensions\n\nList comprehensions can be nested to work with multi-dimensional data. The order of `for` clauses follows the same order as nested loops \u2014 outer loop first, then inner loops.\n\n```python\n# Flatten a matrix (list of lists)\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflat = [x for row in matrix for x in row]\nprint(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n# Equivalent nested loops:\n# flat = []\n# for row in matrix:\n#     for x in row:\n#         flat.append(x)\n```\n\nNested comprehensions read left-to-right \u2014 the leftmost `for` is the outermost loop.",
  },
  {
    type: "code",
    language: "python",
    caption: "Nested comprehensions \u2014 transpose, pairs, and products:",
    content:
      '# Transpose a matrix (swap rows and columns)\nmatrix = [[1, 2, 3], [4, 5, 6]]\ntransposed = [[row[i] for row in matrix] for i in range(3)]\nprint(transposed)  # [[1, 4], [2, 5], [3, 6]]\n\n# Cartesian product of two lists\ncolors = ["red", "green"]\nsizes = ["S", "M", "L"]\nproducts = [(c, s) for c in colors for s in sizes]\nprint(products)\n# [("red", "S"), ("red", "M"), ("red", "L"), ("green", "S"), ("green", "M"), ("green", "L")]\n\n# Pairs where sum is even\npairs = [(a, b) for a in range(1, 5) for b in range(1, 5) if (a + b) % 2 == 0]\nprint(pairs)  # [(1,1), (1,3), (2,2), (2,4), (3,1), (3,3), (4,2), (4,4)]',
  },
  {
    type: "text",
    content:
      "## Dictionary Comprehensions\n\nDictionary comprehensions create dictionaries using `{key: value for ... in ...}` syntax. They follow the same pattern as list comprehensions but produce key-value pairs.\n\n```python\n# Square numbers as dictionary\nsquares = {x: x ** 2 for x in range(5)}\nprint(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\n\n# From two lists\nkeys = [\"name\", \"age\", \"city\"]\nvalues = [\"Alice\", 30, \"New York\"]\nperson = {k: v for k, v in zip(keys, values)}\nprint(person)  # {\"name\": \"Alice\", \"age\": 30, \"city\": \"New York\"}\n\n# Filtering in dict comprehensions\noriginal = {\"a\": 1, \"b\": 2, \"c\": 3, \"d\": 4}\nfiltered = {k: v for k, v in original.items() if v > 2}\nprint(filtered)  # {\"c\": 3, \"d\": 4}\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Dict comprehensions \u2014 transforming keys, swapping, and conditional values:",
    content:
      '# Swap keys and values\noriginal = {"a": 1, "b": 2, "c": 3}\nswapped = {v: k for k, v in original.items()}\nprint(swapped)  # {1: "a", 2: "b", 3: "c"}\n\n# Transform keys (uppercase) and keep values\nnames = {"alice": 25, "bob": 30, "charlie": 35}\ncapitalized = {k.capitalize(): v for k, v in names.items()}\nprint(capitalized)  # {"Alice": 25, "Bob": 30, "Charlie": 35}\n\n# Conditional value transformation\nnums = {x: "even" if x % 2 == 0 else "odd" for x in range(1, 6)}\nprint(nums)  # {1: "odd", 2: "even", 3: "odd", 4: "even", 5: "odd"}',
  },
  {
    type: "callout",
    style: "tip",
    content:
      "**Duplicate keys in dict comprehensions:** If the comprehension produces the same key multiple times, the *last* value wins \u2014 just like with regular dictionary literals. This can be useful for grouping or dangerous if you're not careful.",
  },
  {
    type: "text",
    content:
      "## Set Comprehensions\n\nSet comprehensions use curly braces `{}` without colons \u2014 just like set literals vs dict literals. They automatically eliminate duplicates.\n\n```python\n# Unique squared values\nnums = [-3, -2, -1, 0, 1, 2, 3]\nsquares_set = {x ** 2 for x in nums}\nprint(squares_set)  # {0, 1, 4, 9}  (order not guaranteed)\n\n# Extract unique vowels from text\ntext = \"hello world\"\nvowels = {c for c in text if c in \"aeiou\"}\nprint(vowels)  # {\"e\", \"o\"}  (order not guaranteed)\n\n# Filtering in set comprehensions\nfrom math import sqrt\nnumbers = range(20)\nperfect_squares = {x for x in numbers if sqrt(x).is_integer()}\nprint(perfect_squares)  # {0, 1, 4, 9, 16}\n```\n\nSet comprehensions are great for deduplication and membership tests.",
  },
  {
    type: "comparison",
    title: "Comprehension Types",
    headers: ["Type", "Syntax", "Output", "Example"],
    rows: [
      ["List", "[expr for x in iter]", "list", "[x**2 for x in range(5)]"],
      ["Set", "{expr for x in iter}", "set", "{x**2 for x in range(5)}"],
      ["Dict", "{k: v for x in iter}", "dict", "{x: x**2 for x in range(5)}"],
      ["Generator", "(expr for x in iter)", "generator", "(x**2 for x in range(5))"],
    ],
  },
  {
    type: "code",
    language: "python",
    caption: "Complex nested comprehensions \u2014 tic-tac-toe board, multiplication table:",
    content:
      '# Create a 3\u00d73 board filled with empty spaces\nboard = [[" " for _ in range(3)] for _ in range(3)]\nprint(board)\n# [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]\n\n# Multiplication table (1-5) as nested comprehension\ntable = [[i * j for j in range(1, 6)] for i in range(1, 6)]\nfor row in table:\n    print(row)\n# [1, 2, 3, 4, 5]\n# [2, 4, 6, 8, 10]\n# [3, 6, 9, 12, 15]\n# [4, 8, 12, 16, 20]\n# [5, 10, 15, 20, 25]\n\n# Read a matrix from a string\nmatrix_str = "1 2 3\\n4 5 6\\n7 8 9"\nmatrix = [[int(x) for x in line.split()] for line in matrix_str.split("\\n")]\nprint(matrix)  # [[1, 2, 3], [4, 5, 6], [7, 8, 9]]',
  },
  {
    type: "text",
    content:
      "## Conditional Expressions in Comprehensions\n\nPython supports putting the conditional in two positions:\n\n1. **Filtering condition** (at the end) \u2014 controls which items are included\n2. **Ternary expression** (at the front) \u2014 controls what value is produced\n\n```python\nitems = range(-5, 6)\n\n# Filtering condition \u2014 only positive numbers, unchanged\npositives = [x for x in items if x > 0]\nprint(positives)  # [1, 2, 3, 4, 5]\n\n# Ternary expression \u2014 every item included, but value depends on condition\npositive_or_zero = [x if x > 0 else 0 for x in items]\nprint(positive_or_zero)  # [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5]\n\n# Both together \u2014 only positive numbers, then mark large ones\nmarked = [f\"{x}!\" if x > 3 else str(x) for x in items if x > 0]\nprint(marked)  # [\"1\", \"2\", \"3\", \"4!\", \"5!\"]\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "The walrus operator (:=) in comprehensions (Python 3.8+):",
    content:
      "from math import sqrt\n\n# Without walrus \u2014 calling sqrt twice (once for if, once for value)\nroots = [sqrt(x) for x in range(10) if sqrt(x).is_integer()]\nprint(roots)  # [0.0, 1.0, 2.0, 3.0]\n# sqrt called 10 times for check + 4 times for values = wasteful\n\n# With walrus \u2014 compute sqrt once per element\nroots2 = [r for x in range(10) if (r := sqrt(x)).is_integer()]\nprint(roots2)  # [0.0, 1.0, 2.0, 3.0]\n# sqrt called only 10 times total\n\n# Practical: find expensive computation results that pass a threshold\ndef expensive(n):\n    return n ** 3 - n ** 2 + n\n\nresults = [val for x in range(10) if (val := expensive(x)) > 100]\nprint(results)  # [110, 222, 396, 650, 1002]\n# expensive() called only 10 times, not 10 + len(results)",
  },
  {
    type: "key-points",
    points: [
      "Nested comprehensions read left-to-right: `[x for row in m for x in row]` \u2014 outer loop first",
      "Dict comprehensions: `{k: v for k, v in iterable}` \u2014 use .items() on existing dicts",
      "Set comprehensions: `{expr for x in iterable}` \u2014 deduplicates automatically",
      "Filtering with `if` at the end excludes items; ternary at the front transforms values",
      "Generator expressions use `( )` \u2014 lazy, memory-efficient, single-use",
      "The walrus operator `:=` in comprehensions can avoid redundant computations",
    ],
  },
];

const ch33Exercises: ExerciseSection[] = [
  {
    id: "py33-ex1", type: "exercise", title: "Nested Comprehension",
    description: "What does this nested comprehension produce?",
    instructions: ["Read the comprehension left to right", "Type the flat list"],
    code: "matrix = [[1, 2], [3, 4]]\nresult = [x for row in matrix for x in row]\nprint(result)",
    correctOutput: "[1, 2, 3, 4]",
    hint: "For each row, yield each x. Row 0: 1,2. Row 1: 3,4.",
  },
  {
    id: "py33-ex2", type: "exercise", title: "Dict Comprehension",
    description: "What dict does this comprehension create?",
    instructions: ["x becomes the key, x**2 becomes the value", "Type the dict"],
    code: "result = {x: x ** 2 for x in range(1, 4)}\nprint(result)",
    correctOutput: "{1: 1, 2: 4, 3: 9}",
    hint: "1\u21921, 2\u21924, 3\u21929.",
  },
  {
    id: "py33-ex3", type: "exercise", title: "Set Comprehension",
    description: "What set does this create?",
    instructions: ["Set comprehensions deduplicate", "Type the set"],
    code: "result = {len(w) for w in ['hi', 'hey', 'hello', 'yo']}\nprint(result)",
    correctOutput: "{2, 3, 5}",
    hint: "Lengths: 'hi'=2, 'hey'=3, 'hello'=5, 'yo'=2. Unique: 2, 3, 5.",
  },
  {
    id: "py33-ex4", type: "exercise", title: "Conditional Comprehension",
    description: "What does the if clause filter?",
    instructions: ["Only even numbers are included", "Type the result"],
    code: "result = [x for x in range(10) if x % 2 == 0]\nprint(result)",
    correctOutput: "[0, 2, 4, 6, 8]",
    hint: "Even numbers from 0 to 9.",
  },
  {
    id: "py33-ex5", type: "exercise", title: "Ternary in Comprehension",
    description: "Ternary at the front changes the value, not the inclusion.",
    instructions: ["Every element is included, but value changes", "Type the result"],
    code: 'result = ["even" if x % 2 == 0 else "odd" for x in range(1, 6)]\nprint(result)',
    correctOutput: "['odd', 'even', 'odd', 'even', 'odd']",
    hint: "1=odd, 2=even, 3=odd, 4=even, 5=odd.",
  },
  {
    id: "py33-ex6", type: "exercise", title: "Cartesian Product",
    description: "Product of two lists in a comprehension.",
    instructions: ["Each pair combines one from each list", "Type the result"],
    code: 'result = [(x, y) for x in [1, 2] for y in ["a", "b"]]\nprint(result)',
    correctOutput: "[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]",
    hint: "For x=1: (1,'a'),(1,'b'). For x=2: (2,'a'),(2,'b').",
  },
  {
    id: "py33-ex7", type: "exercise", title: "Swap Dict Keys and Values",
    description: "What happens when swapping keys and values?",
    instructions: ["k, v becomes v, k in the output", "Type the result"],
    code: 'original = {"a": 1, "b": 2, "c": 3}\nresult = {v: k for k, v in original.items()}\nprint(result)',
    correctOutput: "{1: 'a', 2: 'b', 3: 'c'}",
    hint: "Keys become values and vice-versa.",
  },
  {
    id: "py33-ex8", type: "exercise", title: "Filter + Transform",
    description: "Filter and transform in one comprehension.",
    instructions: ["Only numbers > 2, then double them", "Type the result"],
    code: "nums = [1, 2, 3, 4, 5]\nresult = [x * 2 for x in nums if x > 2]\nprint(result)",
    correctOutput: "[6, 8, 10]",
    hint: "Numbers > 2: 3,4,5. Doubled: 6,8,10.",
  },
  {
    id: "py33-ex9", type: "exercise", title: "Flatten with Condition",
    description: "Flatten a matrix and filter.",
    instructions: ["Flatten, then keep only values > 4", "Type the result"],
    code: "matrix = [[1, 5], [3, 8], [2, 4]]\nresult = [x for row in matrix for x in row if x > 4]\nprint(result)",
    correctOutput: "[5, 8]",
    hint: "Flatten: 1,5,3,8,2,4. Filter > 4: 5,8.",
  },
  {
    id: "py33-ex10", type: "exercise", title: "Dict from Two Lists",
    description: "Create a dict from parallel lists.",
    instructions: ["zip pairs up corresponding elements", "Type the dict"],
    code: 'keys = ["name", "age"]\nvalues = ["Alice", 25]\nresult = {k: v for k, v in zip(keys, values)}\nprint(result)',
    correctOutput: "{'name': 'Alice', 'age': 25}",
    hint: "Pairs: ('name','Alice'), ('age',25).",
  },
];

const ch33Exam: ExamQuestion[] = [
  { id: "py33-q1", type: "multiple-choice", difficulty: "easy", question: "What brackets are used for a set comprehension?", options: [{ id: "a", text: "[]" }, { id: "b", text: "{}" }, { id: "c", text: "()" }, { id: "d", text: "<>" }], correctAnswer: "b", explanation: "Set comprehensions use curly braces {expr for x in iterable}." },
  { id: "py33-q2", type: "true-false", difficulty: "easy", question: "Dictionary comprehensions use the `:` character to separate keys and values.", correctAnswer: true, explanation: "Dict comprehensions use `{k: v for ...}` syntax with a colon." },
  { id: "py33-q3", type: "fill-blank", difficulty: "easy", question: "In a nested comprehension `[x for row in m for x in row]`, the outermost loop is `for ___`.", correctAnswer: "row", acceptableAnswers: ["row in m", "row"], explanation: "The leftmost `for row in m` is the outermost loop." },
  { id: "py33-q4", type: "multiple-choice", difficulty: "medium", question: "What does `{x ** 2 for x in [-2, -1, 0, 1, 2]}` return?", options: [{ id: "a", text: "[4, 1, 0, 1, 4]" }, { id: "b", text: "{0, 1, 4}" }, { id: "c", text: "[-2, -1, 0, 1, 2]" }, { id: "d", text: "{4, 1, 0, -1, -2}" }], correctAnswer: "b", explanation: "Set comprehension deduplicates: squares are 4,1,0,1,4 \u2192 unique: {0, 1, 4}." },
  { id: "py33-q5", type: "code-order", difficulty: "medium", question: "Arrange a dict comprehension from two parallel lists.", codeLines: ['keys = ["a", "b", "c"]', 'values = [1, 2, 3]', 'result = {k: v for k, v in zip(keys, values)}', 'print(result)'], correctOrder: [0, 1, 2, 3], explanation: "Define keys, define values, dict comprehension with zip, print." },
  { id: "py33-q6", type: "match-pairs", difficulty: "medium", question: "Match each comprehension to its output type.", leftItems: ["[x for x in r]", "{x for x in r}", "{x: x for x in r}", "(x for x in r)"], rightItems: ["list", "set", "dict", "generator"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "[] list, {} set (no colon), {k:v} dict, () generator." },
  { id: "py33-q7", type: "true-false", difficulty: "medium", question: "In a dict comprehension, if duplicate keys are produced, the first occurrence wins.", correctAnswer: false, explanation: "The last occurrence of a duplicate key wins \u2014 same as regular dict literal behavior." },
  { id: "py33-q8", type: "fill-blank", difficulty: "medium", question: "The operator introduced in Python 3.8 that can be used in comprehensions to avoid redundant computation is ___.", correctAnswer: ":=", acceptableAnswers: ["walrus operator", "walrus", ":="], explanation: "The walrus operator (:=) assigns and returns a value in a single expression." },
  { id: "py33-q9", type: "multiple-choice", difficulty: "hard", question: "What does `[x if x > 0 else 0 for x in [-2, 0, 3]]` return?", options: [{ id: "a", text: "[3]" }, { id: "b", text: "[-2, 0, 3]" }, { id: "c", text: "[0, 0, 3]" }, { id: "d", text: "[0, 3]" }], correctAnswer: "c", explanation: "Ternary at the front transforms every value: -2\u21920, 0\u21920, 3\u21923. All items are included." },
  { id: "py33-q10", type: "code-order", difficulty: "hard", question: "Arrange a transposed matrix using nested comprehension.", codeLines: ['matrix = [[1, 2, 3], [4, 5, 6]]', 'transposed = [[row[i] for row in matrix] for i in range(3)]', 'print(transposed)'], correctOrder: [0, 1, 2], explanation: "Define matrix, transpose with nested comprehension, print." },
];

const ch33: Chapter = {
  id: "python-ch33", courseId: "python", title: "Advanced Comprehensions", order: 33,
  sections: ch33Sections, examPool: ch33Exam, xpReward: 210, estimatedMinutes: 40,
  prerequisites: ["python-ch32"],
  keyPoints: [
    "Nested comprehensions read left-to-right \u2014 outer loop first, inner loops after",
    "Dict comprehensions: `{k: v for k, v in iterable}` with colon separator",
    "Set comprehensions: `{expr for x in iterable}` \u2014 deduplicates automatically",
    "Filtering with `if` at the end excludes items; ternary at front transforms values",
    "Generator expressions use `()` \u2014 lazy, memory-efficient, single-use",
    "The walrus operator `:=` in comprehensions can avoid redundant expensive computations",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 34 – Generators and Iterators
// Topics: generator functions, yield, yield from, send(), generator expressions,
//         lazy evaluation, data pipelines, memory efficiency
// ───────────────────────────────────────────────────────────────────
const ch34Sections: Section[] = [
  {
    type: "text",
    content:
      "## Generator Functions\n\nA **generator function** is a function that uses `yield` instead of `return`. When called, it returns a generator object \u2014 a lazy iterator that produces values one at a time. Each time `next()` is called, the function runs from where it paused until the next `yield`.\n\n```python\ndef countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\n# Calling the function creates a generator object \u2014 no code runs yet!\ngen = countdown(3)\nprint(next(gen))  # 3\nprint(next(gen))  # 2\nprint(next(gen))  # 1\n# print(next(gen))  # StopIteration (exhausted)\n```\n\nGenerator functions preserve their entire state between yields \u2014 local variables, the instruction pointer, and the call stack are all saved.",
  },
  {
    type: "code",
    language: "python",
    caption: "Generator function anatomy \u2014 yield produces, next() resumes, StopIteration ends:",
    content:
      '# Simple generator with multiple yields\ndef three_yields():\n    yield "first"\n    yield "second"\n    yield "third"\n\ngen = three_yields()\nprint(next(gen))  # first\nprint(next(gen))  # second\nprint(next(gen))  # third\n\n# Converting to list \u2014 consumes the generator\ndef squares(n):\n    for i in range(n):\n        yield i ** 2\n\nprint(list(squares(5)))  # [0, 1, 4, 9, 16]\n\n# Generator with infinite loop \u2014 use islice to bound\ndef infinite_evens():\n    n = 0\n    while True:\n        yield n\n        n += 2\n\nfrom itertools import islice\nprint(list(islice(infinite_evens(), 6)))  # [0, 2, 4, 6, 8, 10]',
  },
  {
    type: "text",
    content:
      "## `yield from` \u2014 Delegating to Sub-iterators\n\nThe `yield from` expression allows a generator to delegate part of its work to another generator or iterable. It yields all values from the sub-iterable before continuing.\n\n```python\ndef flatten(nested):\n    for item in nested:\n        if hasattr(item, '__iter__') and not isinstance(item, str):\n            yield from flatten(item)\n        else:\n            yield item\n\ndeep = [1, [2, [3, 4], 5], 6]\nprint(list(flatten(deep)))  # [1, 2, 3, 4, 5, 6]\n\n# Equivalent to manual iteration, but shorter:\ndef chain(a, b):\n    yield from a\n    yield from b\n\nprint(list(chain([1, 2], [3, 4])))  # [1, 2, 3, 4]\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "The `.send()` method \u2014 two-way communication with a generator:",
    content:
      "def report():\n    print(\"Generator started\")\n    total = 0\n    while True:\n        value = yield total  # send() value becomes the result of yield!\n        if value is None:\n            break\n        total += value\n        print(f\"Received: {value}, total: {total}\")\n    return total\n\ngen = report()\nnext(gen)                     # Start the generator (runs to first yield)\nprint(gen.send(10))           # Sends 10 \u2192 prints \"Received: 10, total: 10\" \u2192 yields 10\nprint(gen.send(20))           # Sends 20 \u2192 prints \"Received: 20, total: 30\" \u2192 yields 30\ngen.close()                   # Close the generator",
  },
  {
    type: "callout",
    style: "warning",
    content:
      "**Generators are single-use iterators.** Once a generator is exhausted (raises StopIteration), you cannot iterate over it again. To iterate again, you must create a new generator by calling the generator function again. This is different from lists, which can be iterated multiple times.",
  },
  {
    type: "text",
    content:
      "## Generator Expressions\n\nA **generator expression** is a compact way to create a generator using syntax similar to list comprehensions, but with parentheses instead of brackets. They're lazy \u2014 no computation happens until iteration.\n\n```python\n# List comprehension \u2014 creates the entire list in memory\nlist_comp = [x ** 2 for x in range(1000000)]  # ~8MB of memory\n\n# Generator expression \u2014 creates nothing until iterated\ngen_expr = (x ** 2 for x in range(1000000))  # ~200 bytes of memory\n\n# Iterate and consume\nfor val in gen_expr:\n    if val > 100:\n        break  # Only compute until we find one > 100\n    print(val)\n```\n\nThe parentheses can be omitted when the generator is the sole argument to a function: `sum(x ** 2 for x in range(10))`.",
  },
  {
    type: "code",
    language: "python",
    caption: "Generator expressions in action \u2014 lazy evaluation, sum/any/all, and filtering:",
    content:
      '# Generator expression with condition\nodds = (x for x in range(20) if x % 2 == 1)\nprint(list(odds))      # [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]\n\n# sum() with generator \u2014 no extra list created\ntotal = sum(x ** 2 for x in range(10))\nprint(total)           # 285  (sum of 0..9 squared)\n\n# any() short-circuits with generator\nhas_large = any(x > 100 for x in range(1000))\nprint(has_large)       # True (x=101 triggers True, stops)\n\n# all() checks every item\nall_even = all(x % 2 == 0 for x in [2, 4, 6, 8])\nprint(all_even)        # True\n\n# any/all with generator is memory-efficient for huge data',
  },
  {
    type: "text",
    content:
      "## Lazy Evaluation and Memory Efficiency\n\nGenerator expressions are dramatically more memory-efficient than list comprehensions for large datasets:\n\n```python\nimport sys\n\n# List comprehension \u2014 stores everything\nlist_comp = [x for x in range(100000)]\nprint(sys.getsizeof(list_comp))  # ~800,000 bytes\n\n# Generator expression \u2014 stores nothing (lazy)\ngen_expr = (x for x in range(100000))\nprint(sys.getsizeof(gen_expr))   # ~200 bytes\n```\n\n**When to use each:**\n- List comprehension: need to iterate multiple times, need random access, small data\n- Generator expression: single pass, huge data, memory-constrained, pipeline processing\n\nUse generator expressions in `sum()`, `min()`, `max()`, `any()`, `all()` \u2014 they avoid creating intermediate lists.",
  },
  {
    type: "code",
    language: "python",
    caption: "Generator pipelines \u2014 chain multiple lazy operations without intermediate storage:",
    content:
      "# Pipeline: read numbers \u2192 filter \u2192 transform \u2192 aggregate\nimport math\n\n# Step 1: source\ndef get_numbers():\n    for i in range(1, 1001):\n        yield i\n\n# Step 2: filter \u2014 only perfect squares\nsquares = (x for x in get_numbers() if math.isqrt(x) ** 2 == x)\n\n# Step 3: transform \u2014 halve them\nhalves = (x / 2 for x in squares)\n\n# Step 4: filter \u2014 keep integers only\nintegers = (x for x in halves if x == int(x))\n\n# Step 5: consume \u2014 get first 5\nfrom itertools import islice\nprint(list(islice(integers, 5)))\n# Perfect squares \u2264 1000: 1, 4, 9, 16, 25, 36, ...\n# Halved: 0.5, 2.0, 4.5, 8.0, 12.5, 18.0, ...\n# Integers: 2.0, 8.0, 18.0, 32.0, ...",
  },
  {
    type: "comparison",
    title: "Generator Functions vs Generator Expressions",
    headers: ["Aspect", "Generator Function (yield)", "Generator Expression"],
    rows: [
      ["Syntax", "def gen(): yield value", "(expr for x in iterable)"],
      ["Complexity", "Multiple statements, loops, conditions", "Single expression, optional if"],
      ["State", "Full state preserved (locals, stack)", "Implicit iteration state only"],
      ["When to use", "Complex logic, multi-step, send() needed", "Simple transformation or filter"],
      ["Reusable", "Call function again for new generator", "Re-evaluate expression"],
      ["Readability", "Better for complex pipelines", "More concise for simple tasks"],
    ],
  },
  {
    type: "key-points",
    points: [
      "Generator functions use `yield` instead of `return` \u2014 they produce values lazily and preserve state",
      "Each call to `next()` runs from the last yield to the next yield, then pauses",
      "`send(value)` sends a value back into a generator; it becomes the result of the `yield` expression",
      "`yield from` delegates yielding to a sub-iterable \u2014 great for recursion and flattening",
      "Generator expressions `(expr for x in iterable)` are lazy, memory-efficient, and single-use",
      "Use generators for large datasets, infinite sequences, memory-efficient pipelines, and `sum()`/`any()`/`all()`",
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
    id: "py34-ex3", type: "exercise", title: "Generator Expressions Basics",
    description: "What type does a generator expression create?",
    instructions: ["Create a generator expression and check its type", "Type the first value"],
    code: "g = (x for x in [1, 2, 3])\nprint(type(g).__name__)\nprint(next(g))",
    correctOutput: "generator\n1",
    hint: "Parentheses create a generator, not a tuple. next() gets the first yielded value.",
  },
  {
    id: "py34-ex4", type: "exercise", title: "yield from basics",
    description: "What does yield from do?",
    instructions: ["yield from yields all values from the sub-iterable", "Type the result"],
    code: "def gen():\n    yield from [10, 20, 30]\n\nprint(list(gen()))",
    correctOutput: "[10, 20, 30]",
    hint: "yield from [10, 20, 30] is equivalent to: yield 10; yield 20; yield 30.",
  },
  {
    id: "py34-ex5", type: "exercise", title: "Generator State",
    description: "Generators preserve state between yields.",
    instructions: ["Trace how x changes between each next()", "Type the values"],
    code: "def counter():\n    x = 0\n    while True:\n        x += 1\n        yield x\n\ng = counter()\nprint(next(g))\nprint(next(g))\nprint(next(g))",
    correctOutput: "1\n2\n3",
    hint: "x starts at 0, increments to 1, yields. Next call: x is still 1, increments to 2, yields.",
  },
  {
    id: "py34-ex6", type: "exercise", title: "Filter with Generator",
    description: "Generator expressions support if conditions.",
    instructions: ["Keep only odd numbers", "Type the result"],
    code: "g = (x for x in range(10) if x % 2 == 1)\nprint(list(g))",
    correctOutput: "[1, 3, 5, 7, 9]",
    hint: "Odd numbers from 0 to 9: 1, 3, 5, 7, 9.",
  },
  {
    id: "py34-ex7", type: "exercise", title: "Lazy Evaluation",
    description: "Generator expressions are lazy \u2014 they compute on demand.",
    instructions: ["Create a generator with range(100)", "Consume only the first value"],
    code: "g = (x ** 2 for x in range(100))\nprint(next(g))\nprint(next(g))",
    correctOutput: "0\n1",
    hint: "Only the requested values are computed: 0^2=0, 1^2=1.",
  },
  {
    id: "py34-ex8", type: "exercise", title: "Nested Generator",
    description: "Flatten a matrix with a generator expression.",
    instructions: ["Generator with nested for clauses", "Type the result"],
    code: "matrix = [[1, 2], [3, 4]]\ng = (x for row in matrix for x in row)\nprint(list(g))",
    correctOutput: "[1, 2, 3, 4]",
    hint: "Row 0: 1, 2. Row 1: 3, 4.",
  },
  {
    id: "py34-ex9", type: "exercise", title: "Chained Generators",
    description: "Chain two generator expressions together.",
    instructions: ["First gen filters, second gen transforms", "Type the result"],
    code: "nums = range(1, 11)\nfiltered = (x for x in nums if x > 5)\ntransformed = (x ** 2 for x in filtered)\nprint(list(transformed))",
    correctOutput: "[36, 49, 64, 81, 100]",
    hint: "Filter: 6,7,8,9,10. Then square: 36,49,64,81,100.",
  },
  {
    id: "py34-ex10", type: "exercise", title: "Infinite Generator",
    description: "Take only what you need from an infinite generator.",
    instructions: ["islice takes 5 values", "Type the result"],
    code: "from itertools import islice\n\ndef squares():\n    n = 1\n    while True:\n        yield n ** 2\n        n += 1\n\nprint(list(islice(squares(), 5)))",
    correctOutput: "[1, 4, 9, 16, 25]",
    hint: "First 5 squares: 1, 4, 9, 16, 25.",
  },
];

const ch34Exam: ExamQuestion[] = [
  { id: "py34-q1", type: "multiple-choice", difficulty: "easy", question: "What keyword makes a function a generator?", options: [{ id: "a", text: "return" }, { id: "b", text: "yield" }, { id: "c", text: "generate" }, { id: "d", text: "await" }], correctAnswer: "b", explanation: "The `yield` keyword makes a function a generator function." },
  { id: "py34-q2", type: "true-false", difficulty: "easy", question: "Calling a generator function executes the function body immediately.", correctAnswer: false, explanation: "Calling a generator function returns a generator object \u2014 execution starts only when next() is called." },
  { id: "py34-q3", type: "multiple-choice", difficulty: "easy", question: "What brackets create a generator expression?", options: [{ id: "a", text: "[]" }, { id: "b", text: "()" }, { id: "c", text: "{}" }, { id: "d", text: "<>" }], correctAnswer: "b", explanation: "Generator expressions use parentheses (expr for x in iterable)." },
  { id: "py34-q4", type: "true-false", difficulty: "medium", question: "A generator expression computes all values immediately when created.", correctAnswer: false, explanation: "Generator expressions are lazy \u2014 they compute values only when iterated." },
  { id: "py34-q5", type: "fill-blank", difficulty: "medium", question: "A generator raises ___ when it has no more values to yield.", correctAnswer: "StopIteration", acceptableAnswers: ["StopIteration"], explanation: "When a generator is exhausted, it raises StopIteration." },
  { id: "py34-q6", type: "multiple-choice", difficulty: "medium", question: "What does `yield from` do?", options: [{ id: "a", text: "Yields from the same function recursively" }, { id: "b", text: "Delegates yields to a sub-iterable" }, { id: "c", text: "Creates a new generator" }, { id: "d", text: "Returns a value" }], correctAnswer: "b", explanation: "yield from delegates iteration to another iterable, yielding all its values." },
  { id: "py34-q7", type: "true-false", difficulty: "medium", question: "A generator can be reused by calling next() on it again after it's exhausted.", correctAnswer: false, explanation: "Generators are single-use. Create a new generator by calling the function again." },
  { id: "py34-q8", type: "fill-blank", difficulty: "medium", question: "The method used to send a value back into a generator is ___.", correctAnswer: "send", acceptableAnswers: [".send()", "send()"], explanation: "generator.send(value) sends a value back, which becomes the result of the yield expression." },
  { id: "py34-q9", type: "multiple-choice", difficulty: "hard", question: "How many times can you iterate over a generator expression?", options: [{ id: "a", text: "Unlimited times" }, { id: "b", text: "Once" }, { id: "c", text: "Twice" }, { id: "d", text: "Depends on the data" }], correctAnswer: "b", explanation: "Generator expressions produce single-use iterators \u2014 they can be iterated exactly once." },
  { id: "py34-q10", type: "code-order", difficulty: "hard", question: "Arrange to filter even numbers from a generator.", codeLines: ['def even_gen(n):', '    for i in range(n):', '        if i % 2 == 0:', '            yield i'], correctOrder: [0, 1, 2, 3], explanation: "Define function, loop, condition, yield." },
];

const ch34: Chapter = {
  id: "python-ch34", courseId: "python", title: "Generators and Iterators", order: 34,
  sections: ch34Sections, examPool: ch34Exam, xpReward: 230, estimatedMinutes: 45,
  prerequisites: ["python-ch33"],
  keyPoints: [
    "Generator functions use `yield` to produce values lazily and preserve state between calls",
    "Generator expressions use `(expr for x in iter)` syntax \u2014 lazy, memory-efficient, single-use",
    "`yield from` delegates yielding to a sub-iterable or sub-generator",
    "`.send(value)` enables two-way communication with a running generator",
    "Use generators for huge datasets, infinite sequences, and memory-efficient pipelines",
    "Chain generators to build lazy data pipelines with zero intermediate storage",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 35 – Decorators
// Topics: @ syntax, wrapper functions, functools.wraps, decorator factories,
//         stacking, class decorators, lru_cache, singledispatch, partial
// ───────────────────────────────────────────────────────────────────
const ch35Sections: Section[] = [
  {
    type: "text",
    content:
      "## Decorators in Python\n\nA **decorator** is a function that takes another function and extends its behavior without modifying it directly. Decorators use the `@` syntax and are applied above the function definition.\n\n```python\ndef my_decorator(func):\n    def wrapper():\n        print(\"Something before\")\n        func()\n        print(\"Something after\")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()\n# Something before\n# Hello!\n# Something after\n```\n\n`@my_decorator` is syntactic sugar for `say_hello = my_decorator(say_hello)`.",
  },
  {
    type: "code",
    language: "python",
    caption: "Decorator with *args, **kwargs \u2014 make it work with any function:",
    content:
      'def uppercase_result(func):\n    """Convert return value to uppercase."""\n    def wrapper(*args, **kwargs):\n        result = func(*args, **kwargs)\n        return result.upper()\n    return wrapper\n\n@uppercase_result\ndef greet(name):\n    return f"Hello, {name}!"\n\n@uppercase_result\ndef get_word():\n    return "python"\n\nprint(greet("Alice"))  # "HELLO, ALICE!"\nprint(get_word())      # "PYTHON"',
  },
  {
    type: "text",
    content:
      "## `@functools.wraps` \u2014 Preserving Metadata\n\nWhen you wrap a function, the wrapper replaces the original's `__name__`, `__doc__`, and other metadata. `@functools.wraps` copies these from the original function to the wrapper \u2014 use it in every decorator.\n\n```python\nfrom functools import wraps\n\ndef logged(func):\n    @wraps(func)  # \u2190 preserves func's metadata\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__}\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@logged\ndef add(x, y):\n    \"\"\"Add two numbers.\"\"\"\n    return x + y\n\nprint(add.__name__)  # \"add\"  (not \"wrapper\")\nprint(add.__doc__)   # \"Add two numbers.\" (not None)\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical decorators \u2014 timing and debugging with @wraps:",
    content:
      'import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        elapsed = time.perf_counter() - start\n        print(f"{func.__name__} took {elapsed:.4f}s")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(0.5)\n    return "Done"\n\nprint(slow_function())\n# slow_function took 0.5003s\n# Done\nprint(slow_function.__name__)  # "slow_function" (thanks to @wraps)',
  },
  {
    type: "text",
    content:
      "## Decorator Factories\n\nA **decorator factory** is a function that returns a decorator \u2014 it lets you pass arguments to customize the decorator's behavior. The triple nesting (factory \u2192 decorator \u2192 wrapper) is the standard pattern.\n\n```python\ndef repeat(n):\n    \"\"\"Decorator factory: run the function n times.\"\"\"\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()\n# Hello!\n# Hello!\n# Hello!\n```\n\n`@repeat(3)` calls `repeat(3)` which returns a decorator, then that decorator is applied to the function.",
  },
  {
    type: "code",
    language: "python",
    caption: "Factory pattern \u2014 @tag('p') creates a decorator that wraps output in HTML tags:",
    content:
      "from functools import wraps\n\ndef tag(tag_name):\n    \"\"\"Decorator factory: wrap function output in an HTML tag.\"\"\"\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            return f\"<{tag_name}>{func(*args, **kwargs)}</{tag_name}>\"\n        return wrapper\n    return decorator\n\n@tag(\"p\")\ndef get_text():\n    return \"Hello\"\n\n@tag(\"h1\")\n@tag(\"i\")\ndef get_title():\n    return \"Big News\"\n\nprint(get_text())    # \"<p>Hello</p>\"\nprint(get_title())   # \"<h1><i>Big News</i></h1>\"",
  },
  {
    type: "text",
    content:
      "## Stacking Decorators\n\nYou can apply multiple decorators by stacking them. They apply **bottom-up** (the closest to the function runs first). Execution is **top-down** on call \u2014 the outermost decorator runs first.\n\n```python\n@decorator_a\n@decorator_b\n@decorator_c\ndef my_function():\n    pass\n\n# Equivalent to:\n# my_function = decorator_a(decorator_b(decorator_c(my_function)))\n```\n\nThis stacking pattern is common in web frameworks: `@app.route(\"/\")`, `@login_required`, `@cache` might all stack on one view function.",
  },
  {
    type: "callout",
    style: "info",
    content:
      '**Real-world built-in decorators** include `@property` (make a method look like an attribute), `@classmethod` and `@staticmethod` (alternative method types), and `@dataclass` (auto-generate `__init__`, `__repr__`, `__eq__`). Most are actually decorator factories under the hood.',
  },
  {
    type: "code",
    language: "python",
    caption: "functools.lru_cache \u2014 automatic memoization via a decorator:",
    content:
      "from functools import lru_cache, cache\n\n# @lru_cache \u2014 memoize with LRU eviction (maxsize)\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    \"\"\"Recursive Fibonacci with memoization.\"\"\"\n    if n < 2:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(50))  # 12586269025 \u2014 instant with caching!\nprint(fibonacci.cache_info())  # CacheInfo(hits=48, misses=51, maxsize=128, currsize=51)\n\n# @cache (Python 3.9+) \u2014 shorthand for @lru_cache(maxsize=None)\n@cache\ndef expensive(n):\n    print(f\"Computing {n}...\")\n    return n * n\n\nprint(expensive(4))  # Computing 4... \u2192 16\nprint(expensive(4))  # 16 (cached, no \"Computing\")\nexpensive.cache_clear()",
  },
  {
    type: "code",
    language: "python",
    caption: "functools.singledispatch \u2014 type-based dispatch via decorators:",
    content:
      "from functools import singledispatch\n\n@singledispatch\ndef serialize(data):\n    \"\"\"Default \u2014 fallback for unregistered types.\"\"\"\n    return str(data)\n\n@serialize.register(dict)\ndef _(data):\n    import json\n    return json.dumps(data, indent=2)\n\n@serialize.register(list)\ndef _(data):\n    import json\n    return json.dumps(data)\n\n@serialize.register(str)\ndef _(data):\n    return data\n\n@serialize.register(int)\n@serialize.register(float)\ndef _(data):\n    return str(data)\n\nprint(serialize({\"name\": \"Alice\"}))  # {\"name\": \"Alice\"}\nprint(serialize([1, 2, 3]))         # [1, 2, 3]\nprint(serialize(42))                 # \"42\"",
  },
  {
    type: "text",
    content:
      "## Class Decorators\n\nYou can apply decorators to entire classes, not just methods. Class decorators are commonly used for registering classes, adding methods, or injecting behavior.\n\n```python\ndef add_repr(cls):\n    \"\"\"Add a __repr__ method to a class.\"\"\"\n    def __repr__(self):\n        attrs = ', '.join(f'{k}={v!r}' for k, v in self.__dict__.items())\n        return f'{cls.__name__}({attrs})'\n    cls.__repr__ = __repr__\n    return cls\n\n@add_repr\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\np = Point(3, 4)\nprint(p)  # Point(x=3, y=4)\n```\n\nClass decorators receive the class and return a (possibly modified) class. They're widely used in dataclasses, ORMs (SQLAlchemy), and validation libraries (Pydantic).",
  },
  {
    type: "comparison",
    title: "Simple vs Parameterized Decorators",
    headers: ["Aspect", "Simple Decorator", "Parameterized (Factory)"],
    rows: [
      ["Definition", "def dec(func):\\n    def w(): ...\\n    return w", "def fac(args):\\n    def dec(func):\\n        def w(): ...\\n        return w\\n    return fac"],
      ["Usage", "@dec", "@fac(args)"],
      ["Arguments", "Only the function", "Factory args + function"],
      ["Nesting", "2 levels (dec, wrapper)", "3 levels (factory, dec, wrapper)"],
      ["Use case", "Fixed behavior (logging)", "Configurable (retry, auth)"],
    ],
  },
  {
    type: "code",
    language: "python",
    caption: "functools.partial \u2014 specializing functions via partial application:",
    content:
      "from functools import partial\n\ndef power(base, exponent):\n    return base ** exponent\n\n# Create specialized functions with partial\nsquare = partial(power, exponent=2)\ncube = partial(power, exponent=3)\n\nprint(square(5))  # 25\nprint(cube(5))    # 125\n\n# Real-world: fixing arguments for callbacks\ndef log_message(level, message):\n    print(f\"[{level}] {message}\")\n\ninfo = partial(log_message, \"INFO\")\nerror = partial(log_message, \"ERROR\")\n\ninfo(\"Server started\")    # [INFO] Server started\nerror(\"Disk full\")         # [ERROR] Disk full\n\nprint(square.func.__name__)  # \"power\"\nprint(square.args)           # ()\nprint(square.keywords)       # {\"exponent\": 2}",
  },
  {
    type: "key-points",
    points: [
      "A decorator is a function taking a function and returning a (usually new) function with extended behavior",
      "Use `@functools.wraps(func)` on every wrapper to preserve the original function's metadata",
      "Decorator factories enable parameterization: factory(args) \u2192 decorator(func) \u2192 wrapper(*args, **kwargs)",
      "Stacking decorators: applied bottom-up, executed top-down on call",
      "functools.lru_cache/@cache memoize results; functools.singledispatch dispatches by first arg type",
      "functools.partial creates specialized functions by fixing some arguments",
    ],
  },
];

const ch35Exercises: ExerciseSection[] = [
  {
    id: "py35-ex1", type: "exercise", title: "Basic Decorator",
    description: "What does the decorated function return?",
    instructions: ["The decorator wraps the function", "Trace what gets executed"],
    code: 'def decorator(func):\n    def wrapper():\n        return func() + "!"\n    return wrapper\n\n@decorator\ndef greet():\n    return "Hello"\n\nprint(greet())',
    correctOutput: "Hello!",
    hint: "The wrapper adds '!' to the result of func() = 'Hello'.",
  },
  {
    id: "py35-ex2", type: "exercise", title: "Decorator with Args",
    description: "What does this decorator do to a function with arguments?",
    instructions: ["The wrapper receives args and forwards them", "Trace the output"],
    code: 'def add_exclaim(func):\n    def wrapper(*args):\n        return func(*args) + "!"\n    return wrapper\n\n@add_exclaim\ndef join(a, b):\n    return a + b\n\nprint(join("Hi", " there"))',
    correctOutput: "Hi there!",
    hint: "join('Hi', ' there') returns 'Hi there', then wrapper adds '!'.",
  },
  {
    id: "py35-ex3", type: "exercise", title: "functools.wraps preserves name",
    description: "What does __name__ show with @wraps?",
    instructions: ["@wraps copies metadata from func to wrapper", "Type the output"],
    code: "from functools import wraps\n\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper():\n        return func()\n    return wrapper\n\n@my_decorator\ndef my_func():\n    return 42\n\nprint(my_func.__name__)",
    correctOutput: "my_func",
    hint: "@wraps(func) copies __name__ from func to wrapper, preserving 'my_func'.",
  },
  {
    id: "py35-ex4", type: "exercise", title: "Decorator Factory",
    description: "What does this decorator factory do?",
    instructions: ["The factory takes an argument and returns a decorator", "Trace the output"],
    code: 'def prefix(text):\n    def decorator(func):\n        def wrapper():\n            return text + func()\n        return wrapper\n    return decorator\n\n@prefix(">> ")\ndef get_msg():\n    return "hi"\n\nprint(get_msg())',
    correctOutput: ">> hi",
    hint: "The factory creates a decorator that prepends '>> ' to the function's return.",
  },
  {
    id: "py35-ex5", type: "exercise", title: "Stacking Decorators",
    description: "Which decorator runs first on call?",
    instructions: ["Bottom decorator wraps first, top runs first on call", "Trace the output"],
    code: 'def a(func):\n    def wrap():\n        return "<a>" + func() + "</a>"\n    return wrap\n\ndef b(func):\n    def wrap():\n        return "<b>" + func() + "</b>"\n    return wrap\n\n@a\n@b\ndef text():\n    return "hi"\n\nprint(text())',
    correctOutput: "<a><b>hi</b></a>",
    hint: "@a wraps @b wraps text. On call: a's wrapper calls b's wrapper calls text.",
  },
  {
    id: "py35-ex6", type: "exercise", title: "lru_cache basic",
    description: "How many times does the function actually run?",
    instructions: ["The function prints when called", "Count the print statements"],
    code: "from functools import lru_cache\n\n@lru_cache(maxsize=3)\ndef calc(x):\n    print(f\"Calc {x}\")\n    return x * x\n\nprint(calc(3))\nprint(calc(3))\nprint(calc(4))",
    correctOutput: "Calc 3\n9\n9\nCalc 4\n16",
    hint: "First calc(3) computes, second returns cached. calc(4) computes fresh.",
  },
  {
    id: "py35-ex7", type: "exercise", title: "Class Decorator",
    description: "What does the class decorator add?",
    instructions: ["The decorator adds a __repr__ method", "Trace the output"],
    code: 'def add_repr(cls):\n    def __repr__(self):\n        return f"{cls.__name__}({self.x}, {self.y})"\n    cls.__repr__ = __repr__\n    return cls\n\n@add_repr\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\np = Point(3, 4)\nprint(p)',
    correctOutput: "Point(3, 4)",
    hint: "add_repr adds a __repr__ that formats as 'ClassName(x, y)'.",
  },
  {
    id: "py35-ex8", type: "exercise", title: "singledispatch default",
    description: "What happens for unregistered types?",
    instructions: ["The base function runs for unregistered types", "Trace the output"],
    code: "from functools import singledispatch\n\n@singledispatch\ndef handle(x):\n    return f\"Default: {x}\"\n\n@handle.register(int)\ndef _(x):\n    return f\"Int: {x}\"\n\nprint(handle(42))\nprint(handle(\"hello\"))",
    correctOutput: "Int: 42\nDefault: hello",
    hint: "int is registered, so it gets special handling. str is not registered, so the default runs.",
  },
  {
    id: "py35-ex9", type: "exercise", title: "partial basic",
    description: "What does partial do to a function?",
    instructions: ["partial fixes some arguments", "Call the partial and type the result"],
    code: "from functools import partial\n\ndef multiply(x, y):\n    return x * y\n\ndouble = partial(multiply, 2)\nprint(double(5))",
    correctOutput: "10",
    hint: "double(5) calls multiply(2, 5) = 10.",
  },
  {
    id: "py35-ex10", type: "exercise", title: "Factory Calling Convention",
    description: "@factory(args) is equivalent to what?",
    instructions: ["@factory(args) calls factory(args) first", "Then that result decorates the function"],
    code: "def make_decorator(value):\n    print(f\"Factory called with {value}\")\n    def decorator(func):\n        print(f\"Decorator called\")\n        def wrapper():\n            return func()\n        return wrapper\n    return decorator\n\n@make_decorator(5)\ndef test():\n    return \"done\"\n\nprint(test())",
    correctOutput: "Factory called with 5\nDecorator called\ndone",
    hint: "make_decorator(5) is called first, returns decorator which is called, then wrapper returns 'done'.",
  },
];

const ch35Exam: ExamQuestion[] = [
  { id: "py35-q1", type: "multiple-choice", difficulty: "easy", question: "What does the @ symbol do in Python?", options: [{ id: "a", text: "Creates a lambda" }, { id: "b", text: "Applies a decorator" }, { id: "c", text: "Imports a module" }, { id: "d", text: "Defines a class" }], correctAnswer: "b", explanation: "@decorator is syntactic sugar for func = decorator(func)." },
  { id: "py35-q2", type: "true-false", difficulty: "easy", question: "A decorator must be applied using the @ syntax; there's no other way.", correctAnswer: false, explanation: "The @ syntax is convenience. You can also do func = decorator(func) manually." },
  { id: "py35-q3", type: "fill-blank", difficulty: "easy", question: "A decorator is a function that takes a function and ___ a function.", correctAnswer: "returns", acceptableAnswers: ["returns"], explanation: "A decorator takes a function as argument and returns a (usually new) function." },
  { id: "py35-q4", type: "multiple-choice", difficulty: "medium", question: "What does `functools.wraps` do for decorators?", options: [{ id: "a", text: "Makes the decorator faster" }, { id: "b", text: "Preserves original function metadata" }, { id: "c", text: "Adds error handling" }, { id: "d", text: "Removes the wrapper" }], correctAnswer: "b", explanation: "functools.wraps copies __name__, __doc__, and other metadata from the original function to the wrapper." },
  { id: "py35-q5", type: "code-order", difficulty: "medium", question: "Arrange a decorator that adds '---' before and after.", codeLines: ['def border(func):', '    def wrapper():', '        print("---")', '        func()', '        print("---")', '    return wrapper'], correctOrder: [0, 1, 2, 3, 4, 5], explanation: "Define decorator, create wrapper, print ---, call func, print --- again, return wrapper." },
  { id: "py35-q6", type: "match-pairs", difficulty: "medium", question: "Match each decorator component to its role.", leftItems: ["Decorator function", "Wrapper function", "Original function", "@ syntax"], rightItems: ["Takes func and returns wrapper", "Adds behavior, calls original", "Contains business logic", "Shortcut for decoration"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "Decorator receives func, wrapper extends it, original has logic, @ is sugar." },
  { id: "py35-q7", type: "multiple-choice", difficulty: "medium", question: "When stacking @A and @B, which runs first when the decorated function is called?", options: [{ id: "a", text: "@A runs first" }, { id: "b", text: "@B runs first" }, { id: "c", text: "They run simultaneously" }, { id: "d", text: "Neither" }], correctAnswer: "a", explanation: "@A is on top and wraps @B, so @A's wrapper runs first (outermost), then calls @B's wrapper." },
  { id: "py35-q8", type: "true-false", difficulty: "medium", question: "Class decorators must return a new class; they cannot modify the existing class.", correctAnswer: false, explanation: "Class decorators can modify the existing class in place and return it, or return an entirely new class." },
  { id: "py35-q9", type: "multiple-choice", difficulty: "hard", question: "What does `partial(func, x)(y)` do?", options: [{ id: "a", text: "func(x, y)" }, { id: "b", text: "func(y, x)" }, { id: "c", text: "func(x) + func(y)" }, { id: "d", text: "Error" }], correctAnswer: "a", explanation: "partial(func, x) fixes the first argument as x; calling with y passes y as the second argument: func(x, y)." },
  { id: "py35-q10", type: "code-order", difficulty: "hard", question: "Arrange a decorator that converts return value to uppercase.", codeLines: ['def uppercase(func):', '    def wrapper(*args, **kwargs):', '        result = func(*args, **kwargs)', '        return result.upper()', '    return wrapper'], correctOrder: [0, 1, 2, 3, 4], explanation: "Define decorator, wrapper, call func, uppercase result, return wrapper." },
];

const ch35: Chapter = {
  id: "python-ch35", courseId: "python", title: "Decorators", order: 35,
  sections: ch35Sections, examPool: ch35Exam, xpReward: 240, estimatedMinutes: 50,
  prerequisites: ["python-ch34"],
  keyPoints: [
    "A decorator is a function taking a function and returning a (usually new) function with extended behavior",
    "Always use @functools.wraps on wrapper functions to preserve original metadata",
    "Decorator factories enable parameterization: factory(args) \u2192 decorator(func) \u2192 wrapper(*args, **kwargs)",
    "Stacking decorators: applied bottom-up, executed top-down on call",
    "functools.lru_cache/@cache memoize results; functools.singledispatch dispatches by first arg type",
    "functools.partial creates specialized functions by fixing some arguments",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 36 – Context Managers
// Topics: with statement, __enter__/__exit__, contextlib, @contextmanager, ExitStack
// ───────────────────────────────────────────────────────────────────
const ch36Sections: Section[] = [
  {
    type: "text",
    content:
      "## Context Managers\n\nA **context manager** is a Python construct that simplifies resource management \u2014 opening files, acquiring locks, connecting to databases \u2014 by ensuring that setup and teardown happen automatically. You've already used context managers with the `with` statement:\n\n```python\nwith open(\"file.txt\", \"r\") as f:\n    content = f.read()\n# File is automatically closed, even if an error occurs\n```\n\nContext managers guarantee that cleanup code runs, making them superior to try/finally blocks for resource management.",
  },
  {
    type: "code",
    language: "python",
    caption: "The with statement \u2014 your first context manager (file I/O):",
    content:
      '# Traditional approach \u2014 manual cleanup\nf = open("example.txt", "w")\ntry:\n    f.write("Hello")\nfinally:\n    f.close()  # Must close manually\n\n# Context manager approach \u2014 automatic cleanup\nwith open("example.txt", "w") as f:\n    f.write("Hello")\n# f.close() is called automatically when leaving the with block',
  },
  {
    type: "text",
    content:
      "## Creating a Context Manager: Class Approach\n\nTo create your own context manager, define a class with `__enter__` and `__exit__` methods. `__enter__` runs when entering the `with` block and returns the resource. `__exit__` runs when leaving and handles cleanup.\n\n```python\nclass ManagedFile:\n    def __init__(self, filename, mode):\n        self.filename = filename\n        self.mode = mode\n\n    def __enter__(self):\n        print(f\"Opening {self.filename}\")\n        self.file = open(self.filename, self.mode)\n        return self.file  # This is what 'as f' receives\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(f\"Closing {self.filename}\")\n        self.file.close()\n        # Return False to propagate exceptions, True to suppress them\n        return False\n\nwith ManagedFile(\"test.txt\", \"w\") as f:\n    f.write(\"Hello!\")\n# Output: Opening test.txt\n#         Closing test.txt\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Custom context manager \u2014 a timer that measures block execution:",
    content:
      "import time\n\nclass Timer:\n    def __enter__(self):\n        self.start = time.perf_counter()\n        return self\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.elapsed = time.perf_counter() - self.start\n        print(f\"Block took {self.elapsed:.4f}s\")\n        return False\n\nwith Timer() as t:\n    time.sleep(0.5)\n    total = sum(range(1000000))\n# Block took 0.6234s",
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
      "## Creating a Context Manager: `@contextmanager` Decorator\n\nThe `@contextmanager` decorator from the `contextlib` module lets you create context managers using generator functions \u2014 much less boilerplate than the class approach.\n\n```python\nfrom contextlib import contextmanager\n\n@contextmanager\ndef managed_file(filename, mode):\n    print(f\"Opening {filename}\")\n    f = open(filename, mode)\n    try:\n        yield f\n    finally:\n        print(f\"Closing {filename}\")\n        f.close()\n\nwith managed_file(\"test.txt\", \"w\") as f:\n    f.write(\"Hello!\")\n```\n\nThe code before `yield` is `__enter__`. The code after `yield` (in the `finally`) is `__exit__`.",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical contexts with @contextmanager \u2014 redirecting output:",
    content:
      "from contextlib import contextmanager\nimport sys\n\n@contextmanager\ndef redirect_output(filepath):\n    \"\"\"Redirect stdout to a file within the context.\"\"\"\n    old_stdout = sys.stdout\n    sys.stdout = open(filepath, \"w\")\n    try:\n        yield\n    finally:\n        sys.stdout.close()\n        sys.stdout = old_stdout\n\nwith redirect_output(\"output.txt\"):\n    print(\"This goes to the file, not the console\")\nprint(\"This goes back to the console\")",
  },
  {
    type: "text",
    content:
      "## `contextlib.suppress` \u2014 Suppressing Specific Exceptions\n\nPython 3.4+ includes `contextlib.suppress`, a context manager that suppresses specific exceptions \u2014 cleaner than a bare `except: pass`.\n\n```python\nfrom contextlib import suppress\n\n# Instead of:\ntry:\n    os.remove(\"file.txt\")\nexcept FileNotFoundError:\n    pass\n\n# Use suppress:\nwith suppress(FileNotFoundError):\n    os.remove(\"file.txt\")\n\nwith suppress(FileNotFoundError, PermissionError):\n    os.remove(\"file.txt\")\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Nested and chained context managers \u2014 plus ExitStack for dynamic contexts:",
    content:
      '# Chained contexts\nwith open("input.txt", "r") as infile, open("output.txt", "w") as outfile:\n    outfile.write(infile.read().upper())\n\n# contextlib.ExitStack \u2014 dynamic number of context managers\nfrom contextlib import ExitStack\n\nfilenames = ["file1.txt", "file2.txt", "file3.txt"]\nwith ExitStack() as stack:\n    files = [stack.enter_context(open(f, "r")) for f in filenames]\n    # All files are closed when exiting the with block',
  },
  {
    type: "comparison",
    title: "Class vs @contextmanager Approach",
    headers: ["Aspect", "Class (__enter__/__exit__)", "@contextmanager Decorator"],
    rows: [
      ["Boilerplate", "More \u2014 two methods required", "Less \u2014 single generator function"],
      ["Readability", "Clearer for complex contexts", "More concise for simple contexts"],
      ["Exception handling", "Full control via return True/False", "Use try/except inside generator"],
      ["Reusable context", "Yes \u2014 can be instantiated and reused", "Generator is single-use"],
      ["Async support", "Use __aenter__/__aexit__", "Use @asynccontextmanager"],
    ],
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

const ch36Exercises: ExerciseSection[] = [
  {
    id: "py36-ex1", type: "exercise", title: "Basic with Statement",
    description: "What does the with statement do?",
    instructions: ["The with block manages enter/exit", "What prints?"],
    code: 'class MyContext:\n    def __enter__(self):\n        print("Enter")\n        return 42\n    def __exit__(self, *args):\n        print("Exit")\n\nwith MyContext() as x:\n    print(x)',
    correctOutput: "Enter\n42\nExit",
    hint: "__enter__ prints 'Enter' and returns 42. Then the block prints 42. Then __exit__ prints 'Exit'.",
  },
  {
    id: "py36-ex2", type: "exercise", title: "__enter__ Return Value",
    description: "What value does 'as' get from __enter__?",
    instructions: ["__enter__ returns a value that becomes the 'as' target", "Type the output"],
    code: 'class Greeter:\n    def __enter__(self):\n        return "Hello!"\n    def __exit__(self, *args):\n        pass\n\nwith Greeter() as g:\n    print(g)',
    correctOutput: "Hello!",
    hint: "__enter__ returns 'Hello!', so g = 'Hello!'.",
  },
  {
    id: "py36-ex3", type: "exercise", title: "Exception Propagation",
    description: "What happens when __exit__ returns True?",
    instructions: ["Returning True suppresses exceptions", "The error is silently swallowed"],
    code: 'class Suppressor:\n    def __enter__(self):\n        return self\n    def __exit__(self, *args):\n        return True\n\nwith Suppressor():\n    raise ValueError("oops")\nprint("Still running")',
    correctOutput: "Still running",
    hint: "__exit__ returns True, so the raised ValueError is suppressed.",
  },
  {
    id: "py36-ex4", type: "exercise", title: "@contextmanager",
    description: "What does the @contextmanager version do?",
    instructions: ["The yield separates setup from teardown", "Trace the output"],
    code: "from contextlib import contextmanager\n\n@contextmanager\ndef simple():\n    print(\"Setup\")\n    yield \"resource\"\n    print(\"Cleanup\")\n\nwith simple() as r:\n    print(r)",
    correctOutput: "Setup\nresource\nCleanup",
    hint: "Setup before yield, the yielded value becomes r, cleanup after yield runs at block exit.",
  },
  {
    id: "py36-ex5", type: "exercise", title: "Exception in Context",
    description: "What happens when an exception occurs inside the with block?",
    instructions: ["The exception propagates to __exit__", "__exit__ prints the exception type"],
    code: 'class ShowError:\n    def __enter__(self):\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(f"Got: {exc_type.__name__}")\n        return False\n\nwith ShowError():\n    raise ValueError("bad")',
    correctOutput: "Got: ValueError",
    hint: "__exit__ receives the exception info and prints the exception type name.",
  },
  {
    id: "py36-ex6", type: "exercise", title: "contextlib.suppress",
    description: "What does suppress do?",
    instructions: ["suppress silences specific exceptions", "Only FileNotFoundError is suppressed"],
    code: "from contextlib import suppress\nimport os\n\nwith suppress(FileNotFoundError):\n    os.remove(\"nonexistent.txt\")\n    print(\"Never reached\")\nprint(\"Done\")",
    correctOutput: "Done",
    hint: "FileNotFoundError is suppressed, so 'Done' is printed.",
  },
  {
    id: "py36-ex7", type: "exercise", title: "ExitStack",
    description: "ExitStack manages dynamic context managers.",
    instructions: ["enter_context adds a context manager to the stack", "All contexts are cleaned up on exit"],
    code: "from contextlib import ExitStack, contextmanager\n\n@contextmanager\ndef resource(name):\n    print(f\"Acquire {name}\")\n    yield name\n    print(f\"Release {name}\")\n\nwith ExitStack() as stack:\n    r1 = stack.enter_context(resource(\"A\"))\n    r2 = stack.enter_context(resource(\"B\"))\n    print(f\"Using {r1} and {r2}\")\nprint(\"Done\")",
    correctOutput: "Acquire A\nAcquire B\nUsing A and B\nRelease B\nRelease A\nDone",
    hint: "Resources are acquired in order, released in reverse order (stack-like).",
  },
  {
    id: "py36-ex8", type: "exercise", title: "File-like Context",
    description: "What does a custom connection context print?",
    instructions: ["Always clean up in __exit__", "Trace the messages"],
    code: 'class Connection:\n    def __enter__(self):\n        print("Connecting...")\n        return self\n    def __exit__(self, *args):\n        print("Disconnecting...")\n\nwith Connection() as conn:\n    print("Using connection")',
    correctOutput: "Connecting...\nUsing connection\nDisconnecting...",
    hint: "__enter__ connects, block uses connection, __exit__ disconnects.",
  },
  {
    id: "py36-ex9", type: "exercise", title: "Multiple with Statements",
    description: "Chained context managers with comma.",
    instructions: ["Two context managers in one with statement", "Trace the order"],
    code: "from contextlib import contextmanager\n\n@contextmanager\ndef ctx(name):\n    print(f\"Enter {name}\")\n    yield name\n    print(f\"Exit {name}\")\n\nwith ctx(\"A\") as a, ctx(\"B\") as b:\n    print(f\"In block: {a}, {b}\")",
    correctOutput: "Enter A\nEnter B\nIn block: A, B\nExit B\nExit A",
    hint: "Contexts are entered left-to-right, exited right-to-left.",
  },
  {
    id: "py36-ex10", type: "exercise", title: "Context Manager as Decorator",
    description: "@contextmanager wraps a generator.",
    instructions: ["The yield separates setup from the block", "Trace the output"],
    code: "from contextlib import contextmanager\n\n@contextmanager\ndef tag(t):\n    print(f\"<{t}>\")\n    yield\n    print(f\"</{t}>\")\n\nwith tag(\"b\"):\n    print(\"bold text\")",
    correctOutput: "<b>\nbold text\n</b>",
    hint: "The context prints opening tag, the block runs, then the closing tag is printed.",
  },
];

const ch36Exam: ExamQuestion[] = [
  { id: "py36-q1", type: "multiple-choice", difficulty: "easy", question: "What keyword is used with context managers?", options: [{ id: "a", text: "using" }, { id: "b", text: "with" }, { id: "c", text: "context" }, { id: "d", text: "try" }], correctAnswer: "b", explanation: "The `with` statement is used with context managers." },
  { id: "py36-q2", type: "true-false", difficulty: "easy", question: "A context manager's __exit__ method always runs, even if an exception occurs.", correctAnswer: true, explanation: "__exit__ is guaranteed to run, making context managers reliable for resource cleanup." },
  { id: "py36-q3", type: "fill-blank", difficulty: "easy", question: "Context managers must implement __enter__ and ___.", correctAnswer: "__exit__", acceptableAnswers: ["__exit__", "exit"], explanation: "The two required methods are __enter__ and __exit__." },
  { id: "py36-q4", type: "multiple-choice", difficulty: "medium", question: "What happens if __exit__ returns True?", options: [{ id: "a", text: "The exception is re-raised" }, { id: "b", text: "The exception is suppressed" }, { id: "c", text: "The program crashes" }, { id: "d", text: "The with block re-executes" }], correctAnswer: "b", explanation: "Returning True from __exit__ suppresses any exception that occurred in the with block." },
  { id: "py36-q5", type: "code-order", difficulty: "medium", question: "Arrange a simple class-based context manager.", codeLines: ['class Simple:', '    def __enter__(self):', '        return 1', '    def __exit__(self, *args):', '        print("done")'], correctOrder: [0, 1, 2, 3, 4], explanation: "Define class, __enter__, __exit__." },
  { id: "py36-q6", type: "match-pairs", difficulty: "medium", question: "Match each context manager component.", leftItems: ["__enter__", "__exit__", "as variable", "with statement"], rightItems: ["Acquires resource", "Releases resource", "Receives __enter__ return value", "Initiates the context"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "enter acquires, exit releases, as captures return, with initiates." },
  { id: "py36-q7", type: "true-false", difficulty: "medium", question: "The @contextmanager decorator is from the functools module.", correctAnswer: false, explanation: "It's from the contextlib module: from contextlib import contextmanager." },
  { id: "py36-q8", type: "fill-blank", difficulty: "hard", question: "The contextlib context manager for suppressing exceptions is called ___.", correctAnswer: "suppress", acceptableAnswers: ["suppress", "contextlib.suppress"], explanation: "from contextlib import suppress; with suppress(ValueError):" },
  { id: "py36-q9", type: "multiple-choice", difficulty: "hard", question: "What does ExitStack.enter_context() return?", options: [{ id: "a", text: "None" }, { id: "b", text: "The context manager itself" }, { id: "c", text: "The __enter__ return value" }, { id: "d", text: "A boolean" }], correctAnswer: "c", explanation: "enter_context() returns the result of __enter__(), just like 'as variable' does." },
  { id: "py36-q10", type: "code-order", difficulty: "hard", question: "Arrange a @contextmanager-based file reader.", codeLines: ['@contextmanager', 'def open_file(name):', '    f = open(name)', '    yield f', '    f.close()', 'from contextlib import contextmanager'], correctOrder: [5, 0, 1, 2, 3, 4], explanation: "Import, decorator, define, open, yield, close." },
];

const ch36: Chapter = {
  id: "python-ch36", courseId: "python", title: "Context Managers", order: 36,
  sections: ch36Sections, examPool: ch36Exam, xpReward: 220, estimatedMinutes: 40,
  prerequisites: ["python-ch35"],
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
// Chapter 37 – Standard Library Modules
// Topics: functools (reduce, cmp_to_key, total_ordering) + itertools
// ───────────────────────────────────────────────────────────────────
const ch37Sections: Section[] = [
  {
    type: "text",
    content:
      "## Standard Library Modules: functools & itertools\n\nPython's standard library is vast, but two modules stand out for functional and iterator-based programming: **functools** and **itertools**. They provide building blocks for writing concise, efficient, and expressive Python code.\n\nIn this chapter we cover the remaining functools utilities not covered in the Decorators chapter, plus the full itertools module.",
  },
  {
    type: "text",
    content:
      "## functools.reduce\n\n`reduce` applies a function cumulatively to the items of an iterable, reducing the sequence to a single value. It was moved from builtins to functools in Python 3.\n\n```python\nfrom functools import reduce\n\n# Sum of numbers: (((1 + 2) + 3) + 4)\nresult = reduce(lambda a, b: a + b, [1, 2, 3, 4])\nprint(result)  # 10\n\n# Product of numbers: (((1 * 2) * 3) * 4)\nproduct = reduce(lambda a, b: a * b, [1, 2, 3, 4])\nprint(product)  # 24\n```\n\n`reduce` also accepts an optional initializer:\n```python\nreduce(lambda a, b: a + b, [], 0)     # 0  (empty iterable)\nreduce(lambda a, b: a + b, [1, 2], 5) # 8  (5 + 1 + 2)\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Real-world reduce examples: finding max, flattening lists, computing factorials:",
    content:
      "from functools import reduce\n\n# Find maximum\nvalues = [3, 7, 2, 9, 5]\nmaximum = reduce(lambda a, b: a if a > b else b, values)\nprint(maximum)  # 9\n\n# Flatten a list of lists\nnested = [[1, 2], [3, 4, 5], [6]]\nflat = reduce(lambda acc, lst: acc + lst, nested, [])\nprint(flat)  # [1, 2, 3, 4, 5, 6]\n\n# Factorial\nfactorial = lambda n: reduce(lambda a, b: a * b, range(1, n + 1), 1)\nprint(factorial(5))  # 120",
  },
  {
    type: "callout",
    style: "warning",
    content:
      "**When NOT to use reduce:** For simple operations like summing or multiplying, use the builtin `sum()` or explicit loops. Reduce shines for non-trivial cumulative operations, but overusing it hurts readability. 'Reduce can be your functional swiss army knife, but sometimes a plain knife is better.'",
  },
  {
    type: "text",
    content:
      "## functools.cmp_to_key\n\n`cmp_to_key` converts an old-style comparison function (which returns -1, 0, or 1) into a key function. It's a migration tool for code written for Python 2's `cmp` parameter.\n\n```python\nfrom functools import cmp_to_key\n\ndef compare_by_length(a, b):\n    \"\"\"Return negative if a < b, zero if equal, positive if a > b.\"\"\"\n    if len(a) < len(b):\n        return -1\n    elif len(a) > len(b):\n        return 1\n    return 0\n\nwords = [\"python\", \"is\", \"awesome\", \"!\"]\nsorted_words = sorted(words, key=cmp_to_key(compare_by_length))\nprint(sorted_words)  # ['!', 'is', 'python', 'awesome']\n```\n\nNote: Modern Python prefers `key=str.lower` or `key=len` over comparison functions. Use `cmp_to_key` only when migrating legacy code.",
  },
  {
    type: "code",
    language: "python",
    caption: "functools.total_ordering \u2014 auto-generate comparison methods:",
    content:
      "from functools import total_ordering\n\n@total_ordering\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def __eq__(self, other):\n        return self.age == other.age\n\n    def __lt__(self, other):\n        return self.age < other.age\n\n    def __repr__(self):\n        return f\"Person({self.name}, {self.age})\"\n\np1 = Person(\"Alice\", 30)\np2 = Person(\"Bob\", 25)\np3 = Person(\"Charlie\", 30)\n\n# These all work even though we only defined __eq__ and __lt__:\nprint(p1 > p2)   # True\nprint(p1 >= p3)  # True\nprint(p2 < p1)   # True\nprint(p1 <= p3)  # True",
  },
  {
    type: "text",
    content:
      "## itertools: Iterator Building Blocks\n\nThe `itertools` module provides a collection of fast, memory-efficient tools for working with iterators. They form an 'iterator algebra' \u2014 you can combine them to build complex iteration logic.\n\n### Infinite Iterators\n\n```python\nfrom itertools import count, cycle, repeat\n\n# count(start=0, step=1) \u2014 counts forever\nfor i in count(10, 2):\n    if i > 20:\n        break\n    print(i, end=\" \")  # 10 12 14 16 18 20\n\n# cycle(iterable) \u2014 repeats forever\ncolors = cycle([\"red\", \"green\", \"blue\"])\nfor _ in range(5):\n    print(next(colors), end=\" \")  # red green blue red green\n\n# repeat(object, times=None) \u2014 repeats n times\nfor x in repeat(\"hello\", 3):\n    print(x)  # hello hello hello\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Finite itertools: chain, accumulate, compress, dropwhile, takewhile:",
    content:
      "from itertools import chain, accumulate, compress, dropwhile, takewhile\n\n# chain \u2014 concatenate iterables\nresult = list(chain([1, 2], [3, 4], [5]))\nprint(result)  # [1, 2, 3, 4, 5]\n\n# accumulate \u2014 running totals (or other binary operations)\nresult = list(accumulate([1, 2, 3, 4, 5]))\nprint(result)  # [1, 3, 6, 10, 15]\n\n# compress \u2014 filter by selector\nletters = [\"a\", \"b\", \"c\", \"d\"]\nselectors = [1, 0, 1, 0]\nresult = list(compress(letters, selectors))\nprint(result)  # [\"a\", \"c\"]\n\n# dropwhile \u2014 skip elements while predicate is True\nresult = list(dropwhile(lambda x: x < 5, [1, 3, 7, 2, 9]))\nprint(result)  # [7, 2, 9]\n\n# takewhile \u2014 take elements while predicate is True\nresult = list(takewhile(lambda x: x < 5, [1, 3, 7, 2, 9]))\nprint(result)  # [1, 3]",
  },
  {
    type: "code",
    language: "python",
    caption: "Combinations, permutations, and product \u2014 combinatoric iterators:",
    content:
      "from itertools import product, permutations, combinations, combinations_with_replacement\n\n# product \u2014 Cartesian product\nresult = list(product([1, 2], [\"a\", \"b\"]))\nprint(result)  # [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]\n\n# permutations \u2014 all orderings (r-length)\nresult = list(permutations([1, 2, 3], 2))\nprint(result)  # [(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]\n\n# combinations \u2014 r-length tuples in sorted order, no repeats\nresult = list(combinations([1, 2, 3], 2))\nprint(result)  # [(1, 2), (1, 3), (2, 3)]\n\n# combinations_with_replacement \u2014 like combinations but elements can repeat\nresult = list(combinations_with_replacement([1, 2, 3], 2))\nprint(result)  # [(1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 3)]",
  },
  {
    type: "comparison",
    title: "Combinatoric Iterators",
    headers: ["Function", "Elements Repeat?", "Order Matters?", "Example (input [1,2,3], r=2)"],
    rows: [
      ["product(A, B)", "Yes (across inputs)", "Yes", "(1, a), (1, b), (2, a), (2, b)"],
      ["permutations", "No", "Yes", "(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)"],
      ["combinations", "No", "No", "(1,2), (1,3), (2,3)"],
      ["combinations_with_r", "Yes", "No", "(1,1), (1,2), (1,3), (2,2), (2,3), (3,3)"],
    ],
  },
  {
    type: "code",
    language: "python",
    caption: "Grouping and slicing: groupby, islice, pairwise, zip_longest:",
    content:
      "from itertools import groupby, islice, pairwise, zip_longest\nfrom operator import itemgetter\n\n# groupby \u2014 group consecutive elements by key\n# IMPORTANT: data must be sorted by the same key first!\ndata = [(1, \"a\"), (1, \"b\"), (2, \"c\"), (3, \"d\")]\nfor key, group in groupby(data, key=itemgetter(0)):\n    print(key, list(group))  # 1 [(1, 'a'), (1, 'b')] / 2 [(2, 'c')] / 3 [(3, 'd')]\n\n# islice \u2014 slice an iterator like a list\nresult = list(islice(range(100), 10, 20, 2))\nprint(result)  # [10, 12, 14, 16, 18]\n\n# pairwise \u2014 successive overlapping pairs (Python 3.10+)\nresult = list(pairwise([1, 2, 3, 4]))\nprint(result)  # [(1, 2), (2, 3), (3, 4)]\n\n# zip_longest \u2014 zip with fill for uneven lengths\nresult = list(zip_longest([1, 2], [\"a\", \"b\", \"c\"], fillvalue=\"?\"))\nprint(result)  # [(1, 'a'), (2, 'b'), ('?', 'c')]",
  },
  {
    type: "key-points",
    points: [
      "functools.reduce cumulatively applies a function to reduce an iterable to a single value",
      "functools.cmp_to_key converts legacy comparison functions to key functions for sorting",
      "functools.total_ordering generates missing comparison methods from __eq__ and __lt__",
      "Infinite iterators: count, cycle, repeat \u2014 use with islice or break to limit them",
      "Combinatoric iterators: product, permutations, combinations, combinations_with_replacement",
      "groupby requires data sorted by the same key; islice works like list slicing on iterators",
      "chain flattens; accumulate produces running totals; pairwise creates consecutive pairs",
    ],
  },
];

const ch37Exercises: ExerciseSection[] = [
  {
    id: "py37-ex1", type: "exercise", title: "Basic reduce",
    description: "What does reduce compute here?",
    instructions: ["reduce applies the lambda cumulatively", "Trace: ((5 - 2) - 1)"],
    code: "from functools import reduce\nresult = reduce(lambda a, b: a - b, [5, 2, 1])\nprint(result)",
    correctOutput: "2",
    hint: "Step 1: 5 - 2 = 3. Step 2: 3 - 1 = 2.",
  },
  {
    id: "py37-ex2", type: "exercise", title: "reduce with initializer",
    description: "How does initializer affect the result?",
    instructions: ["Initializer is prepended to the iterable", "Trace the operation"],
    code: "from functools import reduce\nresult = reduce(lambda a, b: a + b, [1, 2, 3], 10)\nprint(result)",
    correctOutput: "16",
    hint: "Initializer 10 is the starting value: 10 + 1 + 2 + 3 = 16.",
  },
  {
    id: "py37-ex3", type: "exercise", title: "total_ordering",
    description: "What does total_ordering enable?",
    instructions: ["__eq__ and __lt__ are defined", "total_ordering fills in the rest"],
    code: "from functools import total_ordering\n\n@total_ordering\nclass Point:\n    def __init__(self, x):\n        self.x = x\n    def __eq__(self, o):\n        return self.x == o.x\n    def __lt__(self, o):\n        return self.x < o.x\n\nprint(Point(5) >= Point(3))",
    correctOutput: "True",
    hint: "__lt__ defines 5 < 3 is False; __eq__ defines 5 == 3 is False; >= is computed as 'not less than': not False = True.",
  },
  {
    id: "py37-ex4", type: "exercise", title: "itertools.chain",
    description: "What does chain concatenate?",
    instructions: ["chain links iterables sequentially", "Collect the result"],
    code: "from itertools import chain\nresult = list(chain(\"ab\", \"cd\"))\nprint(result)",
    correctOutput: "['a', 'b', 'c', 'd']",
    hint: 'chain("ab", "cd") yields "a", "b", "c", "d".',
  },
  {
    id: "py37-ex5", type: "exercise", title: "itertools.accumulate",
    description: "What does accumulate produce?",
    instructions: ["accumulate produces running totals by default", "Trace the sums"],
    code: "from itertools import accumulate\nresult = list(accumulate([2, 3, 4]))\nprint(result)",
    correctOutput: "[2, 5, 9]",
    hint: "Running total: 2, then 2+3=5, then 5+4=9.",
  },
  {
    id: "py37-ex6", type: "exercise", title: "count and islice",
    description: "How do you take a slice from infinite count?",
    instructions: ["count counts forever", "islice takes a slice from the iterator"],
    code: "from itertools import count, islice\nresult = list(islice(count(5, 5), 3))\nprint(result)",
    correctOutput: "[5, 10, 15]",
    hint: "count(5, 5) yields 5, 10, 15, 20...; islice takes first 3.",
  },
  {
    id: "py37-ex7", type: "exercise", title: "combinations size",
    description: "How many combinations of 4 items taken 2 at a time?",
    instructions: ["combinations yields r-length tuples without repeats", "C(4, 2) = 6"],
    code: "from itertools import combinations\nresult = list(combinations([1, 2, 3, 4], 2))\nprint(len(result))",
    correctOutput: "6",
    hint: "C(4, 2) = 4*3/2 = 6 combinations.",
  },
  {
    id: "py37-ex8", type: "exercise", title: "groupby sorted data",
    description: "What does groupby do with sorted data?",
    instructions: ["groupby groups consecutive equal keys", "Data must be sorted by key"],
    code: "from itertools import groupby\n\npairs = [(1, \"a\"), (1, \"b\"), (2, \"c\")]\nresult = {k: list(g) for k, g in groupby(pairs, key=lambda x: x[0])}\nprint(len(result))",
    correctOutput: "2",
    hint: "Two groups: key 1 has two items, key 2 has one item.",
  },
  {
    id: "py37-ex9", type: "exercise", title: "product A x B",
    description: "Cartesian product of two lists.",
    instructions: ["product yields all pairs from A and B", "Count the pairs"],
    code: "from itertools import product\nresult = list(product([1, 2], [\"x\", \"y\"]))\nprint(len(result))",
    correctOutput: "4",
    hint: "2 * 2 = 4 pairs: (1, x), (1, y), (2, x), (2, y).",
  },
  {
    id: "py37-ex10", type: "exercise", title: "compress filter",
    description: "How does compress filter elements?",
    instructions: ["compress selects elements where selector is truthy", "1 = keep, 0 = skip"],
    code: "from itertools import compress\nresult = list(compress([10, 20, 30, 40], [1, 0, 1, 0]))\nprint(result)",
    correctOutput: "[10, 30]",
    hint: "Elements at positions with selector 1 are kept.",
  },
];

const ch37Exam: ExamQuestion[] = [
  { id: "py37-q1", type: "multiple-choice", difficulty: "easy", question: "Which functools function cumulatively applies a function to reduce an iterable?", options: [{ id: "a", text: "reduce" }, { id: "b", text: "partial" }, { id: "c", text: "lru_cache" }, { id: "d", text: "wraps" }], correctAnswer: "a", explanation: "functools.reduce applies a function cumulatively to items of an iterable." },
  { id: "py37-q2", type: "true-false", difficulty: "easy", question: "The initializer in reduce becomes the first argument if the iterable is empty.", correctAnswer: true, explanation: "The initializer is returned if the iterable is empty." },
  { id: "py37-q3", type: "fill-blank", difficulty: "easy", question: "The decorator that auto-generates comparison methods from __eq__ and __lt__ is ___.", correctAnswer: "total_ordering", acceptableAnswers: ["total_ordering", "functools.total_ordering", "@total_ordering"], explanation: "from functools import total_ordering" },
  { id: "py37-q4", type: "multiple-choice", difficulty: "medium", question: "Which itertools function produces an infinite counter?", options: [{ id: "a", text: "cycle" }, { id: "b", text: "repeat" }, { id: "c", text: "count" }, { id: "d", text: "chain" }], correctAnswer: "c", explanation: "itertools.count(start, step) yields an infinite arithmetic progression." },
  { id: "py37-q5", type: "code-order", difficulty: "medium", question: "Arrange a reduce call that multiplies all numbers.", codeLines: ['from functools import reduce', 'result = reduce(lambda a, b: a * b, [2, 3, 4])', 'print(result)'], correctOrder: [0, 1, 2], explanation: "Import reduce, apply with multiplication lambda, print result." },
  { id: "py37-q6", type: "match-pairs", difficulty: "medium", question: "Match itertools functions to their descriptions.", leftItems: ["count", "cycle", "chain", "accumulate"], rightItems: ["Infinite counter", "Repeats an iterable forever", "Concatenates iterables", "Running totals"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "count counts, cycle cycles, chain chains, accumulate accumulates." },
  { id: "py37-q7", type: "multiple-choice", difficulty: "medium", question: "Which combinatoric function treats (A, B) and (B, A) as the same?", options: [{ id: "a", text: "permutations" }, { id: "b", text: "combinations" }, { id: "c", text: "product" }, { id: "d", text: "cycle" }], correctAnswer: "b", explanation: "combinations produces tuples in sorted order, considering (A, B) == (B, A)." },
  { id: "py37-q8", type: "true-false", difficulty: "hard", question: "groupby requires the input data to be sorted by the grouping key.", correctAnswer: true, explanation: "groupby only groups consecutive elements with the same key. Data must be sorted by that key for correct results." },
  { id: "py37-q9", type: "fill-blank", difficulty: "hard", question: "The Python 3.10+ itertools function that yields successive overlapping pairs is ___.", correctAnswer: "pairwise", acceptableAnswers: ["pairwise", "itertools.pairwise"], explanation: "list(pairwise([1, 2, 3])) produces [(1, 2), (2, 3)]." },
  { id: "py37-q10", type: "code-order", difficulty: "hard", question: "Arrange code to find product of all odd numbers in a list using reduce.", codeLines: ['from functools import reduce', 'nums = [1, 2, 3, 4, 5]', 'odds = filter(lambda x: x % 2 == 1, nums)', 'result = reduce(lambda a, b: a * b, odds)', 'print(result)'], correctOrder: [0, 1, 2, 3, 4], explanation: "Import reduce, define list, filter odds, reduce with multiplication, print." },
];

const ch37: Chapter = {
  id: "python-ch37", courseId: "python", title: "Standard Library Modules", order: 37,
  sections: ch37Sections, examPool: ch37Exam, xpReward: 235, estimatedMinutes: 50,
  prerequisites: ["python-ch36"],
  keyPoints: [
    "functools.reduce cumulatively applies a function; use initializer to handle empty iterables",
    "functools.total_ordering generates all comparison methods from __eq__ and __lt__ only",
    "functools.cmp_to_key converts legacy comparison functions for sorting",
    "itertools.count, cycle, repeat are infinite iterators; combine with islice to limit them",
    "itertools.product, permutations, combinations, combinations_with_replacement for combinatorics",
    "itertools.groupby requires sorted data; chain flattens; accumulate computes running totals",
    "itertools.islice slices iterators like list slicing; pairwise creates consecutive pairs",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 38 – Testing with unittest and pytest
// Topics: assert, unittest.TestCase, fixtures, parametrize, mocking
// ───────────────────────────────────────────────────────────────────
const ch38Sections: Section[] = [
  {
    type: "text",
    content:
      "## Testing in Python\n\nTesting is how you ensure your code works correctly, now and after future changes. Python has two dominant testing frameworks: **unittest** (built-in, inspired by JUnit) and **pytest** (third-party, concise and powerful).\n\n**Why test?**\n- Catch regressions when you change code\n- Document expected behavior\n- Reduce debugging time\n- Enable confident refactoring\n\nA good test is: **fast, isolated, repeatable, and checks one thing.**",
  },
  {
    type: "text",
    content:
      "## Basic Assertions\n\nBoth frameworks use Python's `assert` statement as the foundation. But `unittest` also provides `assertEqual`, `assertTrue`, `assertRaises`, etc., which produce better error messages.\n\n```python\n# Plain assert (used in pytest)\ndef test_addition():\n    assert 1 + 1 == 2\n    assert \"hello\".upper() == \"HELLO\"\n    assert len([]) == 0\n```\n\nPlain `assert` with a message:\n```python\ndef test_positive():\n    result = some_function()\n    assert result > 0, f\"Expected positive, got {result}\"\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "unittest.TestCase \u2014 test class with setup, teardown, and rich assertions:",
    content:
      "import unittest\n\nclass TestMathOperations(unittest.TestCase):\n    \"\"\"Tests for math operations.\"\"\"\n\n    def setUp(self):\n        \"\"\"Run before each test method.\"\"\"\n        self.values = [1, 2, 3, 4, 5]\n\n    def tearDown(self):\n        \"\"\"Run after each test method (cleanup).\"\"\"\n        pass\n\n    def test_sum(self):\n        result = sum(self.values)\n        self.assertEqual(result, 15)\n\n    def test_max(self):\n        result = max(self.values)\n        self.assertEqual(result, 5)\n\n    def test_contains(self):\n        self.assertIn(3, self.values)\n        self.assertNotIn(99, self.values)\n\n    def test_type_error(self):\n        with self.assertRaises(TypeError):\n            result = 1 + \"string\"\n\nif __name__ == \"__main__\":\n    unittest.main()",
  },
  {
    type: "text",
    content:
      "## unittest Assertion Methods\n\n| Method | Checks That |\n|--------|-------------|\n| `assertEqual(a, b)` | `a == b` |\n| `assertNotEqual(a, b)` | `a != b` |\n| `assertTrue(x)` | `bool(x) is True` |\n| `assertFalse(x)` | `bool(x) is False` |\n| `assertIs(a, b)` | `a is b` |\n| `assertIsNone(x)` | `x is None` |\n| `assertIn(a, b)` | `a in b` |\n| `assertNotIn(a, b)` | `a not in b` |\n| `assertRaises(Exc, fun)` | `fun()` raises `Exc` |\n| `assertAlmostEqual(a, b)` | `round(a-b, 7) == 0` (floats) |\n| `assertCountEqual(a, b)` | same elements, any order |",
  },
  {
    type: "code",
    language: "python",
    caption: "pytest \u2014 clean, function-based tests with powerful fixtures:",
    content:
      "# pytest uses plain assert and function-based tests\n# Save as test_math.py and run: pytest test_math.py\n\ndef add(a, b):\n    return a + b\n\ndef divide(a, b):\n    if b == 0:\n        raise ValueError(\"Cannot divide by zero\")\n    return a / b\n\n# --- Tests ---\n\ndef test_add_positive():\n    assert add(2, 3) == 5\n\ndef test_add_negative():\n    assert add(-1, 1) == 0\n\ndef test_add_strings():\n    assert add(\"a\", \"b\") == \"ab\"\n\ndef test_divide_by_zero():\n    import pytest\n    with pytest.raises(ValueError, match=\"Cannot divide by zero\"):\n        divide(10, 0)",
  },
  {
    type: "text",
    content:
      "## pytest Fixtures\n\nFixtures are pytest's mechanism for setup and teardown. They're reusable, modular, and automatically injected into test functions by parameter name.\n\n```python\nimport pytest\n\n@pytest.fixture\ndef sample_data():\n    \"\"\"Provide test data. Runs before each test that uses it.\"\"\"\n    return {\"name\": \"Alice\", \"age\": 30}\n\n@pytest.fixture\ndef db_connection():\n    \"\"\"Setup and teardown with yield (like a context manager).\"\"\"\n    conn = create_database()\n    yield conn  # Test runs here\n    conn.close()  # Teardown after test\n\ndef test_user_name(sample_data):\n    assert sample_data[\"name\"] == \"Alice\"\n\ndef test_user_age(sample_data):\n    assert sample_data[\"age\"] == 30\n```\n\nFixtures can use `scope` to control how often they're created:\n- `function` (default) \u2014 once per test\n- `class` \u2014 once per test class\n- `module` \u2014 once per module\n- `session` \u2014 once per test run",
  },
  {
    type: "code",
    language: "python",
    caption: "pytest parametrize \u2014 run the same test with multiple inputs:",
    content:
      "import pytest\n\ndef is_even(n):\n    return n % 2 == 0\n\n@pytest.mark.parametrize(\"n,expected\", [\n    (2, True),\n    (3, False),\n    (0, True),\n    (-2, True),\n    (-3, False),\n])\ndef test_is_even(n, expected):\n    assert is_even(n) == expected\n\n# Multiple parametrize decorators = Cartesian product\n@pytest.mark.parametrize(\"a\", [1, 2])\n@pytest.mark.parametrize(\"b\", [\"x\", \"y\"])\ndef test_product(a, b):\n    print(f\"a={a}, b={b}\")\n# Runs: 1,x, 1,y, 2,x, 2,y",
  },
  {
    type: "code",
    language: "python",
    caption: "Mocking with unittest.mock \u2014 replace dependencies during testing:",
    content:
      "from unittest.mock import Mock, patch\n\n# Mock object \u2014 a fake that records how it's used\nmock = Mock()\nmock.return_value = 42\nprint(mock())  # 42\nprint(mock.call_count)  # 1\n\n# patch \u2014 temporarily replace an object\nfrom pathlib import Path\n\n@patch(\"pathlib.Path.exists\")\ndef test_file_check(mock_exists):\n    mock_exists.return_value = False\n    # Now Path.exists() always returns False\n    assert not Path(\"/tmp/file.txt\").exists()\n\n# patch as context manager\ndef test_network_call():\n    with patch(\"requests.get\") as mock_get:\n        mock_get.return_value.status_code = 200\n        mock_get.return_value.json.return_value = {\"key\": \"value\"}\n        # Now requests.get returns the mocked response\n        response = requests.get(\"http://api.example.com\")\n        assert response.status_code == 200",
  },
  {
    type: "text",
    content:
      "## Mock Assertion Methods\n\nOnce a mock is called, you can assert how it was used:\n\n| Method | Checks That |\n|--------|-------------|\n| `mock.assert_called()` | mock was called at least once |\n| `mock.assert_called_once()` | mock was called exactly once |\n| `mock.assert_called_with(args)` | last call used specific args |\n| `mock.assert_called_once_with(args)` | exactly one call with those args |\n| `mock.assert_any_call(args)` | any call used those args |\n| `mock.assert_not_called()` | mock was never called |\n\n```python\ndef test_mock_assertions():\n    mock = Mock()\n    mock(1, 2, key=\"value\")\n\n    mock.assert_called_once()\n    mock.assert_called_with(1, 2, key=\"value\")\n    assert mock.call_count == 1\n```",
  },
  {
    type: "comparison",
    title: "unittest vs pytest",
    headers: ["Aspect", "unittest", "pytest"],
    rows: [
      ["Style", "Class-based (OO)", "Function-based (functional)"],
      ["Assertions", "self.assertEqual(a, b), etc.", "Plain assert statement"],
      ["Setup/Teardown", "setUp() / tearDown() methods", "@pytest.fixture with yield"],
      ["Parameterization", "subTest() or external libs", "@pytest.mark.parametrize"],
      ["Mocking", "unittest.mock (built-in)", "Same (can use pytest-mock plugin)"],
      ["Learning curve", "Shallow (familiar from Java/JUnit)", "Steeper but more Pythonic"],
      ["Output", "Verbose by default", "Clean, colored, concise"],
      ["Discovery", "python -m unittest discover", "pytest (auto-discovery)"],
    ],
  },
  {
    type: "key-points",
    points: [
      "Testing catches regressions, documents behavior, and enables confident refactoring",
      "unittest: class-based, setUp/tearDown, self.assert* methods, built-in, no dependencies",
      "pytest: function-based, plain assert, fixtures with yield, @pytest.mark.parametrize",
      "Fixtures handle setup/teardown; scopes control fixture lifetime (function/class/module/session)",
      "Mock objects record calls and control return values; patch temporarily replaces imports",
      "Both frameworks support test discovery: python -m unittest discover or pytest",
      "Convention: name test files test_*.py and test functions test_* for auto-discovery",
    ],
  },
];

const ch38Exercises: ExerciseSection[] = [
  {
    id: "py38-ex1", type: "exercise", title: "unittest assertEqual",
    description: "What does this unittest test check?",
    instructions: ["setUp runs before each test", "assertEqual checks equality", "The test checks the length"],
    code: "import unittest\n\nclass TestList(unittest.TestCase):\n    def setUp(self):\n        self.data = [1, 2, 3]\n\n    def test_length(self):\n        self.assertEqual(len(self.data), 3)\n\nif __name__ == \"__main__\":\n    unittest.main()",
    correctOutput: ".\n----------------------------------------------------------------------\nRan 1 test in 0.001s\n\nOK",
    hint: "The test passes because len([1, 2, 3]) == 3.",
  },
  {
    id: "py38-ex2", type: "exercise", title: "unittest assertRaises",
    description: "How do you test that an exception is raised?",
    instructions: ["assertRaises checks that code raises an exception", "The test passes because the error IS raised"],
    code: "import unittest\n\ndef divide(a, b):\n    return a / b\n\nclass TestMath(unittest.TestCase):\n    def test_divide_zero(self):\n        with self.assertRaises(ZeroDivisionError):\n            divide(5, 0)\n\nif __name__ == \"__main__\":\n    unittest.main()",
    correctOutput: ".\n----------------------------------------------------------------------\nRan 1 test in 0.001s\n\nOK",
    hint: "divide(5, 0) raises ZeroDivisionError, so assertRaises passes.",
  },
  {
    id: "py38-ex3", type: "exercise", title: "pytest assert",
    description: "What happens in this pytest test?",
    instructions: ["pytest uses plain assert", "The test checks two conditions"],
    code: "def test_strings():\n    greeting = \"Hello World\"\n    assert greeting.startswith(\"Hello\")\n    assert len(greeting) == 11",
    correctOutput: "No output (test passes silently in pytest)",
    hint: "\"Hello World\" starts with \"Hello\" and has length 11. Both asserts pass.",
  },
  {
    id: "py38-ex4", type: "exercise", title: "pytest fixture",
    description: "How does fixture injection work?",
    instructions: ["fixture function returns data", "test function parameter name matches fixture name", "pytest injects the fixture value"],
    code: "import pytest\n\n@pytest.fixture\ndef number():\n    return 42\n\ndef test_answer(number):\n    assert number == 42",
    correctOutput: "No output (test passes)",
    hint: "The fixture 'number' returns 42, which is injected into test_answer as the 'number' parameter.",
  },
  {
    id: "py38-ex5", type: "exercise", title: "pytest parametrize",
    description: "How many test cases does parametrize create?",
    instructions: ["Each tuple in the decorator is one test case", "Count the cases"],
    code: "import pytest\n\n@pytest.mark.parametrize(\"x,power,expected\", [\n    (2, 2, 4),\n    (3, 2, 9),\n    (2, 3, 8),\n])\ndef test_power(x, power, expected):\n    assert x ** power == expected",
    correctOutput: "No output (3 test cases all pass)",
    hint: "Three tuples = three separate test cases: (2,2,4), (3,2,9), (2,3,8).",
  },
  {
    id: "py38-ex6", type: "exercise", title: "Mock basics",
    description: "What does a Mock with return_value do?",
    instructions: ["Mock() creates a fake callable", "return_value sets what calling it returns"],
    code: "from unittest.mock import Mock\n\nm = Mock()\nm.return_value = \"mocked!\"\nresult = m()\nprint(result)",
    correctOutput: "mocked!",
    hint: "Calling a Mock returns its return_value.",
  },
  {
    id: "py38-ex7", type: "exercise", title: "Mock side_effect",
    description: "How do you simulate different return values on each call?",
    instructions: ["side_effect with an iterable returns different values per call", "Each call gets the next value"],
    code: "from unittest.mock import Mock\n\nm = Mock()\nm.side_effect = [\"first\", \"second\", \"third\"]\nprint(m(), m(), m())",
    correctOutput: "first second third",
    hint: "side_effect with a list yields values in order: first, second, third.",
  },
  {
    id: "py38-ex8", type: "exercise", title: "Mock assert_called_with",
    description: "How do you verify a mock was called with specific args?",
    instructions: ["call the mock with specific args", "assert_called_with checks the most recent call"],
    code: "from unittest.mock import Mock\n\nm = Mock()\nm(1, 2, key=\"val\")\nm.assert_called_with(1, 2, key=\"val\")\nprint(\"OK\")",
    correctOutput: "OK",
    hint: "assert_called_with passes, so 'OK' is printed.",
  },
  {
    id: "py38-ex9", type: "exercise", title: "Fixture teardown",
    description: "What order do fixture setup and teardown run?",
    instructions: ["Code before yield = setup", "Code after yield = teardown (runs after test)"],
    code: "import pytest\n\n@pytest.fixture\ndef resource():\n    print(\"\\nSetup\")\n    yield\n    print(\"Teardown\")\n\ndef test_use(resource):\n    print(\"Test\", end=\"\")",
    correctOutput: "\nSetup\nTest\nTeardown",
    hint: "Setup runs, then the test body runs, then teardown runs.",
  },
  {
    id: "py38-ex10", type: "exercise", title: "patch context manager",
    description: "How does patch replace a function temporarily?",
    instructions: ["patch replaces the target with a Mock", "Inside the with block, the mock is active"],
    code: "from unittest.mock import patch\n\ndef greet():\n    return \"Hello!\"\n\nwith patch(\"__main__.greet\") as mock_greet:\n    mock_greet.return_value = \"Mocked!\"\n    print(greet())\n\nprint(greet())",
    correctOutput: "Mocked!\nHello!",
    hint: "Inside the patch block, greet returns 'Mocked!'. Outside, it returns the original 'Hello!'.",
  },
];

const ch38Exam: ExamQuestion[] = [
  { id: "py38-q1", type: "multiple-choice", difficulty: "easy", question: "Which method in unittest.TestCase checks that two values are equal?", options: [{ id: "a", text: "assertSame" }, { id: "b", text: "assertEqual" }, { id: "c", text: "assertEquals" }, { id: "d", text: "assertIdentical" }], correctAnswer: "b", explanation: "assertEqual(a, b) checks that a == b." },
  { id: "py38-q2", type: "true-false", difficulty: "easy", question: "pytest uses self.assertEqual() for assertions.", correctAnswer: false, explanation: "pytest uses the plain assert statement, not self.assertEqual." },
  { id: "py38-q3", type: "fill-blank", difficulty: "easy", question: "In pytest, setup code in a fixture runs before the yield, and teardown code runs ___.", correctAnswer: "after", acceptableAnswers: ["after", "after the yield", "after the test"], explanation: "The yield separates setup from teardown in pytest fixtures." },
  { id: "py38-q4", type: "multiple-choice", difficulty: "medium", question: "What does Mock.return_value control?", options: [{ id: "a", text: "What the mock returns when called" }, { id: "b", text: "What the mock's attributes return" }, { id: "c", text: "How many times the mock was called" }, { id: "d", text: "The mock's name" }], correctAnswer: "a", explanation: "return_value determines what calling the mock() returns." },
  { id: "py38-q5", type: "code-order", difficulty: "medium", question: "Arrange a basic pytest test.", codeLines: ["def test_addition():", "    result = 2 + 2", "    assert result == 4"], correctOrder: [0, 1, 2], explanation: "Define the test function, compute result, assert the expected value." },
  { id: "py38-q6", type: "match-pairs", difficulty: "medium", question: "Match each testing concept.", leftItems: ["setUp", "pytest.fixture", "mock.return_value", "parametrize"], rightItems: ["Runs before each unittest test", "Provides test data in pytest", "Controls what mock() returns", "Runs test with multiple inputs"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "setUp runs before tests, fixture provides data, return_value controls mock output, parametrize for multiple inputs." },
  { id: "py38-q7", type: "multiple-choice", difficulty: "medium", question: "Which mock method checks that the mock was called exactly once?", options: [{ id: "a", text: "assert_called" }, { id: "b", text: "assert_called_once" }, { id: "c", text: "assert_called_with" }, { id: "d", text: "assert_any_call" }], correctAnswer: "b", explanation: "assert_called_once() passes if the mock was called exactly one time." },
  { id: "py38-q8", type: "true-false", difficulty: "hard", question: "When using patch as a context manager, the patch is active only inside the with block.", correctAnswer: true, explanation: "patch restores the original object when exiting the with block." },
  { id: "py38-q9", type: "fill-blank", difficulty: "hard", question: "The pytest fixture parameter that controls how often a fixture is created is ___.", correctAnswer: "scope", acceptableAnswers: ["scope", "fixture scope"], explanation: "@pytest.fixture(scope=\"module\") creates the fixture once per module." },
  { id: "py38-q10", type: "code-order", difficulty: "hard", question: "Arrange a unittest test with setUp and assertRaises.", codeLines: ['class TestDiv(unittest.TestCase):', '    def setUp(self):', '        self.a = 10', '    def test_zero(self):', '        with self.assertRaises(ZeroDivisionError):', '            result = self.a / 0', 'import unittest'], correctOrder: [6, 0, 1, 2, 3, 4, 5], explanation: "Import, define class, setUp, define test, use assertRaises, division." },
];

const ch38: Chapter = {
  id: "python-ch38", courseId: "python", title: "Testing with unittest and pytest", order: 38,
  sections: ch38Sections, examPool: ch38Exam, xpReward: 245, estimatedMinutes: 50,
  prerequisites: ["python-ch37"],
  keyPoints: [
    "unittest: class-based, setUp/tearDown, self.assert* methods, built-in standard library",
    "pytest: function-based, plain assert, @pytest.fixture, @pytest.mark.parametrize",
    "Fixtures with yield provide setup before yield and teardown after yield",
    "Mock objects: return_value, side_effect, assert_called_with, call_count",
    "patch temporarily replaces objects; works as decorator or context manager",
    "Test discovery: python -m unittest discover or pytest (no arguments needed)",
    "Naming convention: test_*.py files with test_* functions for auto-discovery",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 39 – Async/Await
// Topics: coroutines, event loop, tasks, asyncio, async context managers
// ───────────────────────────────────────────────────────────────────
const ch39Sections: Section[] = [
  {
    type: "text",
    content:
      "## Asynchronous Programming in Python\n\n**Async/await** is Python's approach to concurrent programming. It allows a single thread to handle many I/O-bound tasks efficiently by switching between them while waiting for network, disk, or database operations.\n\n**Key concepts:**\n- **Coroutine** \u2014 a function defined with `async def` that can be paused and resumed\n- **Event loop** \u2014 the scheduler that runs coroutines and handles I/O events\n- **Task** \u2014 a wrapper that schedules a coroutine to run concurrently\n- **await** \u2014 the keyword that pauses the current coroutine until the awaited operation finishes\n\n> Async is NOT parallelism. It's concurrency managed by a single-threaded event loop.",
  },
  {
    type: "code",
    language: "python",
    caption: "Your first coroutine \u2014 async def and await:",
    content:
      "import asyncio\n\nasync def greet(name, delay):\n    \"\"\"A coroutine that waits and then greets.\"\"\"\n    await asyncio.sleep(delay)\n    return f\"Hello, {name}!\"\n\nasync def main():\n    # Run two coroutines sequentially (takes 2s)\n    result1 = await greet(\"Alice\", 1)\n    result2 = await greet(\"Bob\", 1)\n    print(result1)\n    print(result2)\n\n# Run the event loop\nasyncio.run(main())\n# Takes ~2 seconds\n\n# --- Task-based version (takes ~1 second) ---\n# async def main_concurrent():\n#     task1 = asyncio.create_task(greet(\"Alice\", 1))\n#     task2 = asyncio.create_task(greet(\"Bob\", 1))\n#     result1 = await task1\n#     result2 = await task2\n#     print(result1, result2)",
  },
  {
    type: "text",
    content:
      "## The Event Loop\n\nThe event loop is the core of asyncio. It manages all coroutines, schedules their execution, and handles I/O events.\n\n```python\nimport asyncio\n\n# Get the running event loop\nloop = asyncio.get_running_loop()\n\n# Run a coroutine (top-level entry point)\nasyncio.run(main())  # Python 3.7+ preferred\n\n# Older way (avoid unless needed):\n# loop = asyncio.get_event_loop()\n# loop.run_until_complete(main())\n```\n\n`asyncio.run()` creates a new event loop, runs the coroutine to completion, and closes the loop. It should be the primary entry point for async programs.",
  },
  {
    type: "code",
    language: "python",
    caption: "Tasks \u2014 running coroutines concurrently:",
    content:
      "import asyncio\n\nasync def fetch_data(url, delay):\n    \"\"\"Simulate an HTTP request.\"\"\"\n    print(f\"Fetching {url}...\")\n    await asyncio.sleep(delay)\n    print(f\"Done {url}\")\n    return f\"Data from {url}\"\n\nasync def main():\n    # Create tasks = schedule them to run concurrently\n    task1 = asyncio.create_task(fetch_data(\"url1\", 2))\n    task2 = asyncio.create_task(fetch_data(\"url2\", 1))\n    task3 = asyncio.create_task(fetch_data(\"url3\", 3))\n\n    # Wait for all tasks to complete\n    results = await asyncio.gather(task1, task2, task3)\n    print(f\"All results: {results}\")\n\nasyncio.run(main())\n# Total time: ~3 seconds (not 6!)",
  },
  {
    type: "callout",
    style: "tip",
    content:
      "**`asyncio.gather` vs `asyncio.create_task` + `await`:** Use `gather` when you want all results at once. Use individual tasks when you need to process results as they complete or manage them independently. `gather` also accepts `return_exceptions=True` to collect exceptions as results instead of raising them.",
  },
  {
    type: "code",
    language: "python",
    caption: "asyncio.wait \u2014 wait with timeout, wait for first completion:",
    content:
      "import asyncio\n\nasync def worker(name, delay):\n    await asyncio.sleep(delay)\n    return f\"{name} finished\"\n\nasync def main():\n    tasks = [\n        asyncio.create_task(worker(\"A\", 5)),\n        asyncio.create_task(worker(\"B\", 2)),\n        asyncio.create_task(worker(\"C\", 3)),\n    ]\n\n    # Wait for the FIRST task to complete\n    done, pending = await asyncio.wait(tasks, return_when=\"FIRST_COMPLETED\")\n    for task in done:\n        print(f\"Done: {task.result()}\")\n    print(f\"Still pending: {len(pending)}\")\n\n    # Cancel pending tasks\n    for task in pending:\n        task.cancel()\n\nasyncio.run(main())\n# Output:\n# Done: B finished\n# Still pending: 2",
  },
  {
    type: "text",
    content:
      "## Async Context Managers\n\nYou can create async context managers using `__aenter__` and `__aexit__`, or the `@asynccontextmanager` decorator.\n\n```python\nfrom contextlib import asynccontextmanager\n\n@asynccontextmanager\nasync def managed_resource():\n    print(\"Acquiring resource...\")\n    resource = await acquire()\n    try:\n        yield resource\n    finally:\n        print(\"Releasing resource...\")\n        await release(resource)\n\nasync def main():\n    async with managed_resource() as res:\n        print(f\"Using: {res}\")\n```\n\nThe built-in `aiofiles` and `aiosqlite` libraries use async context managers for file and database operations.",
  },
  {
    type: "code",
    language: "python",
    caption: "Async iterators \u2014 async for loop:",
    content:
      "import asyncio\n\nclass AsyncRange:\n    \"\"\"Async iterator that yields numbers with a delay.\"\"\"\n    def __init__(self, start, end, delay):\n        self.current = start\n        self.end = end\n        self.delay = delay\n\n    def __aiter__(self):\n        return self\n\n    async def __anext__(self):\n        if self.current >= self.end:\n            raise StopAsyncIteration\n        await asyncio.sleep(self.delay)\n        value = self.current\n        self.current += 1\n        return value\n\nasync def main():\n    async for num in AsyncRange(1, 5, 0.2):\n        print(num, end=\" \")  # 1 2 3 4\n\nasyncio.run(main())",
  },
  {
    type: "code",
    language: "python",
    caption: "asyncio.TaskGroup \u2014 structured concurrency (Python 3.11+):",
    content:
      "import asyncio\n\nasync def fetch(url):\n    await asyncio.sleep(1)\n    if \"error\" in url:\n        raise ValueError(f\"Failed: {url}\")\n    return f\"OK: {url}\"\n\nasync def main():\n    try:\n        async with asyncio.TaskGroup() as tg:\n            t1 = tg.create_task(fetch(\"a.com\"))\n            t2 = tg.create_task(fetch(\"error.com\"))  # This will fail\n            t3 = tg.create_task(fetch(\"b.com\"))\n        # All tasks are done here (or have raised)\n    except* ValueError as e:\n        print(f\"Caught: {e.exceptions}\")\n\nasyncio.run(main())\n# TaskGroup cancels remaining tasks when one fails\n# Python 3.12+: use except* for multiple exceptions",
  },
  {
    type: "comparison",
    title: "Synchronous vs Asynchronous vs Parallel",
    headers: ["Aspect", "Synchronous", "Asynchronous (asyncio)", "Parallel (threading/multiprocessing)"],
    rows: [
      ["Execution", "One task at a time, in order", "Concurrent, single-threaded", "True parallel, multiple CPU cores"],
      ["Switching", "None (blocking)", "Cooperative (explicit await)", "Preemptive (OS scheduler)"],
      ["Best for", "CPU-bound, simple scripts", "I/O-bound (web, DB, files)", "CPU-bound heavy computation"],
      ["Complexity", "Low", "Medium (needs event loop)", "High (race conditions, locking)"],
      ["Overhead", "None", "Low (single thread)", "High (thread/process creation)"],
    ],
  },
  {
    type: "text",
    content:
      "## Common Async Pitfalls\n\n1. **Blocking the event loop** \u2014 Never use `time.sleep()` in async code. Use `await asyncio.sleep()`. Blocking calls freeze ALL coroutines.\n\n2. **Forgot to await** \u2014 Calling an `async def` function returns a coroutine object, not the result. Must `await` it.\n\n3. **Mixing sync and async** \u2014 You can't call async code from sync code directly. Use `asyncio.run()` as the entry point.\n\n4. **Running CPU-bound work** \u2014 Use `asyncio.to_thread()` or `loop.run_in_executor()` to offload CPU-heavy tasks to a thread pool.\n\n```python\nimport asyncio\n\nasync def main():\n    # Offload CPU-bound work to a thread\n    result = await asyncio.to_thread(cpu_intensive_function, arg1, arg2)\n```\n\n5. **Unhandled exceptions in tasks** \u2014 Always await or gather tasks so exceptions are surfaced.",
  },
  {
    type: "key-points",
    points: [
      "async def defines a coroutine; await pauses until the awaited operation completes",
      "asyncio.run(main()) is the entry point for all async code",
      "asyncio.create_task() schedules a coroutine to run concurrently",
      "asyncio.gather() runs multiple coroutines concurrently and collects results",
      "asyncio.wait() provides fine-grained control (FIRST_COMPLETED, timeout)",
      "Async context managers use __aenter__/__aexit__ or @asynccontextmanager",
      "Async iterators use __aiter__/__anext__ and can be consumed with async for",
      "Never use time.sleep() in coroutines; always use await asyncio.sleep()",
      "TaskGroup (Python 3.11+) provides structured concurrency with cancellation",
    ],
  },
];

const ch39Exercises: ExerciseSection[] = [
  {
    id: "py39-ex1", type: "exercise", title: "Basic Coroutine",
    description: "What does this simple async function do?",
    instructions: ["async def defines a coroutine", "await asyncio.sleep pauses", "The coroutine returns a value"],
    code: "import asyncio\n\nasync def say_hello():\n    await asyncio.sleep(0.1)\n    return \"Hello!\"\n\nresult = asyncio.run(say_hello())\nprint(result)",
    correctOutput: "Hello!",
    hint: "asyncio.run() executes the coroutine and returns its result.",
  },
  {
    id: "py39-ex2", type: "exercise", title: "Multiple awaits",
    description: "How long does sequential await take?",
    instructions: ["Each await runs sequentially", "Two 1-second sleeps = 2 seconds total"],
    code: "import asyncio\nimport time\n\nasync def wait(n):\n    await asyncio.sleep(n)\n    return n\n\nasync def main():\n    start = time.time()\n    await wait(1)\n    await wait(1)\n    return time.time() - start\n\ntotal = asyncio.run(main())\nprint(round(total))",
    correctOutput: "2",
    hint: "Sequential awaits: first takes 1s, second takes 1s, total ~2s.",
  },
  {
    id: "py39-ex3", type: "exercise", title: "Concurrent with gather",
    description: "How long does gather take?",
    instructions: ["gather runs coroutines concurrently", "Two 1-second sleeps overlap"],
    code: "import asyncio\nimport time\n\nasync def wait(n):\n    await asyncio.sleep(n)\n    return n\n\nasync def main():\n    start = time.time()\n    await asyncio.gather(wait(1), wait(1))\n    return time.time() - start\n\ntotal = asyncio.run(main())\nprint(round(total))",
    correctOutput: "1",
    hint: "Gather runs both sleeps concurrently. They finish in ~1s, not 2s.",
  },
  {
    id: "py39-ex4", type: "exercise", title: "create_task",
    description: "Do tasks start immediately?",
    instructions: ["create_task schedules a task", "Tasks start running as soon as they're created"],
    code: "import asyncio\n\nasync def quick():\n    print(\"quick\", end=\"\")\n\nasync def main():\n    asyncio.create_task(quick())\n    await asyncio.sleep(0)\n    print(\"main\", end=\"\")\n\nasyncio.run(main())",
    correctOutput: "quickmain",
    hint: "The task starts immediately after creation. 'await sleep(0)' yields control so the task runs.",
  },
  {
    id: "py39-ex5", type: "exercise", title: "Task run order",
    description: "What prints first?",
    instructions: ["Both tasks print and sleep", "Task A sleeps 0.1, Task B sleeps 0.05", "Task B finishes first"],
    code: "import asyncio\n\nasync def task(name, delay):\n    await asyncio.sleep(delay)\n    print(name, end=\"\")\n\nasync def main():\n    t1 = asyncio.create_task(task(\"A\", 0.1))\n    t2 = asyncio.create_task(task(\"B\", 0.05))\n    await t1\n    await t2\n\nasyncio.run(main())",
    correctOutput: "BA",
    hint: "Task B has a shorter delay (0.05 < 0.1), so it finishes and prints first.",
  },
  {
    id: "py39-ex6", type: "exercise", title: "Async context manager",
    description: "What does an async context manager print?",
    instructions: ["__aenter__ runs on entry", "__aexit__ runs on exit", "async with uses both"],
    code: "import asyncio\n\nclass AsyncResource:\n    async def __aenter__(self):\n        print(\"acquire\", end=\"\")\n        return self\n    async def __aexit__(self, *args):\n        print(\"release\", end=\"\")\n\nasync def main():\n    async with AsyncResource():\n        print(\"use\", end=\"\")\n\nasyncio.run(main())",
    correctOutput: "acquireuserelease",
    hint: "Entry -> __aenter__ prints 'acquire', block runs and prints 'use', exit -> __aexit__ prints 'release'.",
  },
  {
    id: "py39-ex7", type: "exercise", title: "gather return_exceptions",
    description: "How does gather handle exceptions?",
    instructions: ["One task succeeds, one raises ValueError", "gather collects both results"],
    code: "import asyncio\n\nasync def ok():\n    return \"OK\"\n\nasync def fail():\n    raise ValueError(\"Error\")\n\nresults = asyncio.run(\n    asyncio.gather(ok(), fail(), return_exceptions=True)\n)\nprint(type(results[0]).__name__, type(results[1]).__name__)",
    correctOutput: "str ValueError",
    hint: "Result[0] is the string 'OK' (type str). Result[1] is a ValueError exception object.",
  },
  {
    id: "py39-ex8", type: "exercise", title: "Async for loop",
    description: "How does async for work?",
    instructions: ["__anext__ yields values with delay", "async for consumes the async iterator"],
    code: "import asyncio\n\nclass Count:\n    def __init__(self, limit):\n        self.n = 0\n        self.limit = limit\n    def __aiter__(self):\n        return self\n    async def __anext__(self):\n        if self.n >= self.limit:\n            raise StopAsyncIteration\n        await asyncio.sleep(0.1)\n        self.n += 1\n        return self.n\n\nasync def main():\n    async for x in Count(3):\n        print(x, end=\"\")\n\nasyncio.run(main())",
    correctOutput: "123",
    hint: "async for calls __anext__ until StopAsyncIteration is raised.",
  },
  {
    id: "py39-ex9", type: "exercise", title: "Task cancellation",
    description: "What happens when a task is cancelled?",
    instructions: ["cancel() requests cancellation", "await raises CancelledError"],
    code: "import asyncio\n\nasync def slow():\n    try:\n        await asyncio.sleep(10)\n    except asyncio.CancelledError:\n        print(\"cancelled\", end=\"\")\n        raise\n\nasync def main():\n    t = asyncio.create_task(slow())\n    await asyncio.sleep(0.1)\n    t.cancel()\n    try:\n        await t\n    except asyncio.CancelledError:\n        print(\"caught\", end=\"\")\n\nasyncio.run(main())",
    correctOutput: "cancelledcaught",
    hint: "t.cancel() causes CancelledError in the task. The task handler prints 'cancelled' and re-raises. The outer handler prints 'caught'.",
  },
  {
    id: "py39-ex10", type: "exercise", title: "asyncio.to_thread",
    description: "How do you run blocking code in async?",
    instructions: ["to_thread runs a sync function in a thread pool", "The async event loop is not blocked"],
    code: "import asyncio\nimport time\n\n\ndef blocking():\n    time.sleep(0.2)\n    return \"done\"\n\nasync def main():\n    result = await asyncio.to_thread(blocking)\n    print(result)\n\nasyncio.run(main())",
    correctOutput: "done",
    hint: "to_thread offloads the blocking call to a separate thread, returning 'done'.",
  },
];

const ch39Exam: ExamQuestion[] = [
  { id: "py39-q1", type: "multiple-choice", difficulty: "easy", question: "What keyword defines a coroutine in Python?", options: [{ id: "a", text: "async def" }, { id: "b", text: "def async" }, { id: "c", text: "coroutine def" }, { id: "d", text: "await def" }], correctAnswer: "a", explanation: "async def defines a coroutine function." },
  { id: "py39-q2", type: "true-false", difficulty: "easy", question: "asyncio.run() should be the main entry point for async programs.", correctAnswer: true, explanation: "asyncio.run() creates an event loop, runs the coroutine, and cleans up." },
  { id: "py39-q3", type: "fill-blank", difficulty: "easy", question: "The function to schedule a coroutine for concurrent execution is asyncio.____().", correctAnswer: "create_task", acceptableAnswers: ["create_task", "asyncio.create_task"], explanation: "asyncio.create_task() schedules a coroutine to run on the event loop." },
  { id: "py39-q4", type: "multiple-choice", difficulty: "medium", question: "Which function runs multiple coroutines concurrently and collects results?", options: [{ id: "a", text: "asyncio.wait" }, { id: "b", text: "asyncio.gather" }, { id: "c", text: "asyncio.run" }, { id: "d", text: "asyncio.collect" }], correctAnswer: "b", explanation: "asyncio.gather runs coroutines concurrently and returns a list of results." },
  { id: "py39-q5", type: "code-order", difficulty: "medium", question: "Arrange a basic async program.", codeLines: ["import asyncio", "async def main():", "    await asyncio.sleep(1)", "    print('done')", "asyncio.run(main())"], correctOrder: [0, 1, 2, 3, 4], explanation: "Import, define coroutine, await sleep, print, run with asyncio.run()." },
  { id: "py39-q6", type: "match-pairs", difficulty: "medium", question: "Match asyncio concepts.", leftItems: ["create_task", "gather", "sleep", "to_thread"], rightItems: ["Schedule a coroutine", "Collect multiple results", "Non-blocking delay", "Offload sync code"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "create_task schedules, gather collects, sleep delays, to_thread offloads sync code." },
  { id: "py39-q7", type: "multiple-choice", difficulty: "medium", question: "What does task.cancel() do?", options: [{ id: "a", text: "Stops the task immediately" }, { id: "b", text: "Raises CancelledError in the task at the next await" }, { id: "c", text: "Deletes the task object" }, { id: "d", text: "Pauses the task" }], correctAnswer: "b", explanation: "cancel() schedules a CancelledError to be raised in the task at the next await point." },
  { id: "py39-q8", type: "true-false", difficulty: "hard", question: "Using time.sleep() inside an async coroutine blocks the entire event loop.", correctAnswer: true, explanation: "time.sleep() blocks the thread, which stops all coroutines. Always use await asyncio.sleep()." },
  { id: "py39-q9", type: "fill-blank", difficulty: "hard", question: "The Python 3.11+ class for structured concurrency is asyncio.____().", correctAnswer: "TaskGroup", acceptableAnswers: ["TaskGroup", "asyncio.TaskGroup"], explanation: "async with asyncio.TaskGroup() as tg: creates a structured concurrency scope." },
  { id: "py39-q10", type: "code-order", difficulty: "hard", question: "Arrange code to handle task cancellation.", codeLines: ["import asyncio", "async def worker():", "    try:", "        await asyncio.sleep(10)", "    except asyncio.CancelledError:", "        print('cleaned up')", "        raise", "asyncio.run(asyncio.wait_for(worker(), timeout=0.1))"], correctOrder: [0, 1, 2, 3, 4, 5, 6], explanation: "Import, define worker, try/except CancelledError, cleanup, re-raise, run with timeout." },
];

const ch39: Chapter = {
  id: "python-ch39", courseId: "python", title: "Async/Await", order: 39,
  sections: ch39Sections, examPool: ch39Exam, xpReward: 250, estimatedMinutes: 50,
  prerequisites: ["python-ch38"],
  keyPoints: [
    "async def defines a coroutine; await pauses until the awaited operation completes",
    "asyncio.run() is the single entry point for all async code",
    "asyncio.create_task() schedules coroutines for concurrent execution",
    "asyncio.gather() runs multiple coroutines concurrently and collects all results",
    "asyncio.wait() offers fine-grained control: FIRST_COMPLETED, FIRST_EXCEPTION, ALL_COMPLETED",
    "async with uses __aenter__/__aexit__; async for uses __aiter__/__anext__",
    "asyncio.to_thread() offloads blocking sync code without halting the event loop",
    "TaskGroup (3.11+) provides structured concurrency with automatic cancellation",
    "Never use time.sleep() in coroutines; always await asyncio.sleep()",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 40 – Sockets and Networking
// Topics: socket module, TCP/UDP, server/client, socket options
// ───────────────────────────────────────────────────────────────────
const ch40Sections: Section[] = [
  {
    type: "text",
    content:
      "## Sockets and Networking\n\nA **socket** is one endpoint of a two-way communication link between two programs running on a network. Python's `socket` module provides access to the BSD socket interface, allowing you to create networked applications.\n\n**Key concepts:**\n- **TCP** (Transmission Control Protocol) \u2014 reliable, connection-oriented, ordered delivery\n- **UDP** (User Datagram Protocol) \u2014 fast, connectionless, no delivery guarantees\n- **IP address + Port** \u2014 identifies a specific process on a specific machine\n- **Client** \u2014 initiates the connection\n- **Server** \u2014 listens for and accepts connections",
  },
  {
    type: "code",
    language: "python",
    caption: "Basic TCP server \u2014 echo server that sends back what it receives:",
    content:
      "import socket\n\n# Create a TCP socket\nserver_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n# Allow address reuse (avoid \"Address already in use\")\nserver_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\n\n# Bind to localhost on port 9999\nserver_socket.bind(('127.0.0.1', 9999))\n\n# Start listening (max 5 pending connections)\nserver_socket.listen(5)\nprint(\"Server listening on port 9999...\")\n\n# Accept one connection\nclient_socket, address = server_socket.accept()\nprint(f\"Connection from {address}\")\n\n# Receive and echo back\ndata = client_socket.recv(1024)  # Buffer size: 1024 bytes\nprint(f\"Received: {data.decode()}\")\nclient_socket.send(data)  # Echo back\n\n# Clean up\nclient_socket.close()\nserver_socket.close()",
  },
  {
    type: "code",
    language: "python",
    caption: "TCP client \u2014 connects to the echo server:",
    content:
      "import socket\n\n# Create a TCP socket\nclient_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n# Connect to the server\nclient_socket.connect(('127.0.0.1', 9999))\n\n# Send data\nclient_socket.send(b'Hello, server!')\n\n# Receive response\ndata = client_socket.recv(1024)\nprint(f\"Received from server: {data.decode()}\")\n\n# Clean up\nclient_socket.close()",
  },
  {
    type: "text",
    content:
      "## Socket Address Families and Types\n\n| Constant | Value | Description |\n|----------|-------|-------------|\n| `AF_INET` | IPv4 | Standard internet addresses (e.g., 127.0.0.1) |\n| `AF_INET6` | IPv6 | IPv6 addresses |\n| `AF_UNIX` | Unix | Local inter-process communication (file-based) |\n| `SOCK_STREAM` | TCP | Reliable, connection-oriented, ordered byte stream |\n| `SOCK_DGRAM` | UDP | Unreliable, connectionless datagrams |\n| `SOCK_RAW` | Raw | Raw network protocol access (requires admin) |\n\n```python\n# TCP socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n# UDP socket\ns = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "UDP server and client \u2014 connectionless, faster but no guarantees:",
    content:
      "# --- UDP Server ---\nimport socket\n\nserver = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nserver.bind(('127.0.0.1', 8888))\nprint(\"UDP server listening on port 8888...\")\n\ndata, address = server.recvfrom(1024)\nprint(f\"Got: {data.decode()} from {address}\")\nserver.sendto(b'ACK', address)\nserver.close()\n\n# --- UDP Client ---\nclient = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nclient.sendto(b'Hello UDP', ('127.0.0.1', 8888))\ndata, server_addr = client.recvfrom(1024)\nprint(f\"Server said: {data.decode()}\")\nclient.close()",
  },
  {
    type: "text",
    content:
      "## Handling Multiple Connections\n\n### Approach 1: Multi-threaded Server\n\n```python\nimport socket\nimport threading\n\ndef handle_client(client_socket, address):\n    print(f\"Handling {address}\")\n    data = client_socket.recv(1024)\n    client_socket.send(data)\n    client_socket.close()\n\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.bind(('127.0.0.1', 7777))\nserver.listen(5)\n\nwhile True:\n    client, addr = server.accept()\n    thread = threading.Thread(target=handle_client, args=(client, addr))\n    thread.start()\n```\n\n### Approach 2: SocketServer Module\nPython provides higher-level classes in `socketserver`:\n```python\nfrom socketserver import TCPServer, StreamRequestHandler\n\nclass EchoHandler(StreamRequestHandler):\n    def handle(self):\n        data = self.rfile.readline()\n        self.wfile.write(data)\n\nwith TCPServer(('localhost', 6666), EchoHandler) as server:\n    server.serve_forever()\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Socket options and timeouts \u2014 control socket behavior:",
    content:
      "import socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n# Set socket options\ns.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\n\n# Set timeout (raises socket.timeout if exceeded)\ns.settimeout(5.0)\n\n# Get socket options\nbuffer_size = s.getsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF)\nprint(f\"Receive buffer: {buffer_size} bytes\")\n\n# Set blocking/non-blocking\ns.setblocking(False)  # Non-blocking mode (raises BlockingIOError)\n\n# Get address info (resolve hostname to IP)\ninfo = socket.getaddrinfo('localhost', 80, family=socket.AF_INET)\nprint(info)  # [(<AddressFamily.AF_INET: 2>, ...)]",
  },
  {
    type: "text",
    content:
      "## HTTP Requests with Sockets\n\nYou can make raw HTTP requests using sockets to understand what's happening under the hood:\n\n```python\nimport socket\n\nclient = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nclient.connect(('example.com', 80))\n\n# Send an HTTP GET request\nrequest = (\n    'GET / HTTP/1.1\\r\\n'\n    'Host: example.com\\r\\n'\n    'Connection: close\\r\\n'\n    '\\r\\n'\n)\nclient.send(request.encode())\n\n# Receive the full response\nresponse = b''\nwhile True:\n    chunk = client.recv(4096)\n    if not chunk:\n        break\n    response += chunk\n\nprint(response.decode())\nclient.close()\n```\n> In practice, you'd use `requests` or `urllib`, but raw sockets show the wire protocol.",
  },
  {
    type: "code",
    language: "python",
    caption: "Non-blocking sockets with select.select \u2014 monitor multiple sockets:",
    content:
      "import socket\nimport select\n\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)\nserver.bind(('127.0.0.1', 5555))\nserver.listen(5)\nserver.setblocking(False)\n\n# List of sockets to monitor\nsockets_list = [server]\n\nprint(\"Select-based server ready...\")\n\nwhile True:\n    # select returns sockets that are ready for reading\n    read_sockets, _, _ = select.select(sockets_list, [], [], 1.0)\n\n    for sock in read_sockets:\n        if sock is server:\n            # New connection\n            client, addr = server.accept()\n            client.setblocking(False)\n            sockets_list.append(client)\n            print(f\"New client: {addr}\")\n        else:\n            # Data from existing client\n            data = sock.recv(1024)\n            if data:\n                sock.send(data)  # Echo\n            else:\n                sock.close()\n                sockets_list.remove(sock)",
  },
  {
    type: "callout",
    style: "warning",
    content:
      "**Blocking vs Non-blocking Sockets:** By default, socket operations block. `s.recv()` waits until data arrives. `s.accept()` waits for a connection. Use `setblocking(False)` or `settimeout()` to avoid indefinite hangs. For production servers, use `asyncio` (which uses non-blocking sockets internally) or frameworks like FastAPI, aiohttp, or Twisted.",
  },
  {
    type: "key-points",
    points: [
      "sockets are endpoints for network communication; AF_INET (IPv4) and SOCK_STREAM (TCP) are most common",
      "Server: socket -> bind -> listen -> accept -> recv/send -> close",
      "Client: socket -> connect -> send/recv -> close",
      "TCP is reliable and ordered; UDP is faster but unreliable and connectionless",
      "Multi-threaded servers handle multiple clients simultaneously",
      "select.select monitors multiple sockets for readability/writability/errors",
      "setblocking(False) and settimeout() control blocking behavior",
      "SO_REUSEADDR prevents 'Address already in use' errors on restart",
      "In production, use frameworks (FastAPI, aiohttp) instead of raw sockets",
    ],
  },
];

const ch40Exercises: ExerciseSection[] = [
  {
    id: "py40-ex1", type: "exercise", title: "Basic socket creation",
    description: "What type of socket does this create?",
    instructions: ["AF_INET = IPv4", "SOCK_STREAM = TCP"],
    code: "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nprint(type(s).__name__)",
    correctOutput: "socket",
    hint: "socket.socket() returns a socket object of type 'socket'.",
  },
  {
    id: "py40-ex2", type: "exercise", title: "TCP vs UDP",
    description: "What does SOCK_DGRAM create?",
    instructions: ["SOCK_DGRAM is UDP", "UDP is connectionless"],
    code: "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nproto = s.type\nprint(proto == socket.SOCK_DGRAM)",
    correctOutput: "True",
    hint: "s.type equals socket.SOCK_DGRAM (value 2).",
  },
  {
    id: "py40-ex3", type: "exercise", title: "Socket server order",
    description: "What is the correct order of server socket operations?",
    instructions: ["Server: create -> bind -> listen -> accept -> recv/send"],
    code: "import socket\n\n# What order?\n# 1. s.listen(5)\n# 2. s.bind(('localhost', 9000))\n# 3. s.accept()\n# 4. s = socket.socket()\n\nprint('4, 2, 1, 3')",
    correctOutput: "4, 2, 1, 3",
    hint: "Create -> Bind -> Listen -> Accept is the correct order.",
  },
  {
    id: "py40-ex4", type: "exercise", title: "Port numbers",
    description: "What range are ephemeral ports in?",
    instructions: ["Ephemeral ports are used for client-side connections", "They are assigned by the OS", "Standard range: 49152-65535"],
    code: "# Which port range is used for ephemeral (temporary) connections?\n# a) 0-1023 (well-known)\n# b) 1024-49151 (registered)\n# c) 49152-65535 (dynamic/private)\nprint('c')",
    correctOutput: "c",
    hint: "Ports 49152-65535 are dynamic/private (ephemeral) ports.",
  },
  {
    id: "py40-ex5", type: "exercise", title: "SO_REUSEADDR",
    description: "What problem does SO_REUSEADDR solve?",
    instructions: ["After a server crashes/restarts, the port might be in TIME_WAIT", "SO_REUSEADDR allows immediate reuse"],
    code: "import socket\n\nopt = socket.SO_REUSEADDR\nprint(opt.__class__.__name__)  # The type of SO_REUSEADDR",
    correctOutput: "int",
    hint: "Socket option constants are integers.",
  },
  {
    id: "py40-ex6", type: "exercise", title: "socket timeout",
    description: "What exception does settimeout raise?",
    instructions: ["settimeout sets a maximum wait time", "If the timeout expires, an exception is raised", "The exception type is socket.timeout"],
    code: "import socket\n\ns = socket.socket()\ns.settimeout(0.001)\ntry:\n    s.connect(('192.0.2.1', 80))\nexcept socket.timeout:\n    print('timeout')\nexcept OSError:\n    print('oserror')",
    correctOutput: "timeout",
    hint: "When the timeout expires, socket.timeout is raised (not OSError).",
  },
  {
    id: "py40-ex7", type: "exercise", title: "recv buffer size",
    description: "What does recv(1024) mean?",
    instructions: ["The argument to recv is the maximum bytes to receive", "It doesn't wait for exactly 1024 bytes"],
    code: "# The argument to socket.recv(1024) represents:\n# a) Exactly 1024 bytes must be received\n# b) Maximum 1024 bytes will be received at once\n# c) 1024 kilobytes buffer\n# d) Timeout in milliseconds\nprint('b')",
    correctOutput: "b",
    hint: "recv(bufsize) returns at most bufsize bytes.",
  },
  {
    id: "py40-ex8", type: "exercise", title: "UDP recvfrom",
    description: "What does recvfrom return?",
    instructions: ["UDP uses recvfrom (not recv)", "It returns data AND address"],
    code: "import socket\n\n# For a UDP socket, socket.recvfrom(1024) returns:\n# a) bytes only\n# b) (bytes, address) tuple\n# c) (address, bytes) tuple\n# d) int\nprint('b')",
    correctOutput: "b",
    hint: "recvfrom returns (data, address) where address is the sender's (ip, port).",
  },
  {
    id: "py40-ex9", type: "exercise", title: "Non-blocking mode",
    description: "What does setblocking(False) do?",
    instructions: ["Non-blocking mode raises BlockingIOError if the operation would block", "The operation doesn't wait"],
    code: "import socket\n\ns = socket.socket()\ns.setblocking(False)\ntry:\n    data = s.recv(1024)\nexcept BlockingIOError:\n    print('would block')",
    correctOutput: "would block",
    hint: "In non-blocking mode, recv raises BlockingIOError if no data is available.",
  },
  {
    id: "py40-ex10", type: "exercise", title: "getaddrinfo",
    description: "What does getaddrinfo resolve?",
    instructions: ["getaddrinfo resolves hostname to IP address", "It returns a list of address tuples"],
    code: "import socket\n\nresult = socket.getaddrinfo('localhost', 80, family=socket.AF_INET)\naddr = result[0][4]\nprint(type(addr).__name__)",
    correctOutput: "tuple",
    hint: "getaddrinfo returns a list of tuples; result[0][4] is the (host, port) tuple.",
  },
];

const ch40Exam: ExamQuestion[] = [
  { id: "py40-q1", type: "multiple-choice", difficulty: "easy", question: "Which socket type provides reliable, ordered, connection-oriented communication?", options: [{ id: "a", text: "SOCK_DGRAM" }, { id: "b", text: "SOCK_STREAM" }, { id: "c", text: "SOCK_RAW" }, { id: "d", text: "SOCK_SEQPACKET" }], correctAnswer: "b", explanation: "SOCK_STREAM provides TCP - reliable, ordered, connection-oriented." },
  { id: "py40-q2", type: "true-false", difficulty: "easy", question: "UDP guarantees that data will arrive in order.", correctAnswer: false, explanation: "UDP is connectionless and provides no delivery guarantees. Packets may be lost, duplicated, or arrive out of order." },
  { id: "py40-q3", type: "fill-blank", difficulty: "easy", question: "The method that waits for and accepts a client connection on a server socket is ___.", correctAnswer: "accept", acceptableAnswers: ["accept", "socket.accept"], explanation: "server_socket.accept() returns (client_socket, address)." },
  { id: "py40-q4", type: "multiple-choice", difficulty: "medium", question: "What problem does SO_REUSEADDR solve?", options: [{ id: "a", text: "Slow data transfer" }, { id: "b", text: "Address already in use error on restart" }, { id: "c", text: "Connection timeout" }, { id: "d", text: "Buffer overflow" }], correctAnswer: "b", explanation: "SO_REUSEADDR allows reuse of local addresses in TIME_WAIT state, preventing 'Address already in use' errors." },
  { id: "py40-q5", type: "code-order", difficulty: "medium", question: "Arrange the server socket sequence.", codeLines: ["server = socket.socket()", "server.bind(('localhost', 8000))", "server.listen(5)", "client, addr = server.accept()"], correctOrder: [0, 1, 2, 3], explanation: "Create -> Bind -> Listen -> Accept is the server socket lifecycle." },
  { id: "py40-q6", type: "match-pairs", difficulty: "medium", question: "Match socket functions to their descriptions.", leftItems: ["bind", "listen", "accept", "connect"], rightItems: ["Associate socket with address", "Mark socket as passive", "Wait for incoming connection", "Connect to a remote socket"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "bind associates, listen listens, accept accepts, connect connects." },
  { id: "py40-q7", type: "multiple-choice", difficulty: "medium", question: "Which function monitors multiple sockets for readability?", options: [{ id: "a", text: "socket.monitor" }, { id: "b", text: "select.select" }, { id: "c", text: "socket.poll" }, { id: "d", text: "socket.watch" }], correctAnswer: "b", explanation: "select.select(read_list, write_list, error_list, timeout) monitors sockets for I/O readiness." },
  { id: "py40-q8", type: "true-false", difficulty: "hard", question: "In non-blocking mode, socket.recv() raises BlockingIOError if no data is available.", correctAnswer: true, explanation: "Non-blocking sockets raise BlockingIOError instead of waiting for data." },
  { id: "py40-q9", type: "fill-blank", difficulty: "hard", question: "The function that resolves a hostname to an IP address is socket.____().", correctAnswer: "getaddrinfo", acceptableAnswers: ["getaddrinfo", "socket.getaddrinfo"], explanation: "socket.getaddrinfo('example.com', 80) returns address information." },
  { id: "py40-q10", type: "code-order", difficulty: "hard", question: "Arrange a select-based server check for new data.", codeLines: ["readable, _, _ = select.select(sockets, [], [], 1.0)", "import select, socket", "for sock in readable:", "    if sock is server:", "        client, addr = sock.accept()", "    else:", "        data = sock.recv(1024)"], correctOrder: [1, 0, 2, 3, 4, 5], explanation: "Import select, call select, iterate ready sockets, handle new connections or data." },
];

const ch40: Chapter = {
  id: "python-ch40", courseId: "python", title: "Sockets and Networking", order: 40,
  sections: ch40Sections, examPool: ch40Exam, xpReward: 255, estimatedMinutes: 55,
  prerequisites: ["python-ch39"],
  keyPoints: [
    "Socket: endpoint for network communication; AF_INET (IPv4) + SOCK_STREAM (TCP) are most common",
    "Server lifecycle: socket -> bind -> listen -> accept -> recv/send -> close",
    "Client lifecycle: socket -> connect -> send/recv -> close",
    "TCP: reliable, ordered, connection-oriented (SOCK_STREAM)",
    "UDP: fast, connectionless, unreliable (SOCK_DGRAM) with recvfrom/sendto",
    "SO_REUSEADDR prevents 'Address already in use' errors on server restart",
    "setblocking(False) for non-blocking mode; settimeout for bounded waits",
    "select.select monitors multiple sockets for I/O readiness",
    "Production: use asyncio, FastAPI, aiohttp instead of raw sockets",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Export Array
// ───────────────────────────────────────────────────────────────────
export const pythonChapters31to40: Chapter[] = [
  ch31, ch32, ch33, ch34, ch35,
  ch36, ch37, ch38, ch39, ch40,
];
