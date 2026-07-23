// ─── Python Project Chapters 41-108 — Build Projects Step by Step ──
// Each project chapter teaches concepts while building a real project.
// Prerequisites point to the regular chapter(s) needed before starting.
// Project chapters appear sequentially at the end of the chapter list
// and unlock when their prerequisite chapters are completed.
// ─────────────────────────────────────────────────────────────────────

import { Chapter, Section, ExamQuestion } from "../types";

let order = 40; // will increment before each chapter

function nextOrder(): number {
  order++;
  return order;
}

// ───────────────────────────────────────────────────────────────────
// Project 1: Hello World (2 chapters) — after ch1
// ───────────────────────────────────────────────────────────────────
const hello1Sections: Section[] = [
  {
    type: "text",
    content:
      "## Welcome to Your First Python Project!\n\nYou've learned how to use `print()`, write comments, and do basic math. Now let's build your first real Python program — a Hello World program that greets the user and shows them how Python works.\n\nIn this project step, you'll create a script that:\n- Prints a welcome message\n- Shows information about Python\n- Displays the result of a simple calculation",
  },
  {
    type: "code",
    language: "python",
    caption: "Here's what we're building toward in this project step:",
    content: '# My First Python Program\nprint("=" * 30)\nprint("WELCOME TO PYTHON!")\nprint("=" * 30)\nprint("Python version: 3.x")\nprint("Created by: Guido van Rossum")\nprint()\nprint("Fun fact: Python was named after Monty Python!")\nprint("42 + 18 =", 42 + 18)',
  },
  {
    type: "text",
    content:
      "## Breaking It Down\n\nLet's look at each part:\n\n- `print(\"=\" * 30)` — This multiplies a string! The string `\"=\"` repeated 30 times creates a divider line.\n- `print()` with nothing prints a blank line.\n- `print(\"42 + 18 =\", 42 + 18)` — Python evaluates the math and prints both the label and the result.\n- Comments with `#` explain what each section does.",
  },
  {
    type: "callout",
    style: "tip",
    content:
      "**String multiplication** is a neat Python trick. `\"=\" * 30` creates `==============================`. Try different characters and lengths!",
  },
  {
    type: "text",
    content:
      "## Your Task\n\nCreate a Hello World program that uses everything you've learned. Add comments to explain each line. Print a welcome banner, some information, and a calculation result.",
  },
  {
    type: "exercise",
    id: "py-proj-hello-ex1",
    title: "Build Your Hello World Program",
    description: "Write a Python program that prints a formatted welcome message.",
    instructions: [
      "Print a banner with `print(\"=\" * 30)`",
      "Print a welcome message like 'WELCOME TO PYTHON!'",
      "Add comments explaining each section",
      "Print your name and the current year",
      "Print the result of 15 * 3 with a label"
    ],
    code: "# Write your Hello World program here\n# Start with a banner\n\n",
    correctOutput: "==============================\nWELCOME TO PYTHON!\n==============================",
    hint: "Use print(\"=\" * 30) for the banner. Add comments with # before each section.",
  },
  {
    type: "key-points",
    points: [
      "A Python script is just a text file with .py extension",
      "print() can output strings, numbers, and expressions",
      "String multiplication (\"=\" * N) repeats a string N times",
      "Comments with # document your code for humans",
      "Python evaluates math expressions before printing",
    ],
  },
];

