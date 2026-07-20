import { writeFileSync } from "fs";

// ─── Helpers ──────────────────────────────────────────
const MC = (id, d, q, a, b, c, d_, ca, e) => ({ id, type: "multiple-choice", difficulty: d, question: q, options: [{ id: "a", text: a }, { id: "b", text: b }, { id: "c", text: c }, { id: "d", text: d_ }], correctAnswer: ca, explanation: e });
const TF = (id, d, q, ca, e) => ({ id, type: "true-false", difficulty: d, question: q, correctAnswer: ca, explanation: e });
const FB = (id, d, q, a, aa, e) => ({ id, type: "fill-blank", difficulty: d, question: q, correctAnswer: a, acceptableAnswers: aa, explanation: e });
const CO = (id, d, q, l, o, e) => ({ id, type: "code-order", difficulty: d, question: q, codeLines: l, correctOrder: o, explanation: e });
const MP = (id, d, q, l, r, m, e) => ({ id, type: "match-pairs", difficulty: d, question: q, leftItems: l, rightItems: r, correctMatches: m, explanation: e });
const T = c => ({ type: "text", content: c });
const C = (c, l, cap) => ({ type: "code", content: c, language: l, caption: cap });
const CA = (s, c) => ({ type: "callout", style: s, content: c });
const L = (items, o = false) => ({ type: "list", items, ordered: o });
const COMP = (t, h, r) => ({ type: "comparison", title: t, headers: h, rows: r });
const KP = p => ({ type: "key-points", points: p });

// ─── Chapter Generator ────────────────────────────────
let qid = 0;
const nid = (p) => `q-${p}-${++qid}`;

function genQuestions(chapterId, pool) {
  qid = 0;
  return pool.map(fn => fn(chapterId));
}

// ─── All 75 Chapter Definitions ──────────────────────

const CHAPTERS = [];

// 1: js-introduction
CHAPTERS.push({
  id: "js-introduction", title: "JavaScript Introduction", order: 1,
  sections: [
    T("JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is one of the three core technologies of the World Wide Web, alongside HTML and CSS. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it."),
    T("Originally developed by Brendan Eich at Netscape in 1995, JavaScript has evolved from a simple scripting language into a versatile, multi-paradigm language that supports event-driven, functional, and imperative programming styles. It has grown beyond the browser to power servers (Node.js), mobile apps (React Native), desktop applications (Electron), and even hardware (IoT devices)."),
    T("JavaScript is a dynamic, prototype-based language with first-class functions. It is single-threaded but handles asynchronous operations through an event loop and callback queue. Understanding JavaScript's execution model — the call stack, event loop, and memory heap — is crucial for writing efficient, bug-free code. The language continues to evolve yearly with new ECMAScript specifications adding powerful features such as optional chaining, nullish coalescing, and top-level await."),
    C(`// Hello, World! in JavaScript\nconsole.log('Hello, World!');\n\n// A simple interactive script\nconst name = prompt('What is your name?');\nalert(\`Hello, \${name}! Welcome to JavaScript.\`);`, "javascript", "Your first JavaScript code"),
    CA("tip", "JavaScript is NOT the same as Java! Despite the similar name, they are entirely different languages with different syntax, semantics, and use cases. JavaScript was originally called LiveScript but was renamed for marketing reasons."),
    L(["JavaScript is the language of the web — runs in every browser", "It's a high-level, interpreted, multi-paradigm language", "ECMAScript is the standardized specification that JavaScript follows", "JavaScript engines (V8, SpiderMonkey, JavaScriptCore) compile JS to machine code at runtime", "Modern JavaScript (ES6+) added classes, modules, arrow functions, promises, and more"]),
    KP(["JavaScript is a high-level, interpreted programming language for web interactivity", "Created by Brendan Eich at Netscape in 1995", "Not related to Java — different languages entirely", "Runs in browsers (client-side) and on servers via Node.js", "Follows the ECMAScript standard, updated yearly"])
  ],
  questions: (id) => [
    MC(`${id}-1`,"easy","Who created JavaScript?","Brendan Eich","Tim Berners-Lee","Larry Page","Guido van Rossum","a","Brendan Eich created JavaScript in 1995 while working at Netscape."),
    MC(`${id}-2`,"easy","What is the standardized specification that JavaScript follows?","TypeScript","WebAssembly","ECMAScript","CommonJS","c","JavaScript conforms to the ECMAScript specification."),
    TF(`${id}-3`,"easy","JavaScript and Java are the same programming language.",false,"Despite the similar name, JavaScript and Java are entirely different languages."),
    MC(`${id}-4`,"easy","What year was JavaScript created?","1990","1995","2000","2005","b","JavaScript was created in 1995 by Brendan Eich at Netscape."),
    TF(`${id}-5`,"easy","JavaScript can only run in web browsers.",false,"JavaScript runs in browsers, on servers via Node.js, in mobile apps, and desktop apps."),
    MC(`${id}-6`,"easy","Which of the following is NOT a JavaScript engine?","V8","SpiderMonkey","JavaScriptCore","WebKitCSS","d","WebKitCSS is not a JavaScript engine."),
    MC(`${id}-7`,"easy","What was JavaScript originally called?","Java","LiveScript","WebScript","NetScript","b","JavaScript was originally called LiveScript."),
    TF(`${id}-8`,"easy","JavaScript is a compiled language.",false,"JavaScript is interpreted with JIT compilation."),
    MC(`${id}-9`,"medium","Which company created JavaScript?","Microsoft","Google","Netscape","Mozilla","c","JavaScript was created at Netscape."),
    FB(`${id}-10`,"easy","JavaScript conforms to the ________ specification.","ECMAScript",["ECMA","EcmaScript"],"JavaScript follows the ECMAScript standard."),
    TF(`${id}-11`,"medium","JavaScript supports multiple programming paradigms.",true,"JavaScript supports object-oriented, functional, and imperative styles."),
    MC(`${id}-12`,"medium","What does JIT stand for?","Just-In-Time compilation","Java Integration Technology","JavaScript Internal Tool","Joint Instruction Table","a","JIT stands for Just-In-Time compilation."),
    MC(`${id}-13`,"medium","What is the relationship between JavaScript and ECMAScript?","They are the same","ECMAScript is the standard, JavaScript is an implementation","JavaScript is the standard","They are unrelated","b","ECMAScript is the standardized specification."),
    FB(`${id}-14`,"medium","The JavaScript engine used in Chrome is called ________.","V8",["V8 engine"],"Google Chrome uses the V8 JavaScript engine."),
    TF(`${id}-15`,"medium","JavaScript is a single-threaded language.",true,"JavaScript is single-threaded with an event loop for async operations."),
    MC(`${id}-16`,"hard","What does the event loop do?","Compiles JS to machine code","Manages async callbacks by checking call stack and callback queue","Allocates memory","Handles network requests","b","The event loop checks if the call stack is empty and pushes pending callbacks."),
    MP(`${id}-17`,"medium","Match engines to browsers:",["V8","SpiderMonkey","JavaScriptCore","Chakra"],["Chrome","Firefox","Safari","Edge (legacy)"],[[0,0],[1,1],[2,2],[3,3]],"V8 is Chrome's engine, SpiderMonkey is Firefox's, JavaScriptCore is Safari's."),
    TF(`${id}-18`,"easy","Node.js allows JavaScript to run on servers.",true,"Node.js is a JavaScript runtime built on Chrome's V8 engine."),
    MC(`${id}-19`,"easy","Which statement about JavaScript is FALSE?","JS can manipulate HTML and CSS","JS is case-sensitive","JS requires a compiler to run","JS supports first-class functions","c","JavaScript is interpreted, not compiled."),
    FB(`${id}-20`,"easy","The method to print messages to the console is console.____().","log",["log"],"console.log() prints messages to the browser console."),
    MC(`${id}-21`,"medium","What does ES6 refer to?","ECMAScript 2015","JavaScript Version 6","Enterprise Script 6","Enhanced Syntax 6","a","ES6 is ECMAScript 2015, a major update to JavaScript."),
    CO(`${id}-22`,"medium","Arrange these lines for a simple greeting program:",["const name = prompt('What is your name?');","alert(\`Hello, \${name}!\`);","console.log('Name entered:', name);"],[0,1,2],"Ask for name, show greeting, then log."),
    TF(`${id}-23`,"medium","JavaScript was standardized as ECMAScript by ECMA International.",true,"JavaScript was submitted to ECMA International for standardization."),
    MC(`${id}-24`,"hard","Which is NOT a valid use case for JavaScript?","Server-side web apps","Mobile apps","Direct hardware driver development","Desktop apps","c","JavaScript is not used for hardware driver development."),
    FB(`${id}-25`,"hard","The three core web technologies are HTML, CSS, and ________.","JavaScript",["Javascript","JS"],"HTML provides structure, CSS styling, JavaScript interactivity."),
    MC(`${id}-26`,"medium","What is the role of the call stack?","Stores variables","Tracks function calls and execution context","Manages network requests","Handles CSS","b","The call stack tracks function calls in a single-threaded environment."),
    TF(`${id}-27`,"hard","JavaScript uses prototypal inheritance, not classical inheritance.",true,"JavaScript uses prototypal inheritance where objects inherit from other objects."),
    MC(`${id}-28`,"hard","What was JavaScript's original code name?","Mocha","LiveScript","WebScript","Both Mocha and LiveScript","d","The language was code-named Mocha, then LiveScript, then JavaScript."),
    MP(`${id}-29`,"hard","Match ES version with feature:",["ES3 (1999)","ES5 (2009)","ES6 (2015)","ES7 (2016)"],["Added try/catch and regex","Added strict mode and JSON","Added let, const, promises","Added exponentiation operator"],[[0,0],[1,1],[2,2],[3,3]],"Each version introduced significant features."),
    MC(`${id}-30`,"easy","Can you run JavaScript without a browser?","No","Yes, using Node.js","Only on Windows","Only with a plugin","b","Node.js enables server-side JavaScript."),
    FB(`${id}-31`,"medium","Modern JS engines use ________ compilation at runtime.","Just-In-Time",["JIT","Just in Time"],"JIT compilation improves JavaScript performance."),
    TF(`${id}-32`,"easy","JavaScript is primarily used for interactive web pages.",true,"JavaScript's primary use is adding interactivity to web pages."),
    MC(`${id}-33`,"medium","Who maintains the ECMAScript specification?","Mozilla","TC39 committee","Google","W3C","b","TC39 maintains and evolves the ECMAScript specification."),
    FB(`${id}-34`,"hard","The three parts of JS concurrency model are call stack, event loop, and ________.","callback queue",["message queue","task queue"],"The callback queue holds callbacks for the event loop."),
    MC(`${id}-35`,"medium","JavaScript is classified as what type of language?","Compiled, statically-typed","Interpreted, dynamically-typed","Compiled, dynamically-typed","Interpreted, statically-typed","b","JavaScript is interpreted (or JIT-compiled) and dynamically typed.")
  ],
  xp: 15, min: 6, prereqs: [], points: ["JavaScript is a high-level, interpreted programming language for web interactivity","Created by Brendan Eich at Netscape in 1995","Not related to Java — different languages entirely","Runs in browsers (client-side) and on servers via Node.js","Follows the ECMAScript standard, updated yearly"]
});

