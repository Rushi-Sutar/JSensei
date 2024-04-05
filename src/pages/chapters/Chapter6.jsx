import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";

function Chapter6() {
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
      <h3 className="section-title">Functions: The Building Blocks of JavaScript</h3>
      <p>
      Functions are reusable blocks of code that perform specific tasks. They encapsulate a set of instructions, promoting code organization, modularity, and reusability.
        </p>
      </div>
    <div className="section"> 
      <h3 className="section-title">1. Declaring and Calling Functions</h3>
        <p>
          <ul>
            <h4>
            Function Declaration
            </h4>
            <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!`}
            </SyntaxHighlighter>
            <li> function: Keyword to define a function.</li>
            <li>greet: Function name (descriptive and follows naming conventions).</li>
            <li>(name): Parentheses enclose function parameters (placeholders for input values).</li>
            <li>console.log("Hello, " + name + "!");: Function body, containing the code to execute.</li>
            <li>greet("Alice"): Function call, providing an argument ("Alice") for the name parameter.</li>
          </ul>
          <ul>
            <h4>Function Expression</h4>
            <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`const sayHi = function(name) {
  return "Hi there, " + name;
};

const message = sayHi("Bob");
console.log(message); // Output: Hi there, Bob`}
            </SyntaxHighlighter>
            <li>Similar to declaration, but assigns the function to a variable (sayHi).</li>
            <li>return: Used to provide an output value from the function.</li>
          </ul>
        </p>
      </div>
      <div className="section">
      <h3 className="section-title">2. Function Parameters and Arguments</h3>
        <p>
          <ul>
          <li>Parameters are placeholders for values passed during the function call.</li>
      <li>Arguments are the actual values provided when the function is called.</li>
      </ul>
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`function calculateArea(length, width) {
  return length * width;
}

const area = calculateArea(5, 3); // Arguments: 5 and 3
console.log("Area:", area); // Output: Area: 15`}
            </SyntaxHighlighter>
      </div>

      <div className="section">
      <h3 className="section-title">3. Return Statement</h3>
        <p>
          <ul>
            <li>The return statement specifies the value the function sends back after execution.</li>
            <li>If no return is present, the function implicitly returns undefined.</li>
          </ul>
        </p>
      </div>

      <div className="section">
      <h3 className="section-title">4. Arrow Functions (ES6)</h3>
        <p>
          <ul>
            <li>A concise syntax for defining functions, introduced in ECMAScript 6 (ES6).</li>
          </ul>
          <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`const multiply = (num1, num2) => num1 * num2;
const result = multiply(4, 6);
console.log("Product:", result); // Output: Product: 24`}
            </SyntaxHighlighter>
          <ul>
            <li>No function keyword required.</li>
            <li>Implicit return for single-line expressions.</li>
          </ul>
        </p>
      </div>
      
      </div>
  )
}

export default Chapter6
