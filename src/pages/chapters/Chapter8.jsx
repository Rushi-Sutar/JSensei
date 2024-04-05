import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";
function Chapter8() {
  const codeStyle = {
    borderRadius: "10px",
    border: "1px solid #292929",
    padding: "10px",
    backgroundColor: "#0A0A0A",
    margin: "20px auto",
    fontWeight: "bold",
    fontSize: "clamp(0.75rem, 0.5625rem + 0.3906vw, 0.875rem)",
    lineHeight: "1em",
  };
  return (
    <div className="main">
    <div className="section">
      <h3 className="section-title">Understanding Scope in JavaScript</h3>
      <p>
        Scope in JavaScript determines the accessibility (visibility) of
        variables and functions within your code. Different scopes create a
        hierarchy that controls where you can use identifiers (variable and
        function names).
        <h4>Global Scope:</h4>
        <ul>
          <li>
            The outermost scope, encompassing the entire JavaScript program.
          </li>
          <li>
            Variables declared outside of any function are globally accessible.
          </li>
          <li>
            Caution: Overusing global variables can lead to naming conflicts and
            make code harder to maintain.
          </li>
        </ul>
        <h4>Local Scope:</h4>
        <ul>
          <li>Exists within functions.</li>
          <li>
            Variables declared inside a function are only accessible within that
            function and its nested functions (if any).
          </li>
        </ul>
        <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
            {`let globalVar = "Global"; // Global scope
  
function sayHello() {
  let localVar = "Hello from inside!"; // Local scope
  console.log(globalVar); // Can access global variables
  console.log(localVar);  // Can access local variables
  }
  
  sayHello();
  console.log(localVar); // ReferenceError: localVar is not defined (not accessible outside the function)`}
         </SyntaxHighlighter>
        <h4>Function Scope vs. Block Scope (ES6):</h4>
        <ul>
          <li>Before ES6 (ECMAScript 2015), only function scope existed.</li>
          <li>
            With ES6, let and const keywords introduced block scope within
            functions and if statements.
          </li>
          <li>
            Variables declared with let or const are only accessible within the
            block they are defined in.
          </li>
        </ul>
        <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
            {`if (true) {
  let blockVar = "This is block-scoped";
   }
  
console.log(blockVar); // ReferenceError: blockVar is not defined (not accessible outside the block)`}
         </SyntaxHighlighter>
        <h4>Closures: Functions with Enclosed Scope</h4>
        <ul>
          <li>
            A closure is a function that has access to the variable environment
            (scope) of its outer (enclosing) function, even after the outer
            function has returned.
          </li>
          <li>
            This allows inner functions to remember and manipulate variables
            from the outer scope, creating a sense of "private" variables within
            functions.
          </li>
        </ul>
        <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
            {`function createCounter() {
let count = 0; // Local variable in createCounter
  
return function increment() {
  count++; // Inner function accessing and modifying count
  return count;
  }
}
const counter = createCounter(); // Call createCounter, get the inner function
console.log(counter()); // Output: 1 (count is now 1)
console.log(counter()); // Output: 2 (count remembers its value)
  
// Even though createCounter has finished running, the inner function (counter)
// still has access to the count variable because of the closure.`}
         </SyntaxHighlighter>
      </p>
      </div>
     
      </div>
  );
}

export default Chapter8;