// 2: js-where-to
CHAPTERS.push({
  id: "js-where-to", title: "Where to Insert JavaScript", order: 2,
  sections: [
    T("JavaScript can be placed in three main locations within a web project: inline within HTML elements via event attributes, embedded directly in the HTML document using `<script>` tags, or in external `.js` files linked via the `<script src=\"...\">` tag. Each approach has its own use cases, advantages, and trade-offs related to maintainability, performance, and browser caching."),
    T("The most common and recommended approach for production code is to use external JavaScript files. External scripts keep HTML and JavaScript separate, making the code easier to maintain, debug, and cache. Browsers can cache external .js files, so returning visitors don't need to re-download them. External files also allow the same script to be used across multiple pages without duplication, following the DRY (Don't Repeat Yourself) principle."),
    T("Script placement significantly impacts page load performance. Scripts in the `<head>` block HTML parsing until downloaded and executed. Modern best practice places scripts just before `</body>` or uses `defer` (executes after HTML parsing) or `async` (executes as soon as downloaded). The `defer` attribute preserves execution order and is ideal for scripts that depend on the DOM. The `async` attribute is best for independent scripts like analytics."),
    C(`<!-- 1. Inline JavaScript -->\n<button onclick="alert('Clicked!')">Click Me</button>\n\n<!-- 2. Internal JavaScript -->\n<script>\n  console.log('Hello from internal JS!');\n</script>\n\n<!-- 3. External JavaScript (recommended) -->\n<script src="script.js"></script>\n\n<!-- 4. With defer attribute -->\n<script src="script.js" defer></script>\n\n<!-- 5. With async attribute -->\n<script src="analytics.js" async></script>\n\n<!-- 6. Module script -->\n<script type="module" src="app.mjs"></script>`, "html", "Six ways to include JavaScript in HTML"),
    CA("tip", "Always use external JavaScript files for production. Use `defer` for scripts that need the DOM (most scripts). Use `async` for independent scripts like analytics. Module scripts (`type=\"module\"`) are deferred by default."),
    COMP("Script Loading Behaviors", ["Attribute", "Download", "Execution Order", "When Executes"], [
      ["None (in <head>)", "Blocks parsing", "N/A", "Immediately, blocking HTML parse"],
      ["None (before </body>)", "After HTML parsed", "Document order", "After full HTML load"],
      ["defer", "In parallel with parsing", "Preserved", "After HTML parsing"],
      ["async", "In parallel with parsing", "Not preserved", "As soon as downloaded"]
    ]),
    KP(["JavaScript can be inline, internal (<script>), or external (.js file)", "External files are cached by browsers, improving performance", "Place <script> before </body> or use defer/async", "defer waits for HTML parsing; async executes immediately when ready", "Module scripts (type=\"module\") are deferred by default"])
  ],
  questions: (id) => [
    MC(`${id}-1`,"easy","Which HTML tag embeds JavaScript?","<javascript>","<script>","<js>","<code>","b","The <script> tag is used for JavaScript."),
    MC(`${id}-2`,"easy","What attribute links an external JS file?","href","src","link","file","b","The src attribute specifies the external script URL."),
    TF(`${id}-3`,"easy","External JS files are cached by browsers.",true,"External .js files are cached, improving performance on return visits."),
    MC(`${id}-4`,"easy","Best place for <script> for optimal loading?","In <head>","Before closing </body>","At beginning of document","Inside a <div>","b","Scripts before </body> let HTML load first."),
    MC(`${id}-5`,"medium","What does defer do?","Delays execution until HTML is parsed","Defers alert messages","Prevents script loading","Loads from backup server","a","defer executes script after HTML parsing completes."),
    MC(`${id}-6`,"medium","Difference between defer and async?","They are the same","defer preserves order and waits for HTML; async executes when downloaded","async preserves order","defer only works with inline scripts","b","defer preserves order; async executes as soon as downloaded."),
    TF(`${id}-7`,"medium","A <script> in <head> without defer blocks HTML parsing.",true,"Scripts in <head> block parsing until downloaded and executed."),
    MC(`${id}-8`,"easy","What file extension for external JavaScript?",".jvs",".java",".js",".script","c","JavaScript files use the .js extension."),
    FB(`${id}-9`,"easy","Use the _____ attribute in <script> to link an external file.","src",["src=","source"],"The src attribute specifies the external file path."),
    TF(`${id}-10`,"easy","JavaScript can be placed directly in HTML onclick attributes.",true,"Inline JavaScript can be placed in event handler attributes."),
    MC(`${id}-11`,"medium","Which approach is recommended for production?","Inline JavaScript","Internal <script>","External JavaScript files","All are equal","c","External files improve maintainability and caching."),
    MC(`${id}-12`,"medium","Two deferred scripts: script1.js then script2.js — what order?","Random","script1 always before script2","script2 always before script1","Only script1 executes","b","Deferred scripts execute in document order."),
    FB(`${id}-13`,"medium","The attribute that loads a script in parallel and executes when ready is _____.","async",["async"],"async downloads in parallel and executes as soon as available."),
    TF(`${id}-14`,"hard","A script with both defer and async uses defer behavior.",false,"async takes precedence over defer when both are present."),
    MC(`${id}-15`,"hard","What does the integrity attribute do?","Ensures trusted source","Verifies script hasn't been tampered with using a hash","Integrates script with DOM","Checks syntax","b","Integrity verifies the fetched script hasn't been modified."),
    MP(`${id}-16`,"medium","Match loading strategy with behavior:",["No attribute in <head>","defer","async","Module script"],["Blocks parsing","Executes after HTML parsed","Executes when downloaded","Deferred by default"],[[0,0],[1,1],[2,2],[3,3]],"Each loading strategy has distinct behavior."),
    MC(`${id}-17`,"easy","Can you have multiple <script> tags?","No","Yes, as many as needed","Only two","No, scripts must be in one file","b","You can include as many <script> tags as needed."),
    TF(`${id}-18`,"easy","Inline JavaScript can be placed in event attributes like onclick.",true,"Event handler attributes accept inline JavaScript."),
    MC(`${id}-19`,"medium","Benefit of scripts before </body>?","Scripts execute faster","HTML renders before scripts load","Scripts are minified automatically","Scripts don't run","b","HTML content renders before scripts, improving perceived performance."),
    FB(`${id}-20`,"easy","The HTML tag for JavaScript is the _____ tag.","script",["script"],"The <script> tag embeds or references JavaScript."),
    CO(`${id}-21`,"medium","Arrange to properly include an external script with defer:",["<script","src=\"app.js\"","defer>","</script>"],[0,1,2,3],"The correct syntax is <script src=\"app.js\" defer></script>."),
    TF(`${id}-22`,"medium","defer is better than async for DOM-manipulating scripts.",true,"defer ensures the DOM is fully parsed before execution."),
    MC(`${id}-23`,"hard","What does crossorigin do on a <script>?","Enables CORS behavior","Creates cross-platform script","Cross-references another script","Allows cross-page boundary","a","crossorigin configures CORS settings for external scripts."),
    MP(`${id}-24`,"hard","Match script type with description:",["Internal script","External script","Inline handler","Module script"],["Code in <script> tags","Code in .js file via src","JS in HTML attributes","Script with import/export"],[[0,0],[1,1],[2,2],[3,3]],"Each approach serves different use cases."),
    MC(`${id}-25`,"easy","Which attribute specifies the URL of an external script?","link","ref","src","url","c","src (source) specifies the external script URL."),
    TF(`${id}-26`,"easy","External .js files can contain HTML tags.",false,"External .js files should contain only JavaScript code."),
    FB(`${id}-27`,"hard","The type attribute for ES module scripts is _____.","module",["module"],"Use type=\"module\" for ES module scripts."),
    MC(`${id}-28`,"medium","What does nomodule do?","Prevents script from being a module","Script runs only in browsers without module support","Names the module","Notifies server about module","b","nomodule serves as a fallback for non-module browsers."),
    CO(`${id}-29`,"hard","Arrange for a module script tag:",["<script type=\"module\"","src=\"app.mjs\"",">","</script>"],[0,1,2,3],"Module scripts have type=\"module\" attribute."),
    MC(`${id}-30`,"easy","Script tag is paired or self-closing?","Self-closing","Paired <script></script>","Doesn't need closing","Depends on doctype","b","<script> requires both opening and closing tags."),
    TF(`${id}-31`,"medium","Multiple src attributes on one <script> tag are valid.",false,"A single <script> tag can only have one src attribute."),
    FB(`${id}-32`,"medium","The charset attribute specifies the _____ encoding of an external script.","character",["character"],"charset specifies the character encoding of the external file."),
    MC(`${id}-33`,"hard","Both async and defer on same tag?","Neither applies","async takes precedence","defer takes precedence","Script throws error","b","async takes precedence over defer in modern browsers."),
    MC(`${id}-34`,"easy","Which approach allows best browser caching?","Inline scripts","Internal scripts","External .js files","Event attributes","c","External .js files are cached by browsers."),
    TF(`${id}-35`,"medium","Module scripts (<script type=\"module\">) are deferred by default.",true,"Module scripts automatically behave as if they have the defer attribute.")
  ],
  xp: 15, min: 6, prereqs: ["js-introduction"], points: ["JavaScript can be inline, internal (<script> tag), or external (.js file)","External files are cached by browsers, improving load time on return visits","Place <script> before </body> or use defer/async for optimal loading","defer waits for HTML parsing; async downloads in parallel and executes immediately","Inline JavaScript should be minimal — use it sparingly"]
});