const hello1Exam: ExamQuestion[] = [
  {
    id: "py-proj-hello-q1",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does print(\"=\" * 10) output?",
    options: [
      { id: "a", text: "= * 10" },
      { id: "b", text: "==========" },
      { id: "c", text: "10" },
      { id: "d", text: "Error" },
    ],
    correctAnswer: "b",
    explanation: "String multiplication repeats the string N times. \"=\" * 10 produces 10 equal signs.",
  },
  {
    id: "py-proj-hello-q2",
    type: "true-false",
    difficulty: "easy",
    question: "A print() call with no arguments prints a blank line.",
    correctAnswer: true,
    explanation: "print() without arguments outputs an empty line, which is useful for spacing.",
  },
  {
    id: "py-proj-hello-q3",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does print(\"3 + 4 =\", 3 + 4) display?",
    options: [
      { id: "a", text: "3 + 4 = 7" },
      { id: "b", text: "3 + 4 = 3 + 4" },
      { id: "c", text: "7" },
      { id: "d", text: "3 + 4 = 34" },
    ],
    correctAnswer: "a",
    explanation: "Python evaluates 3 + 4 to 7, then prints the string label followed by the result.",
  },
];

// ───────────────────────────────────────────────────────────────────
// Project 1: Hello World - Step 2: Variables & User Greeting
// ───────────────────────────────────────────────────────────────────
const hello2Sections: Section[] = [
  {
    type: "text",
    content:
      "## Hello World with Variables\n\nNow let's improve your Hello World program by adding variables. Variables store data so you can reuse it throughout your program.\n\nYou'll create a program that:\n- Stores your name in a variable\n- Stores the current year\n- Prints a personalized greeting\n- Shows formatted information",
  },
  {
    type: "code",
    language: "python",
    caption: "A greeting program using variables:",
    content: '# Using variables in Python\nname = "Alex"\nyear = 2026\nprint("Hello,", name + "!")\nprint("Welcome to", year)\nprint("You are learning Python in", year - 2020, "years after 2020")',
  },
  {
    type: "text",
    content:
      "## Variables Make Code Flexible\n\nVariables let you change values in one place and the whole program updates. If you change `name` to `\"Jordan\"`, every line that uses `name` automatically prints the new value.\n\nNotice the difference:\n- `print(\"Hello,\", name + \"!\")` — comma adds a space, `+` concatenates without spaces\n- `year - 2020` — performs math on the stored value",
  },
  {
    type: "callout",
    style: "info",
    content:
      "**Commas vs Plus in print():** `print(\"Hello\", name)` adds a space between items. `print(\"Hello \" + name)` concatenates strings without extra space. Mixing types? Use commas — you can't `+` a string and a number without converting first.",
  },
  {
    type: "text",
    content:
      "## Your Task\n\nCreate a program that uses variables to store your name, favorite color, and current year. Then print a formatted introduction that uses all three variables.",
  },
  {
    type: "exercise",
    id: "py-proj-hello-ex2",
    title: "Variable-Powered Greeting",
    description: "Write a program that uses variables to create a personalized introduction.",
    instructions: [
      "Create a variable called 'name' with your name",
      "Create a variable called 'year' with 2026",
      "Create a variable called 'color' with your favorite color",
      "Print: 'Hi, I'm [name] and my favorite color is [color]'",
      "Print: 'The year is [year] — in 5 years it will be [year + 5]'"
    ],
    code: "# Create your greeting program\nname = \"\"\nyear = \n\n",
    correctOutput: "Hi, I'm Alex and my favorite color is blue\nThe year is 2026 — in 5 years it will be 2031",
    hint: "Use f-strings or commas in print(). For math, use year + 5 inside print().",
  },
  {
    type: "key-points",
    points: [
      "Variables store values with = and can be reused throughout your program",
      "Commas in print() add a space between values automatically",
      "The + operator concatenates strings (no automatic spaces)",
      "You can perform math on numeric variables inside print()",
      "Changing a variable's value updates all places that use it",
    ],
  },
];

const hello2Exam: ExamQuestion[] = [
  {
    id: "py-proj-hello-q4",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does this code print?\nx = 10\ny = 5\nprint(x, \"+\", y, \"=\", x + y)",
    options: [
      { id: "a", text: "10 + 5 = 15" },
      { id: "b", text: "10+5=15" },
      { id: "c", text: "x + y = 15" },
      { id: "d", text: "x + y = x + y" },
    ],
    correctAnswer: "a",
    explanation: "Commas in print() add spaces. x + y is evaluated to 15. So the output is '10 + 5 = 15'.",
  },
  {
    id: "py-proj-hello-q5",
    type: "true-false",
    difficulty: "easy",
    question: "Variables in Python can store different types of data (strings, numbers, etc.).",
    correctAnswer: true,
    explanation: "Python is dynamically typed — variables can hold any type of value.",
  },
];

// ───────────────────────────────────────────────────────────────────
// Project 2: BMI Calculator (2 chapters) — after ch5
// ───────────────────────────────────────────────────────────────────
const bmi1Sections: Section[] = [
  {
    type: "text",
    content:
      "## Build a BMI Calculator — Part 1\n\nYou've learned about `input()`, type conversion with `int()` and `float()`, and arithmetic operators. Let's apply all of that to build a Body Mass Index (BMI) calculator!\n\nBMI is calculated as:\n\n**BMI = weight (kg) / height² (m²)**\n\nYour program will:\n- Ask the user for their weight in kilograms\n- Ask for their height in meters\n- Calculate BMI = weight / (height × height)\n- Display the result",
  },
  {
    type: "code",
    language: "python",
    caption: "A simple BMI calculator:",
    content: '# BMI Calculator\nweight = float(input("Enter your weight (kg): "))\nheight = float(input("Enter your height (m): "))\nbmi = weight / (height ** 2)\nprint("Your BMI is:", round(bmi, 1))',
  },
  {
    type: "text",
    content:
      "## Breaking Down the Code\n\n- `float(input(...))` — `input()` returns a string, so we wrap it in `float()` to convert to a decimal number\n- `height ** 2` — the `**` operator raises to a power. `height ** 2` equals `height × height`\n- `round(bmi, 1)` — rounds the BMI to 1 decimal place for a clean display\n- The formula `weight / (height ** 2)` follows the standard BMI calculation",
  },
  {
    type: "callout",
    style: "warning",
    content:
      "**Always validate numeric input.** If the user types text instead of a number, `float()` will crash with a `ValueError`. You'll learn error handling later — for now, assume the user enters valid numbers.",
  },
  {
    type: "text",
    content:
      "## Your Task\n\nCreate a BMI calculator that asks for weight and height, calculates the BMI, and displays it rounded to one decimal place.",
  },
  {
    type: "exercise",
    id: "py-proj-bmi-ex1",
    title: "Basic BMI Calculator",
    description: "Write a program that calculates and displays BMI.",
    instructions: [
      "Ask for weight in kg using input()",
      "Ask for height in meters using input()",
      "Convert both inputs to float",
      "Calculate BMI = weight / (height ** 2)",
      "Print the result rounded to 1 decimal place"
    ],
    code: "# BMI Calculator\n\n",
    correctOutput: "Enter your weight (kg): 70\nEnter your height (m): 1.75\nYour BMI is: 22.9",
    hint: "Use float(input()) for both inputs. Use round(bmi, 1) for the output.",
  },
  {
    type: "key-points",
    points: [
      "input() always returns a string — convert to float for math",
      "float() converts strings like \"70.5\" to decimal numbers",
      "The ** operator raises a number to a power (e.g., height ** 2 = height²)",
      "round(value, decimals) rounds to the specified number of decimal places",
      "BMI formula: weight(kg) / height(m)²",
    ],
  },
];

const bmi1Exam: ExamQuestion[] = [
  {
    id: "py-proj-bmi-q1",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Why do we wrap input() in float() like float(input())?",
    options: [
      { id: "a", text: "To make the input appear faster" },
      { id: "b", text: "To convert the string returned by input() into a number" },
      { id: "c", text: "To round the input to a decimal" },
      { id: "d", text: "To prevent the user from typing text" },
    ],
    correctAnswer: "b",
    explanation: "input() always returns a string. float() converts that string to a floating-point number so you can do math with it.",
  },
  {
    id: "py-proj-bmi-q2",
    type: "true-false",
    difficulty: "easy",
    question: "The expression height ** 2 is equivalent to height * height.",
    correctAnswer: true,
    explanation: "The ** operator is the power operator. height ** 2 means 'height to the power of 2', which is the same as height * height.",
  },
];

// ───────────────────────────────────────────────────────────────────
// Project 2: BMI Calculator - Step 2: Category & Formatting
// ───────────────────────────────────────────────────────────────────
const bmi2Sections: Section[] = [
  {
    type: "text",
    content:
      "## BMI Calculator with Category\n\nLet's enhance your BMI calculator to show the BMI category. This uses comparison operators and conditionals (`if`/`elif`/`else`) from chapters 6-7.\n\nBMI Categories:\n- Underweight: BMI < 18.5\n- Normal: 18.5 ≤ BMI < 25\n- Overweight: 25 ≤ BMI < 30\n- Obese: BMI ≥ 30\n\nYou'll also use f-strings to format the output neatly.",
  },
  {
    type: "code",
    language: "python",
    caption: "Enhanced BMI calculator with categories:",
    content: '# BMI Calculator with Category\nweight = float(input("Enter your weight (kg): "))\nheight = float(input("Enter your height (m): "))\nbmi = weight / (height ** 2)\n\n# Determine category\nif bmi < 18.5:\n    category = "Underweight"\nelif bmi < 25:\n    category = "Normal"\nelif bmi < 30:\n    category = "Overweight"\nelse:\n    category = "Obese"\n\n# Display result\nprint(f"Your BMI: {bmi:.1f}")\nprint(f"Category: {category}")',
  },
  {
    type: "text",
    content:
      "## Using f-strings for Formatting\n\n- `{bmi:.1f}` — the `:.1f` format specifier rounds to 1 decimal place\n- `{category}` — simply inserts the string value\n\nf-strings let you embed expressions and variables directly in strings with `{}` curly braces. The format specifier after the colon controls how numbers are displayed.",
  },
  {
    type: "callout",
    style: "tip",
    content:
      "**Format specifiers** are powerful: `:.2f` → 2 decimals, `:,.0f` → thousands separator with no decimals, `:.0%` → percentage. Try `f\"{1234567.89:,.2f}\"` → `1,234,567.89`",
  },
  {
    type: "text",
    content:
      "## Your Task\n\nEnhance your BMI calculator to display both the BMI value (rounded to 1 decimal) and the category. Use an f-string for the output.",
  },
  {
    type: "exercise",
    id: "py-proj-bmi-ex2",
    title: "BMI with Category",
    description: "Add BMI category detection to your calculator.",
    instructions: [
      "Get weight and height from the user",
      "Calculate BMI",
      "Use if/elif/else to determine the category",
      "Print 'Your BMI: [value] — [category]' using an f-string"
    ],
    code: "# BMI Calculator with Category\n\n",
    correctOutput: "Enter your weight (kg): 95\nEnter your height (m): 1.80\nYour BMI: 29.3 — Overweight",
    hint: "Use f\"Your BMI: {bmi:.1f} — {category}\". Categories: <18.5 Underweight, <25 Normal, <30 Overweight, >=30 Obese.",
  },
  {
    type: "key-points",
    points: [
      "if/elif/else chains check conditions in order and execute the first match",
      "f-strings embed variables and expressions inside {}",
      "Format specifiers like :.1f control number display",
      "Comparison operators (<, >=) work on float values",
      "else catches all remaining cases (no condition needed)",
    ],
  },
];

const bmi2Exam: ExamQuestion[] = [
  {
    id: "py-proj-bmi-q3",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does f\"{3.14159:.2f}\" output?",
    options: [
      { id: "a", text: "3.14" },
      { id: "b", text: "3.14159" },
      { id: "c", text: "3.1" },
      { id: "d", text: "3.14159:.2f" },
    ],
    correctAnswer: "a",
    explanation: "The :.2f format specifier rounds the number to 2 decimal places. 3.14159 rounded to 2 decimals is 3.14.",
  },
  {
    id: "py-proj-bmi-q4",
    type: "true-false",
    difficulty: "easy",
    question: "In an if/elif/else chain, once one condition is True, the rest are skipped.",
    correctAnswer: true,
    explanation: "Python checks conditions top to bottom and executes only the first matching block, skipping all remaining elif and else clauses.",
  },
];

// ───────────────────────────────────────────────────────────────────
// Helper to accumulate all project chapters
// ───────────────────────────────────────────────────────────────────
export const pythonProjectChapters: Chapter[] = [
  // ── Project 1: Hello World (after ch1) ──
  {
    id: "python-ch-proj-hello-1",
    courseId: "python",
    title: "Hello World: Print & Comments",
    order: nextOrder(),
    sections: hello1Sections,
    examPool: hello1Exam,
    xpReward: 45,
    estimatedMinutes: 20,
    prerequisites: ["python-ch1"],
    keyPoints: [
      "A Python script is just a text file with .py extension",
      "print() can output strings, numbers, and expressions",
      "String multiplication (\"=\" * N) repeats a string N times",
      "Comments with # document your code for humans",
      "Python evaluates math expressions before printing",
    ],
  },
  {
    id: "python-ch-proj-hello-2",
    courseId: "python",
    title: "Hello World: Variables & Greeting",
    order: nextOrder(),
    sections: hello2Sections,
    examPool: hello2Exam,
    xpReward: 50,
    estimatedMinutes: 20,
    prerequisites: ["python-ch-proj-hello-1"],
    keyPoints: [
      "Variables store values with = and can be reused throughout your program",
      "Commas in print() add a space between values automatically",
      "The + operator concatenates strings (no automatic spaces)",
      "You can perform math on numeric variables inside print()",
      "Changing a variable's value updates all places that use it",
    ],
  },

  // ── Project 2: BMI Calculator (after ch5) ──
  {
    id: "python-ch-proj-bmi-1",
    courseId: "python",
    title: "BMI Calculator: Input & Math",
    order: nextOrder(),
    sections: bmi1Sections,
    examPool: bmi1Exam,
    xpReward: 55,
    estimatedMinutes: 25,
    prerequisites: ["python-ch5"],
    keyPoints: [
      "input() always returns a string — convert to float for math",
      "float() converts strings like \"70.5\" to decimal numbers",
      "The ** operator raises a number to a power (e.g., height ** 2 = height²)",
      "round(value, decimals) rounds to the specified number of decimal places",
      "BMI formula: weight(kg) / height(m)²",
    ],
  },
  {
    id: "python-ch-proj-bmi-2",
    courseId: "python",
    title: "BMI Calculator: Categories & Formatting",
    order: nextOrder(),
    sections: bmi2Sections,
    examPool: bmi2Exam,
    xpReward: 60,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-bmi-1"],
    keyPoints: [
      "if/elif/else chains check conditions in order and execute the first match",
      "f-strings embed variables and expressions inside {}",
      "Format specifiers like :.1f control number display",
      "Comparison operators (<, >=) work on float values",
      "else catches all remaining cases (no condition needed)",
    ],
  },

  // ── Project 3: Mad Libs (after ch7) ──
  {
    id: "python-ch-proj-madlibs-1",
    courseId: "python",
    title: "Mad Libs: String Templates",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Mad Libs Generator\n\nMad Libs is a word game where you ask a user for words (nouns, verbs, adjectives) and then insert them into a story template. The result is often hilarious!\n\nIn this step, you'll use f-strings and string formatting to create a story template." },
      { type: "code", language: "python", caption: "A simple Mad Libs template:", content: 'adj = input("Enter an adjective: ")\nnoun = input("Enter a noun: ")\nverb = input("Enter a verb: ")\n\nstory = f"The {adj} {noun} decided to {verb} all day long!"\nprint("\\nYour Story:")\nprint(story)' },
      { type: "callout", style: "tip", content: "**Escape sequences in strings:** `\\n` creates a newline. `\\t` creates a tab." },
      { type: "exercise", id: "py-proj-madlibs-ex1", title: "Build a Mad Libs Template", description: "Collect words from the user and build a story.", instructions: ["Ask for an adjective, noun, and verb", "Create an f-string template with all three", "Print a title and the completed story"], code: "# Mad Libs Generator\n\n", correctOutput: "Enter an adjective: silly\nEnter a noun: banana\nEnter a verb: dance\n\nYour Story:\nThe silly banana decided to dance all day long!", hint: "Use f\"...{adj}...{noun}...{verb}...\" for the template." },
      { type: "key-points", points: ["f-strings embed variables directly in string templates", "Escape sequences like \\n add special characters to strings", "String formatting creates dynamic output from user input"] },
    ],
    examPool: [
      { id: "py-proj-madlibs-q1", type: "multiple-choice", difficulty: "easy", question: "What escape sequence creates a newline in a string?", options: [{ id: "a", text: "\\n" }, { id: "b", text: "\\t" }, { id: "c", text: "\\r" }, { id: "d", text: "\\0" }], correctAnswer: "a", explanation: "\\n is the newline character. It moves the cursor to the next line." },
      { id: "py-proj-madlibs-q2", type: "true-false", difficulty: "easy", question: "An f-string can only contain variable names, not expressions.", correctAnswer: false, explanation: "f-strings can contain any Python expression inside {}, like f\"{2 + 2}\" or f\"{name.upper()}\"." },
    ],
    xpReward: 50,
    estimatedMinutes: 20,
    prerequisites: ["python-ch7"],
    keyPoints: ["f-strings embed variables directly in string templates", "Escape sequences like \\n add special characters to strings", "String formatting creates dynamic output from user input"],
  },
  {
    id: "python-ch-proj-madlibs-2",
    courseId: "python",
    title: "Mad Libs: Multiple Templates",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Multiple Story Templates\n\nLet's expand your Mad Libs generator to support multiple story templates! You'll use lists to store templates and let the user choose one." },
      { type: "code", language: "python", caption: "Multiple templates in a list:", content: 'templates = [\n    f"The {adj} {noun} {verb} over the lazy dog.",\n    f"Once upon a time, a {adj} {noun} loved to {verb}.",\n    f"Breaking news! {adj} {noun} {verb}s local record!"\n]\n\nprint("Pick a story:")\nfor i, t in enumerate(templates, 1):\n    print(f"{i}. Story {i}")\n\nchoice = int(input("Choice: "))\nprint(templates[choice - 1])' },
      { type: "callout", style: "info", content: "**enumerate()** returns both the index and value as you loop. Adding `, 1` starts counting from 1." },
      { type: "exercise", id: "py-proj-madlibs-ex2", title: "Multiple Story Templates", description: "Add at least 3 story templates and let the user choose.", instructions: ["Create 3+ story templates as f-strings in a list", "Display choices numbered 1 to N", "Let the user pick one", "Print the chosen story"], code: "# Mad Libs with Multiple Templates\n\n", correctOutput: "Pick a story:\n1. Story 1\n2. Story 2\n3. Story 3\nChoice: 2\n\nOnce upon a time, a silly cat loved to sing.", hint: "Store f-strings in a list. Use enumerate(templates, 1) for numbering." },
    ],
    examPool: [
      { id: "py-proj-madlibs-q3", type: "multiple-choice", difficulty: "easy", question: "What does enumerate([\"a\", \"b\", \"c\"], 1) return?", options: [{ id: "a", text: "(0, \"a\"), (1, \"b\"), (2, \"c\")" }, { id: "b", text: "(1, \"a\"), (2, \"b\"), (3, \"c\")" }, { id: "c", text: "(\"a\", 1), (\"b\", 2), (\"c\", 3)" }], correctAnswer: "b", explanation: "enumerate(iterable, start) yields (index, value) pairs starting from start." },
    ],
    xpReward: 55,
    estimatedMinutes: 20,
    prerequisites: ["python-ch-proj-madlibs-1"],
    keyPoints: ["Lists store multiple values in ordered sequence", "enumerate() gives both index and value while looping", "List indexing starts at 0, so choice - 1 selects correctly"],
  },

  // ── Project 4: Number Guessing Game (after ch20 for random, ch8 for while) ──
  {
    id: "python-ch-proj-numguess-1",
    courseId: "python",
    title: "Number Guessing: Random Numbers",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Number Guessing Game\n\nThe computer will pick a random number, and you'll try to guess it! First, let's learn how to generate random numbers in Python." },
      { type: "code", language: "python", caption: "Generating random numbers:", content: 'import random\n\ntarget = random.randint(1, 100)\nprint(f"Psst... the number is {target}")\n\ncolors = ["red", "green", "blue"]\nprint(random.choice(colors))\n\nprint(random.random())' },
      { type: "exercise", id: "py-proj-numguess-ex1", title: "Generate a Random Target", description: "Use random.randint() to pick a number between 1 and 100.", instructions: ["Import the random module", "Use randint(1, 100) to generate a target", "Print the number (for testing)"], code: '# Number Guessing - Setup\nimport random\n\ntarget = random.randint(1, 100)\nprint(f"Target: {target}")', correctOutput: "Target: 42", hint: "random.randint(a, b) returns a random integer N where a <= N <= b." },
      { type: "key-points", points: ["import random gives access to random number functions", "random.randint(a, b) returns a random integer between a and b inclusive", "random.choice(list) picks a random element from a list"] },
    ],
    examPool: [
      { id: "py-proj-numguess-q1", type: "multiple-choice", difficulty: "easy", question: "Which function returns a random integer between 1 and 10 (inclusive)?", options: [{ id: "a", text: "random.int(1, 10)" }, { id: "b", text: "random.randint(1, 10)" }, { id: "c", text: "random.random(1, 10)" }], correctAnswer: "b", explanation: "random.randint(a, b) returns a random integer N where a <= N <= b." },
    ],
    xpReward: 55,
    estimatedMinutes: 25,
    prerequisites: ["python-ch20"],
    keyPoints: ["import random gives access to random number functions", "random.randint(a, b) returns a random integer between a and b inclusive", "random.choice(list) picks a random element from a list"],
  },
  {
    id: "python-ch-proj-numguess-2",
    courseId: "python",
    title: "Number Guessing: Game Loop",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## The Game Loop\n\nNow let's add the guessing loop. The player enters guesses, and the program gives hints until they guess correctly." },
      { type: "code", language: "python", caption: "The guessing loop:", content: 'import random\n\ntarget = random.randint(1, 100)\nattempts = 0\n\nwhile True:\n    guess = int(input("Guess (1-100): "))\n    attempts += 1\n    \n    if guess < target:\n        print("Too low!")\n    elif guess > target:\n        print("Too high!")\n    else:\n        print(f"Correct! You got it in {attempts} tries!")\n        break' },
      { type: "exercise", id: "py-proj-numguess-ex2", title: "Complete Game Loop", description: "Build the guessing loop with hints.", instructions: ["Use while True and break for the game loop", "Convert input to int with int()", "Give 'Too high!' or 'Too low!' feedback", "Print attempts count on correct guess"], code: '# Number Guessing Game\nimport random\n\ntarget = random.randint(1, 100)\n\n', correctOutput: "Guess (1-100): 50\nToo low!\nGuess (1-100): 75\nToo high!\nGuess (1-100): 62\nCorrect! You got it in 3 tries!", hint: "Use while True: for the loop. break exits when guess == target." },
      { type: "key-points", points: ["while True creates an infinite loop — use break to exit", "Comparison operators (<, >, ==) guide the player with hints", "A counter variable (attempts) tracks how many tries were used"] },
    ],
    examPool: [
      { id: "py-proj-numguess-q2", type: "true-false", difficulty: "easy", question: "The break statement immediately exits the current loop.", correctAnswer: true, explanation: "break terminates the innermost loop it's in, regardless of the loop condition." },
      { id: "py-proj-numguess-q3", type: "multiple-choice", difficulty: "easy", question: "What does int(\"42\") return?", options: [{ id: "a", text: "\"42\"" }, { id: "b", text: "42" }], correctAnswer: "b", explanation: "int() converts a string to an integer." },
    ],
    xpReward: 60,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-numguess-1"],
    keyPoints: ["while True creates an infinite loop — use break to exit", "Comparison operators (<, >, ==) guide the player with hints", "A counter variable (attempts) tracks how many tries were used"],
  },
  {
    id: "python-ch-proj-numguess-3",
    courseId: "python",
    title: "Number Guessing: Max Attempts",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Adding Max Attempts\n\nLet's add a maximum attempt limit. If the player doesn't guess in 7 tries, they lose!" },
      { type: "code", language: "python", caption: "Game with max attempts:", content: 'import random\n\ntarget = random.randint(1, 100)\nmax_attempts = 7\n\nfor attempt in range(1, max_attempts + 1):\n    guess = int(input(f"Attempt {attempt}/{max_attempts}: "))\n    if guess == target:\n        print(f"Correct in {attempt} tries!")\n        break\n    elif guess < target:\n        print("Too low!")\n    else:\n        print("Too high!")\nelse:\n    print(f"Out of tries! The number was {target}.")' },
      { type: "text", content: "## The `for...else` Trick\n\nPython's `for` loop has an optional `else` block that runs only if the loop completed **without** hitting `break`." },
      { type: "exercise", id: "py-proj-numguess-ex3", title: "Guessing Game with Limits", description: "Add a max attempt limit of 7.", instructions: ["Use a for loop with range for limited attempts", "Show attempt number in the prompt", "Display the target if the player runs out of tries", "Use for...else for the out-of-tries message"], code: '# Number Guessing with Limits\nimport random\n\ntarget = random.randint(1, 100)\n\n', correctOutput: "Attempt 1/7: 50\nToo high!\nAttempt 2/7: 25\nToo low!\nAttempt 3/7: 37\nCorrect in 3 tries!", hint: "Use for attempt in range(1, 8): and for...else for the lose condition." },
      { type: "key-points", points: ["for loop with range() gives you a fixed number of iterations", "for...else runs the else block when the loop finishes without break", "Combining random, loops, and conditionals creates interactive games"] },
    ],
    examPool: [
      { id: "py-proj-numguess-q4", type: "multiple-choice", difficulty: "medium", question: "When does the else block of a for loop execute?", options: [{ id: "a", text: "Always, after the loop ends" }, { id: "b", text: "Only if break was NOT used" }, { id: "c", text: "Only if break WAS used" }], correctAnswer: "b", explanation: "The else block runs only when the loop completes normally (no break)." },
    ],
    xpReward: 65,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-numguess-2"],
    keyPoints: ["for loop with range() gives you a fixed number of iterations", "for...else runs the else block when the loop finishes without break", "Combining random, loops, and conditionals creates interactive games"],
  },

  // ── Project 5: Rock Paper Scissors (after ch7 for if/else, ch20 for random) ──
  {
    id: "python-ch-proj-rps-1",
    courseId: "python",
    title: "Rock Paper Scissors: Game Logic",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build Rock Paper Scissors\n\nThe computer picks randomly, the player chooses, and the winner is determined: Rock beats Scissors, Scissors beats Paper, Paper beats Rock." },
      { type: "code", language: "python", caption: "The core game logic:", content: 'import random\n\nchoices = ["rock", "paper", "scissors"]\ncomputer = random.choice(choices)\nplayer = input("Rock, Paper, or Scissors? ").lower()\n\nprint(f"Computer chose: {computer}")\n\nif player == computer:\n    print("It\'s a tie!")\nelif (player == "rock" and computer == "scissors") or \\\n     (player == "scissors" and computer == "paper") or \\\n     (player == "paper" and computer == "rock"):\n    print("You win!")\nelse:\n    print("Computer wins!")' },
      { type: "callout", style: "tip", content: "**The backslash `\\`** continues a long line onto the next line for readability." },
      { type: "exercise", id: "py-proj-rps-ex1", title: "Single Round RPS", description: "Build a single round of Rock Paper Scissors.", instructions: ["Create a list of choices", "Use random.choice() for computer pick", "Get player input with .lower()", "Determine winner with if/elif/else"], code: '# Rock Paper Scissors\nimport random\n\n', correctOutput: "Rock, Paper, or Scissors? rock\nComputer chose: scissors\nPlayer chose: rock\nYou win!", hint: "Use .lower() on input. Map out all win conditions in elif." },
      { type: "key-points", points: [".lower() converts a string to lowercase — essential for input normalization", "\\ (backslash) continues a long line to the next line", "Game rules map naturally to if/elif/else logic"] },
    ],
    examPool: [
      { id: "py-proj-rps-q1", type: "multiple-choice", difficulty: "easy", question: "What does \"ROCK\".lower() return?", options: [{ id: "a", text: "\"ROCK\"" }, { id: "b", text: "\"rock\"" }], correctAnswer: "b", explanation: ".lower() converts all characters to lowercase." },
    ],
    xpReward: 60,
    estimatedMinutes: 30,
    prerequisites: ["python-ch7"],
    keyPoints: [".lower() converts a string to lowercase", "\\ (backslash) continues a long line to the next line", "Game rules map naturally to if/elif/else logic"],
  },
  {
    id: "python-ch-proj-rps-2",
    courseId: "python",
    title: "Rock Paper Scissors: Score Tracking",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Best of 5\n\nLet's make it a proper game — best of 5 rounds! Track scores for the player and computer. The first to 3 wins is the champion." },
      { type: "code", language: "python", caption: "Best of 5 loop:", content: 'import random\n\nchoices = ["rock", "paper", "scissors"]\nplayer_score = 0\ncomputer_score = 0\n\nwhile player_score < 3 and computer_score < 3:\n    # Play a round\n    # Update score\n    pass\n\nprint(f"Final: Player {player_score} — Computer {computer_score}")' },
      { type: "exercise", id: "py-proj-rps-ex2", title: "Best of 5 RPS", description: "Track scores and play until someone wins 3 rounds.", instructions: ["Initialize player_score and computer_score to 0", "Loop while both scores < 3", "Play a round and update the winner's score", "Announce the final winner"], code: '# Best of 5 Rock Paper Scissors\nimport random\n\nchoices = ["rock", "paper", "scissors"]\nplayer_score = 0\ncomputer_score = 0\n\n', correctOutput: "\nRound 1 — Player: 0, Computer: 0\nRock, Paper, or Scissors? rock\nComputer chose: scissors\nYou win!\n", hint: "Use while player_score < 3 and computer_score < 3." },
    ],
    examPool: [
      { id: "py-proj-rps-q2", type: "true-false", difficulty: "easy", question: "The condition `while a < 3 and b < 3` stops when either reaches 3.", correctAnswer: true, explanation: "When either a >= 3 or b >= 3, the and condition becomes False." },
    ],
    xpReward: 65,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-rps-1"],
    keyPoints: ["while with compound conditions (and/or) creates complex loop logic", "Score tracking uses simple integer counters", "Game state drives the loop continuation"],
  },
  {
    id: "python-ch-proj-rps-3",
    courseId: "python",
    title: "Rock Paper Scissors: Input Validation",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Input Validation\n\nWhat happens if the player types \"rockk\"? Let's add input validation to make the game robust." },
      { type: "code", language: "python", caption: "Validating player input:", content: 'choices = ["rock", "paper", "scissors"]\n\nwhile True:\n    player = input("Rock, Paper, or Scissors? ").lower()\n    if player in choices:\n        break\n    print(f"Invalid. Choose from: {", ".join(choices)}")' },
      { type: "exercise", id: "py-proj-rps-ex3", title: "Complete RPS with Validation", description: "Add input validation to your best-of-5 game.", instructions: ["Validate that player input is in the choices list", "Re-prompt if invalid", "Keep all existing score tracking"], code: '# Complete Rock Paper Scissors\nimport random\n\nchoices = ["rock", "paper", "scissors"]\n\n', correctOutput: "Rock, Paper, or Scissors? rockk\nInvalid. Choose from: rock, paper, scissors\nRock, Paper, or Scissors? rock\nComputer chose: scissors\nYou win!", hint: "Use `if player in choices:` to validate." },
    ],
    examPool: [
      { id: "py-proj-rps-q3", type: "multiple-choice", difficulty: "easy", question: "What does `\"rock\" in [\"rock\", \"paper\", \"scissors\"]` return?", options: [{ id: "a", text: "True" }, { id: "b", text: "False" }], correctAnswer: "a", explanation: "The `in` operator checks membership and returns True if found." },
    ],
    xpReward: 70,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-rps-2"],
    keyPoints: ["The `in` operator checks membership in a list or string", "Input validation makes programs robust against bad input", "A validation loop keeps asking until the input is correct"],
  },

  // ── Project 6: Caesar Cipher (after ch9 for for-loops, ch3 for strings) ──
  {
    id: "python-ch-proj-caesar-1",
    courseId: "python",
    title: "Caesar Cipher: Character Shifting",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Caesar Cipher\n\nThe Caesar cipher shifts each letter by a fixed amount. A → D, B → E with shift 3. You'll use `ord()` and `chr()`." },
      { type: "code", language: "python", caption: "Shifting a single character:", content: 'letter = "A"\nprint(f"ord(\'{letter}\') = {ord(letter)}")  # 65\n\nshifted = ord(letter) + 3\nprint(f"chr({shifted}) = {chr(shifted)}")  # D' },
      { type: "exercise", id: "py-proj-caesar-ex1", title: "Shift a Letter", description: "Ask for a letter and shift amount, then show the result.", instructions: ["Get a letter and shift amount", "Convert to ASCII with ord()", "Add the shift", "Convert back with chr()"], code: '# Caesar Cipher\nletter = input("Enter a letter: ")\nshift = int(input("Shift by: "))\n\n', correctOutput: "Enter a letter: A\nShift by: 3\nShifted: A -> D", hint: "Use ord(letter) and chr(ord(letter) + shift)." },
      { type: "key-points", points: ["ord(char) returns the ASCII/Unicode number for a character", "chr(number) returns the character for a number", "Adding a shift to ord() and converting back encrypts the character"] },
    ],
    examPool: [
      { id: "py-proj-caesar-q1", type: "multiple-choice", difficulty: "easy", question: "What does chr(ord(\"A\") + 3) return?", options: [{ id: "a", text: "\"A\"" }, { id: "b", text: "\"C\"" }, { id: "c", text: "\"D\"" }], correctAnswer: "c", explanation: "ord(\"A\") = 65, 65 + 3 = 68, chr(68) = \"D\"" },
    ],
    xpReward: 60,
    estimatedMinutes: 25,
    prerequisites: ["python-ch9"],
    keyPoints: ["ord(char) returns the ASCII/Unicode number for a character", "chr(number) returns the character for a number", "Adding a shift to ord() and converting back encrypts the character"],
  },
  {
    id: "python-ch-proj-caesar-2",
    courseId: "python",
    title: "Caesar Cipher: Wrap-Around",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Wrap-Around with Modulo\n\nShifting 'Z' by 3 should give 'C', not '['. We use modulo 26 to wrap around the alphabet." },
      { type: "code", language: "python", caption: "Encrypting with wrap-around:", content: 'def encrypt(text, shift):\n    result = ""\n    for char in text:\n        if char.isalpha():\n            base = ord("A") if char.isupper() else ord("a")\n            shifted = (ord(char) - base + shift) % 26 + base\n            result += chr(shifted)\n        else:\n            result += char\n    return result\n\nprint(encrypt("Hello, World!", 3))  # Khoor, Zruog!' },
      { type: "exercise", id: "py-proj-caesar-ex2", title: "Encrypt a Message", description: "Write encrypt() that handles wrap-around.", instructions: ["Define encrypt(text, shift)", "Loop through each character", "Only shift alphabetic chars (.isalpha())", "Use modulo 26 for wrap-around"], code: '# Caesar Cipher Encrypt\ndef encrypt(text, shift):\n    result = ""\n    # Your code here\n    return result\n\nmsg = input("Message: ")\ns = int(input("Shift: "))\nprint(f"Encrypted: {encrypt(msg, s)}")', correctOutput: "Message: Hello, World!\nShift: 3\nEncrypted: Khoor, Zruog!", hint: "Use (ord(char) - base + shift) % 26 + base." },
      { type: "key-points", points: ["isalpha() checks if a character is a letter", "Modulo (%) wraps values into a range", "The formula: (ord(char) - base + shift) % 26 + base"] },
    ],
    examPool: [
      { id: "py-proj-caesar-q2", type: "multiple-choice", difficulty: "medium", question: "What does (25 + 3) % 26 evaluate to?", options: [{ id: "a", text: "28" }, { id: "b", text: "2" }], correctAnswer: "b", explanation: "25 + 3 = 28. 28 % 26 = 2 (remainder when 28 is divided by 26)." },
    ],
    xpReward: 70,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-caesar-1"],
    keyPoints: ["isalpha() checks if a character is a letter", "Modulo (%) wraps values into a range", "The formula: (ord(char) - base + shift) % 26 + base"],
  },
  {
    id: "python-ch-proj-caesar-3",
    courseId: "python",
    title: "Caesar Cipher: Decryption & Menu",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Add Decryption\n\nDecryption is encryption with a negative shift! `decrypt(text, shift) = encrypt(text, -shift)`" },
      { type: "code", language: "python", caption: "Full Caesar cipher with menu:", content: 'def encrypt(text, shift):\n    ...\n\ndef decrypt(text, shift):\n    return encrypt(text, -shift)\n\nwhile True:\n    print("1. Encrypt\\n2. Decrypt\\n3. Quit")\n    choice = input("Choice: ")\n    if choice == "3":\n        break\n    msg = input("Message: ")\n    s = int(input("Shift: "))\n    if choice == "1":\n        print(f"Result: {encrypt(msg, s)}")\n    elif choice == "2":\n        print(f"Result: {decrypt(msg, s)}")' },
      { type: "exercise", id: "py-proj-caesar-ex3", title: "Full Caesar Cipher Tool", description: "Add decrypt and a menu.", instructions: ["Write decrypt using encrypt with -shift", "Show menu: 1. Encrypt 2. Decrypt 3. Quit", "Loop until the user quits"], code: '# Full Caesar Cipher\n\ndef encrypt(text, shift):\n    pass\n\n# Your code here\n\n', correctOutput: "\n1. Encrypt\n2. Decrypt\n3. Quit\nChoice: 1\nMessage: Hello\nShift: 3\nResult: Khoor\n\n1. Encrypt\n2. Decrypt\n3. Quit\nChoice: 3", hint: "decrypt = encrypt with -shift." },
    ],
    examPool: [
      { id: "py-proj-caesar-q3", type: "multiple-choice", difficulty: "medium", question: "How do you decrypt a Caesar cipher?", options: [{ id: "a", text: "Use encrypt with shift = -shift" }, { id: "b", text: "Reverse the string" }], correctAnswer: "a", explanation: "Caesar cipher is symmetric. Encrypting with -shift reverses +shift." },
    ],
    xpReward: 75,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-caesar-2"],
    keyPoints: ["Decryption is encryption with a negative shift", "A menu-driven program uses while True and if/elif for options", "Functions make the code modular and reusable"],
  },

  // ── Project 7: Word Counter (after ch28 for file I/O, ch13 for dicts) ──
  {
    id: "python-ch-proj-wordcount-1",
    courseId: "python",
    title: "Word Counter: File Reading",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Word Counter\n\nYou'll build a program that reads a text file and counts words, characters, and sentences. This teaches file I/O and string analysis." },
      { type: "code", language: "python", caption: "Reading a file:", content: 'with open("sample.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n\nprint(f"File length: {len(content)} characters")\nprint(f"First 50 chars: {content[:50]}")' },
      { type: "callout", style: "tip", content: "**The `with` statement** automatically closes the file when done. The `encoding=\"utf-8\"` parameter handles special characters properly." },
      { type: "exercise", id: "py-proj-wordcount-ex1", title: "Read a File", description: "Read a text file and display its character count.", instructions: ["Use with open() to read a file", "Print total characters", "Print first 100 characters"], code: '# Word Counter - Part 1\nwith open("sample.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n\nprint(f"Total characters: {len(content)}")\nprint("\\nPreview:")\nprint(content[:100])', correctOutput: "Total characters: 523\n\nPreview:\nPython is a powerful programming language. It is widely used for web development, data science, and automation.", hint: "Use f.read() to read the entire file as a string. len() gives the character count." },
      { type: "key-points", points: ["with open(path, mode) as f: reads or writes files safely", "f.read() returns the entire file content as a string", "encoding='utf-8' ensures proper Unicode handling"] },
    ],
    examPool: [
      { id: "py-proj-wordcount-q1", type: "multiple-choice", difficulty: "easy", question: "What does f.read() return?", options: [{ id: "a", text: "A list of lines" }, { id: "b", text: "A single string of the entire file" }], correctAnswer: "b", explanation: "f.read() returns the entire file content as one string." },
    ],
    xpReward: 60,
    estimatedMinutes: 25,
    prerequisites: ["python-ch28"],
    keyPoints: ["with open(path, mode) as f: reads or writes files safely", "f.read() returns the entire file content as a string", "encoding='utf-8' ensures proper Unicode handling"],
  },
  {
    id: "python-ch-proj-wordcount-2",
    courseId: "python",
    title: "Word Counter: Text Analysis",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Count Words and Sentences\n\nNow let's analyze the text. We'll count words (split by spaces), sentences (split by punctuation), and characters (with and without spaces)." },
      { type: "code", language: "python", caption: "Text analysis functions:", content: 'def analyze(text):\n    words = text.split()\n    sentences = text.replace("!", ".").replace("?", ".").split(".")\n    sentences = [s for s in sentences if s.strip()]\n    chars_no_spaces = len(text.replace(" ", ""))\n    \n    return {\n        "words": len(words),\n        "sentences": len(sentences),\n        "characters": len(text),\n        "chars_no_spaces": chars_no_spaces\n    }' },
      { type: "exercise", id: "py-proj-wordcount-ex2", title: "Full Text Analyzer", description: "Build a complete text analyzer that counts words, sentences, and characters.", instructions: ["Read a file", "Count words with .split()", "Count sentences by splitting on punctuation", "Count total characters and characters without spaces", "Display all stats in a formatted table"], code: '# Word Counter\n\ndef analyze(text):\n    # Your code here\n    pass\n\nwith open("sample.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n\nstats = analyze(content)\nfor key, value in stats.items():\n    print(f"{key}: {value}")', correctOutput: "words: 85\nsentences: 6\ncharacters: 523\nchars_no_spaces: 434", hint: "Use text.split() for words. Replace ! and ? with . then split on ." },
      { type: "key-points", points: [".split() with no arguments splits on whitespace", "Sentences can be counted by splitting on sentence-ending punctuation", "A dict is perfect for returning multiple statistics"] },
    ],
    examPool: [
      { id: "py-proj-wordcount-q2", type: "multiple-choice", difficulty: "easy", question: "What does \"hello world python\".split() return?", options: [{ id: "a", text: "[\"hello\", \"world\", \"python\"]" }, { id: "b", text: "\"hello world python\"" }], correctAnswer: "a", explanation: ".split() with no arguments splits a string on whitespace into a list of words." },
    ],
    xpReward: 70,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-wordcount-1"],
    keyPoints: [".split() with no arguments splits on whitespace", "Sentences can be counted by splitting on sentence-ending punctuation", "A dict is perfect for returning multiple statistics"],
  },

  // ── Project 8: Password Generator (after ch20 for random, ch10 for lists) ──
  {
    id: "python-ch-proj-passgen-1",
    courseId: "python",
    title: "Password Generator: Character Pools",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Password Generator\n\nGenerate secure random passwords using different character pools. You'll use the `string` module and `random.choice()`." },
      { type: "code", language: "python", caption: "Character pools from the string module:", content: 'import string\nimport random\n\n# Character pools\nlower = string.ascii_lowercase     # a-z\nupper = string.ascii_uppercase     # A-Z\ndigits = string.digits             # 0-9\nsymbols = string.punctuation       # !@#$%...\n\nall_chars = lower + upper + digits + symbols\nprint(f"Total characters available: {len(all_chars)}")\nprint(f"Random password: {\"\".join(random.choices(all_chars, k=12))}")' },
      { type: "callout", style: "tip", content: "**random.choices(pool, k=n)** picks n items with replacement (same item can be picked multiple times). Use `random.sample(pool, k=n)` for unique picks." },
      { type: "exercise", id: "py-proj-passgen-ex1", title: "Generate a Random Password", description: "Generate a 12-character password from all character types.", instructions: ["Import string and random", "Combine all character pools", "Use random.choices() to pick 12 characters", "Join with \"\".join() and print"], code: '# Password Generator\nimport string\nimport random\n\n# Your code here\n', correctOutput: "Generated password: aK7#x9mP2$qR", hint: "Use string.ascii_letters + string.digits + string.punctuation for the pool." },
      { type: "key-points", points: ["string module provides predefined character pools", "random.choices(pool, k=n) picks n items with replacement", "\"\".join(list) combines list elements into a string"] },
    ],
    examPool: [
      { id: "py-proj-passgen-q1", type: "multiple-choice", difficulty: "easy", question: "What does \"\".join([\"a\", \"b\", \"c\"]) return?", options: [{ id: "a", text: "\"abc\"" }, { id: "b", text: "[\"a\", \"b\", \"c\"]" }], correctAnswer: "a", explanation: "\"\".join() concatenates list elements with the separator between them. With \"\", it's direct concatenation." },
    ],
    xpReward: 60,
    estimatedMinutes: 25,
    prerequisites: ["python-ch20"],
    keyPoints: ["string module provides predefined character pools", "random.choices(pool, k=n) picks n items with replacement", "\"\".join(list) combines list elements into a string"],
  },
  {
    id: "python-ch-proj-passgen-2",
    courseId: "python",
    title: "Password Generator: Custom Options",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Custom Password Options\n\nLet the user choose password length and which character types to include. This teaches how to handle user preferences." },
      { type: "code", language: "python", caption: "Customizable password generator:", content: 'import string\nimport random\n\ndef generate_password(length=12, use_upper=True, use_digits=True, use_symbols=True):\n    pool = string.ascii_lowercase\n    if use_upper:\n        pool += string.ascii_uppercase\n    if use_digits:\n        pool += string.digits\n    if use_symbols:\n        pool += string.punctuation\n    return "".join(random.choices(pool, k=length))\n\nlength = int(input("Length: "))\nprint(f"Password: {generate_password(length)}")' },
      { type: "exercise", id: "py-proj-passgen-ex2", title: "Customizable Generator", description: "Let the user choose length and character options.", instructions: ["Ask for password length", "Ask whether to include uppercase, digits, and symbols", "Build the pool based on preferences", "Generate and display the password"], code: '# Custom Password Generator\nimport string\nimport random\n\ndef generate_password(length, use_upper, use_digits, use_symbols):\n    # Your code here\n    pass\n\nlength = int(input("Password length: "))\nprint(f"Password: {generate_password(length, True, True, True)}")', correctOutput: "Password length: 16\nPassword: kD8#mP2$rT9&xN5@", hint: "Start pool with lowercase, conditionally add others." },
      { type: "key-points", points: ["Function parameters with defaults make the generator flexible", "Conditionally build the character pool based on user preferences", "User input drives password generation options"] },
    ],
    examPool: [
      { id: "py-proj-passgen-q2", type: "true-false", difficulty: "medium", question: "Default parameter values in Python are evaluated at function definition time.", correctAnswer: true, explanation: "Default arguments are evaluated once when the function is defined, not each time it's called." },
    ],
    xpReward: 65,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-passgen-1"],
    keyPoints: ["Function parameters with defaults make the generator flexible", "Conditionally build the character pool based on user preferences", "User input drives password generation options"],
  },

  // ── Project 9: Quiz Game (after ch15 for functions, ch13 for dicts) ──
  {
    id: "python-ch-proj-quiz-1",
    courseId: "python",
    title: "Quiz Game: Question Bank",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Quiz Game\n\nCreate a multiple-choice quiz game! You'll store questions in a list of dicts, ask the user each question, track their score, and show results." },
      { type: "code", language: "python", caption: "Question bank as a list of dicts:", content: 'questions = [\n    {\n        "q": "What is the capital of France?",\n        "options": ["London", "Paris", "Berlin", "Madrid"],\n        "answer": "Paris"\n    },\n    {\n        "q": "What is 2 + 2?",\n        "options": ["3", "4", "5", "6"],\n        "answer": "4"\n    },\n]\n\nprint(questions[0]["q"])\nfor i, opt in enumerate(questions[0]["options"], 1):\n    print(f"{i}. {opt}")' },
      { type: "exercise", id: "py-proj-quiz-ex1", title: "Build a Question Bank", description: "Create a list of at least 3 quiz questions as dicts.", instructions: ["Create a list of dicts", "Each dict has: q, options (list), answer", "Include at least 3 questions", "Print one question and its options"], code: '# Quiz Game - Question Bank\nquestions = [\n    # Your questions here\n]\n\nprint(questions[0]["q"])\nfor i, opt in enumerate(questions[0]["options"], 1):\n    print(f"{i}. {opt}")', correctOutput: "What is the capital of France?\n1. London\n2. Paris\n3. Berlin\n4. Madrid", hint: "Each question is a dict with keys: 'q', 'options', 'answer'." },
      { type: "key-points", points: ["A list of dicts is a natural way to store structured data", "enumeration with start=1 makes human-friendly option numbers", "Dict keys ('q', 'options', 'answer') are a consistent data contract"] },
    ],
    examPool: [
      { id: "py-proj-quiz-q1", type: "multiple-choice", difficulty: "easy", question: "How do you access the 'q' key of the first question in a list of dicts?", options: [{ id: "a", text: "questions[0]['q']" }, { id: "b", text: "questions['q'][0]" }], correctAnswer: "a", explanation: "questions[0] gets the first dict, then ['q'] accesses its 'q' key." },
    ],
    xpReward: 60,
    estimatedMinutes: 25,
    prerequisites: ["python-ch13"],
    keyPoints: ["A list of dicts is a natural way to store structured data", "Enumeration with start=1 makes human-friendly option numbers", "Dict keys are a consistent data contract"],
  },
  {
    id: "python-ch-proj-quiz-2",
    courseId: "python",
    title: "Quiz Game: Scoring & Feedback",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Add Scoring and Feedback\n\nNow let's write the quiz engine. Ask each question, check the answer, and show the score at the end." },
      { type: "code", language: "python", caption: "Quiz engine:", content: 'questions = [...]  # Your question bank\nscore = 0\n\nfor i, q in enumerate(questions, 1):\n    print(f"\\nQ{i}: {q[\'q\']}")\n    for j, opt in enumerate(q["options"], 1):\n        print(f"  {j}. {opt}")\n    \n    answer = input("Your answer: ")\n    if q["options"][int(answer) - 1] == q["answer"]:\n        print("  ✓ Correct!")\n        score += 1\n    else:\n        print(f"  ✗ Wrong! The answer was: {q[\'answer\']}")\n\nprint(f"\\nFinal score: {score}/{len(questions)}")' },
      { type: "exercise", id: "py-proj-quiz-ex2", title: "Quiz Engine", description: "Write the quiz loop that asks questions and scores answers.", instructions: ["Loop through all questions", "Display question and numbered options", "Get user's answer by number", "Check if correct, give feedback", "Show final score"], code: '# Quiz Engine\nquestions = [\n    {"q": "What is the capital of France?", "options": ["London", "Paris", "Berlin", "Madrid"], "answer": "Paris"},\n    {"q": "What is 2 + 2?", "options": ["3", "4", "5", "6"], "answer": "4"},\n]\n\nscore = 0\nfor i, q in enumerate(questions, 1):\n    print(f"\\nQ{i}: {q[\'q\']}")\n    for j, opt in enumerate(q["options"], 1):\n        print(f"  {j}. {opt}")\n    answer = input("Your answer (number): ")\n    # Your code here\n\nprint(f"\\nFinal score: {score}/{len(questions)}")', correctOutput: "\nQ1: What is the capital of France?\n  1. London\n  2. Paris\n  3. Berlin\n  4. Madrid\nYour answer (number): 2\n  ✓ Correct!\n\nQ2: What is 2 + 2?\n  1. 3\n  2. 4\n  3. 5\n  4. 6\nYour answer (number): 2\n  ✓ Correct!\n\nFinal score: 2/2", hint: "Use q['options'][int(answer) - 1] to get the selected option text for comparison." },
      { type: "key-points", points: ["enumerate() with two levels: outer for questions, inner for options", "Input validation: convert string answer to int, subtract 1 for 0-based index", "Score counter increments on each correct answer"] },
    ],
    examPool: [
      { id: "py-proj-quiz-q2", type: "multiple-choice", difficulty: "medium", question: "If the user enters '3' and options are 0-indexed, which option is selected?", options: [{ id: "a", text: "options[3]" }, { id: "b", text: "options[2]" }], correctAnswer: "b", explanation: "The user sees options numbered 1-N. Subtract 1 to convert to 0-indexed list access." },
    ],
    xpReward: 70,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-quiz-1"],
    keyPoints: ["enumerate() with two levels: outer for questions, inner for options", "Input validation: convert string answer to int, subtract 1 for 0-based index", "Score counter increments on each correct answer"],
  },
  {
    id: "python-ch-proj-quiz-3",
    courseId: "python",
    title: "Quiz Game: Randomization",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Randomize Question Order\n\nUse random.shuffle() to change the question order each game. This makes the quiz more interesting and prevents memorization." },
      { type: "code", language: "python", caption: "Shuffling questions:", content: 'import random\n\nquestions = [...]  # Your question bank\nrandom.shuffle(questions)  # Shuffle in-place\n\n# Now run the quiz as before' },
      { type: "callout", style: "warning", content: "**random.shuffle() modifies the list in-place.** It doesn't return a new list. If you want to keep the original, copy it first: `shuffled = questions.copy(); random.shuffle(shuffled)`." },
      { type: "exercise", id: "py-proj-quiz-ex3", title: "Complete Quiz Game", description: "Add randomization to your quiz game.", instructions: ["Import random", "Shuffle questions with random.shuffle()", "Run the quiz with shuffled order", "Show final percentage score"], code: '# Complete Quiz Game\nimport random\n\nquestions = [\n    {"q": "What is the capital of France?", "options": ["London", "Paris", "Berlin", "Madrid"], "answer": "Paris"},\n    {"q": "What is 2 + 2?", "options": ["3", "4", "5", "6"], "answer": "4"},\n    {"q": "What color is the sky on a clear day?", "options": ["Red", "Green", "Blue", "Yellow"], "answer": "Blue"},\n]\n\n# Your code here\n', correctOutput: "\nQ1: What color is the sky on a clear day?\n  1. Red\n  2. Green\n  3. Blue\n  4. Yellow\nYour answer (number): 3\n  ✓ Correct!\n\n...\n\nFinal score: 3/3 (100%)", hint: "Call random.shuffle(questions) before the loop. Use f\"...({score/len(questions)*100:.0f}%)\" for percentage." },
      { type: "key-points", points: ["random.shuffle() randomizes a list in-place", "Copy the list with .copy() if you need to preserve the original", "Percentage score = (correct / total) * 100"] },
    ],
    examPool: [
      { id: "py-proj-quiz-q3", type: "true-false", difficulty: "medium", question: "random.shuffle(my_list) returns a new shuffled list.", correctAnswer: false, explanation: "random.shuffle() shuffles the list in-place and returns None. It modifies the original list." },
    ],
    xpReward: 75,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-quiz-2"],
    keyPoints: ["random.shuffle() randomizes a list in-place", "Copy the list with .copy() if you need to preserve the original", "Percentage score = (correct / total) * 100"],
  },

  // ── Project 10: Contact Book (after ch24 for classes, ch28 for file I/O) ──
  {
    id: "python-ch-proj-contacts-1",
    courseId: "python",
    title: "Contact Book: Contact Class",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Contact Book\n\nA Contact Book lets you add, view, search, edit, and delete contacts. You'll use classes to model contacts and JSON for persistence." },
      { type: "code", language: "python", caption: "The Contact class:", content: 'class Contact:\n    def __init__(self, name, phone, email):\n        self.name = name\n        self.phone = phone\n        self.email = email\n    \n    def __str__(self):\n        return f"{self.name} | {self.phone} | {self.email}"\n\n# Create a contact\nc = Contact("Alice Smith", "555-0123", "alice@email.com")\nprint(c)' },
      { type: "exercise", id: "py-proj-contacts-ex1", title: "Define the Contact Class", description: "Create a Contact class with name, phone, and email.", instructions: ["Define __init__ with name, phone, email", "Define __str__ for display", "Create a contact and print it"], code: '# Contact Book - Contact Class\nclass Contact:\n    def __init__(self, name, phone, email):\n        pass  # Your code here\n    \n    def __str__(self):\n        pass  # Your code here\n\n# Test\nc = Contact("Alice Smith", "555-0123", "alice@email.com")\nprint(c)', correctOutput: "Alice Smith | 555-0123 | alice@email.com", hint: "__str__ should return f\"{self.name} | {self.phone} | {self.email}\"" },
      { type: "key-points", points: ["A class defines a blueprint for objects", "__init__() initializes object attributes", "__str__() controls how the object appears when printed"] },
    ],
    examPool: [
      { id: "py-proj-contacts-q1", type: "multiple-choice", difficulty: "easy", question: "What method is called when you print() an object?", options: [{ id: "a", text: "__init__" }, { id: "b", text: "__str__" }], correctAnswer: "b", explanation: "print() calls the __str__ method to get the string representation of the object." },
    ],
    xpReward: 65,
    estimatedMinutes: 25,
    prerequisites: ["python-ch24"],
    keyPoints: ["A class defines a blueprint for objects", "__init__() initializes object attributes", "__str__() controls how the object appears when printed"],
  },
  {
    id: "python-ch-proj-contacts-2",
    courseId: "python",
    title: "Contact Book: CRUD Operations",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Add, List, and Search\n\nImplement the core operations: add a contact, list all contacts, and search by name." },
      { type: "code", language: "python", caption: "Contact book with add and list:", content: 'contacts = []\n\ndef add_contact(name, phone, email):\n    contacts.append(Contact(name, phone, email))\n    print(f"Added {name}")\n\ndef list_contacts():\n    if not contacts:\n        print("No contacts yet.")\n        return\n    for i, c in enumerate(contacts, 1):\n        print(f"{i}. {c}")\n\ndef search(name):\n    results = [c for c in contacts if name.lower() in c.name.lower()]\n    return results' },
      { type: "exercise", id: "py-proj-contacts-ex2", title: "Add, List, Search", description: "Implement the core contact book functions.", instructions: ["Create add_contact() that appends to a list", "Create list_contacts() that prints all", "Create search() that finds by name (case-insensitive)", "Test with a few contacts"], code: '# Contact Book - CRUD\nclass Contact:\n    def __init__(self, name, phone, email):\n        self.name = name\n        self.phone = phone\n        self.email = email\n    def __str__(self):\n        return f"{self.name} | {self.phone} | {self.email}"\n\ncontacts = []\n\ndef add_contact(name, phone, email):\n    # Your code here\n    pass\n\ndef list_contacts():\n    # Your code here\n    pass\n\ndef search(name):\n    # Your code here\n    pass\n\n# Test\nadd_contact("Alice", "555-0123", "alice@email.com")\nadd_contact("Bob", "555-0456", "bob@email.com")\nlist_contacts()\nprint("Search for Bob:")\nfor c in search("bob"):\n    print(f"  Found: {c}")', correctOutput: "Added Alice\nAdded Bob\n1. Alice | 555-0123 | alice@email.com\n2. Bob | 555-0456 | bob@email.com\nSearch for Bob:\n  Found: Bob | 555-0456 | bob@email.com", hint: "For case-insensitive search: if name.lower() in c.name.lower()" },
      { type: "key-points", points: ["List of objects stores all contacts in memory", "List comprehension with condition filters search results", "Case-insensitive search uses .lower() on both sides"] },
    ],
    examPool: [
      { id: "py-proj-contacts-q2", type: "multiple-choice", difficulty: "medium", question: "What does [c for c in contacts if name in c.name] return?", options: [{ id: "a", text: "A list of matching contacts" }, { id: "b", text: "The first matching contact" }], correctAnswer: "a", explanation: "List comprehension with if filter returns a list of all items matching the condition." },
    ],
    xpReward: 75,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-contacts-1"],
    keyPoints: ["List of objects stores all contacts in memory", "List comprehension with condition filters search results", "Case-insensitive search uses .lower() on both sides"],
  },
  {
    id: "python-ch-proj-contacts-3",
    courseId: "python",
    title: "Contact Book: JSON Persistence",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Save and Load Contacts\n\nUse JSON to save contacts to a file so they persist between program runs." },
      { type: "code", language: "python", caption: "JSON persistence:", content: 'import json\n\ndef save_contacts(filename="contacts.json"):\n    data = [{"name": c.name, "phone": c.phone, "email": c.email} for c in contacts]\n    with open(filename, "w") as f:\n        json.dump(data, f, indent=2)\n\ndef load_contacts(filename="contacts.json"):\n    try:\n        with open(filename, "r") as f:\n            data = json.load(f)\n        for item in data:\n            contacts.append(Contact(item["name"], item["phone"], item["email"]))\n    except FileNotFoundError:\n        print("No saved contacts found.")' },
      { type: "exercise", id: "py-proj-contacts-ex3", title: "Persistent Contact Book", description: "Add save and load functionality.", instructions: ["Convert contacts to list of dicts for JSON", "Save with json.dump()", "Load with json.load()", "Handle FileNotFoundError gracefully"], code: '# Contact Book with Persistence\nimport json\n\nclass Contact:\n    def __init__(self, name, phone, email):\n        self.name = name\n        self.phone = phone\n        self.email = email\n    def __str__(self):\n        return f"{self.name} | {self.phone} | {self.email}"\n\ncontacts = []\n\ndef save_contacts():\n    pass  # Your code here\n\ndef load_contacts():\n    pass  # Your code here\n\n# Test\nload_contacts()\ncontacts.append(Contact("Test", "555-0000", "test@test.com"))\nlist_contacts()\nsave_contacts()', correctOutput: "1. Test | 555-0000 | test@test.com", hint: "Use [{\"name\": c.name, ...} for c in contacts] for conversion." },
      { type: "key-points", points: ["JSON is a text format for structured data — perfect for simple persistence", "List comprehension converts objects to dicts for JSON serialization", "try/except handles the case where no saved file exists yet"] },
    ],
    examPool: [
      { id: "py-proj-contacts-q3", type: "true-false", difficulty: "medium", question: "json.dump() writes Python objects directly to a file as JSON.", correctAnswer: true, explanation: "json.dump(data, file) serializes Python objects (dicts, lists) as JSON and writes to the file." },
    ],
    xpReward: 80,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-contacts-2"],
    keyPoints: ["JSON is a text format for structured data", "List comprehension converts objects to dicts for JSON", "try/except handles missing save files gracefully"],
  },

  // ── Project 11: To-Do List (after ch28 for file I/O, ch15 functions) ──
  {
    id: "python-ch-proj-todo-1",
    courseId: "python",
    title: "To-Do List: Task Model",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a To-Do List Manager\n\nA persistent to-do list where you can add tasks, mark them complete, and view pending items." },
      { type: "code", language: "python", caption: "Task model:", content: 'class Task:\n    def __init__(self, description):\n        self.description = description\n        self.completed = False\n    \n    def __str__(self):\n        status = "✓" if self.completed else " " \n        return f"[{status}] {self.description}"\n\nclass TodoList:\n    def __init__(self):\n        self.tasks = []\n    \n    def add(self, description):\n        self.tasks.append(Task(description))\n    \n    def display(self):\n        if not self.tasks:\n            print("No tasks yet!")\n        for i, t in enumerate(self.tasks, 1):\n            print(f"{i}. {t}")' },
      { type: "exercise", id: "py-proj-todo-ex1", title: "Basic To-Do List", description: "Create the Task and TodoList classes.", instructions: ["Create Task class with description and completed", "TodoList has add() and display() methods", "Test by adding a few tasks", "Display the list"], code: '# To-Do List\nclass Task:\n    pass  # Your code here\n\nclass TodoList:\n    def __init__(self):\n        self.tasks = []\n    \n    def add(self, description):\n        pass  # Your code here\n    \n    def display(self):\n        pass  # Your code here\n\ntodo = TodoList()\ntodo.add("Learn Python")\ntodo.add("Build a project")\ntodo.display()', correctOutput: "1. [ ] Learn Python\n2. [ ] Build a project", hint: "Task.__init__ sets self.description and self.completed = False." },
      { type: "key-points", points: ["Classes model real-world entities (Task, TodoList)", "A status flag (completed) tracks boolean state", "Display formatting uses f-strings with conditional expressions"] },
    ],
    examPool: [
      { id: "py-proj-todo-q1", type: "multiple-choice", difficulty: "easy", question: "What does f\"[{'✓' if done else ' '}]\" produce when done is False?", options: [{ id: "a", text: "\"[ ]\"" }, { id: "b", text: "\"[✓]\"" }], correctAnswer: "a", explanation: "The conditional expression evaluates to ' ' when done is False, so the result is '[ ]'." },
    ],
    xpReward: 60,
    estimatedMinutes: 25,
    prerequisites: ["python-ch15"],
    keyPoints: ["Classes model real-world entities (Task, TodoList)", "A status flag (completed) tracks boolean state", "Display formatting uses f-strings with conditional expressions"],
  },
  {
    id: "python-ch-proj-todo-2",
    courseId: "python",
    title: "To-Do List: Complete & Delete",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Mark Complete and Delete\n\nAdd complete() and delete() methods to manage tasks." },
      { type: "code", language: "python", caption: "Managing tasks:", content: 'def complete(self, index):\n    if 0 <= index < len(self.tasks):\n        self.tasks[index].completed = True\n\ndef delete(self, index):\n    if 0 <= index < len(self.tasks):\n        removed = self.tasks.pop(index)\n        print(f"Removed: {removed.description}")' },
      { type: "exercise", id: "py-proj-todo-ex2", title: "Complete and Delete Tasks", description: "Add complete() and delete() methods to TodoList.", instructions: ["Add complete(index) that marks a task done", "Add delete(index) that removes a task", "Test by completing and deleting tasks", "Handle invalid indices gracefully"], code: '# To-Do List - Complete & Delete\nclass Task:\n    def __init__(self, description):\n        self.description = description\n        self.completed = False\n    def __str__(self):\n        status = "✓" if self.completed else " "\n        return f"[{status}] {self.description}"\n\nclass TodoList:\n    def __init__(self):\n        self.tasks = []\n    def add(self, description):\n        self.tasks.append(Task(description))\n    def display(self):\n        for i, t in enumerate(self.tasks, 1):\n            print(f"{i}. {t}")\n    def complete(self, index):\n        pass  # Your code here\n    def delete(self, index):\n        pass  # Your code here\n\ntodo = TodoList()\ntodo.add("Task 1")\ntodo.add("Task 2")\ntodo.add("Task 3")\ntodo.complete(1)\ntodo.delete(2)\ntodo.display()', correctOutput: "1. [✓] Task 1\n2. [ ] Task 2", hint: "Check 0 <= index < len(self.tasks). For complete, set completed = True. For delete, use .pop(index)." },
      { type: "key-points", points: ["Boundary checking prevents index errors", "pop() removes and returns an element by index", "Boolean flag toggles completion state"] },
    ],
    examPool: [
      { id: "py-proj-todo-q2", type: "multiple-choice", difficulty: "easy", question: "What does list.pop(index) do?", options: [{ id: "a", text: "Removes and returns the element at that index" }, { id: "b", text: "Removes the element without returning it" }], correctAnswer: "a", explanation: "pop() removes the element at the given index and returns it. It's both a removal and retrieval operation." },
    ],
    xpReward: 65,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-todo-1"],
    keyPoints: ["Boundary checking prevents index errors", "pop() removes and returns an element by index", "Boolean flag toggles completion state"],
  },
  {
    id: "python-ch-proj-todo-3",
    courseId: "python",
    title: "To-Do List: File Persistence",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Save to File\n\nPersist your to-do list to a text file so tasks survive between runs." },
      { type: "code", language: "python", caption: "Save and load:", content: 'def save(self, filename="todos.txt"):\n    with open(filename, "w") as f:\n        for t in self.tasks:\n            status = "1" if t.completed else "0"\n            f.write(f"{status}|{t.description}\\n")\n\ndef load(self, filename="todos.txt"):\n    try:\n        with open(filename, "r") as f:\n            for line in f:\n                status, desc = line.strip().split("|", 1)\n                task = Task(desc)\n                task.completed = (status == "1")\n                self.tasks.append(task)\n    except FileNotFoundError:\n        pass' },
      { type: "exercise", id: "py-proj-todo-ex3", title: "Persistent To-Do List", description: "Add save and load functionality.", instructions: ["Save tasks as 'status|description' per line", "Load and parse each line", "Handle FileNotFoundError gracefully"], code: '# Persistent To-Do List\nclass Task:\n    def __init__(self, description):\n        self.description = description\n        self.completed = False\n\nclass TodoList:\n    def __init__(self):\n        self.tasks = []\n    def add(self, description):\n        self.tasks.append(Task(description))\n    def save(self, filename="todos.txt"):\n        pass  # Your code here\n    def load(self, filename="todos.txt"):\n        pass  # Your code here\n\ntodo = TodoList()\ntodo.add("Persistent task")\ntodo.add("Another task")\ntodo.save()\nprint("Saved!")\n\n# Verify by loading\ntodo2 = TodoList()\ntodo2.load()\nfor t in todo2.tasks:\n    print(t)', correctOutput: "Saved!\n[ ] Persistent task\n[ ] Another task", hint: "Use '|' as delimiter. .strip() removes the newline, .split('|', 1) splits on first pipe." },
      { type: "key-points", points: ["Custom text format (status|description) is simple to parse", "strip() removes whitespace/newlines from line endings", "split('|', 1) splits only on the first delimiter"] },
    ],
    examPool: [
      { id: "py-proj-todo-q3", type: "multiple-choice", difficulty: "medium", question: "What does \"1|Buy milk\".split(\"|\", 1) return?", options: [{ id: "a", text: "[\"1\", \"Buy milk\"]" }, { id: "b", text: "[\"1\", \"Buy\", \"milk\"]" }], correctAnswer: "a", explanation: "split('|', 1) splits only on the first occurrence, returning a list with 2 elements." },
    ],
    xpReward: 70,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-todo-2"],
    keyPoints: ["Custom text format (status|description) is simple to parse", "strip() removes whitespace/newlines from line endings", "split('|', 1) splits only on the first delimiter"],
  },

  // ── Project 12: Hangman (after ch10 for lists, ch7 strings, ch20 random) ──
  {
    id: "python-ch-proj-hangman-1",
    courseId: "python",
    title: "Hangman: Word Selection",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build Hangman\n\nBuild the classic Hangman word-guessing game. The computer picks a random word, and the player guesses letters one at a time." },
      { type: "code", language: "python", caption: "Word selection and display:", content: 'import random\n\nwords = ["python", "programming", "computer", "algorithm", "database"]\nsecret = random.choice(words)\n\nguessed = []\nblanks = ["_" for _ in secret]\nprint(" ".join(blanks))\n\n# After guessing "a"\nguessed.append("a")\nfor i, letter in enumerate(secret):\n    if letter in guessed:\n        blanks[i] = letter\nprint(" ".join(blanks))' },
      { type: "exercise", id: "py-proj-hangman-ex1", title: "Setup the Game", description: "Pick a random word and display blanks.", instructions: ["Create a list of words", "Pick one randomly", "Display underscores for each letter", "Allow the user to guess a letter", "Reveal correctly guessed letters"], code: '# Hangman - Setup\nimport random\n\nwords = ["python", "programming", "code", "algorithm"]\nsecret = random.choice(words)\nguessed = []\nblanks = ["_" for _ in secret]\n\nprint(" ".join(blanks))\nguess = input("Guess a letter: ").lower()\nguessed.append(guess)\n\n# Update blanks\nfor i, letter in enumerate(secret):\n    if letter in guessed:\n        blanks[i] = letter\n\nprint(" ".join(blanks))', correctOutput: "_ _ _ _\nGuess a letter: a\n_ a _ _", hint: "Use list comprehension [\"_\" for _ in secret] for blanks. Loop through secret with enumerate." },
      { type: "key-points", points: ["List comprehension creates the blanks array", "enumerate() gives index and letter for comparison", "A list of guessed letters tracks all attempts"] },
    ],
    examPool: [
      { id: "py-proj-hangman-q1", type: "multiple-choice", difficulty: "easy", question: "What does [\"_\" for _ in \"cat\"] produce?", options: [{ id: "a", text: "[\"_\", \"_\", \"_\"]" }, { id: "b", text: "\"_ _ _\"" }], correctAnswer: "a", explanation: "The comprehension runs once per character in 'cat', producing a list of 3 underscore strings." },
    ],
    xpReward: 65,
    estimatedMinutes: 30,
    prerequisites: ["python-ch10"],
    keyPoints: ["List comprehension creates the blanks array", "enumerate() gives index and letter for comparison", "A list of guessed letters tracks all attempts"],
  },
  {
    id: "python-ch-proj-hangman-2",
    courseId: "python",
    title: "Hangman: Game Loop",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## The Game Loop\n\nImplement the main game loop: keep guessing until the word is complete or the player runs out of attempts." },
      { type: "code", language: "python", caption: "Hangman game loop:", content: 'max_attempts = 6\nattempts = 0\n\nwhile attempts < max_attempts and "_" in blanks:\n    print("\\nWord:", " ".join(blanks))\n    guess = input("Guess a letter: ").lower()\n    \n    if guess in guessed:\n        print("Already guessed!")\n        continue\n    \n    guessed.append(guess)\n    \n    if guess not in secret:\n        attempts += 1\n        print(f"Wrong! {max_attempts - attempts} attempts left")\n    \n    # Update blanks\n    for i, letter in enumerate(secret):\n        if letter == guess:\n            blanks[i] = guess\n\nif "_" not in blanks:\n    print(f"\\nYou win! The word was: {secret}")\nelse:\n    print(f"\\nGame over! The word was: {secret}")' },
      { type: "exercise", id: "py-proj-hangman-ex2", title: "Complete Game Loop", description: "Build the Hangman game loop.", instructions: ["Loop while attempts < 6 and word not complete", "Track guessed letters (no duplicates)", "Decrease attempts on wrong guesses", "Show win/lose message at the end"], code: '# Hangman - Game Loop\nimport random\n\nwords = ["python", "programming", "code", "algorithm"]\nsecret = random.choice(words)\nguessed = []\nblanks = ["_" for _ in secret]\nattempts = 0\nmax_attempts = 6\n\n# Your game loop here\n', correctOutput: "\nWord: _ _ _ _\nGuess a letter: a\n\nWord: _ a _ _\nGuess a letter: z\nWrong! 5 attempts left\n\nWord: _ a _ _\nGuess a letter: c\n...", hint: "Use while attempts < max_attempts and \"_\" in blanks." },
      { type: "key-points", points: ["Compound loop condition checks both attempts and progress", "continue skips to the next iteration for duplicate guesses", "The game has two end states: win (all letters found) or lose (out of attempts)"] },
    ],
    examPool: [
      { id: "py-proj-hangman-q2", type: "true-false", difficulty: "medium", question: "The 'continue' statement skips the rest of the current iteration and goes to the next loop iteration.", correctAnswer: true, explanation: "continue immediately jumps to the next iteration of the loop, skipping any remaining code in the current iteration." },
    ],
    xpReward: 75,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-hangman-1"],
    keyPoints: ["Compound loop condition checks both attempts and progress", "continue skips to the next iteration for duplicate guesses", "The game has two end states: win (all letters found) or lose (out of attempts)"],
  },
  {
    id: "python-ch-proj-hangman-3",
    courseId: "python",
    title: "Hangman: Visual Display",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Add Visual Feedback\n\nAdd a visual hangman display that shows progress — each wrong guess adds a body part." },
      { type: "code", language: "python", caption: "Hangman stages:", content: 'stages = [\n    """\n       -----\n       |   |\n           |\n           |\n           |\n           |\n    =========""",\n    """\n       -----\n       |   |\n       O   |\n           |\n           |\n           |\n    =========""",\n    # ... more stages ...\n    """\n       -----\n       |   |\n       O   |\n      /|\\\\  |\n      / \\\\  |\n           |\n    ========="""\n]\n\nprint(stages[attempts])' },
      { type: "exercise", id: "py-proj-hangman-ex3", title: "Complete Hangman", description: "Add the visual hangman display to the game.", instructions: ["Import the stages list (create at least 6 stages)", "Print stages[attempts] after each wrong guess", "Display the word, the hangman, and guessed letters"], code: '# Complete Hangman\nimport random\n\nstages = [\n    "  +---+\n      |   |\n          |\n          |\n          |\n          |\n    =========",\n    "  +---+\n      |   |\n      O   |\n          |\n          |\n          |\n    =========",\n    "  +---+\n      |   |\n      O   |\n      |   |\n          |\n          |\n    =========",\n    "  +---+\n      |   |\n      O   |\n     /|   |\n          |\n          |\n    =========",\n    "  +---+\n      |   |\n      O   |\n     /|\\\\  |\n          |\n          |\n    =========",\n    "  +---+\n      |   |\n      O   |\n     /|\\\\  |\n     / \\\\  |\n          |\n    =========",\n]\n\nwords = ["python", "programming", "code", "algorithm", "database"]\nsecret = random.choice(words)\nguessed = []\nblanks = ["_" for _ in secret]\nattempts = 0\nmax_attempts = 6\n\n# Your complete game here\n', correctOutput: "  +---+\n      |   |\n      O   |\n     /|\\\\  |\n     / \\\\  |\n          |\n    =========\nGame over! The word was: python", hint: "Print stages[attempts] before each guess prompt." },
      { type: "key-points", points: ["ASCII art creates visual feedback in the terminal", "The stages index maps directly to attempt count", "Multiple visual stages make the game more engaging"] },
    ],
    examPool: [
      { id: "py-proj-hangman-q3", type: "multiple-choice", difficulty: "medium", question: "If attempts = 2, which stage should be displayed?", options: [{ id: "a", text: "stages[2]" }, { id: "b", text: "stages[0]" }], correctAnswer: "a", explanation: "After 2 wrong attempts, stage index 2 (which shows the 3rd body part) should be displayed." },
    ],
    xpReward: 85,
    estimatedMinutes: 35,
    prerequisites: ["python-ch-proj-hangman-2"],
    keyPoints: ["ASCII art creates visual feedback in the terminal", "The stages index maps directly to attempt count", "Multiple visual stages make the game more engaging"],
  },

  // ── Project 13: Tic-Tac-Toe (after ch10 for lists, ch15 for functions) ──
  {
    id: "python-ch-proj-ttt-1",
    courseId: "python",
    title: "Tic-Tac-Toe: Board & Display",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build Tic-Tac-Toe\n\nCreate a two-player Tic-Tac-Toe game using a 2D list to represent the board." },
      { type: "code", language: "python", caption: "The game board:", content: 'board = [[" " for _ in range(3)] for _ in range(3)]\n\ndef display(board):\n    for i, row in enumerate(board):\n        print(" | ".join(row))\n        if i < 2:\n            print("-" * 9)' },
      { type: "exercise", id: "py-proj-ttt-ex1", title: "Create the Board", description: "Create a 3x3 board and display function.", instructions: ["Create a 3x3 board with list comprehensions", "Write display() that prints the board", "Test by placing X at center"], code: '# Tic-Tac-Toe - Board\nboard = [[" " for _ in range(3)] for _ in range(3)]\n\ndef display(board):\n    for i, row in enumerate(board):\n        print(" | ".join(row))\n        if i < 2:\n            print("-" * 9)\n\nboard[1][1] = "X"\ndisplay(board)', correctOutput: "  |   |  \n---------\n  | X |  \n---------\n  |   |  ", hint: "board[row][col] accesses a cell. Use nested lists." },
      { type: "key-points", points: ["A 2D list represents the board: board[row][col]", "List comprehension [[' ']*3 for _ in range(3)] creates rows", "join() combines list elements with a separator"] },
    ],
    examPool: [
      { id: "py-proj-ttt-q1", type: "multiple-choice", difficulty: "easy", question: "How do you access row 2, column 1 in a 2D list?", options: [{ id: "a", text: "board[1][0]" }, { id: "b", text: "board[2][1]" }], correctAnswer: "a", explanation: "Indices are 0-based. Row 2 is index 1, column 1 is index 0." },
    ],
    xpReward: 65,
    estimatedMinutes: 25,
    prerequisites: ["python-ch10"],
    keyPoints: ["A 2D list represents the board: board[row][col]", "List comprehension creates initial empty board", "join() combines list elements with a separator"],
  },
  {
    id: "python-ch-proj-ttt-2",
    courseId: "python",
    title: "Tic-Tac-Toe: Player Turns",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Player Turns and Validation\n\nPlayers take turns placing X or O. Validate moves: check that the cell is empty and coordinates are valid." },
      { type: "code", language: "python", caption: "Player move logic:", content: 'def make_move(board, row, col, player):\n    if row < 0 or row > 2 or col < 0 or col > 2:\n        return False\n    if board[row][col] != " ":\n        return False\n    board[row][col] = player\n    return True\n\ndef switch_player(current):\n    return "O" if current == "X" else "X"' },
      { type: "exercise", id: "py-proj-ttt-ex2", title: "Player Turns", description: "Implement player turns with move validation.", instructions: ["Write make_move() that validates and places", "Write switch_player() that alternates", "Loop until 9 moves or game over", "Get row/col input from the user"], code: '# Tic-Tac-Toe - Turns\nboard = [[" " for _ in range(3)] for _ in range(3)]\ncurrent = "X"\n\ndef display(board):\n    for i, row in enumerate(board):\n        print(" | ".join(row))\n        if i < 2: print("-" * 9)\n\ndef make_move(board, row, col, player):\n    pass  # Your code here\n\nfor _ in range(9):\n    display(board)\n    row = int(input(f"Player {current}, row (0-2): "))\n    col = int(input(f"Player {current}, col (0-2): "))\n    if make_move(board, row, col, current):\n        current = "O" if current == "X" else "X"\n    else:\n        print("Invalid move!")', correctOutput: "  |   |  \n---------\n  |   |  \n---------\n  |   |  \nPlayer X, row (0-2): 1\nPlayer X, col (0-2): 1", hint: "Check 0 <= row <= 2 and 0 <= col <= 2 and board[row][col] == ' '." },
      { type: "key-points", points: ["Input validation prevents invalid moves", "Alternating turns with a simple toggle function", "Range checking protects against index errors"] },
    ],
    examPool: [
      { id: "py-proj-ttt-q2", type: "true-false", difficulty: "easy", question: "A function that returns True on success and False on failure is a common pattern.", correctAnswer: true, explanation: "Boolean return values indicate success/failure — a common and clean pattern." },
    ],
    xpReward: 70,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-ttt-1"],
    keyPoints: ["Input validation prevents invalid moves", "Alternating turns with a simple toggle function", "Range checking protects against index errors"],
  },
  {
    id: "python-ch-proj-ttt-3",
    courseId: "python",
    title: "Tic-Tac-Toe: Win Detection",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Win Detection\n\nCheck rows, columns, and diagonals for a winning line. If all 9 moves pass without a winner, it's a draw." },
      { type: "code", language: "python", caption: "Win detection:", content: 'def check_win(board, player):\n    # Check rows and columns\n    for i in range(3):\n        if all(board[i][j] == player for j in range(3)):  # Row\n            return True\n        if all(board[j][i] == player for j in range(3)):  # Column\n            return True\n    # Diagonals\n    if all(board[i][i] == player for i in range(3)):\n        return True\n    if all(board[i][2-i] == player for i in range(3)):\n        return True\n    return False' },
      { type: "text", content: "## The `all()` Function\n\n`all()` returns True if every element in the iterable is True. Combined with a generator expression, it's perfect for checking winning conditions concisely." },
      { type: "exercise", id: "py-proj-ttt-ex3", title: "Complete Tic-Tac-Toe", description: "Add win detection to complete the game.", instructions: ["Write check_win() for rows, cols, and diagonals", "Check for a winner after each move", "Announce the winner or draw", "Offer play again option"], code: '# Complete Tic-Tac-Toe\nboard = [[" " for _ in range(3)] for _ in range(3)]\ncurrent = "X"\n\ndef display(board):\n    for i, row in enumerate(board):\n        print(" | ".join(row))\n        if i < 2: print("-" * 9)\n\ndef make_move(board, row, col, player):\n    if 0 <= row <= 2 and 0 <= col <= 2 and board[row][col] == " ":\n        board[row][col] = player\n        return True\n    return False\n\ndef check_win(board, player):\n    # Your code here\n    pass\n\nfor move in range(9):\n    display(board)\n    row = int(input(f"Player {current} row: "))\n    col = int(input(f"Player {current} col: "))\n    if make_move(board, row, col, current):\n        if check_win(board, current):\n            display(board)\n            print(f"Player {current} wins!")\n            break\n        current = "O" if current == "X" else "X"\n    else:\n        print("Invalid move")\nelse:\n    print("It\'s a draw!")', correctOutput: "Player X wins!", hint: "Check all(board[i][j] == player for j in range(3)) for each row i." },
      { type: "key-points", points: ["all() with generator checks every element in one line", "Win detection needs 4 directions: rows, columns, 2 diagonals", "for...else runs the else block only when no break occurred"] },
    ],
    examPool: [
      { id: "py-proj-ttt-q3", type: "multiple-choice", difficulty: "medium", question: "What does all(board[i][i] == player for i in range(3)) check?", options: [{ id: "a", text: "The main diagonal (top-left to bottom-right)" }, { id: "b", text: "The first column" }], correctAnswer: "a", explanation: "board[i][i] for i in 0,1,2 checks positions (0,0), (1,1), (2,2) — the main diagonal." },
    ],
    xpReward: 80,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-ttt-2"],
    keyPoints: ["all() with generator checks every element in one line", "Win detection needs 4 directions: rows, columns, 2 diagonals", "for...else runs the else block only when no break occurred"],
  },

  // ── Project 14: Markdown→HTML Converter (after ch37 for regex) ──
  {
    id: "python-ch-proj-md-1",
    courseId: "python",
    title: "Markdown→HTML: Headings & Bold",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Markdown to HTML Converter\n\nConvert Markdown text to HTML using regular expressions. Start with headings (`#` → `<h1>`) and bold (`**text**` → `<strong>`)." },
      { type: "code", language: "python", caption: "Regex-based markdown conversion:", content: 'import re\n\ndef convert_heading(line):\n    match = re.match(r"^(#{1,6})\\s+(.+)$", line)\n    if match:\n        level = len(match.group(1))\n        content = match.group(2)\n        return f"<h{level}>{content}</h{level}>"\n    return line\n\ndef convert_bold(text):\n    return re.sub(r"\\*\\*(.+?)\\*\\*", r"<strong>\\1</strong>", text)' },
      { type: "exercise", id: "py-proj-md-ex1", title: "Convert Headings and Bold", description: "Write functions to convert Markdown headings and bold text.", instructions: ["Write convert_heading() using re.match", "Write convert_bold() using re.sub", "Test on a sample markdown line"], code: '# Markdown to HTML\nimport re\n\ndef convert_heading(line):\n    # Your code here\n    pass\n\ndef convert_bold(text):\n    # Your code here\n    pass\n\nline = "## Hello **World**"\nline = convert_heading(line)\nline = convert_bold(line)\nprint(line)', correctOutput: "<h2>Hello <strong>World</strong></h2>", hint: "Use re.match(r'^(#{1,6})\\s+(.+)$', line) for headings. re.sub(r'\\*\\*(.+?)\\*\\*', ...) for bold." },
      { type: "key-points", points: ["re.match() checks if a string matches at the beginning", "re.sub() replaces all pattern matches in a string", "Capture groups (...) let you extract and reuse matched content"] },
    ],
    examPool: [
      { id: "py-proj-md-q1", type: "multiple-choice", difficulty: "medium", question: "What does r\"^(#{1,6})\\s+(.+)$\" match?", options: [{ id: "a", text: "Lines starting with 1-6 hash marks followed by content" }, { id: "b", text: "Any line containing a # symbol" }], correctAnswer: "a", explanation: "^ matches start, #{1,6} matches 1-6 hashes, \\s+ matches space, (.+)$ captures content." },
    ],
    xpReward: 70,
    estimatedMinutes: 30,
    prerequisites: ["python-ch37"],
    keyPoints: ["re.match() checks if a string matches at the beginning", "re.sub() replaces all pattern matches in a string", "Capture groups (...) let you extract and reuse matched content"],
  },
  {
    id: "python-ch-proj-md-2",
    courseId: "python",
    title: "Markdown→HTML: Full Converter",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Full Markdown Parser\n\nAdd support for italic, links, code blocks, and lists. Process the file line by line." },
      { type: "code", language: "python", caption: "Complete conversion pipeline:", content: 'def convert_italic(text):\n    return re.sub(r"\\*(.+?)\\*", r"<em>\\1</em>", text)\n\ndef convert_links(text):\n    return re.sub(r"\\[(.+?)\\]\\((.+?)\\)", r\'<a href="\\2">\\1</a>\', text)\n\ndef convert_line(line):\n    line = convert_heading(line)\n    line = convert_bold(line)\n    line = convert_italic(line)\n    line = convert_links(line)\n    return line' },
      { type: "exercise", id: "py-proj-md-ex2", title: "Full Markdown Converter", description: "Complete the converter with italic, links, and file processing.", instructions: ["Add italic (*text*) and link [text](url) conversion", "Read a .md file line by line", "Convert each line", "Write output to .html file"], code: '# Complete Markdown Converter\nimport re\n\ndef convert_markdown(text):\n    # Your code here\n    pass\n\nwith open("input.md", "r") as f:\n    markdown = f.read()\n\nhtml = convert_markdown(markdown)\nwith open("output.html", "w") as f:\n    f.write(html)\n\nprint("Converted!")', correctOutput: "Converted!", hint: "For links: re.sub(r'\\[(.+?)\\]\\((.+?)\\)', '<a href=\"\\\\2\">\\\\1</a>', text)" },
      { type: "key-points", points: ["Multiple regex passes in sequence build full conversion", "File reading/writing creates a complete tool", "Order matters: bold before italic (bold uses **, italic uses *)"] },
    ],
    examPool: [
      { id: "py-proj-md-q2", type: "multiple-choice", difficulty: "medium", question: "Why should bold conversion run before italic?", options: [{ id: "a", text: "Because bold uses ** which would be partially matched by * in italic" }, { id: "b", text: "There is no specific reason" }], correctAnswer: "a", explanation: "If italic runs first, **bold** becomes <em>*bold*</em> instead of <strong>bold</strong>." },
    ],
    xpReward: 80,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-md-1"],
    keyPoints: ["Multiple regex passes in sequence build full conversion", "File reading/writing creates a complete tool", "Order matters: bold before italic"],
  },

  // ── Project 15: Weather CLI (after ch37 for requests/urllib, ch27 for errors) ──
  {
    id: "python-ch-proj-weather-1",
    courseId: "python",
    title: "Weather CLI: API Basics",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Weather CLI\n\nFetch weather data from a public API. You'll use the `requests` library to make HTTP calls and parse JSON responses.\n\n**Note:** This project uses the `requests` library. Install it with `pip install requests`." },
      { type: "code", language: "python", caption: "Fetching weather data:", content: 'import requests\n\n# Free weather API (no key required)\nurl = "https://wttr.in/London?format=j1"\nresponse = requests.get(url)\ndata = response.json()\n\ncurrent = data["current_condition"][0]\nprint(f"Temperature: {current[\'temp_C\']}°C")\nprint(f"Condition: {current[\'weatherDesc\'][0][\'value\']}")' },
      { type: "callout", style: "warning", content: "**The wttr.in API is free and doesn't require an API key.** In production, you'd use OpenWeatherMap or WeatherAPI with a key stored in an environment variable." },
      { type: "exercise", id: "py-proj-weather-ex1", title: "Fetch Weather Data", description: "Fetch and display weather for a city.", instructions: ["Use requests.get() to fetch from wttr.in", "Parse JSON with .json()", "Extract temp_C and weatherDesc", "Handle network errors gracefully"], code: '# Weather CLI\nimport requests\n\ncity = input("Enter city: ")\ntry:\n    url = f"https://wttr.in/{city}?format=j1"\n    response = requests.get(url, timeout=10)\n    data = response.json()\n    current = data["current_condition"][0]\n    print(f"{city}: {current[\'temp_C\']}°C, {current[\'weatherDesc\'][0][\'value\']}")\nexcept Exception as e:\n    print(f"Error: {e}")', correctOutput: "Enter city: London\nLondon: 15°C, Partly cloudy", hint: "Use try/except to handle network errors. The JSON has nested keys: data['current_condition'][0]." },
      { type: "key-points", points: ["requests.get() sends an HTTP GET request", ".json() parses the response body as JSON", "APIs return structured data — navigate nested dicts to find values"] },
    ],
    examPool: [
      { id: "py-proj-weather-q1", type: "multiple-choice", difficulty: "medium", question: "What does response.json() do?", options: [{ id: "a", text: "Returns the response body as a Python dict/list" }, { id: "b", text: "Returns the raw JSON string" }], correctAnswer: "a", explanation: ".json() parses the response body from JSON format into Python data structures." },
    ],
    xpReward: 75,
    estimatedMinutes: 30,
    prerequisites: ["python-ch27"],
    keyPoints: ["requests.get() sends an HTTP GET request", ".json() parses the response body as JSON", "APIs return structured data — navigate nested dicts"],
  },
  {
    id: "python-ch-proj-weather-2",
    courseId: "python",
    title: "Weather CLI: Forecast Display",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## 3-Day Forecast\n\nExtend your weather app to show a 3-day forecast. Parse the `weather` array from the API response." },
      { type: "code", language: "python", caption: "Forecast parsing:", content: 'def show_forecast(data):\n    forecast = data["weather"]\n    print("\\n3-Day Forecast:")\n    for day in forecast:\n        date = day["date"]\n        max_temp = day["maxtempC"]\n        min_temp = day["mintempC"]\n        desc = day["hourly"][0]["weatherDesc"][0]["value"]\n        print(f"{date}: {min_temp}-{max_temp}°C, {desc}")' },
      { type: "exercise", id: "py-proj-weather-ex2", title: "Show Forecast", description: "Add a 3-day forecast display.", instructions: ["Parse the weather array from the response", "Print date, min/max temp, and description", "Format neatly"], code: '# Weather CLI - Forecast\nimport requests\n\ndef show_current(data):\n    c = data["current_condition"][0]\n    print(f"Now: {c[\'temp_C\']}°C, {c[\'weatherDesc\'][0][\'value\']}")\n\ndef show_forecast(data):\n    # Your code here\n    pass\n\ncity = input("City: ")\nurl = f"https://wttr.in/{city}?format=j1"\ndata = requests.get(url).json()\nshow_current(data)\nshow_forecast(data)', correctOutput: "City: London\nNow: 15°C, Partly cloudy\n\n3-Day Forecast:\n2026-07-23: 12-20°C, Partly cloudy\n2026-07-24: 11-19°C, Sunny\n2026-07-25: 13-21°C, Light rain", hint: "data['weather'] is a list of day objects. Each has 'date', 'maxtempC', 'mintempC', 'hourly'." },
      { type: "key-points", points: ["API responses have nested lists inside dicts", "Forecast data has different structure than current conditions", "Formatting makes raw data human-readable"] },
    ],
    examPool: [
      { id: "py-proj-weather-q2", type: "true-false", difficulty: "medium", question: "Python's requests library is part of the standard library.", correctAnswer: false, explanation: "requests is a third-party library. It must be installed separately with pip." },
    ],
    xpReward: 80,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-weather-1"],
    keyPoints: ["API responses have nested lists inside dicts", "Forecast data has different structure than current conditions", "Formatting makes raw data human-readable"],
  },
  {
    id: "python-ch-proj-weather-3",
    courseId: "python",
    title: "Weather CLI: Config & Env Vars",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Environment Variables\n\nStore API configuration in environment variables instead of hardcoding. This is best practice for API keys." },
      { type: "code", language: "python", caption: "Using environment variables:", content: 'import os\nfrom dotenv import load_dotenv\n\nload_dotenv()  # Load .env file\n\napi_key = os.getenv("WEATHER_API_KEY")\nif not api_key:\n    print("Warning: WEATHER_API_KEY not set")\n    api_key = "demo"\n\n# Use the key in API calls\nurl = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"' },
      { type: "exercise", id: "py-proj-weather-ex3", title: "Environment Configuration", description: "Configure your weather app with environment variables.", instructions: ["Create a .env file with WEATHER_API_KEY", "Use python-dotenv to load it", "Fall back gracefully if not set"], code: '# Weather CLI - Config\nimport os\n\ndef get_api_key():\n    key = os.getenv("WEATHER_API_KEY")\n    if not key:\n        print("Tip: Set WEATHER_API_KEY in .env file")\n        key = "demo"\n    return key\n\napi_key = get_api_key()\nprint(f"Using API key: {api_key[:4]}...")', correctOutput: "Using API key: demo...", hint: "Use os.getenv('VAR_NAME') to read environment variables." },
      { type: "key-points", points: ["Environment variables keep secrets out of code", "os.getenv() reads environment variables", "Always provide a graceful fallback for missing config"] },
    ],
    examPool: [
      { id: "py-proj-weather-q3", type: "true-false", difficulty: "medium", question: "Hardcoding API keys in source code is a security best practice.", correctAnswer: false, explanation: "API keys should never be hardcoded. Use environment variables or a secrets manager." },
    ],
    xpReward: 85,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-weather-2"],
    keyPoints: ["Environment variables keep secrets out of code", "os.getenv() reads environment variables", "Always provide a graceful fallback for missing config"],
  },

  // ── Project 16: Password Manager (after ch28 for file I/O, ch37 for hashlib) ──
  {
    id: "python-ch-proj-pwmgr-1",
    courseId: "python",
    title: "Password Manager: Hashing",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Password Manager\n\nBuild a secure password manager that stores credentials encrypted. Start with hashing — converting passwords to fixed-length strings that can't be reversed." },
      { type: "code", language: "python", caption: "Hashing with hashlib:", content: 'import hashlib\n\ndef hash_password(password):\n    # Never use plain SHA-256 in production — use bcrypt/argon2\n    return hashlib.sha256(password.encode()).hexdigest()\n\n# Hash the master password\nmaster = "MySecurePass123"\nhashed = hash_password(master)\nprint(f"Hash: {hashed}")' },
      { type: "callout", style: "important", content: "**Security note:** This project uses SHA-256 for educational purposes. Real password managers use bcrypt, scrypt, or Argon2 with salting." },
      { type: "exercise", id: "py-proj-pwmgr-ex1", title: "Master Password", description: "Implement master password hashing and verification.", instructions: ["Hash a master password on first use", "Save hash to a file", "On login, hash input and compare"], code: '# Password Manager - Hashing\nimport hashlib\nimport json\n\ndef hash_password(password):\n    return hashlib.sha256(password.encode()).hexdigest()\n\ndef setup_master():\n    pw = input("Create master password: ")\n    hashed = hash_password(pw)\n    with open("master.hash", "w") as f:\n        f.write(hashed)\n    print("Master password set!")\n\ndef verify_master():\n    pw = input("Master password: ")\n    with open("master.hash", "r") as f:\n        stored = f.read().strip()\n    if hash_password(pw) == stored:\n        print("Access granted!")\n        return True\n    print("Access denied!")\n    return False\n\nsetup_master()\nverify_master()', correctOutput: "Create master password: \nMaster password set!\nMaster password: \nAccess granted!", hint: "Always encode() the string before hashing: password.encode()." },
      { type: "key-points", points: ["hashlib provides cryptographic hash functions", "encode() converts strings to bytes for hashing", "hexdigest() returns the hash as a hex string"] },
    ],
    examPool: [
      { id: "py-proj-pwmgr-q1", type: "multiple-choice", difficulty: "medium", question: "Why do we call password.encode() before hashing?", options: [{ id: "a", text: "Hash functions operate on bytes, not strings" }, { id: "b", text: "It encrypts the password first" }], correctAnswer: "a", explanation: "hashlib functions work on bytes. .encode() converts the string to UTF-8 bytes." },
    ],
    xpReward: 75,
    estimatedMinutes: 30,
    prerequisites: ["python-ch28"],
    keyPoints: ["hashlib provides cryptographic hash functions", "encode() converts strings to bytes for hashing", "hexdigest() returns the hash as a hex string"],
  },
  {
    id: "python-ch-proj-pwmgr-2",
    courseId: "python",
    title: "Password Manager: Vault Storage",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Store Passwords\n\nCreate a password vault — store website credentials as JSON. Each entry has site, username, and password." },
      { type: "code", language: "python", caption: "Password vault:", content: 'import json\n\nvault_file = "vault.json"\n\ndef load_vault():\n    try:\n        with open(vault_file, "r") as f:\n            return json.load(f)\n    except FileNotFoundError:\n        return []\n\ndef save_vault(vault):\n    with open(vault_file, "w") as f:\n        json.dump(vault, f, indent=2)\n\ndef add_password(site, username, password):\n    vault = load_vault()\n    vault.append({"site": site, "username": username, "password": password})\n    save_vault(vault)\n    print(f"Saved password for {site}")' },
      { type: "exercise", id: "py-proj-pwmgr-ex2", title: "Password Vault", description: "Create the vault with add, get, and list operations.", instructions: ["Implement load_vault() and save_vault()", "Add add_password() function", "Add get_password(site) to retrieve", "Add list_sites() to show all"], code: '# Password Manager - Vault\nimport json\n\nvault = []\n\ndef load_vault():\n    global vault\n    try:\n        with open("vault.json") as f:\n            vault = json.load(f)\n    except FileNotFoundError:\n        vault = []\n\ndef save_vault():\n    with open("vault.json", "w") as f:\n        json.dump(vault, f, indent=2)\n\ndef add_password(site, username, password):\n    vault.append({"site": site, "username": username, "password": password})\n    save_vault()\n\ndef list_sites():\n    for entry in vault:\n        print(f\"{entry[\'site\']}: {entry[\'username\']}\")\n\nload_vault()\nadd_password("example.com", "alice", "p@ss123")\nlist_sites()', correctOutput: "example.com: alice", hint: "JSON stores data as list of dicts. Each dict has site, username, password." },
      { type: "key-points", points: ["JSON is convenient for structured data persistence", "A list of dicts stores multiple credentials", "Loading on start and saving on change is the standard pattern"] },
    ],
    examPool: [
      { id: "py-proj-pwmgr-q2", type: "multiple-choice", difficulty: "easy", question: "What happens if json.load() tries to read a non-existent file?", options: [{ id: "a", text: "FileNotFoundError is raised" }, { id: "b", text: "It returns None" }], correctAnswer: "a", explanation: "json.load() calls open() first, which raises FileNotFoundError if the file doesn't exist." },
    ],
    xpReward: 80,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-pwmgr-1"],
    keyPoints: ["JSON is convenient for structured data persistence", "A list of dicts stores multiple credentials", "Loading on start and saving on change is the standard pattern"],
  },
  {
    id: "python-ch-proj-pwmgr-3",
    courseId: "python",
    title: "Password Manager: Full App",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Full Password Manager\n\nCombine master password verification with the vault to create a complete password manager with a menu interface." },
      { type: "code", language: "python", caption: "Complete password manager:", content: 'while True:\n    print("\\n=== Password Manager ===")\n    print("1. Add password")\n    print("2. Get password")\n    print("3. List sites")\n    print("4. Exit")\n    choice = input("Choice: ")\n    \n    if choice == "1":\n        site = input("Site: ")\n        user = input("Username: ")\n        pw = input("Password: ")\n        add_password(site, user, pw)\n    elif choice == "4":\n        break' },
      { type: "exercise", id: "py-proj-pwmgr-ex3", title: "Complete Password Manager", description: "Combine hashing, vault, and menu into a complete app.", instructions: ["Verify master password at startup", "Show menu with all operations", "Add error handling for missing entries"], code: '# Complete Password Manager\nimport hashlib\nimport json\n\n# Your complete implementation\npass', correctOutput: "Master password: \nAccess granted!\n\n=== Password Manager ===\n1. Add password\n2. Get password\n3. List sites\n4. Exit\nChoice: ", hint: "Verify master hash before showing the menu." },
      { type: "key-points", points: ["Authentication gates access to the password vault", "A menu loop provides the user interface", "Multiple components (hashing, vault, menu) compose into a full app"] },
    ],
    examPool: [
      { id: "py-proj-pwmgr-q3", type: "true-false", difficulty: "medium", question: "Storing passwords in a JSON file without encryption is secure.", correctAnswer: false, explanation: "Plain text storage is not secure. Real apps should encrypt the vault file." },
    ],
    xpReward: 90,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-pwmgr-2"],
    keyPoints: ["Authentication gates access to the password vault", "A menu loop provides the user interface", "Multiple components compose into a full app"],
  },

  // ── Project 17: URL Shortener (after ch37 for Flask, ch13 for dicts) ──
  {
    id: "python-ch-proj-urlshort-1",
    courseId: "python",
    title: "URL Shortener: Flask Routes",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a URL Shortener\n\nCreate a web service with Flask that shortens URLs. **Note:** Install Flask with `pip install flask`." },
      { type: "code", language: "python", caption: "Basic Flask app:", content: 'from flask import Flask, request, jsonify\n\napp = Flask(__name__)\n\n@app.route("/")\ndef home():\n    return "URL Shortener API is running!"\n\n@app.route("/shorten", methods=["POST"])\ndef shorten():\n    data = request.get_json()\n    url = data.get("url")\n    return jsonify({"original": url, "short": "abc123"})\n\nif __name__ == "__main__":\n    app.run(debug=True)' },
      { type: "exercise", id: "py-proj-urlshort-ex1", title: "Flask Setup", description: "Create a Flask app with a /shorten endpoint.", instructions: ["Create a Flask app", "Add /shorten POST endpoint", "Accept JSON with 'url' field", "Return a response"], code: '# URL Shortener - Flask Setup\nfrom flask import Flask, request, jsonify\n\napp = Flask(__name__)\n\n@app.route("/shorten", methods=["POST"])\ndef shorten():\n    data = request.get_json()\n    url = data.get("url", "")\n    return jsonify({"status": "received", "url": url})\n\n# Test with: curl -X POST -H "Content-Type: application/json" -d \'{"url":"https://example.com"}\' http://localhost:5000/shorten', correctOutput: '{"status":"received","url":"https://example.com"}', hint: "Use request.get_json() to parse JSON body." },
      { type: "key-points", points: ["Flask decorators (@app.route) define URL routes", "request.get_json() parses incoming JSON bodies", "jsonify() creates JSON responses with proper headers"] },
    ],
    examPool: [
      { id: "py-proj-urlshort-q1", type: "multiple-choice", difficulty: "medium", question: "How do you parse a JSON request body in Flask?", options: [{ id: "a", text: "request.get_json()" }, { id: "b", text: "request.body" }], correctAnswer: "a", explanation: "request.get_json() parses the incoming JSON data into a Python dict." },
    ],
    xpReward: 75,
    estimatedMinutes: 30,
    prerequisites: ["python-ch37"],
    keyPoints: ["Flask decorators (@app.route) define URL routes", "request.get_json() parses incoming JSON bodies", "jsonify() creates JSON responses with proper headers"],
  },
  {
    id: "python-ch-proj-urlshort-2",
    courseId: "python",
    title: "URL Shortener: Short Codes",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Generate Short Codes\n\nGenerate unique short codes using random characters. Store the mapping between codes and URLs." },
      { type: "code", language: "python", caption: "Short code generation:", content: 'import string\nimport random\n\nurl_map = {}\n\ndef generate_code(length=6):\n    chars = string.ascii_letters + string.digits\n    code = "".join(random.choices(chars, k=length))\n    return code\n\n@app.route("/shorten", methods=["POST"])\ndef shorten():\n    data = request.get_json()\n    url = data["url"]\n    code = generate_code()\n    url_map[code] = url\n    return jsonify({"short_url": f"http://localhost:5000/{code}"})' },
      { type: "exercise", id: "py-proj-urlshort-ex2", title: "Short Code Generation", description: "Add short code generation and URL storage.", instructions: ["Generate 6-char random codes", "Store URL→code mapping in a dict", "Return the short URL in response"], code: '# URL Shortener - Codes\nfrom flask import Flask, request, jsonify\nimport string\nimport random\n\napp = Flask(__name__)\nurl_map = {}\n\ndef generate_code(length=6):\n    chars = string.ascii_letters + string.digits\n    return "".join(random.choices(chars, k=length))\n\n@app.route("/shorten", methods=["POST"])\ndef shorten():\n    data = request.get_json()\n    url = data["url"]\n    code = generate_code()\n    url_map[code] = url\n    return jsonify({"short_url": f"http://localhost:5000/{code}", "code": code})', correctOutput: '{"short_url":"http://localhost:5000/aB3xY7","code":"aB3xY7"}', hint: "Use random.choices(chars, k=6) for the code." },
      { type: "key-points", points: ["Random codes make URLs hard to guess", "An in-memory dict stores the code→URL mapping", "Production systems would use a database"] },
    ],
    examPool: [
      { id: "py-proj-urlshort-q2", type: "multiple-choice", difficulty: "easy", question: "What does string.ascii_letters contain?", options: [{ id: "a", text: "Both uppercase and lowercase letters" }, { id: "b", text: "Only lowercase letters" }], correctAnswer: "a", explanation: "string.ascii_letters is 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'." },
    ],
    xpReward: 80,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-urlshort-1"],
    keyPoints: ["Random codes make URLs hard to guess", "An in-memory dict stores the code→URL mapping", "Production systems would use a database"],
  },
  {
    id: "python-ch-proj-urlshort-3",
    courseId: "python",
    title: "URL Shortener: Redirect & Stats",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Redirect and Track Clicks\n\nAdd a redirect route and click tracking. When someone visits the short URL, redirect them and count the visit." },
      { type: "code", language: "python", caption: "Redirect and stats:", content: 'from flask import redirect\n\nclick_counts = {}\n\n@app.route("/<code>")\ndef redirect_url(code):\n    if code in url_map:\n        click_counts[code] = click_counts.get(code, 0) + 1\n        return redirect(url_map[code])\n    return jsonify({"error": "URL not found"}), 404\n\n@app.route("/stats/<code>")\ndef stats(code):\n    if code in url_map:\n        return jsonify({\n            "url": url_map[code],\n            "clicks": click_counts.get(code, 0)\n        })\n    return jsonify({"error": "Not found"}), 404' },
      { type: "exercise", id: "py-proj-urlshort-ex3", title: "Redirect & Stats", description: "Add URL redirect and click tracking.", instructions: ["Add /<code> route that redirects", "Track click counts", "Add /stats/<code> endpoint", "Handle unknown codes with 404"], code: '# URL Shortener - Complete\nfrom flask import Flask, request, jsonify, redirect\nimport string\nimport random\n\napp = Flask(__name__)\nurl_map = {}\nclicks = {}\n\ndef generate_code():\n    chars = string.ascii_letters + string.digits\n    return "".join(random.choices(chars, k=6))\n\n@app.route("/shorten", methods=["POST"])\ndef shorten():\n    data = request.get_json()\n    code = generate_code()\n    url_map[code] = data["url"]\n    clicks[code] = 0\n    return jsonify({"short": f"/{code}"})\n\n@app.route("/<code>")\ndef go(code):\n    if code in url_map:\n        clicks[code] += 1\n        return redirect(url_map[code])\n    return "Not found", 404\n\n@app.route("/stats/<code>")\ndef get_stats(code):\n    if code in url_map:\n        return jsonify({"url": url_map[code], "clicks": clicks.get(code, 0)})\n    return "Not found", 404', correctOutput: '{"url":"https://example.com","clicks":1}', hint: "Use redirect() from flask for the redirect. Track clicks in a separate dict." },
      { type: "key-points", points: ["Dynamic URL routes with <variable> capture path segments", "redirect() sends an HTTP 302 redirect response", "404 responses signal that the resource doesn't exist"] },
    ],
    examPool: [
      { id: "py-proj-urlshort-q3", type: "multiple-choice", difficulty: "medium", question: "How do you return a 404 status in Flask?", options: [{ id: "a", text: "return 'Not found', 404" }, { id: "b", text: "return 404, 'Not found'" }], correctAnswer: "a", explanation: "Flask allows returning (body, status_code) tuples. The second element is the HTTP status code." },
    ],
    xpReward: 85,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-urlshort-2"],
    keyPoints: ["Dynamic URL routes capture path segments", "redirect() sends an HTTP 302 redirect", "404 responses signal that the resource doesn't exist"],
  },

  // ── Project 18: Chat Server (after ch40 for sockets) ──
  {
    id: "python-ch-proj-chat-1",
    courseId: "python",
    title: "Chat Server: TCP Basics",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Chat Server\n\nCreate a multi-client chat server using Python sockets. Start with a basic TCP server that accepts one client." },
      { type: "code", language: "python", caption: "Basic TCP server:", content: 'import socket\n\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.bind(("0.0.0.0", 5555))\nserver.listen(1)\n\nprint("Server listening on port 5555...")\n\nclient, addr = server.accept()\nprint(f"Client connected: {addr}")\n\nmsg = client.recv(1024).decode()\nprint(f"Received: {msg}")\nclient.send(f"Echo: {msg}".encode())\nclient.close()' },
      { type: "exercise", id: "py-proj-chat-ex1", title: "TCP Server", description: "Create a basic TCP echo server.", instructions: ["Create a socket with AF_INET and SOCK_STREAM", "Bind to 0.0.0.0:5555", "Accept one client", "Receive and echo back a message"], code: '# Chat Server - Basic\nimport socket\n\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.bind(("0.0.0.0", 5555))\nserver.listen(1)\nprint("Waiting for client...")\n\nclient, addr = server.accept()\nprint(f"Connected: {addr}")\ndata = client.recv(1024).decode()\nprint(f"Got: {data}")\nclient.send(f"Server received: {data}".encode())\nclient.close()', correctOutput: "Connected: ('127.0.0.1', 54321)\nGot: Hello server!", hint: "Use .recv(1024).decode() to receive, .send(msg.encode()) to send." },
      { type: "key-points", points: ["socket.socket() creates a network endpoint", "bind() assigns the address, listen() starts listening", "accept() blocks until a client connects"] },
    ],
    examPool: [
      { id: "py-proj-chat-q1", type: "multiple-choice", difficulty: "medium", question: "What does server.accept() return?", options: [{ id: "a", text: "(client_socket, client_address)" }, { id: "b", text: "Just the client socket" }], correctAnswer: "a", explanation: "accept() returns a tuple: (new_socket, address). The new socket communicates with that client." },
    ],
    xpReward: 80,
    estimatedMinutes: 30,
    prerequisites: ["python-ch40"],
    keyPoints: ["socket.socket() creates a network endpoint", "bind() assigns the address, listen() starts listening", "accept() blocks until a client connects"],
  },
  {
    id: "python-ch-proj-chat-2",
    courseId: "python",
    title: "Chat Server: Multi-Client",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Handle Multiple Clients with Threading\n\nUse threading to handle multiple clients simultaneously. Each client runs in its own thread." },
      { type: "code", language: "python", caption: "Multi-client server with threads:", content: 'import socket\nimport threading\n\nclients = []\n\ndef handle_client(client, addr):\n    print(f"New client: {addr}")\n    while True:\n        try:\n            msg = client.recv(1024).decode()\n            if not msg:\n                break\n            broadcast(f"{addr}: {msg}", client)\n        except:\n            break\n    clients.remove(client)\n    client.close()\n\ndef broadcast(msg, sender=None):\n    for c in clients:\n        if c != sender:\n            c.send(msg.encode())\n\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.bind(("0.0.0.0", 5555))\nserver.listen(5)\n\nwhile True:\n    client, addr = server.accept()\n    clients.append(client)\n    thread = threading.Thread(target=handle_client, args=(client, addr))\n    thread.start()' },
      { type: "exercise", id: "py-proj-chat-ex2", title: "Multi-Client Server", description: "Add threading to handle multiple clients.", instructions: ["Use threading.Thread for each client", "Store connected clients in a list", "Broadcast messages to all clients", "Handle disconnection gracefully"], code: '# Chat Server - Multi-Client\nimport socket\nimport threading\n\nclients = []\n\ndef handle(client, addr):\n    while True:\n        try:\n            msg = client.recv(1024).decode()\n            if not msg:\n                break\n            for c in clients:\n                if c != client:\n                    c.send(msg.encode())\n        except:\n            break\n    clients.remove(client)\n    client.close()\n\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.bind(("0.0.0.0", 5555))\nserver.listen(5)\nprint("Chat server running on port 5555...")\n\nwhile True:\n    client, addr = server.accept()\n    clients.append(client)\n    threading.Thread(target=handle, args=(client, addr)).start()', correctOutput: "Chat server running on port 5555...", hint: "Wrap recv() in try/except to handle disconnection." },
      { type: "key-points", points: ["threading.Thread lets you run functions in parallel", "A clients list tracks all active connections", "broadcast() sends a message to every client"] },
    ],
    examPool: [
      { id: "py-proj-chat-q2", type: "true-false", difficulty: "medium", question: "Threading allows a server to handle multiple clients simultaneously.", correctAnswer: true, explanation: "Each client gets its own thread, so the server can handle many clients at once." },
    ],
    xpReward: 90,
    estimatedMinutes: 35,
    prerequisites: ["python-ch-proj-chat-1"],
    keyPoints: ["threading.Thread lets you run functions in parallel", "A clients list tracks all active connections", "broadcast() sends a message to every client"],
  },
  {
    id: "python-ch-proj-chat-3",
    courseId: "python",
    title: "Chat Server: Nicknames & UI",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Nicknames and Clean UI\n\nAdd nicknames and a simple client interface. When a client connects, they choose a nickname. Messages show who sent them." },
      { type: "code", language: "python", caption: "Server with nicknames:", content: '# Server side\nnicknames = {}\n\ndef handle_client(client, addr):\n    client.send("NICK".encode())\n    nick = client.recv(1024).decode()\n    nicknames[client] = nick\n    broadcast(f"{nick} joined the chat!")\n    # ... handle messages with nicknames ...' },
      { type: "exercise", id: "py-proj-chat-ex3", title: "Complete Chat System", description: "Add nicknames and build a chat client.", instructions: ["Server asks for nickname on connect", "Prefix messages with sender's nickname", "Create a simple client that sends/receives", "Handle graceful exit"], code: '# Complete Chat\nimport socket\nimport threading\n\n# Build the full server and client here\npass', correctOutput: "Your nickname: Alice\nAlice joined the chat!\nBob: Hey everyone!", hint: "Send 'NICK' signal to prompt for nickname. Store nickname→socket mapping." },
      { type: "key-points", points: ["A protocol (like sending 'NICK') coordinates client-server communication", "Nicknames personalize the chat experience", "A client needs send and receive threads (one each)"] },
    ],
    examPool: [
      { id: "py-proj-chat-q3", type: "multiple-choice", difficulty: "hard", question: "Why does a chat client typically use two threads?", options: [{ id: "a", text: "One for sending, one for receiving (both can block)" }, { id: "b", text: "One for GUI, one for networking" }], correctAnswer: "a", explanation: "input() blocks waiting for user input, and recv() blocks waiting for messages. Two threads let both happen simultaneously." },
    ],
    xpReward: 100,
    estimatedMinutes: 40,
    prerequisites: ["python-ch-proj-chat-2"],
    keyPoints: ["A protocol coordinates client-server communication", "Nicknames personalize the chat experience", "A client needs send and receive threads"],
  },

  // ── Project 19: Data Analyzer (after ch30 for CSV, ch37 for datetime) ──
  {
    id: "python-ch-proj-data-1",
    courseId: "python",
    title: "Data Analyzer: CSV Loading",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Data Analyzer\n\nAnalyze CSV data using the built-in `csv` module. Load a CSV file and inspect its structure — headers, row count, and data types." },
      { type: "code", language: "python", caption: "Loading a CSV file:", content: 'import csv\n\nwith open("data.csv", "r") as f:\n    reader = csv.DictReader(f)\n    rows = list(reader)\n    print(f"Loaded {len(rows)} rows")\n    print(f"Columns: {reader.fieldnames}")' },
      { type: "exercise", id: "py-proj-data-ex1", title: "Load and Inspect CSV", description: "Load a CSV file and display its structure.", instructions: ["Use csv.DictReader() to load the file", "Print number of rows", "Print column names", "Print the first 3 rows"], code: "# Data Analyzer - Load CSV\nimport csv\n\nwith open(\"data.csv\", \"r\") as f:\n    reader = csv.DictReader(f)\n    rows = list(reader)\n    print(f\"Rows: {len(rows)}\")\n    print(f\"Columns: {reader.fieldnames}\")\n    for row in rows[:3]:\n        print(row)", correctOutput: "Rows: 100\nColumns: ['name', 'age', 'city', 'salary']\n{'name': 'Alice', 'age': '30', 'city': 'New York', 'salary': '75000'}", hint: "csv.DictReader uses the first row as headers and returns each row as a dict." },
      { type: "key-points", points: ["csv.DictReader reads CSV rows as dictionaries keyed by header", "list(reader) loads all rows into memory", "CSV is a universal data exchange format"] },
    ],
    examPool: [
      { id: "py-proj-data-q1", type: "multiple-choice", difficulty: "easy", question: "What does csv.DictReader() return for each row?", options: [{ id: "a", text: "An OrderedDict keyed by column headers" }, { id: "b", text: "A regular list of values" }], correctAnswer: "a", explanation: "DictReader returns each row as an OrderedDict where keys are the column headers from the first row." },
    ],
    xpReward: 70,
    estimatedMinutes: 25,
    prerequisites: ["python-ch30"],
    keyPoints: ["csv.DictReader reads CSV rows as dictionaries", "list(reader) loads all rows into memory", "CSV is a universal data exchange format"],
  },
  {
    id: "python-ch-proj-data-2",
    courseId: "python",
    title: "Data Analyzer: Statistics",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Calculate Statistics\n\nCompute basic statistics from numeric columns: mean, median, min, max, and standard deviation." },
      { type: "code", language: "python", caption: "Computing statistics:", content: 'def get_stats(values):\n    n = len(values)\n    mean = sum(values) / n\n    sorted_vals = sorted(values)\n    median = sorted_vals[n // 2] if n % 2 else (sorted_vals[n//2-1] + sorted_vals[n//2]) / 2\n    return {\n        "count": n,\n        "mean": round(mean, 2),\n        "median": median,\n        "min": min(values),\n        "max": max(values)\n    }\n\nsalaries = [int(row["salary"]) for row in rows if row["salary"]]\nprint(get_stats(salaries))' },
      { type: "exercise", id: "py-proj-data-ex2", title: "Column Statistics", description: "Compute statistics for a numeric column.", instructions: ["Extract a numeric column from CSV data", "Calculate mean, median, min, max", "Print a formatted summary"], code: "# Data Analyzer - Stats\nimport csv\n\nwith open(\"data.csv\") as f:\n    rows = list(csv.DictReader(f))\n\nages = [int(r[\"age\"]) for r in rows]\nprint(f\"Age stats:\")\nprint(f\"  Mean: {sum(ages)/len(ages):.1f}\")\nprint(f\"  Min: {min(ages)}\")\nprint(f\"  Max: {max(ages)}\")", correctOutput: "Age stats:\n  Mean: 34.2\n  Min: 18\n  Max: 65", hint: "Use list comprehension [int(row['col']) for row in rows] to extract a column." },
      { type: "key-points", points: ["List comprehensions extract columns from CSV data", "Statistics summarize data: mean, median, min, max", "Always convert string values to numbers before computing"] },
    ],
    examPool: [
      { id: "py-proj-data-q2", type: "multiple-choice", difficulty: "medium", question: "What does [int(row['age']) for row in rows] do?", options: [{ id: "a", text: "Creates a list of ages as integers" }, { id: "b", text: "Modifies the original rows" }], correctAnswer: "a", explanation: "List comprehension creates a new list by transforming each element." },
    ],
    xpReward: 75,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-data-1"],
    keyPoints: ["List comprehensions extract columns from CSV", "Statistics summarize data", "Convert strings to numbers before computing"],
  },
  {
    id: "python-ch-proj-data-3",
    courseId: "python",
    title: "Data Analyzer: Filtering & Grouping",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Filter and Group Data\n\nFilter rows by conditions and group data by categories." },
      { type: "code", language: "python", caption: "Filtering and grouping:", content: '# Filter: people over 40\nover_40 = [r for r in rows if int(r["age"]) > 40]\nprint(f"People over 40: {len(over_40)}")\n\n# Group by city\nfrom collections import defaultdict\nby_city = defaultdict(list)\nfor r in rows:\n    by_city[r["city"]].append(r)\n\nfor city, people in by_city.items():\n    print(f"{city}: {len(people)} people")' },
      { type: "exercise", id: "py-proj-data-ex3", title: "Filter and Group", description: "Filter by condition and group by category.", instructions: ["Filter rows where age > 40", "Group by city using defaultdict", "Show count per group"], code: "# Data Analyzer - Filter & Group\nimport csv\nfrom collections import defaultdict\n\nwith open(\"data.csv\") as f:\n    rows = list(csv.DictReader(f))\n\n# Filter\nseniors = [r for r in rows if int(r[\"age\"]) > 50]\nprint(f\"Over 50: {len(seniors)}\")\n\n# Group by city\nby_city = defaultdict(list)\nfor r in rows:\n    by_city[r[\"city\"]].append(r)\n\nfor city, people in by_city.items():\n    avg_age = sum(int(p[\"age\"]) for p in people) / len(people)\n    print(f\"{city}: {len(people)} people, avg age {avg_age:.1f}\")", correctOutput: "Over 50: 12\nNew York: 25 people, avg age 35.2\nLondon: 30 people, avg age 38.1", hint: "from collections import defaultdict. defaultdict(list) creates empty lists automatically." },
      { type: "key-points", points: ["defaultdict(list) auto-creates empty lists for new keys", "List comprehensions filter data with conditions", "Grouping aggregates data by category"] },
    ],
    examPool: [
      { id: "py-proj-data-q3", type: "multiple-choice", difficulty: "medium", question: "What does defaultdict(list) do when you access a missing key?", options: [{ id: "a", text: "Creates an empty list for that key" }, { id: "b", text: "Raises KeyError" }], correctAnswer: "a", explanation: "defaultdict calls the factory function (list) for missing keys, creating an empty list automatically." },
    ],
    xpReward: 80,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-data-2"],
    keyPoints: ["defaultdict(list) auto-creates empty lists for new keys", "List comprehensions filter data", "Grouping aggregates data by category"],
  },
  {
    id: "python-ch-proj-data-4",
    courseId: "python",
    title: "Data Analyzer: Report Generation",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Generate a Report\n\nCombine everything into a formatted report. Export results to a text file." },
      { type: "code", language: "python", caption: "Report generation:", content: 'def generate_report(rows, filename="report.txt"):\n    with open(filename, "w") as f:\n        f.write("=== DATA ANALYSIS REPORT ===\\n\\n")\n        f.write(f"Total rows: {len(rows)}\\n\\n")\n        # ... add stats, groups, etc ...\n    print(f"Report saved to {filename}")' },
      { type: "exercise", id: "py-proj-data-ex4", title: "Complete Data Analyzer", description: "Combine all analysis into a report that saves to a file.", instructions: ["Load CSV data", "Compute column statistics", "Group and filter data", "Write a formatted report to a file"], code: "# Complete Data Analyzer\nimport csv\nfrom collections import defaultdict\n\ndef analyze(filename=\"data.csv\"):\n    with open(filename) as f:\n        rows = list(csv.DictReader(f))\n    \n    # Your analysis here\n    # ...\n    \n    # Generate report\n    with open(\"report.txt\", \"w\") as f:\n        f.write(\"=== ANALYSIS REPORT ===\\n\")\n        f.write(f\"Rows analyzed: {len(rows)}\\n\")\n    print(\"Report generated: report.txt\")\n\nanalyze()", correctOutput: "Report generated: report.txt", hint: "Open the report file in 'w' mode and write your findings." },
      { type: "key-points", points: ["Report generation combines analysis into a readable format", "File I/O persists results for later viewing", "A well-structured report is more useful than raw data"] },
    ],
    examPool: [
      { id: "py-proj-data-q4", type: "true-false", difficulty: "medium", question: "Writing analysis results to a report file makes the data analyzer more useful.", correctAnswer: true, explanation: "A saved report allows sharing and reviewing results without re-running the analysis." },
    ],
    xpReward: 85,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-data-3"],
    keyPoints: ["Report generation combines analysis into a readable format", "File I/O persists results for later viewing", "A well-structured report is more useful than raw data"],
  },

  // ── Project 20: Snake Game (after ch10 for lists, ch37 for curses) ──
  {
    id: "python-ch-proj-snake-1",
    courseId: "python",
    title: "Snake Game: Grid & Snake",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build Snake Game\n\nBuild the classic Snake game using the `curses` library for terminal graphics. The snake moves around a grid, eating food to grow." },
      { type: "code", language: "python", caption: "Snake representation:", content: 'import curses\n\n# Snake as list of (y, x) coordinates\nsnake = [(10, 10), (10, 9), (10, 8)]  # Head first\n\ndef draw(stdscr, snake):\n    stdscr.clear()\n    for y, x in snake:\n        stdscr.addch(y, x, "#")\n    stdscr.refresh()' },
      { type: "exercise", id: "py-proj-snake-ex1", title: "Create the Snake", description: "Set up curses and draw a snake on screen.", instructions: ["Import curses", "Initialize with curses.wrapper()", "Create snake as list of (y,x) tuples", "Draw the snake on screen", "Wait for key press before exiting"], code: "# Snake Game - Setup\nimport curses\n\ndef main(stdscr):\n    curses.curs_set(0)  # Hide cursor\n    stdscr.nodelay(1)   # Non-blocking input\n    \n    snake = [(10, 10), (10, 9), (10, 8)]\n    \n    for y, x in snake:\n        stdscr.addch(y, x, \"#\")\n    \n    stdscr.addstr(12, 8, \"Press any key...\")\n    stdscr.refresh()\n    stdscr.getch()\n\ncurses.wrapper(main)", correctOutput: "### (three hashes on row 10)", hint: "snake is a list of (row, col) tuples. The head is first element." },
      { type: "key-points", points: ["curses provides terminal graphics capabilities", "curses.wrapper() handles setup/cleanup automatically", "The snake is a list of (y, x) coordinates — head first"] },
    ],
    examPool: [
      { id: "py-proj-snake-q1", type: "multiple-choice", difficulty: "medium", question: "What does curses.wrapper(main) do?", options: [{ id: "a", text: "Initializes curses, calls main(), and restores terminal" }, { id: "b", text: "Creates a new window" }], correctAnswer: "a", explanation: "curses.wrapper() handles initialization, calls the function, and restores terminal settings on exit." },
    ],
    xpReward: 80,
    estimatedMinutes: 30,
    prerequisites: ["python-ch37"],
    keyPoints: ["curses provides terminal graphics capabilities", "curses.wrapper() handles setup/cleanup", "The snake is a list of (y, x) coordinates"],
  },
  {
    id: "python-ch-proj-snake-2",
    courseId: "python",
    title: "Snake Game: Movement & Food",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Snake Movement and Food\n\nImplement snake movement: add a new head position, remove the tail. Generate food at random positions." },
      { type: "code", language: "python", caption: "Snake movement:", content: 'def move_snake(snake, direction):\n    y, x = snake[0]\n    if direction == "UP": y -= 1\n    elif direction == "DOWN": y += 1\n    elif direction == "LEFT": x -= 1\n    elif direction == "RIGHT": x += 1\n    \n    snake.insert(0, (y, x))  # New head\n    snake.pop()  # Remove tail\n\ndef place_food(snake, height, width):\n    import random\n    while True:\n        y = random.randint(1, height-2)\n        x = random.randint(1, width-2)\n        if (y, x) not in snake:\n            return (y, x)' },
      { type: "exercise", id: "py-proj-snake-ex2", title: "Movement & Food", description: "Add snake movement and random food.", instructions: ["Implement move_snake() with direction", "Implement place_food() avoiding snake body", "Draw food as a different character", "Update snake position each frame"], code: "# Snake Game - Movement\nimport curses\nimport random\n\ndef move_snake(snake, direction):\n    # Your code here\n    pass\n\ndef main(stdscr):\n    curses.curs_set(0)\n    stdscr.nodelay(1)\n    \n    snake = [(10, 10), (10, 9), (10, 8)]\n    direction = \"RIGHT\"\n    food = (10, 15)\n    \n    while True:\n        stdscr.clear()\n        stdscr.addch(food[0], food[1], \"@\")\n        for y, x in snake:\n            stdscr.addch(y, x, \"#\")\n        stdscr.refresh()\n        \n        key = stdscr.getch()\n        if key == ord(\"q\"):\n            break\n        \n        curses.napms(200)  # 200ms delay\n\ncurses.wrapper(main)", correctOutput: "Snake moves across the screen, @ symbol for food", hint: "snake.insert(0, new_head) then snake.pop(). Check getch() for arrow keys." },
      { type: "key-points", points: ["Snake movement: insert new head, pop tail — creates sliding motion", "Food placed at random positions not occupied by snake", "curses.napms() controls game speed"] },
    ],
    examPool: [
      { id: "py-proj-snake-q2", type: "true-false", difficulty: "medium", question: "In snake movement, you first pop the tail then insert the new head.", correctAnswer: false, explanation: "You must insert the new head first, then pop the tail. Otherwise the snake shrinks before growing." },
    ],
    xpReward: 90,
    estimatedMinutes: 30,
    prerequisites: ["python-ch-proj-snake-1"],
    keyPoints: ["Snake movement: insert new head, pop tail", "Food placed at random unoccupied positions", "curses.napms() controls game speed"],
  },
  {
    id: "python-ch-proj-snake-3",
    courseId: "python",
    title: "Snake Game: Collision & Growth",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Collision Detection and Growth\n\nDetect collisions with walls and the snake's own body. When the snake eats food, it grows instead of shrinking." },
      { type: "code", language: "python", caption: "Collision and growth:", content: 'def check_collision(snake, height, width):\n    y, x = snake[0]\n    # Wall collision\n    if y <= 0 or y >= height-1 or x <= 0 or x >= width-1:\n        return True\n    # Self collision\n    if (y, x) in snake[1:]:\n        return True\n    return False\n\ndef grow(snake, food):\n    if snake[0] == food:\n        snake.append(snake[-1])  # Don\'t pop = grows\n        return True  # Ate food\n    snake.pop()  # Normal move\n    return False' },
      { type: "exercise", id: "py-proj-snake-ex3", title: "Complete Snake Game", description: "Add collision detection and snake growth.", instructions: ["Check wall and self collision each frame", "When snake eats food, grow and place new food", "Game over on collision", "Track and display score"], code: "# Complete Snake Game\nimport curses\nimport random\n\ndef check_collision(snake, h, w):\n    pass  # Your code here\n\ndef main(stdscr):\n    curses.curs_set(0)\n    stdscr.nodelay(1)\n    curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)\n    \n    h, w = stdscr.getmaxyx()\n    snake = [(h//2, w//2), (h//2, w//2-1), (h//2, w//2-2)]\n    direction = \"RIGHT\"\n    \n    while True:\n        # Your game loop here\n        pass\n\ncurses.wrapper(main)", correctOutput: "Snake game with collision detection, growing, and score", hint: "Check wall: y <= 0 or y >= h-1. Check self: (y,x) in snake[1:]." },
      { type: "key-points", points: ["Wall and self collision are two separate checks", "Growth = don't pop the tail when eating food", "Game state (alive, score) drives the game loop"] },
    ],
    examPool: [
      { id: "py-proj-snake-q3", type: "multiple-choice", difficulty: "medium", question: "How does the snake grow when eating food?", options: [{ id: "a", text: "Don't pop the tail on that move" }, { id: "b", text: "Insert an extra segment in the middle" }], correctAnswer: "a", explanation: "Normally you pop the tail to maintain length. If you skip the pop, the snake grows by one segment." },
    ],
    xpReward: 100,
    estimatedMinutes: 35,
    prerequisites: ["python-ch-proj-snake-2"],
    keyPoints: ["Wall and self collision are two separate checks", "Growth = don't pop the tail when eating food", "Game state drives the game loop"],
  },

  // ── Project 21: Blog CLI (after ch28 for file I/O, ch37 for argparse) ──
  {
    id: "python-ch-proj-blog-1",
    courseId: "python",
    title: "Blog CLI: Argparse Basics",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Blog CLI Tool\n\nCreate a command-line tool for managing blog posts. Use `argparse` to parse CLI arguments for creating, listing, and viewing posts." },
      { type: "code", language: "python", caption: "Argparse setup:", content: 'import argparse\nfrom pathlib import Path\n\ndef create_post(title):\n    slug = title.lower().replace(" ", "-")\n    path = Path(f"posts/{slug}.md")\n    path.write_text(f"# {title}\\n\\nWrite your content here...")\n    print(f"Created: {path}")\n\nparser = argparse.ArgumentParser(description="Blog CLI")\nparser.add_argument("command", choices=["new", "list", "view"])\nparser.add_argument("--title", help="Post title")\n\nargs = parser.parse_args()\n\nif args.command == "new":\n    if not args.title:\n        parser.error("--title is required for new")\n    create_post(args.title)' },
      { type: "exercise", id: "py-proj-blog-ex1", title: "Argparse Setup", description: "Create a CLI with new, list, and view commands.", instructions: ["Set up argparse with subcommands", "Implement 'new' with --title", "Create a posts/ directory", "Save posts as .md files"], code: "# Blog CLI - Setup\nimport argparse\nfrom pathlib import Path\n\nparser = argparse.ArgumentParser()\nparser.add_argument(\"command\", choices=[\"new\", \"list\"])\nparser.add_argument(\"--title\", help=\"Post title\")\n\nargs = parser.parse_args()\n\nif args.command == \"new\":\n    Path(\"posts\").mkdir(exist_ok=True)\n    slug = args.title.lower().replace(\" \", \"-\")\n    path = Path(f\"posts/{slug}.md\")\n    path.write_text(f\"# {args.title}\\n\\n\")\n    print(f\"Created post: {path}\")\nelif args.command == \"list\":\n    for p in Path(\"posts\").glob(\"*.md\"):\n        print(f\"  - {p.stem}\")", correctOutput: "$ python blog.py new --title \"Hello World\"\nCreated post: posts/hello-world.md", hint: "Use pathlib.Path for file operations. .glob('*.md') finds markdown files." },
      { type: "key-points", points: ["argparse provides professional CLI argument parsing", "Path from pathlib offers clean file operations", ".glob() finds files matching a pattern"] },
    ],
    examPool: [
      { id: "py-proj-blog-q1", type: "multiple-choice", difficulty: "easy", question: "What does parser.add_argument('command', choices=['new', 'list']) do?", options: [{ id: "a", text: "Accepts a positional argument that must be 'new' or 'list'" }, { id: "b", text: "Creates a --command flag" }], correctAnswer: "a", explanation: "A positional argument with choices restricts the value to one of the specified options." },
    ],
    xpReward: 75,
    estimatedMinutes: 30,
    prerequisites: ["python-ch28"],
    keyPoints: ["argparse provides professional CLI argument parsing", "Path from pathlib offers clean file operations", ".glob() finds files matching a pattern"],
  },
  {
    id: "python-ch-proj-blog-2",
    courseId: "python",
    title: "Blog CLI: View & Search",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## View and Search Posts\n\nAdd view (display a post in the terminal) and search (find posts by keyword) functionality." },
      { type: "code", language: "python", caption: "Viewing and searching posts:", content: 'def view_post(slug):\n    path = Path(f"posts/{slug}.md")\n    if not path.exists():\n        print(f"Post not found: {slug}")\n        return\n    print(path.read_text())\n\ndef search(keyword):\n    results = []\n    for path in Path("posts").glob("*.md"):\n        content = path.read_text()\n        if keyword.lower() in content.lower():\n            results.append(path.stem)\n    return results' },
      { type: "exercise", id: "py-proj-blog-ex2", title: "View and Search", description: "Add view and search commands.", instructions: ["Implement 'view' command that reads and prints a post", "Implement 'search' with --keyword flag", "Handle missing posts gracefully"], code: "# Blog CLI - View & Search\nimport argparse\nfrom pathlib import Path\n\nparser = argparse.ArgumentParser()\nparser.add_argument(\"command\", choices=[\"new\", \"list\", \"view\", \"search\"])\nparser.add_argument(\"--title\")\nparser.add_argument(\"--slug\")\nparser.add_argument(\"--keyword\")\n\nargs = parser.parse_args()\n\nif args.command == \"view\":\n    p = Path(f\"posts/{args.slug}.md\")\n    if p.exists():\n        print(p.read_text())\n    else:\n        print(\"Not found\")\nelif args.command == \"search\":\n    for p in Path(\"posts\").glob(\"*.md\"):\n        if args.keyword.lower() in p.read_text().lower():\n            print(f\"  - {p.stem}\")", correctOutput: "$ python blog.py view --slug hello-world\n# Hello World\n\nThis is my first post!", hint: "Use path.read_text() to read file contents. Check path.exists() first." },
      { type: "key-points", points: ["path.read_text() reads the entire file at once", "Case-insensitive search uses .lower() on both sides", "Error handling for missing files improves UX"] },
    ],
    examPool: [
      { id: "py-proj-blog-q2", type: "true-false", difficulty: "medium", question: "pathlib.Path offers .read_text() and .write_text() for simple file I/O.", correctAnswer: true, explanation: "Path objects have read_text() and write_text() as convenience methods for file operations." },
    ],
    xpReward: 80,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-blog-1"],
    keyPoints: ["path.read_text() reads the entire file at once", "Case-insensitive search uses .lower()", "Error handling for missing files improves UX"],
  },
  {
    id: "python-ch-proj-blog-3",
    courseId: "python",
    title: "Blog CLI: Export to HTML",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Export to HTML\n\nAdd an export command that converts all markdown posts to HTML files." },
      { type: "code", language: "python", caption: "Export to HTML:", content: 'def export_html():\n    template = \"\"\"<!DOCTYPE html>\n<html><head><title>{title}</title></head>\n<body><h1>{title}</h1>{content}</body></html>\"\"\"\n    \n    for path in Path("posts").glob("*.md"):\n        content = path.read_text()\n        # Simple markdown to HTML\n        html_content = content.replace("&", "&amp;").replace("<", "&lt;")\n        html_content = html_content.replace("\\n\\n", "</p><p>")\n        html = template.format(title=path.stem, content=f"<p>{html_content}</p>")\n        \n        out_path = path.with_suffix(".html")\n        out_path.write_text(html)\n        print(f"Exported: {out_path}")' },
      { type: "exercise", id: "py-proj-blog-ex3", title: "Complete Blog CLI", description: "Add export to HTML and polish the tool.", instructions: ["Add 'export' command", "Convert .md files to .html", "Wrap content in HTML template", "Handle special characters safely"], code: "# Complete Blog CLI\nimport argparse\nfrom pathlib import Path\n\ndef export_html():\n    # Your code here\n    pass\n\n# Add export to parser\nparser.add_argument(\"command\", choices=[\"new\", \"list\", \"view\", \"search\", \"export\"])\n# ...\n\nif args.command == \"export\":\n    export_html()", correctOutput: "Exported: posts/hello-world.html", hint: "Use path.with_suffix('.html') to change file extension." },
      { type: "key-points", points: ["Export converts data from one format to another", "String replacement provides basic HTML escaping", "with_suffix() changes file extensions cleanly"] },
    ],
    examPool: [
      { id: "py-proj-blog-q3", type: "multiple-choice", difficulty: "medium", question: "What does Path('posts/hello.md').with_suffix('.html') return?", options: [{ id: "a", text: "Path('posts/hello.html')" }, { id: "b", text: "Path('posts/hello.md.html')" }], correctAnswer: "a", explanation: "with_suffix() replaces the file extension. 'hello.md' becomes 'hello.html'." },
    ],
    xpReward: 85,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-blog-2"],
    keyPoints: ["Export converts data from one format to another", "String replacement provides basic HTML escaping", "with_suffix() changes file extensions cleanly"],
  },

  // ── Project 22: File Organizer (after ch28 for file I/O, ch37 for pathlib) ──
  {
    id: "python-ch-proj-fileorg-1",
    courseId: "python",
    title: "File Organizer: Scanning",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a File Organizer\n\nScan a directory and categorize files by their extension." },
      { type: "code", language: "python", caption: "Scanning and categorizing:", content: 'from pathlib import Path\n\nCATEGORIES = {\n    "Images": [".jpg", ".jpeg", ".png", ".gif", ".svg"],\n    "Documents": [".pdf", ".doc", ".docx", ".txt", ".md"],\n    "Audio": [".mp3", ".wav", ".flac"],\n    "Video": [".mp4", ".avi", ".mkv"],\n    "Archives": [".zip", ".tar", ".gz"],\n}\n\ndef categorize(path):\n    ext = path.suffix.lower()\n    for category, exts in CATEGORIES.items():\n        if ext in exts:\n            return category\n    return "Other"' },
      { type: "exercise", id: "py-proj-fileorg-ex1", title: "Scan Directory", description: "Scan a directory and show file categories.", instructions: ["Scan a directory with Path.glob()", "Categorize each file by extension", "Show count per category"], code: "# File Organizer - Scan\nfrom pathlib import Path\n\nCATEGORIES = {\n    \"Images\": [\".jpg\", \".png\", \".gif\"],\n    \"Docs\": [\".txt\", \".md\", \".pdf\"],\n    \"Other\": [],\n}\n\ndef categorize(path):\n    ext = path.suffix.lower()\n    for cat, exts in CATEGORIES.items():\n        if ext in exts:\n            return cat\n    return \"Other\"\n\ndir_path = Path(\".\")\nfor f in dir_path.iterdir():\n    if f.is_file():\n        print(f\"{categorize(f)}: {f.name}\")", correctOutput: "Docs: readme.md\nImages: photo.jpg\nOther: script.py", hint: "Use path.suffix for extension. path.iterdir() lists directory contents." },
      { type: "key-points", points: ["path.suffix extracts the file extension", "A dict maps extensions to category names", "path.iterdir() lists all entries in a directory"] },
    ],
    examPool: [
      { id: "py-proj-fileorg-q1", type: "multiple-choice", difficulty: "easy", question: "What does Path('image.jpg').suffix return?", options: [{ id: "a", text: "'.jpg'" }, { id: "b", text: "'image.jpg'" }], correctAnswer: "a", explanation: ".suffix returns the file extension including the dot, like '.jpg'." },
    ],
    xpReward: 65,
    estimatedMinutes: 20,
    prerequisites: ["python-ch28"],
    keyPoints: ["path.suffix extracts the file extension", "A dict maps extensions to category names", "path.iterdir() lists all entries in a directory"],
  },
  {
    id: "python-ch-proj-fileorg-2",
    courseId: "python",
    title: "File Organizer: Moving Files",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Move Files to Folders\n\nCreate category folders and move files into them automatically." },
      { type: "code", language: "python", caption: "Moving files:", content: 'import shutil\n\ndef organize(directory):\n    dir_path = Path(directory)\n    for f in dir_path.iterdir():\n        if not f.is_file():\n            continue\n        cat = categorize(f)\n        cat_dir = dir_path / cat\n        cat_dir.mkdir(exist_ok=True)\n        shutil.move(str(f), str(cat_dir / f.name))\n        print(f"Moved {f.name} → {cat}/")\n    print("\\nDone!")' },
      { type: "exercise", id: "py-proj-fileorg-ex2", title: "Organize Files", description: "Move files into category folders.", instructions: ["Create category folders", "Move each file to its category folder", "Print summary of what was moved"], code: "# File Organizer - Move\nfrom pathlib import Path\nimport shutil\n\nCATEGORIES = {\"Images\": [\".jpg\", \".png\"], \"Docs\": [\".txt\", \".md\"]}\n\ndef organize():\n    for f in Path(\".\").iterdir():\n        if not f.is_file() or f.name.startswith(\".\"):\n            continue\n        ext = f.suffix.lower()\n        for cat, exts in CATEGORIES.items():\n            if ext in exts:\n                cat_dir = Path(cat)\n                cat_dir.mkdir(exist_ok=True)\n                shutil.move(str(f), str(cat_dir / f.name))\n                print(f\"{f.name} → {cat}\")\n\norganize()", correctOutput: "photo.jpg → Images\nreadme.md → Docs", hint: "Use shutil.move(src, dst) to move files. Create dir with .mkdir(exist_ok=True)." },
      { type: "key-points", points: ["shutil.move() moves files between directories", ".mkdir(exist_ok=True) creates folders as needed", "Skip hidden files with f.name.startswith('.')"] },
    ],
    examPool: [
      { id: "py-proj-fileorg-q2", type: "true-false", difficulty: "medium", question: "shutil.move() can move files across different file systems.", correctAnswer: true, explanation: "shutil.move() handles both same-filesystem renames and cross-filesystem copies+deletes." },
    ],
    xpReward: 70,
    estimatedMinutes: 20,
    prerequisites: ["python-ch-proj-fileorg-1"],
    keyPoints: ["shutil.move() moves files between directories", ".mkdir(exist_ok=True) creates folders as needed", "Skip hidden files with f.name.startswith('.')"],
  },

  // ── Project 23: Web Scraper (after ch27 for errors, ch37 for requests) ──
  {
    id: "python-ch-proj-scraper-1",
    courseId: "python",
    title: "Web Scraper: Fetch & Parse",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a Web Scraper\n\nFetch web pages and extract information using `requests` and `BeautifulSoup`.\n\n**Install:** `pip install requests beautifulsoup4`" },
      { type: "code", language: "python", caption: "Fetching and parsing HTML:", content: 'import requests\nfrom bs4 import BeautifulSoup\n\nurl = "https://example.com"\nresponse = requests.get(url)\nsoup = BeautifulSoup(response.text, "html.parser")\n\nprint(f"Title: {soup.title.text}")\nprint(f"Links: {len(soup.find_all(\'a\'))}")' },
      { type: "exercise", id: "py-proj-scraper-ex1", title: "Fetch a Web Page", description: "Fetch a web page and parse it with BeautifulSoup.", instructions: ["Fetch a URL with requests.get()", "Parse with BeautifulSoup", "Extract the page title", "Print all h2 headings"], code: "# Web Scraper - Parse\nimport requests\nfrom bs4 import BeautifulSoup\n\nurl = input(\"URL: \")\nresponse = requests.get(url, timeout=10)\nsoup = BeautifulSoup(response.text, \"html.parser\")\n\nprint(f\"Title: {soup.title.text}\")\nprint(\"Headings:\")\nfor h2 in soup.find_all(\"h2\"):\n    print(f\"  - {h2.text.strip()}\")", correctOutput: "URL: https://example.com\nTitle: Example Domain\nHeadings:\n  - Example Heading", hint: "soup.title.text gets the title tag text. soup.find_all('h2') finds all h2 elements." },
      { type: "key-points", points: ["requests.get() fetches a web page", "BeautifulSoup parses HTML into a navigable tree", "soup.find_all() finds all matching HTML elements"] },
    ],
    examPool: [
      { id: "py-proj-scraper-q1", type: "multiple-choice", difficulty: "medium", question: "What does BeautifulSoup(response.text, 'html.parser') do?", options: [{ id: "a", text: "Parses the HTML string into a searchable tree" }, { id: "b", text: "Downloads the HTML from the response" }], correctAnswer: "a", explanation: "BeautifulSoup takes an HTML string and creates a parsed tree structure you can search and navigate." },
    ],
    xpReward: 75,
    estimatedMinutes: 25,
    prerequisites: ["python-ch27"],
    keyPoints: ["requests.get() fetches a web page", "BeautifulSoup parses HTML into a navigable tree", "soup.find_all() finds all matching HTML elements"],
  },
  {
    id: "python-ch-proj-scraper-2",
    courseId: "python",
    title: "Web Scraper: Extract Data",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Extract Structured Data\n\nExtract specific data from a page: all links (href), images (src), and text content." },
      { type: "code", language: "python", caption: "Extracting links and images:", content: 'def extract_links(soup):\n    links = []\n    for a in soup.find_all("a", href=True):\n        links.append({\n            "text": a.text.strip(),\n            "href": a["href"]\n        })\n    return links\n\ndef extract_images(soup):\n    return [img["src"] for img in soup.find_all("img", src=True)]\n\nlinks = extract_links(soup)\nfor l in links[:5]:\n    print(f"{l[\'text\']}: {l[\'href\']}")' },
      { type: "exercise", id: "py-proj-scraper-ex2", title: "Extract Data", description: "Extract links, images, and headings from a page.", instructions: ["Extract all links with href", "Extract all images with src", "Extract all headings", "Save results to JSON"], code: "# Web Scraper - Extract\nimport requests\nfrom bs4 import BeautifulSoup\nimport json\n\nurl = input(\"URL: \")\nsoup = BeautifulSoup(requests.get(url).text, \"html.parser\")\n\ndata = {\n    \"title\": soup.title.text if soup.title else \"\",\n    \"links\": [a[\"href\"] for a in soup.find_all(\"a\", href=True)],\n    \"images\": [img[\"src\"] for img in soup.find_all(\"img\", src=True)],\n    \"headings\": [h.text.strip() for h in soup.find_all([\"h1\", \"h2\", \"h3\"])],\n}\n\nwith open(\"scraped.json\", \"w\") as f:\n    json.dump(data, f, indent=2)\n\nprint(f\"Saved: {len(data[\'links\'])} links, {len(data[\'images\'])} images\")", correctOutput: "Saved: 15 links, 3 images", hint: "Use list comprehensions with conditions [a['href'] for a in soup.find_all('a', href=True)]." },
      { type: "key-points", points: ["List comprehensions efficiently extract HTML attributes", "href=True in find_all ensures the attribute exists", "JSON export saves structured data for analysis"] },
    ],
    examPool: [
      { id: "py-proj-scraper-q2", type: "multiple-choice", difficulty: "medium", question: "What does soup.find_all('a', href=True) return?", options: [{ id: "a", text: "All <a> tags that have an href attribute" }, { id: "b", text: "All <a> tags" }], correctAnswer: "a", explanation: "The href=True filter only returns <a> tags that have the href attribute." },
    ],
    xpReward: 85,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-scraper-1"],
    keyPoints: ["List comprehensions efficiently extract HTML attributes", "href=True in find_all ensures the attribute exists", "JSON export saves structured data for analysis"],
  },
  {
    id: "python-ch-proj-scraper-3",
    courseId: "python",
    title: "Web Scraper: Error Handling",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Robust Error Handling\n\nProduction scrapers need to handle network errors, timeouts, and unexpected HTML structures gracefully." },
      { type: "code", language: "python", caption: "Robust scraping:", content: 'import time\n\ndef fetch_safe(url, retries=3):\n    for i in range(retries):\n        try:\n            response = requests.get(url, timeout=10)\n            response.raise_for_status()\n            return response.text\n        except requests.RequestException as e:\n            print(f\"Attempt {i+1} failed: {e}\")\n            if i < retries - 1:\n                time.sleep(2)\n    return None' },
      { type: "exercise", id: "py-proj-scraper-ex3", title: "Robust Scraper", description: "Add retry logic and error handling.", instructions: ["Add retry logic with exponential backoff", "Handle HTTP errors (4xx, 5xx)", "Handle connection timeouts", "Gracefully handle missing HTML elements"], code: "# Web Scraper - Robust\nimport requests\nimport time\nfrom bs4 import BeautifulSoup\n\ndef fetch_safe(url, retries=3):\n    for i in range(retries):\n        try:\n            r = requests.get(url, timeout=10)\n            r.raise_for_status()\n            return r.text\n        except Exception as e:\n            print(f\"Attempt {i+1}/{retries}: {e}\")\n            time.sleep(1)\n    return None\n\nurl = input(\"URL: \")\nhtml = fetch_safe(url)\nif html:\n    soup = BeautifulSoup(html, \"html.parser\")\n    print(f\"Title: {soup.title.text if soup.title else \'N/A\'}\")\nelse:\n    print(\"Failed to fetch page\")", correctOutput: "Title: Example Domain", hint: "Use try/except for network errors. Check soup.title exists before accessing .text." },
      { type: "key-points", points: ["Retry logic handles transient network failures", "raise_for_status() checks for HTTP error codes", "Check elements exist before accessing their properties"] },
    ],
    examPool: [
      { id: "py-proj-scraper-q3", type: "true-false", difficulty: "medium", question: "response.raise_for_status() raises an exception for HTTP 4xx and 5xx status codes.", correctAnswer: true, explanation: "raise_for_status() checks if the HTTP response indicates an error and raises HTTPError if so." },
    ],
    xpReward: 90,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-scraper-2"],
    keyPoints: ["Retry logic handles transient network failures", "raise_for_status() checks for HTTP error codes", "Check elements exist before accessing their properties"],
  },

  // ── Project 24: REST API Client (after ch37 for requests, ch27 for errors) ──
  {
    id: "python-ch-proj-apiclient-1",
    courseId: "python",
    title: "REST API Client: GET Requests",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build a REST API Client\n\nInteract with REST APIs using the requests library. Start with GET requests to fetch data from a public API." },
      { type: "code", language: "python", caption: "GET request to JSONPlaceholder:", content: 'import requests\n\n# Free test API\nurl = "https://jsonplaceholder.typicode.com/posts"\nresponse = requests.get(url)\nposts = response.json()\n\nprint(f"Got {len(posts)} posts")\nprint(f"First post title: {posts[0][\'title\"]}")' },
      { type: "exercise", id: "py-proj-apiclient-ex1", title: "GET Request", description: "Fetch data from a REST API.", instructions: ["Send GET request to JSONPlaceholder", "Parse JSON response", "Print post titles and IDs"], code: "# REST Client - GET\nimport requests\n\nurl = \"https://jsonplaceholder.typicode.com/posts/1\"\nresponse = requests.get(url)\npost = response.json()\nprint(f\"Post #{post[\'id\']}\")\nprint(f\"Title: {post[\'title\"]}\")\nprint(f\"Body: {post[\'body\"]}")', correctOutput: "Post #1\nTitle: sunt aut facere repellat provident occaecati excepturi optio reprehenderit\nBody: quia et suscipit...", hint: "requests.get(url) sends a GET request. .json() parses the response." },
      { type: "key-points", points: ["GET requests retrieve data from APIs", ".json() parses JSON response bodies", "JSONPlaceholder is a free API for testing"] },
    ],
    examPool: [
      { id: "py-proj-apiclient-q1", type: "multiple-choice", difficulty: "easy", question: "What HTTP method retrieves data from an API?", options: [{ id: "a", text: "GET" }, { id: "b", text: "POST" }], correctAnswer: "a", explanation: "GET is the HTTP method for retrieving data. POST is for creating data." },
    ],
    xpReward: 65,
    estimatedMinutes: 20,
    prerequisites: ["python-ch27"],
    keyPoints: ["GET requests retrieve data from APIs", ".json() parses JSON response bodies", "JSONPlaceholder is a free API for testing"],
  },
  {
    id: "python-ch-proj-apiclient-2",
    courseId: "python",
    title: "REST API Client: CRUD Operations",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Full CRUD Operations\n\nImplement all four CRUD operations: Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE)." },
      { type: "code", language: "python", caption: "CRUD operations:", content: 'BASE = "https://jsonplaceholder.typicode.com/posts"\n\n# Create\nnew = requests.post(BASE, json={"title": "New Post", "body": "Content", "userId": 1})\nprint(f"Created: {new.json()[\'id\"]}")  # 101\n\n# Update\nupdated = requests.put(f"{BASE}/1", json={"title": "Updated"})\nprint(f"Updated: {updated.status_code}")  # 200\n\n# Delete\ndeleted = requests.delete(f"{BASE}/1")\nprint(f"Deleted: {deleted.status_code}")  # 200' },
      { type: "exercise", id: "py-proj-apiclient-ex2", title: "CRUD Operations", description: "Implement all CRUD operations with error handling.", instructions: ["POST to create a resource", "GET to read", "PUT to update", "DELETE to remove", "Handle HTTP errors"], code: "# REST Client - CRUD\nimport requests\n\nBASE = \"https://jsonplaceholder.typicode.com/posts\"\n\ntry:\n    # Create\n    r = requests.post(BASE, json={\"title\": \"Test\", \"body\": \"Hello\", \"userId\": 1})\n    r.raise_for_status()\n    print(f\"Created ID: {r.json()[\'id\"]}\")\n    \n    # Read\n    r = requests.get(f\"{BASE}/1\")\n    print(f\"Read: {r.json()[\'title\"]}\")\n    \n    # Delete\n    r = requests.delete(f\"{BASE}/1\")\n    print(f\"Deleted: {r.status_code}\")\nexcept requests.RequestException as e:\n    print(f\"Error: {e}\")", correctOutput: "Created ID: 101\nRead: sunt aut facere...\nDeleted: 200", hint: "Use requests.post(BASE, json=data) for POST. Use raise_for_status() for error checking." },
      { type: "key-points", points: ["POST creates resources, GET reads, PUT updates, DELETE removes", "json= parameter sends JSON request body", "raise_for_status() detects HTTP errors"] },
    ],
    examPool: [
      { id: "py-proj-apiclient-q2", type: "multiple-choice", difficulty: "medium", question: "Which requests method sends a JSON body automatically?", options: [{ id: "a", text: "All of them accept a json= parameter" }, { id: "b", text: "Only GET" }], correctAnswer: "a", explanation: "All requests methods (get, post, put, patch, delete) accept the json= parameter to send JSON data." },
    ],
    xpReward: 75,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-apiclient-1"],
    keyPoints: ["POST creates, GET reads, PUT updates, DELETE removes", "json= parameter sends JSON request body", "raise_for_status() detects HTTP errors"],
  },

  // ── Project 25: Expense Tracker (after ch24 for classes, ch28 file I/O, ch30 CSV) ──
  {
    id: "python-ch-proj-expense-1",
    courseId: "python",
    title: "Expense Tracker: Expense Class",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Build an Expense Tracker\n\nTrack daily expenses with categories, amounts, and dates. Start with the Expense class to model each transaction." },
      { type: "code", language: "python", caption: "Expense class:", content: 'from datetime import date\n\nclass Expense:\n    def __init__(self, amount, category, description, date=None):\n        self.amount = amount\n        self.category = category\n        self.description = description\n        self.date = date or date.today()\n    \n    def __str__(self):\n        return f"{self.date} | ${self.amount:.2f} | {self.category} | {self.description}"\n\n# Example\nlunch = Expense(15.50, "Food", "Lunch at cafe")\nprint(lunch)' },
      { type: "exercise", id: "py-proj-expense-ex1", title: "Expense Class", description: "Create the Expense class with amount, category, and description.", instructions: ["Define __init__ with amount, category, description", "Default date to date.today()", "Define __str__ for display", "Test with a few expenses"], code: "# Expense Tracker - Class\nfrom datetime import date\n\nclass Expense:\n    def __init__(self, amount, category, description, date=None):\n        self.amount = amount\n        self.category = category\n        self.description = description\n        self.date = date or date.today()\n    \n    def __str__(self):\n        return f\"{self.date} | ${self.amount:.2f} | {self.category}: {self.description}\"\n\n# Test\ne1 = Expense(25.00, \"Transport\", \"Uber ride\")\ne2 = Expense(50.00, \"Food\", \"Groceries\", date(2026, 7, 22))\nprint(e1)\nprint(e2)', correctOutput: "2026-07-23 | $25.00 | Transport: Uber ride\n2026-07-22 | $50.00 | Food: Groceries", hint: "Use date.today() as default. date(year, month, day) creates specific dates." },
      { type: "key-points", points: ["Classes model real-world entities like financial transactions", "Default parameters (date=None) provide flexibility", "datetime.date handles calendar dates"] },
    ],
    examPool: [
      { id: "py-proj-expense-q1", type: "multiple-choice", difficulty: "easy", question: "What does datetime.date.today() return?", options: [{ id: "a", text: "Today's date as a date object" }, { id: "b", text: "Today's date as a string" }], correctAnswer: "a", explanation: "date.today() returns a date object representing the current local date." },
    ],
    xpReward: 65,
    estimatedMinutes: 20,
    prerequisites: ["python-ch24"],
    keyPoints: ["Classes model real-world entities like financial transactions", "Default parameters provide flexibility", "datetime.date handles calendar dates"],
  },
  {
    id: "python-ch-proj-expense-2",
    courseId: "python",
    title: "Expense Tracker: Add & List",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Add and List Expenses\n\nCreate an ExpenseTracker class that manages a list of expenses with add, list, and total functionality." },
      { type: "code", language: "python", caption: "Expense tracker:", content: 'class ExpenseTracker:\n    def __init__(self):\n        self.expenses = []\n    \n    def add(self, expense):\n        self.expenses.append(expense)\n    \n    def total(self):\n        return sum(e.amount for e in self.expenses)\n    \n    def by_category(self, category):\n        return [e for e in self.expenses if e.category == category]\n    \n    def list_all(self):\n        for i, e in enumerate(self.expenses, 1):\n            print(f"{i}. {e}")' },
      { type: "exercise", id: "py-proj-expense-ex2", title: "Add, List, Total", description: "Build the ExpenseTracker with add, list, and totals.", instructions: ["Create ExpenseTracker class", "Implement add() and list_all()", "Add total() balance", "Add by_category() filter"], code: "# Expense Tracker - Manager\nfrom datetime import date\n\nclass Expense:\n    def __init__(self, amount, cat, desc, d=None):\n        self.amount = amount\n        self.category = cat\n        self.description = desc\n        self.date = d or date.today()\n    def __str__(self):\n        return f\"${self.amount:.2f} | {self.category}: {self.description}\"\n\nclass ExpenseTracker:\n    def __init__(self):\n        self.expenses = []\n    def add(self, e):\n        self.expenses.append(e)\n    def list_all(self):\n        for i, e in enumerate(self.expenses, 1):\n            print(f\"{i}. {e}\")\n    def total(self):\n        return sum(e.amount for e in self.expenses)\n\ntracker = ExpenseTracker()\ntracker.add(Expense(50, \"Food\", \"Lunch\"))\ntracker.add(Expense(30, \"Transport\", \"Bus pass\"))\ntracker.list_all()\nprint(f\"\\nTotal: ${tracker.total():.2f}\")", correctOutput: "1. $50.00 | Food: Lunch\n2. $30.00 | Transport: Bus pass\n\nTotal: $80.00", hint: "sum() with generator: sum(e.amount for e in self.expenses)." },
      { type: "key-points", points: ["A manager class orchestrates collections of objects", "List comprehensions filter data by category", "sum() with generator computes totals efficiently"] },
    ],
    examPool: [
      { id: "py-proj-expense-q2", type: "multiple-choice", difficulty: "medium", question: "What does sum(e.amount for e in self.expenses) compute?", options: [{ id: "a", text: "The total of all expense amounts" }, { id: "b", text: "The number of expenses" }], correctAnswer: "a", explanation: "The generator expression extracts each e.amount, and sum() adds them all together." },
    ],
    xpReward: 75,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-expense-1"],
    keyPoints: ["A manager class orchestrates collections of objects", "List comprehensions filter data by category", "sum() with generator computes totals efficiently"],
  },
  {
    id: "python-ch-proj-expense-3",
    courseId: "python",
    title: "Expense Tracker: CSV Export",
    order: nextOrder(),
    sections: [
      { type: "text", content: "## Export to CSV\n\nExport your expenses to a CSV file for spreadsheet analysis. Add the ability to save and load data." },
      { type: "code", language: "python", caption: "CSV export:", content: 'import csv\n\ndef save_to_csv(self, filename="expenses.csv"):\n    with open(filename, "w", newline="") as f:\n        writer = csv.writer(f)\n        writer.writerow(["date", "category", "description", "amount"])\n        for e in self.expenses:\n            writer.writerow([e.date, e.category, e.description, e.amount])\n    print(f"Saved {len(self.expenses)} expenses to {filename}")\n\ndef load_from_csv(self, filename="expenses.csv"):\n    try:\n        with open(filename, "r") as f:\n            reader = csv.DictReader(f)\n            for row in reader:\n                exp = Expense(float(row["amount"]), row["category"], row["description"],\n                             date.fromisoformat(row["date"]))\n                self.expenses.append(exp)\n        print(f"Loaded {len(self.expenses)} expenses")\n    except FileNotFoundError:\n        pass' },
      { type: "exercise", id: "py-proj-expense-ex3", title: "Complete Expense Tracker", description: "Add CSV export and a menu interface.", instructions: ["Implement save_to_csv()", "Implement load_from_csv()", "Build a menu: add, list, total, by-category, export", "Data persists between runs"], code: "# Complete Expense Tracker\nfrom datetime import date\nimport csv\n\nclass Expense:\n    def __init__(self, amount, cat, desc, d=None):\n        self.amount = amount\n        self.category = cat\n        self.description = desc\n        self.date = d or date.today()\n    def __str__(self):\n        return f\"{self.date} | ${self.amount:.2f} | {self.category}\"\n\nclass ExpenseTracker:\n    def __init__(self):\n        self.expenses = []\n    def add(self, e):\n        self.expenses.append(e)\n    def total(self):\n        return sum(e.amount for e in self.expenses)\n    def list_all(self):\n        for i, e in enumerate(self.expenses, 1):\n            print(f\"{i}. {e}\")\n    def save_csv(self):\n        with open(\"expenses.csv\", \"w\", newline=\"\") as f:\n            w = csv.writer(f)\n            w.writerow([\"date\", \"category\", \"description\", \"amount\"])\n            for e in self.expenses:\n                w.writerow([e.date, e.category, e.description, e.amount])\n        print(f\"Saved to expenses.csv\")\n\ntracker = ExpenseTracker()\ntracker.add(Expense(50, \"Food\", \"Lunch\"))\ntracker.add(Expense(30, \"Transport\", \"Bus\"))\ntracker.list_all()\nprint(f\"Total: ${tracker.total():.2f}\")\ntracker.save_csv()', correctOutput: "1. 2026-07-23 | $50.00 | Food\n2. 2026-07-23 | $30.00 | Transport\nTotal: $80.00\nSaved to expenses.csv", hint: "Use csv.writer and writer.writerow() for CSV. Open with newline='' per best practice." },
      { type: "key-points", points: ["CSV export makes data usable in spreadsheets", "csv.writer writes rows to CSV files", "Persistence means data survives program restarts"] },
    ],
    examPool: [
      { id: "py-proj-expense-q3", type: "true-false", difficulty: "medium", question: "CSV files opened for writing should use newline=''.", correctAnswer: true, explanation: "On some platforms, CSV writers add extra blank lines. newline='' prevents this." },
    ],
    xpReward: 85,
    estimatedMinutes: 25,
    prerequisites: ["python-ch-proj-expense-2"],
    keyPoints: ["CSV export makes data usable in spreadsheets", "csv.writer writes rows to CSV files", "Persistence means data survives program restarts"],
  },
];