// 3: js-output
CHAPTERS.push({
  id: "js-output", title: "JavaScript Output Methods", order: 3,
  sections: [
    T("JavaScript provides several ways to display output or interact with users. Each method serves a different purpose: `console.log()` for debugging, `document.write()` for writing directly to the HTML document, `alert()` for popup messages, `confirm()` for user confirmation dialogs, `prompt()` for collecting user input, and DOM manipulation methods like `innerHTML` and `textContent` for updating specific page elements."),
    T("The console is the developer's best friend. `console.log()` prints messages to the browser's developer console — invisible to users but invaluable for debugging. Beyond `log()`, the console API includes `console.error()`, `console.warn()`, `console.table()`, `console.group()`, `console.time()`, `console.count()`, and `console.assert()` for specialized debugging needs. Professional developers use these constantly during development."),
    T("For user-facing output, DOM manipulation is the modern approach. Methods like `document.getElementById('output').textContent = 'Hello'` update specific page parts without disrupting the entire document. `alert()`, `confirm()`, and `prompt()` are blocking dialogs that halt JavaScript execution until dismissed. They should be used sparingly as they create poor user experiences and cannot be styled."),
    C(`// Console methods\nconsole.log('Standard log');\nconsole.error('Error message');\nconsole.warn('Warning message');\nconsole.table([{name: 'Alice', age: 30}, {name: 'Bob', age: 25}]);\nconsole.time('timer');\n// ... operations ...\nconsole.timeEnd('timer');\n\n// DOM output (modern approach)\ndocument.getElementById('output').textContent = 'Hello';\ndocument.getElementById('output').innerHTML = '<b>Bold text</b>';\n\n// Blocking dialogs (avoid in production)\nalert('Alert message');\nconst confirmed = confirm('Are you sure?');\nconst name = prompt('Your name?');`, "javascript", "JavaScript output and debugging methods"),
    CA("warning", "Avoid `document.write()` after the HTML document has loaded — it will overwrite the entire page content. This method is deprecated for most use cases. Use DOM manipulation methods instead."),
    COMP("Output Methods", ["Method", "Purpose", "Blocking"], [
      ["console.log()", "Debugging output", "No"],
      ["alert()", "Popup message", "Yes"],
      ["confirm()", "Yes/No dialog", "Yes"],
      ["prompt()", "Text input dialog", "Yes"],
      ["textContent", "Update element text", "No"],
      ["innerHTML", "Update element HTML", "No"]
    ]),
    KP(["console.log() is the primary debugging tool — use it constantly","alert(), confirm(), and prompt() block execution — use sparingly","DOM manipulation (textContent, innerHTML) is the modern approach","document.write() is deprecated and should be avoided","Console API includes error, warn, table, group, and time methods"])
  ],
  questions: (id) => [
    MC(`${id}-1`,"easy","Which method prints to the browser console?","console.print()","console.log()","console.write()","console.output()","b","console.log() prints to the developer console."),
    TF(`${id}-2`,"easy","alert() displays a popup message to the user.",true,"alert() shows a modal dialog with a message."),
    MC(`${id}-3`,"easy","Which returns true/false based on user selection?","alert()","prompt()","confirm()","ask()","c","confirm() returns true for OK, false for Cancel."),
    MC(`${id}-4`,"easy","What does prompt() return if user clicks Cancel?","false","null","''","undefined","b","prompt() returns null when cancelled."),
    MC(`${id}-5`,"medium","Which console method displays tabular data?","console.tab()","console.grid()","console.table()","console.matrix()","c","console.table() displays data in a formatted table."),
    TF(`${id}-6`,"medium","document.write() after page load replaces the entire page.",true,"document.write() overwrites the document if called after load."),
    FB(`${id}-7`,"easy","console.____() and console.____() measure operation times.","time timeEnd",["time() and timeEnd()"],"console.time() starts a timer, console.timeEnd() stops it."),
    MC(`${id}-8`,"medium","Which property sets/returns text content without HTML tags?","innerHTML","textContent","outerHTML","nodeValue","b","textContent returns text without HTML tags."),
    TF(`${id}-9`,"easy","Console output is visible to website users.",false,"Console output is only visible in developer tools."),
    MC(`${id}-10`,"easy","Which method collects text input via popup?","input()","prompt()","ask()","read()","b","prompt() displays a dialog with a text input field."),
    TF(`${id}-11`,"medium","alert(), confirm(), prompt() all block JS execution.",true,"These methods are synchronous and block until dismissed."),
    MC(`${id}-12`,"medium","Difference between innerHTML and textContent?","They are the same","innerHTML parses HTML; textContent treats as plain text","textContent parses HTML","innerHTML is faster","b","innerHTML renders HTML tags; textContent escapes them."),
    FB(`${id}-13`,"easy","The console method for error messages is console.____().","error",["error"],"console.error() outputs styled error messages."),
    MC(`${id}-14`,"medium","Which creates a collapsible console group?","console.box()","console.collapse()","console.group()","console.pack()","c","console.group() creates collapsible groups."),
    TF(`${id}-15`,"medium","console.time() and console.timeEnd() measure performance.",true,"console.time()/timeEnd() measure elapsed time."),
    MP(`${id}-16`,"medium","Match console method with purpose:",["console.log()","console.error()","console.warn()","console.table()"],["General logging","Error messages","Warning messages","Tabular display"],[[0,0],[1,1],[2,2],[3,3]],"Each method has a specific visual style."),
    CO(`${id}-17`,"easy","Arrange to log an error:",["console.error(","'Something went wrong!'",");"],[0,1,2],"console.error() is called with an error message."),
    MC(`${id}-18`,"hard","console.log() with multiple arguments?","Only logs first","Concatenates them","Logs each separated by space","Throws error","c","Multiple arguments are logged separated by spaces."),
    FB(`${id}-19`,"medium","The property to get/set HTML content is _____.","innerHTML",["innerHTML"],"innerHTML gets or sets HTML markup."),
    MC(`${id}-20`,"hard","Which is NOT a valid console method?","console.assert()","console.count()","console.lookup()","console.dir()","c","console.lookup() is not a valid method."),
    TF(`${id}-21`,"easy","Developer console opens with F12 or Ctrl+Shift+I.",true,"The console is accessible in all modern browsers."),
    MC(`${id}-22`,"hard","What does %c in console.log() do?","Creates a group","Applies CSS styles to output","Counts logs","Clears console","b","%c applies CSS styling to console output."),
    MP(`${id}-23`,"easy","Match dialog with return:",["alert()","confirm() OK","confirm() Cancel","prompt() Cancel"],["undefined","true","false","null"],[[0,0],[1,1],[2,2],[3,3]],"Each dialog returns a specific value."),
    TF(`${id}-24`,"medium","console.dir() shows an interactive object tree.",true,"console.dir() displays an interactive property listing."),
    FB(`${id}-25`,"hard","console.____() writes message only if assertion is false.","assert",["assert"],"console.assert() writes if the assertion is false."),
    MC(`${id}-26`,"medium","How to write multiple items on one console line?","console.log('a'+'b')","console.log('a','b')","Both work","Neither","c","Both concatenation and multiple arguments work."),
    CO(`${id}-27`,"medium","Arrange by severity (least to most):",["console.log('info')","console.warn('caution')","console.error('critical')"],[0,1,2],"Log is neutral, warn yellow, error red."),
    MC(`${id}-28`,"easy","What does document.write('Hello') do?","Writes to console","Writes to HTML document","Shows alert","Returns string","b","document.write() writes to the HTML document."),
    TF(`${id}-29`,"easy","confirm() asks the user a yes/no question.",true,"confirm() shows OK/Cancel for yes/no questions."),
    FB(`${id}-30`,"medium","console.____() logs how many times it was called with a label.","count",["count"],"console.count() tracks call counts."),
    MC(`${id}-31`,"hard","Output of: console.log(typeof console.log)","undefined","object","function","string","c","typeof console.log returns 'function'."),
    MP(`${id}-32`,"hard","Match method to use:",["console.trace()","console.groupCollapsed()","console.clear()","console.profile()"],["Outputs stack trace","Creates collapsed group","Clears console","Starts CPU profile"],[[0,0],[1,1],[2,2],[3,3]],"These are advanced console debugging methods."),
    TF(`${id}-33`,"medium","console.log() supports template literals and format strings.",true,"console.log() supports `\${}` and %s, %d specifiers."),
    FB(`${id}-34`,"hard","console.____() outputs an object's properties in a tree.","dir",["dir"],"console.dir() displays an interactive property tree."),
    MC(`${id}-35`,"easy","Recommended way to update specific page content?","document.write()","alert()","DOM manipulation (textContent)","console.log()","c","DOM manipulation is the modern, recommended approach.")
  ],
  xp: 15, min: 6, prereqs: ["js-where-to"], points: ["console.log() is the primary debugging tool — use it constantly","alert(), confirm(), and prompt() block execution — use sparingly","DOM manipulation (textContent, innerHTML) is the modern approach for page updates","document.write() is deprecated and should be avoided","Console API includes error, warn, table, group, and time methods"]
});

// 4: js-syntax
CHAPTERS.push({
  id: "js-syntax", title: "JavaScript Syntax", order: 4,
  sections: [
    T("JavaScript syntax is the set of rules that defines how JavaScript programs are constructed. The syntax was heavily influenced by C and Java, making it familiar to developers from those backgrounds. JavaScript programs are composed of statements, which are executed by the browser's JavaScript engine in a specific order. Each statement ends with a semicolon, though semicolons are optional in many cases due to Automatic Semicolon Insertion (ASI)."),
    T("Values in JavaScript come in two forms: fixed values called literals (like numbers, strings, booleans) and variable values stored in containers called variables. JavaScript is case-sensitive, meaning `myVariable` and `MyVariable` are different identifiers. Identifiers must start with a letter, underscore (_), or dollar sign ($), and can contain letters, digits, underscores, or dollar signs. Reserved keywords like `if`, `for`, and `class` cannot be used as identifiers."),
    T("JavaScript ignores whitespace and line breaks, allowing flexible formatting. However, Automatic Semicolon Insertion (ASI) can cause subtle bugs. ASI inserts semicolons at line breaks when the next line starts with code that couldn't be a continuation of the current statement. This can lead to unexpected behavior, famously with `return` statements where the return value on a new line causes the function to return `undefined`."),
    C(`// JavaScript syntax basics\n// Statements are instructions\nlet x = 5;\nlet y = 10;\nlet sum = x + y;\n\n// Identifiers — case-sensitive\nlet myVariable = 'Hello';\nlet MyVariable = 'World'; // Different variable!\nlet _privateVar = 'underscore';\nlet $dollar = 'dollar sign';\n\n// Values — literals and variables\nconsole.log(42);        // Number literal\nconsole.log('Hello');   // String literal\nconsole.log(true);      // Boolean literal\nconsole.log(sum);       // Variable\n\n// ASI pitfall\nfunction getObj() {\n  return\n  { value: 42 }; // Returns undefined!\n}`, "javascript", "JavaScript syntax fundamentals"),
    CA("info", "JavaScript is case-sensitive. `firstName` and `firstname` are different variables. By convention, JavaScript developers use camelCase for variables and functions (e.g., `getUserData`)."),
    COMP("Literal Types", ["Type", "Example", "Description"], [
      ["Number", "42, 3.14", "Integer or floating-point"],
      ["String", "'Hello', \"World\"", "Text enclosed in quotes"],
      ["Boolean", "true, false", "Logical values"],
      ["Array", "[1, 2, 3]", "Ordered collection"],
      ["Object", "{name: 'Alice'}", "Key-value pairs"],
      ["null", "null", "Intentional absence of value"],
      ["undefined", "undefined", "Uninitialized variable"]
    ]),
    KP(["JavaScript syntax is case-sensitive — use consistent casing","Statements can end with semicolons (ASI inserts them automatically)","Identifiers start with letter, _, or $; follow camelCase convention","Literals are fixed values; variables are containers","Whitespace is ignored, enabling flexible formatting"])
  ],
  questions: (id) => [
    MC(`${id}-1`,"easy","What is typeof 42?","number","string","integer","float","a","typeof 42 returns 'number'."),
    TF(`${id}-2`,"easy","JavaScript is case-sensitive.",true,"JavaScript differentiates uppercase from lowercase."),
    MC(`${id}-3`,"easy","Which is NOT a valid identifier?","myVar","_private","2fast","$element","c","Identifiers cannot start with a digit."),
    MC(`${id}-4`,"easy","What does ASI stand for?","Automatic Syntax Interpretation","Automatic Semicolon Insertion","Advanced Statement Inference","Asynchronous Script Integration","b","ASI = Automatic Semicolon Insertion."),
    MC(`${id}-5`,"medium","Which is a string literal?","42","true","'Hello World'","[1,2,3]","c","String literals are enclosed in quotes."),
    TF(`${id}-6`,"easy","JavaScript ignores extra whitespace and line breaks.",true,"Whitespace and line breaks are ignored for formatting."),
    FB(`${id}-7`,"easy","Fixed values written directly in code are called _____.","literals",["literal values","literal"],"Literals are fixed values like numbers and strings."),
    MC(`${id}-8`,"medium","Are myVar and myvar the same?","Yes, JS is case-insensitive","No, JS is case-sensitive","Only in strict mode","Only for globals","b","JavaScript is case-sensitive."),
    TF(`${id}-9`,"medium","Semicolons are always required.",false,"Semicolons are optional due to ASI but recommended."),
    MC(`${id}-10`,"medium","What can an identifier NOT start with?","Letter","Underscore","Dollar sign","Digit","d","Identifiers cannot start with a digit."),
    FB(`${id}-11`,"easy","The naming convention used in JavaScript is _____.","camelCase",["camel case"],"camelCase is the standard JavaScript naming convention."),
    CO(`${id}-12`,"easy","Arrange to declare a variable, assign, and log:",["let greeting;","greeting = 'Hello';","console.log(greeting);"],[0,1,2],"Declare, assign, then log."),
    MC(`${id}-13`,"hard","What does typeof hello output if hello is undeclared?","'undefined'","'null'","ReferenceError","'string'","a","typeof on undeclared vars returns 'undefined'."),
    TF(`${id}-14`,"medium","JavaScript identifiers can contain Unicode characters.",true,"Identifiers can include Unicode letters like é or ñ."),
    MC(`${id}-15`,"hard","Output of typeof null?","'null'","'object'","'undefined'","'boolean'","b","typeof null returns 'object' — a known JS bug."),
    MP(`${id}-16`,"easy","Match literal with type:",["'Hello'","42","true","[1,2,3]"],["string","number","boolean","object"],[[0,0],[1,1],[2,2],[3,3]],"Each literal has a specific JavaScript type."),
    FB(`${id}-17`,"medium","The mechanism that adds missing semicolons is called _____.","ASI",["Automatic Semicolon Insertion"],"ASI automatically adds semicolons at line breaks."),
    MC(`${id}-18`,"medium","Which is NOT a valid identifier?","firstName","_data","break","$value","c","'break' is a reserved keyword."),
    TF(`${id}-19`,"easy","Numbers can be written with or without decimals.",true,"JS numbers can be integers or floating-point."),
    MP(`${id}-20`,"medium","Match convention with example:",["camelCase","PascalCase","snake_case","UPPER_CASE"],["myVariable","MyClass","my_variable","CONSTANT"],[[0,0],[1,1],[2,2],[3,3]],"Different conventions serve different contexts."),
    CO(`${id}-21`,"medium","Arrange to show ASI causing unexpected behavior:",["function getObject() {","return","{ value: 42 };","}"],[0,1,2,3],"ASI inserts semicolon after 'return', returning undefined."),
    FB(`${id}-22`,"hard","typeof an array returns _____.","object",["'object'"],"Arrays are objects in JavaScript."),
    MC(`${id}-23`,"hard","Output of: console.log(0.1 + 0.2 === 0.3)","true","false","undefined","NaN","b","0.1+0.2 = 0.30000000000000004 due to floating-point precision."),
    TF(`${id}-24`,"hard","1 / 0 outputs Infinity.",true,"Division by zero returns Infinity in JavaScript."),
    MC(`${id}-25`,"easy","What is a literal?","A variable storing a value","A fixed value written directly in code","A function returning a value","An operator that creates a value","b","A literal is a direct value in source code."),
    FB(`${id}-26`,"easy","The keyword for block-scoped variables that can be reassigned is _____.","let",["let"],"let declares block-scoped, reassignable variables."),
    MC(`${id}-27`,"medium","Output of: console.log(typeof typeof 42)","'number'","'string'","'undefined'","'object'","b","typeof returns a string, so typeof 'number' is 'string'."),
    TF(`${id}-28`,"medium","Comments are ignored during execution.",true,"Comments exist solely for human readability."),
    CO(`${id}-29`,"hard","Arrange a complete JS program:",["const PI = 3.14159;","let radius = 5;","let area = PI * radius * radius;","console.log(area);"],[0,1,2,3],"Define constants, variables, compute, then output."),
    MP(`${id}-30`,"hard","Match keyword with purpose:",["let","const","var","function"],["Block-scoped variable","Constant declaration","Function-scoped variable","Function definition"],[[0,0],[1,1],[2,2],[3,3]],"Each keyword has a specific purpose.")
  ],
  xp: 15, min: 6, prereqs: ["js-output"], points: ["JavaScript syntax is case-sensitive — use consistent casing","Statements can end with semicolons (ASI inserts them automatically)","Identifiers start with letter, _, or $; follow camelCase convention","Literals are fixed values; variables are containers for values","Whitespace is ignored, enabling flexible formatting"]
});

// 5: js-statements
CHAPTERS.push({
  id: "js-statements", title: "JavaScript Statements", order: 5,
  sections: [
    T("A JavaScript program is a sequence of statements executed in order. Each statement is an instruction to perform a specific action: declaring a variable, calling a function, making a decision with conditionals, or iterating through data. Statements are the building blocks of JavaScript programs, analogous to sentences in natural language."),
    T("JavaScript statements can contain values, operators, expressions, keywords, and comments. A statement may span multiple lines, and multiple statements can be on a single line when separated by semicolons. While semicolons are often optional, placing them consistently prevents bugs caused by ASI misinterpreting code structure."),
    T("JavaScript code blocks use curly braces `{}`. Blocks group statements together in functions, conditionals (if, else, switch), and loops (for, while, do-while). Variables declared with `let` and `const` inside a block are scoped to that block. This block scoping is one of the most important modern JavaScript features, preventing accidental variable leakage."),
    C(`// Single statement\nlet x = 10;\n\n// Multiple statements on one line\nlet a = 1; let b = 2; let c = 3;\n\n// Statement spanning multiple lines\nlet longExpression = 1 + 2 + 3 +\n  4 + 5 + 6;\n\n// Block statement (grouped with {})\nif (x > 5) {\n  console.log('x is greater than 5');\n  let doubled = x * 2;\n  console.log('Doubled:', doubled);\n} // doubled is NOT accessible here\n\n// Empty statement\n;`, "javascript", "JavaScript statements — single, multiple, and blocks"),
    CA("tip", "Always use semicolons explicitly rather than relying on ASI. This avoids bugs like `return { key: value }` becoming `return; { key: value };` due to ASI."),
    L(["Expression statements: x = 5; or myFunction();", "Declaration statements: let x; or const PI = 3.14;", "Control flow: if, else, switch, for, while", "Block statements: grouped with { }", "Empty statements: just a ; with no code"]),
    KP(["A program is a sequence of statements executed in order","Statements are separated by semicolons (explicitly or via ASI)","Code blocks { } group statements","let and const are block-scoped","Multiple statements can be on one line separated by semicolons"])
  ],
  questions: (id) => [
    MC(`${id}-1`,"easy","What separates JavaScript statements?","Commas","Semicolons","Spaces","Colons","b","Semicolons separate statements."),
    TF(`${id}-2`,"easy","Statements execute in the order written.",true,"JavaScript executes statements sequentially."),
    MC(`${id}-3`,"easy","What creates a code block?","()","[]","{}","<>","c","Curly braces create code blocks."),
    MC(`${id}-4`,"easy","Which is a declaration statement?","x + 5","let x;","console.log(x)","x > 5","b","let x; is a variable declaration."),
    TF(`${id}-5`,"medium","ASI can change code meaning unexpectedly.",true,"ASI can cause bugs like return with newline returning undefined."),
    FB(`${id}-6`,"easy","A statement with just a semicolon is an _____.","empty statement",["empty","empty statement"],"A lone semicolon is an empty statement."),
    MC(`${id}-7`,"medium","Statement vs expression:","They are the same","Statements produce a value; expressions perform an action","Expressions produce a value; statements perform an action","Expressions end with semicolons","c","Expressions evaluate to a value; statements perform actions."),
    TF(`${id}-8`,"medium","let variables inside a block are accessible outside.",false,"let is block-scoped."),
    MC(`${id}-9`,"medium","How many statements in: let a=1; let b=2; let c=3;?","1","2","3","4","c","Three statements separated by semicolons."),
    FB(`${id}-10`,"medium","The process of automatically adding semicolons is _____.","ASI",["Automatic Semicolon Insertion"],"ASI automatically adds semicolons at line breaks."),
    CO(`${id}-11`,"easy","Arrange a valid program:",["let x = 5;","let y = 10;","let sum = x + y;","console.log(sum);"],[0,1,2,3],"Declare, compute, output."),
    MP(`${id}-12`,"medium","Match type with example:",["Expression","Declaration","Control flow","Block"],["5 + 3","let x = 10;","if (x > 5)","{ let y = 20; }"],[[0,0],[1,1],[2,2],[3,3]],"Each type serves a different purpose."),
    MC(`${id}-13`,"hard","Output of: function test() { return { value: 42 }; } console.log(test())","undefined","{ value: 42 }","42","SyntaxError","b","The object is on the same line as return, so ASI is not triggered."),
    TF(`${id}-14`,"hard","Labeled statements exist in JavaScript.",true,"JavaScript supports labeled statements with break/continue."),
    FB(`${id}-15`,"hard","The statement to terminate a loop or switch is _____.","break",["break statement"],"break terminates loops and switches."),
    MC(`${id}-16`,"hard","Result of: let x = 1; x++; console.log(x);","1","2","undefined","NaN","b","x++ increments x to 2."),
    CO(`${id}-17`,"medium","Arrange to demonstrate block scoping:",["if (true) {","let inside = 'block scoped';","console.log(inside);","}"],[0,1,2,3],"inside is scoped to the block."),
    TF(`${id}-18`,"medium","Multiple statements can be on one line.",true,"Separate with semicolons: let a=1; let b=2;"),
    MC(`${id}-19`,"easy","Which is NOT a variable declaration keyword?","let","var","const","int","d","int is not a JavaScript keyword."),
    MP(`${id}-20`,"hard","Match keyword with category:",["if","for","function","return"],["Conditional","Loop","Declaration","Control flow"],[[0,0],[1,1],[2,2],[3,3]],"Keywords are categorized by purpose."),
    FB(`${id}-21`,"easy","A group of statements in {} is called a _____.","block",["code block","statement block"],"A block is a group of statements in curly braces."),
    MC(`${id}-22`,"medium","Which skips the current iteration and continues?","break","skip","continue","next","c","continue skips to the next iteration."),
    TF(`${id}-23`,"easy","A semicolon alone is a valid JavaScript statement.",true,"A lone semicolon is an empty statement."),
    CO(`${id}-24`,"hard","Arrange to show ASI bug:",["function getObject() {","return","{","value: 42","};","}"],[0,1,2,3,4,5],"ASI places semicolon after 'return', returning undefined."),
    FB(`${id}-25`,"medium","The statement that passes a value back from a function is _____.","return",["return statement"],"return stops function execution and returns a value."),
    MC(`${id}-26`,"medium","Output of: if(false){console.log('yes')}else{console.log('no')}","'yes'","'no'","undefined","Nothing","b","The else block executes when condition is false."),
    TF(`${id}-27`,"hard","debugger statements act as breakpoints.",true,"The debugger statement creates a breakpoint when dev tools are open."),
    MC(`${id}-28`,"hard","Which cannot be used at the top level?","import","export","return","function declaration","c","return can only be used inside a function."),
    FB(`${id}-29`,"hard","The 'with' statement is only allowed in _____ mode.","non-strict",["sloppy","default"],"The 'with' statement is forbidden in strict mode."),
    MC(`${id}-30`,"easy","What symbol should follow each statement?","Colon :","Comma ,","Semicolon ;","Period .","c","Semicolons end statements for clarity.")
  ],
  xp: 15, min: 5, prereqs: ["js-syntax"], points: ["A program is a sequence of statements executed in order","Statements are separated by semicolons (explicitly or via ASI)","Code blocks { } group statements","let and const are block-scoped","Multiple statements can be on one line separated by semicolons"]
});

// 6: js-comments
CHAPTERS.push({
  id: "js-comments", title: "JavaScript Comments", order: 6,
  sections: [
    T("Comments are annotations in source code that are completely ignored by the JavaScript engine. They exist solely for human readers — to explain complex logic, document function behavior, mark sections, or temporarily disable code during debugging. Writing clear, meaningful comments is a hallmark of professional developers and significantly contributes to code maintainability."),
    T("JavaScript supports two types: single-line comments starting with `//` extending to the end of the line, and multi-line comments enclosed between `/*` and `*/`. Single-line comments are most common for brief explanations. Multi-line comments are used for longer documentation or commenting out larger code sections. Common patterns include JSDoc (`/** ... */`) for documenting functions, TODO markers for incomplete work, and FIXME markers for known issues."),
    T("Best practice dictates commenting WHY something is done, not WHAT the code does — good code should be self-documenting. Over-commenting is as harmful as under-commenting. JSDoc comments are especially valuable as they can generate documentation and provide type information for editors. Comments should explain non-obvious tradeoffs, business rules, or reasons for choosing one approach over another."),
    C(`// Single-line comment\nlet x = 42; // Inline comment after code\n\n/* Multi-line comment\n   spanning multiple lines */\n\n/**\n * JSDoc — documents functions\n * @param {number} radius\n * @returns {number} The area\n */\nfunction circleArea(radius) {\n  return Math.PI * radius * radius;\n}\n\n// TODO: Add validation\n// FIXME: This is slow on large datasets`, "javascript", "JavaScript comment styles"),
    CA("important", "Don't comment WHAT the code does — write self-explanatory code. Comment WHY the code does something unexpected, WHY a particular approach was chosen, or document business rules that aren't obvious."),
    COMP("Comment Types", ["Type", "Syntax", "Use Case"], [
      ["Single-line", "// text", "Brief explanations"],
      ["Multi-line", "/* text */", "Longer documentation"],
      ["JSDoc", "/** text */", "Function documentation"],
      ["Inline", "// after code", "Line explanation"],
      ["Section", "// === ====", "Organizing large files"]
    ]),
    KP(["Comments are ignored by the JS engine — for humans only","Use // for single-line and /* */ for multi-line","JSDoc /** */ documents functions and parameters","Comment WHY, not WHAT — let code speak for itself","Use TODO and FIXME markers to track incomplete code"])
  ],
  questions: (id) => [
    MC(`${id}-1`,"easy","Which starts a single-line comment?","#","//","<!--","?","b","Single-line comments start with //."),
    TF(`${id}-2`,"easy","Comments affect program performance.",false,"Comments are ignored by the engine."),
    MC(`${id}-3`,"easy","Multi-line comment syntax?","// comment //","/* comment */","# comment #","<!-- comment -->","b","Multi-line comments use /* */."),
    TF(`${id}-4`,"easy","Nested /* /* */ */ are valid.",false,"Multi-line comments cannot be nested."),
    MC(`${id}-5`,"medium","Purpose of JSDoc comments?","Disable code","Document functions, parameters, returns","Create variables","Format output","b","JSDoc documents code structure."),
    FB(`${id}-6`,"easy","Single-line comments start with _____.","//",["two forward slashes","double slash"],"Single-line comments start with //."),
    MC(`${id}-7`,"medium","Best practice for comments?","Comment every line","Never comment","Explain WHY, not WHAT","Only in production","c","Explain why, not what."),
    MC(`${id}-8`,"medium","Which is NOT a valid comment?","// comment","/* comment */","# comment","/** JSDoc */","c","# is Python, not JavaScript."),
    TF(`${id}-9`,"medium","Comments can temporarily disable code.",true,"Commenting out code is a debugging technique."),
    FB(`${id}-10`,"easy","A comment after code on the same line is _____.","inline",["inline comment"],"An inline comment appears after code."),
    CO(`${id}-11`,"easy","Arrange proper commenting:",["// Calculate total","let total = price * quantity;","// Add tax","total = total * 1.08;"],[0,1,2,3],"Comments above the code they explain."),
    MC(`${id}-12`,"hard","What does @param indicate in JSDoc?","A function parameter","A paragraph break","A parallel operation","A temporary variable","a","@param documents a function parameter."),
    TF(`${id}-13`,"hard","TypeScript can infer types from JSDoc annotations.",true,"TypeScript uses JSDoc in JS files with checkJs enabled."),
    MP(`${id}-14`,"medium","Match marker with meaning:",["TODO","FIXME","HACK","XXX"],["Needs to be done","Bug to fix","Workaround","Dangerous code"],[[0,0],[1,1],[2,2],[3,3]],"These are common comment markers."),
    FB(`${id}-15`,"medium","The JSDoc tag for return values is @_____.","returns",["return"],"@returns documents the return value."),
    MC(`${id}-16`,"hard","Nested multi-line comments:","Both work","Inner */ ends outer comment","Throws special error","Only outer is created","b","The first */ ends the comment."),
    CO(`${id}-17`,"medium","Arrange a JSDoc comment:",["/**","* Adds two numbers","* @param {number} a","* @param {number} b","* @returns {number}","*/"],[0,1,2,3,4,5],"JSDoc starts with /** and ends with */."),
    TF(`${id}-18`,"easy","Comments should be removed in production.",false,"Minifiers remove comments during build."),
    MC(`${id}-19`,"medium","What is @type used for?","Specifying a variable's type","Defining a new type","Documenting parameter types","Both A and C","d","@type specifies variable types."),
    FB(`${id}-20`,"hard","Code that's clear without comments is called _____ code.","self-documenting",["self documenting"],"Self-documenting code uses clear naming and structure."),
    MP(`${id}-21`,"hard","Match JSDoc tag with purpose:",["@param","@returns","@throws","@deprecated"],["Documents parameter","Documents return value","Documents errors thrown","Marks as outdated"],[[0,0],[1,1],[2,2],[3,3]],"JSDoc tags provide structured documentation."),
    MC(`${id}-22`,"easy","Can a single-line comment span multiple lines?","Yes, using // on each line","No, only one line","Yes, with //\ at end","Only in strict mode","a","Start each line with //."),
    TF(`${id}-23`,"medium","Inline comments should be aligned.",false,"Alignment is a style preference, not a rule."),
    MC(`${id}-24`,"hard","Output of: // console.log('test'); console.log('hello')","test","hello","test hello","Nothing","b","Only the part after // is commented."),
    FB(`${id}-25`,"medium","The @example tag provides an _____ of usage.","example",["example of usage"],"@example provides a usage example."),
    CO(`${id}-26`,"hard","Arrange JSDoc tags in conventional order:",["@param {string} name","@param {number} age","@returns {string}","@example"],[0,1,2,3],"Order: description, params, returns, example."),
    TF(`${id}-27`,"easy","Comments are ignored by the interpreter.",true,"The interpreter skips all comments."),
    MC(`${id}-28`,"medium","What does @readonly indicate?","Property is read-only","Property is immutable","Code is readable","Not a valid tag","a","@readonly marks a property as non-modifiable."),
    FB(`${id}-29`,"hard","Tag to mark a function as outdated is @_____.","deprecated",["deprecated"],"@deprecated marks code as no longer recommended."),
    MC(`${id}-30`,"easy","Which is a valid comment way?","// comment","/* comment */","/** JSDoc */","All of the above","d","All three are valid JavaScript comment syntax.")
  ],
  xp: 15, min: 5, prereqs: ["js-statements"], points: ["Comments are ignored by the JS engine — for humans only","Use // for single-line and /* */ for multi-line","JSDoc /** */ documents functions, parameters, and return values","Comment WHY, not WHAT — let code speak for itself","Use TODO and FIXME markers to track incomplete or broken code"]
});

// 7: js-variables
CHAPTERS.push({
  id: "js-variables", title: "JavaScript Variables", order: 7,
  sections: [
    T("Variables are containers for storing data values. JavaScript is dynamically typed — the same variable can hold different types at different times. Before ES6 (2015), JavaScript only had `var` for variable declaration. ES6 introduced `let` and `const`, which provide block scoping and solve issues that plagued `var`, such as hoisting problems and lack of block scope."),
    T("The `var` keyword declares function-scoped or globally-scoped variables. Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. You can reference a `var` variable before its declaration (it will be `undefined`). `var` ignores block scope — it bleeds out of `if`, `for`, and `while` blocks, often causing bugs."),
    T("The `let` keyword declares block-scoped variables that can be reassigned. Unlike `var`, `let` is hoisted but not initialized — accessing it before declaration causes a ReferenceError (temporal dead zone). The `const` keyword declares block-scoped constants that cannot be reassigned. However, `const` objects and arrays can still have their properties or elements modified. Use `const` by default, `let` when you need reassignment, and never `var`."),
    C(`// var — function scoped, hoisted\nconsole.log(age); // undefined\nvar age = 25;\n\nif (true) {\n  var x = 10; // BLEEDS out of block!\n}\nconsole.log(x); // 10\n\n// let — block scoped, TDZ\nlet count = 0;\ncount = 1; // Can reassign\n\nif (true) {\n  let y = 20; // BLOCK scoped\n}\n// console.log(y); // ReferenceError!\n\n// const — block scoped, cannot reassign\nconst PI = 3.14159;\n// PI = 3; // TypeError\n\nconst person = { name: 'Alice' };\nperson.name = 'Bob'; // ✅ Properties can change\n// person = {}; // ❌ Reassignment not allowed`, "javascript", "Variable declaration with var, let, and const"),
    CA("warning", "Never use `var` in modern JavaScript. Use `const` by default, and only use `let` when you know the variable needs to be reassigned. This prevents accidental reassignment bugs and makes intent clear."),
    COMP("var vs let vs const", ["Feature", "var", "let", "const"], [
      ["Scope", "Function/global", "Block", "Block"],
      ["Hoisting", "Hoisted (undefined)", "Hoisted (TDZ)", "Hoisted (TDZ)"],
      ["Reassignment", "Allowed", "Allowed", "Not allowed"],
      ["Redeclaration", "Allowed", "Not allowed", "Not allowed"],
      ["Block bleeding", "Yes", "No", "No"]
    ]),
    KP(["Variables store data values in JavaScript","var is function-scoped and outdated — prefer let and const","let is block-scoped and can be reassigned","const is block-scoped and cannot be reassigned (but properties can mutate)","Use const by default, let when reassignment is needed, never var"])
  ],
  questions: (id) => [
    MC(`${id}-1`,"easy","Which declares a constant?","let","var","const","static","c","const declares non-reassignable variables."),
    MC(`${id}-2`,"easy","Which keyword is preferred by default?","var","let","const","Both let and const","d","Use const by default, let when needed."),
    TF(`${id}-3`,"easy","var is block-scoped.",false,"var is function-scoped, not block-scoped."),
    MC(`${id}-4`,"easy","What happens reassigning a const?","Silently changes","SyntaxError","TypeError","Ignored","c","Assigning to const throws TypeError."),
    TF(`${id}-5`,"medium","let inside a block is accessible outside.",false,"let is block-scoped."),
    MC(`${id}-6`,"medium","What is the Temporal Dead Zone?","Time between hoisting and initialization","When a variable is deleted","When variable is undefined","When const cannot change","a","TDZ is between hoisting and initialization."),
    FB(`${id}-7`,"easy","Non-reassignable variables use the _____ keyword.","const",["const"],"const prevents reassignment."),
    MC(`${id}-8`,"medium","Output of: console.log(x); var x = 10;","10","undefined","ReferenceError","null","b","var x is hoisted as undefined."),
    MC(`${id}-9`,"medium","Output of: console.log(x); let x = 10;","10","undefined","ReferenceError","null","c","let in TDZ throws ReferenceError."),
    TF(`${id}-10`,"medium","const object properties can be modified.",true,"const prevents reassignment, not mutation."),
    MP(`${id}-11`,"easy","Match keyword with scope:",["var","let","const"],["Function/global","Block","Block"],[[0,0],[1,1],[2,2]],"var has function scope; let/const have block scope."),
    CO(`${id}-12`,"medium","Arrange proper let usage:",["let count = 0;","count = 1;","count = count + 1;","console.log(count);"],[0,1,2,3],"Declare, reassign, increment, log."),
    FB(`${id}-13`,"medium","Moving declarations to top of scope is called _____.","hoisting",["hoisted"],"Hoisting moves declarations to the top."),
    MC(`${id}-14`,"hard","Value of x after: for(var i=0;i<5;i++){var x=i;}","0","4","undefined","ReferenceError","b","var bleeds out of the for loop."),
    MC(`${id}-15`,"hard","Same let name twice in same scope?","Overrides first","SyntaxError","Ignored","Depends on strict mode","b","let does not allow redeclaration."),
    TF(`${id}-16`,"hard","const must be initialized at declaration.",true,"const x; alone is a SyntaxError."),
    FB(`${id}-17`,"hard","The period before let/const initialization is called _____.","temporal dead zone",["TDZ","Temporal Dead Zone"],"TDZ is between hoisting and initialization."),
    CO(`${id}-18`,"hard","Arrange to show var's function scoping:",["function example() {","if (true) {","var a = 10;","}","console.log(a); // 10","}"],[0,1,2,3,4,5],"var ignores the if block's scope."),
    MC(`${id}-19`,"easy","Which should you NEVER use?","let","const","var","All are fine","c","var should be avoided in modern JS."),
    MP(`${id}-20`,"hard","Match behavior with keyword:",["Can be used before declaration (undefined)","Cannot be accessed before declaration","Cannot be reassigned","Can be redeclared in same scope"],["var","let","const","var"],[[0,0],[1,1],[2,2],[3,0]],"Each keyword has unique behavior."),
    TF(`${id}-21`,"easy","JavaScript variables can change type at runtime.",true,"JavaScript is dynamically typed."),
    FB(`${id}-22`,"medium","Without a keyword, x = 5 creates a _____ variable.","global",["property of window","implicit global"],"Assignment without keyword creates a global."),
    MC(`${id}-23`,"hard","Output: function test(){return a;var a=5;} console.log(test())","5","undefined","ReferenceError","null","b","var a is hoisted as undefined."),
    CO(`${id}-24`,"medium","Arrange from most to least restrictive:",["const PI = 3.14;","let count = 0;","var name = 'Alice';"],[0,1,2],"const most restrictive, var least."),
    TF(`${id}-25`,"medium","let and const are not hoisted.",false,"They are hoisted but in the TDZ."),
    MC(`${id}-26`,"easy","Which provides BOTH block scoping and reassignment?","let","const","var","static","a","let provides block scoping and reassignment."),
    FB(`${id}-27`,"hard","The pattern of declaring variables at the top of a scope is called _____.","hoisting",["variable hoisting"],"Hoisting moves declarations to the top."),
    MP(`${id}-28`,"medium","Match code with result:",["var x=1;var x=2;","let y=1;let y=2;","let z=1;z=2;","const w=1;"],["Works (redeclaration)","SyntaxError","Works (reassignment)","Works (initialization)"],[[0,0],[1,1],[2,2],[3,3]],"var allows redeclaration; let/const do not."),
    MC(`${id}-29`,"medium","Output: const arr=[1,2,3]; arr.push(4); console.log(arr.length)","3","4","TypeError","undefined","b","const prevents reassignment, not mutation."),
    TF(`${id}-30`,"medium","Variables without initial value are null.",false,"They are undefined, not null.")
  ],
  xp: 15, min: 7, prereqs: ["js-comments"], points: ["Variables store data values in JavaScript","var is function-scoped and outdated — prefer let and const","let is block-scoped and can be reassigned","const is block-scoped and cannot be reassigned (but properties can mutate)","Use const by default, let when reassignment is needed, never var"]
});

// 8: js-let
CHAPTERS.push({
  id: "js-let", title: "The let Keyword", order: 8,
  sections: [
    T("The `let` keyword, introduced in ES6, declares a block-scoped local variable. Unlike `var` which ignores block boundaries, `let` confines the variable to the nearest enclosing block — whether an `if` statement, `for` loop, `while` loop, or standalone `{}` block. This block scoping eliminates a major source of bugs and makes code behavior more predictable."),
    T("Variables declared with `let` are hoisted to the top of their block but remain in a Temporal Dead Zone (TDZ) from the block start until the declaration is encountered. Accessing the variable during the TDZ throws a ReferenceError. This differs from `var`, which is hoisted and initialized to `undefined`. The TDZ enforces good practice — you cannot accidentally use a variable before declaring it."),
    T("The `let` keyword is especially valuable in loops. When used in a `for` loop initialization, each iteration creates a new binding, solving the classic closure problem where loop variables leaked. With `var`, all closures share the same variable. With `let`, each iteration gets its own copy, making closures work as intuitively expected."),
    C(`// Block scoping\n{\n  let x = 10;\n  console.log(x); // 10\n}\n// console.log(x); // ReferenceError\n\n// let in for loops — per-iteration binding\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100); // 0, 1, 2\n}\n\n// Compare with var\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100); // 3, 3, 3\n}\n\n// Reassignment allowed\nlet count = 0;\ncount = 1;\ncount += 5;\nconsole.log(count); // 6\n\n// Redeclaration NOT allowed\nlet a = 1;\n// let a = 2; // SyntaxError`, "javascript", "let keyword — block scoping, loops, and TDZ"),
    CA("tip", "Use `let` in for loop headers to create per-iteration bindings. This fixes the classic closure bug. The per-iteration binding is unique to `let`."),
    KP(["let is block-scoped to the nearest enclosing { }","let is hoisted but in the Temporal Dead Zone until declaration","Accessing let before declaration throws ReferenceError","let creates per-iteration bindings in for loops","Cannot redeclare a let variable in the same scope"])
  ],
  questions: (id) => [
    MC(`${id}-1`,"easy","What version introduced let?","ES3","ES5","ES6/ES2015","ES7","c","let was introduced in ES6 (2015)."),
    TF(`${id}-2`,"easy","let allows variable reassignment.",true,"let variables can be reassigned."),
    MC(`${id}-3`,"easy","Is let block-scoped or function-scoped?","Function-scoped","Block-scoped","Globally-scoped","Depends on declaration","b","let is block-scoped."),
    TF(`${id}-4`,"medium","A let variable inside an if block is accessible outside.",false,"let is block-scoped."),
    MC(`${id}-5`,"medium","Output: { let x = 10; } console.log(typeof x)","'number'","'undefined'","'null'","ReferenceError","b","typeof on undeclared var returns 'undefined'."),
    FB(`${id}-6`,"easy","let variables have _____ scope.","block",["block scope"],"let is scoped to the nearest block."),
    MC(`${id}-7`,"medium","Accessing let before declaration?","Returns undefined","ReferenceError","Returns null","SyntaxError","b","TDZ access throws ReferenceError."),
    TF(`${id}-8`,"medium","let variables are hoisted but not initialized.",true,"let is hoisted into the TDZ."),
    MC(`${id}-9`,"hard","Output: for(let i=0;i<3;i++){setTimeout(()=>console.log(i),0)}","3, 3, 3","0, 1, 2","undefined ×3","1, 2, 3","b","let creates per-iteration bindings."),
    MC(`${id}-10`,"hard","Output: for(var i=0;i<3;i++){setTimeout(()=>console.log(i),0)}","3, 3, 3","0, 1, 2","undefined ×3","1, 2, 3","a","var shares one binding across all iterations."),
    TF(`${id}-11`,"medium","let prevents variable hoisting entirely.",false,"let is hoisted but in the TDZ."),
    MC(`${id}-12`,"medium","When does let variable enter the TDZ?","At declaration","At start of enclosing scope","When first assigned","When block ends","b","TDZ starts at the beginning of the scope."),
    FB(`${id}-13`,"medium","The period before let initialization is called _____.","TDZ",["Temporal Dead Zone","temporal dead zone"],"TDZ is between hoisting and initialization."),
    CO(`${id}-14`,"medium","Arrange to demonstrate let scoping:",["function test() {","let x = 1;","if (true) {","let x = 2; // different variable","console.log(x); // 2","}","console.log(x); // 1","}"],[0,1,2,3,4,5,6,7],"Each let creates a separate block-scoped variable."),
    MC(`${id}-15`,"hard","Can you declare let in a switch case without braces?","Yes, always","No, must use braces","Only in default case","Depends on strict mode","b","Use braces to scope let in switch cases."),
    TF(`${id}-16`,"medium","let at global scope creates a property on window.",false,"Global let does NOT create window properties (unlike var)."),
    FB(`${id}-17`,"hard","Global let creates a variable in the _____ environment.","script",["script"],"Global let exists in the script scope, not window."),
    MC(`${id}-18`,"medium","typeof for let before declaration?","'undefined'","ReferenceError","'null'","'let'","b","Accessing let in TDZ throws ReferenceError."),
    CO(`${id}-19`,"hard","Arrange to show let in switch:",["let value = 1;","switch(value) {","case 1: {","let result = 'one';","console.log(result);","break;","}","}"],[0,1,2,3,4,5,6,7],"Braces scope let in switch cases."),
    MC(`${id}-20`,"easy","Which creates per-iteration bindings in loops?","var","let","const","All of them","b","let creates per-iteration bindings."),
    TF(`${id}-21`,"medium","let can be redeclared in different scopes.",true,"Different blocks can have separate let declarations."),
    FB(`${id}-22`,"medium","The term 'let' suggests the variable can be _____.","reassigned",["changed","modified"],"let variables can be reassigned."),
    MC(`${id}-23`,"hard","Output of: let x; console.log(x);","undefined","null","ReferenceError","0","a","Declared but unassigned let is undefined."),
    MP(`${id}-24`,"medium","Match with behavior:",["var x","let x","const x","let x = 1; let x = 2;"],["Hoisted to undefined","Hoisted to TDZ","Requires initializer","SyntaxError"],[[0,0],[1,1],[2,2],[3,3]],"Each declaration type has distinct behavior."),
    MC(`${id}-25`,"medium","Best practice: use let when...?","The value never changes","The value needs to change","You want global scope","You're using old JS","b","Use let when you need to reassign."),
    TF(`${id}-26`,"easy","let is block-scoped and function-scoped.",false,"let is only block-scoped, not function-scoped."),
    FB(`${id}-27`,"hard","let in a for loop creates a new _____ for each iteration.","binding",["variable","scope"],"Each iteration gets its own let binding."),
    CO(`${id}-28`,"hard","Arrange to show let fix for closures:",["function createButtons() {","for (var i = 0; i < 3; i++) {","var btn = document.createElement('button');","btn.onclick = function() { alert(i); };","}","}"],[0,1,2,3,4],"var causes all buttons to alert the same value."),
    MC(`${id}-29`,"easy","Is let a reserved keyword?","No","Yes","Only in strict mode","Only in ES6+","b","let is reserved in JavaScript."),
    MC(`${id}-30`,"medium","Which line throws: let x = {a:1}; let x = {a:2}; line 1 or 2?","Line 1","Line 2","Neither","Both","b","Redeclaration of let throws SyntaxError on line 2.")
  ],
  xp: 15, min: 6, prereqs: ["js-variables"], points: ["let is block-scoped to nearest { }","let is hoisted but in the Temporal Dead Zone","Accessing let before declaration throws ReferenceError","let creates per-iteration bindings in for loops","Cannot redeclare let in the same scope"]
});

// 9: js-const
CHAPTERS.push({
  id: "js-const", title: "The const Keyword", order: 9,
  sections: [
    T("The `const` keyword, introduced in ES6, declares block-scoped constants. Variables declared with `const` must be initialized at declaration and cannot be reassigned. However, `const` does NOT make values immutable — it only prevents reassignment of the variable binding. Object properties and array elements can still be modified. `const` is the preferred declaration keyword in modern JavaScript, used by default for most variables."),
    T("Like `let`, `const` is block-scoped and subject to the Temporal Dead Zone. Accessing a `const` variable before its declaration throws a ReferenceError. Unlike `let`, `const` requires an initializer — `const x;` alone is a SyntaxError. `const` also cannot be redeclared in the same scope. These restrictions make `const` variables predictable and help prevent accidental bugs."),
    T("Use `const` for values that should not be re-bound, including primitives like numbers and strings, function expressions, module imports, and object/array references that won't be reassigned. When you declare with `const`, you communicate to other developers that this variable binding should never change. This makes code easier to reason about and reduces the chance of unintended side effects."),
    C(`// const must be initialized\nconst PI = 3.14159;\n// const x; // SyntaxError!\n// PI = 3;  // TypeError\n\n// const with objects — properties can mutate\nconst person = {\n  name: 'Alice',\n  age: 30\n};\nperson.name = 'Bob';  // ✅ Allowed\nperson.age = 31;       // ✅ Allowed\n// person = {};       // ❌ TypeError\n\n// const with arrays — elements can mutate\nconst fruits = ['apple', 'banana'];\nfruits.push('cherry'); // ✅ Allowed\nfruits[0] = 'avocado'; // ✅ Allowed\n// fruits = [];       // ❌ TypeError\n\n// const in loops\nfor (const item of ['a', 'b', 'c']) {\n  console.log(item); // Works with for...of\n}\n// for (const i = 0; i < 5; i++) {} // ❌ TypeError`, "javascript", "const keyword — constants, objects, and arrays"),
    CA("info", "Use `const` by default for ALL variable declarations. Only switch to `let` when you know the variable needs to be reassigned. This is the most common recommendation from modern JavaScript style guides including Airbnb and Google."),
    COMP("const vs let", ["Feature", "const", "let"], [
      ["Reassignment", "Not allowed", "Allowed"],
      ["Must initialize", "Yes", "No (defaults to undefined)"],
      ["Block scoped", "Yes", "Yes"],
      ["Temporal Dead Zone", "Yes", "Yes"],
      ["Object/array mutation", "Allowed", "Allowed"],
      ["Use case", "Default choice", "When reassignment needed"]
    ]),
    KP(["const declares block-scoped constants that cannot be reassigned","const must be initialized at declaration time","const does NOT make values immutable — only the binding","Object properties and array elements can still be changed","Use const by default; only use let when reassignment is needed"])
  ],
  questions: (id) => [
    MC(`${id}-1`,"easy","What does const prevent?","Variable shadowing","Reassignment of the variable","Object mutation","Hoisting","b","const prevents reassignment of the variable binding."),
    TF(`${id}-2`,"easy","const must be initialized at declaration.",true,"const x; alone throws a SyntaxError."),
    MC(`${id}-3`,"easy","Can const object properties be changed?","No, const makes objects immutable","Yes, properties can be modified","Only in non-strict mode","Never","b","const only prevents reassignment, not mutation."),
    MC(`${id}-4`,"medium","What happens with const x = 5; x = 10;?","x becomes 10","TypeError","SyntaxError","x stays 5","b","Reassigning const throws TypeError."),
    TF(`${id}-5`,"medium","const variables are block-scoped.",true,"const is block-scoped like let."),
    MC(`${id}-6`,"hard","Can you use const in a for...of loop?","No, const cannot be used in loops","Yes, each iteration creates a new binding","Only with arrays","Only with strings","b","for...of with const works per-iteration."),
    FB(`${id}-7`,"easy","const prevents variable _____.","reassignment",["reassignment","re-assignment"],"const prevents changing what the variable references."),
    MC(`${id}-8`,"medium","Output of: const arr = [1]; arr.push(2); console.log(arr.length)","1","2","TypeError","undefined","b","Array mutation is allowed with const."),
    TF(`${id}-9`,"easy","const makes the value immutable.",false,"const only prevents reassignment, not mutation."),
    MC(`${id}-10`,"medium","const vs let: which is preferred by default?","const","let","var","Both equally","a","const is the default recommendation."),
    MP(`${id}-11`,"easy","Match keyword with property:",["const","let","var","Object.freeze()"],["No reassignment","Can reassign","Function scope","Makes value immutable"],[[0,0],[1,1],[2,2],[3,3]],"Each has specific characteristics."),
    MC(`${id}-12`,"medium","What does const share with let?","Function scope","Hoisting with initialization","Block scope and TDZ","Can redeclare","c","Both const and let are block-scoped with TDZ."),
    FB(`${id}-13`,"medium","const x; without initializer throws a _____.","SyntaxError",["syntax error"],"const requires initialization."),
    MC(`${id}-14`,"hard","What does Object.freeze() do?","Prevents variable reassignment","Prevents object property changes (shallow)","Prevents function calls","Nothing","b","Object.freeze() makes an object shallowly immutable."),
    MC(`${id}-15`,"hard","Output: const a = {b: {c: 1}}; a.b.c = 2; console.log(a.b.c)","1","2","TypeError","undefined","b","Nested object properties can still be modified."),
    TF(`${id}-16`,"medium","const cannot be used in a standard for loop header.",true,"for (const i=0; ...) throws TypeError because i++ tries to reassign."),
    CO(`${id}-17`,"easy","Arrange a program using const:",["const BASE_URL = 'https://api.example.com';","const ENDPOINT = '/users';","const URL = BASE_URL + ENDPOINT;","console.log(URL);"],[0,1,2,3],"Use const for values that won't change."),
    MC(`${id}-18`,"hard","Does const prevent array.push()?","Yes","No, mutation is allowed","Only in strict mode","Depends on engine","b","const does not prevent array mutations."),
    FB(`${id}-19`,"medium","Use _____ by default for all variable declarations.","const",["const"],"const is the recommended default keyword."),
    MC(`${id}-20`,"easy","How many times can a const be assigned?","0","1 (at declaration)","As many times as needed","Until reassignment","b","const can only be assigned once at declaration."),
    TF(`${id}-21`,"medium","const prevents the variable from being hoisted.",false,"const is hoisted but in the TDZ."),
    MP(`${id}-22`,"hard","Match code with outcome:",["const x = 1; x = 2;","const y = {a:1}; y.a = 2;","const z = [1]; z.push(2);","const w;"],["TypeError","Works (a is now 2)","Works (z is now [1,2])","SyntaxError"],[[0,0],[1,1],[2,2],[3,3]],"const allows mutation but not reassignment."),
    MC(`${id}-23`,"medium","Which loop can use const?","for (const i=0; i<5; i++)","for (const item of array)","while (const x = true)","do { } while (const x = true)","b","for...of works with const per-iteration."),
    CO(`${id}-24`,"hard","Arrange to show const with objects:",["const user = { name: 'Alice' };","user.name = 'Bob'; // allowed","// user = { name: 'Charlie' }; // not allowed","console.log(user.name); // Bob"],[0,1,2,3],"Properties can change; reassignment cannot."),
    MC(`${id}-25`,"medium","Best practice: use const when...?","The value must change often","The variable shouldn't be reassigned","You need function scope","You're using legacy code","b","Use const when the binding shouldn't change."),
    TF(`${id}-26`,"easy","const creates constants that are immutable.",false,"const prevents reassignment, not mutation."),
    FB(`${id}-27`,"hard","A const array can still have its _____ modified.","elements",["contents","items","members"],"Array elements can be mutated with const."),
    MC(`${id}-28`,"medium","Can const be used in switch cases?","Yes","No","Only with braces","Only in default","a","const can be used in switch, but brace scope is recommended."),
    MC(`${id}-29`,"hard","Output of: const x = {a:1}; const y = x; y.a = 2; console.log(x.a)","1","2","TypeError","undefined","b","y references the same object as x, so changes affect both."),
    MC(`${id}-30`,"easy","Which should you NEVER use in modern JS?","const","let","var","Both const and let","c","var should be avoided in modern JavaScript.")
  ],
  xp: 15, min: 6, prereqs: ["js-let"], points: ["const declares block-scoped constants that cannot be reassigned","const must be initialized at declaration time","const does NOT make values immutable — only the binding","Object properties and array elements can still be changed","Use const by default; only use let when reassignment is needed"]
});

console.log("Built", CHAPTERS.length, "chapters");

// ─── Build output ──────────────────────────────────────
const HEADER = `import { Course } from "../types";

export const javascriptCourse: Course = {
  id: "javascript",
  title: "JavaScript",
  fullTitle: "JavaScript — Bringing Pages to Life",
  description:
    "The world's most versatile programming language. From variables to async/await, closures to classes — become a confident JavaScript developer.",
  icon: "Code2",
  color: "#f7df1e",
  difficulty: 2,
  estimatedHours: 55,
  chapters: [
`;

const FOOTER = `  ],
  totalXP: ${CHAPTERS.reduce((s, c) => s + (c.xp || 15), 0)},
};
`;

const chStr = CHAPTERS.map(ch => {
  const qs = genQuestions(ch.id, [ch.questions]);
  const exams = qs.map(q => "    " + JSON.stringify(q, null, 2).split("\n").join("\n    "));
  
  return `{
    id: ${JSON.stringify(ch.id)},
    courseId: "javascript",
    title: ${JSON.stringify(ch.title)},
    order: ${ch.order},
    sections: ${JSON.stringify(ch.sections, null, 2).split("\n").join("\n    ")},
    examPool: [
${exams.join(",\n")}
    ],
    xpReward: ${ch.xp || 15},
    estimatedMinutes: ${ch.min || 6},
    prerequisites: ${JSON.stringify(ch.prereqs || [])},
    keyPoints: ${JSON.stringify(ch.points || [])}
  }`;
});

const output = HEADER + chStr.join(",\n") + "\n" + FOOTER;
writeFileSync("/data/data/com.termux/files/home/cs-learning/src/lib/courses/javascript/index.ts", output);
console.log("Written", output.length, "bytes,", CHAPTERS.length, "chapters");
