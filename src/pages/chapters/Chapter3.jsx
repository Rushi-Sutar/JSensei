import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";
function Chapter3() {
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
        <h3 className="section-title">Data Types in JavaScript</h3>
        <p>
          JavaScript is a dynamically typed language, meaning you don't
          explicitly declare the data type of a variable when you create it. The
          data type is determined by the value assigned to the variable. Here
          are the primitive data types in JavaScript:
        </p>
        <p>
          <ul>
            <li>
              String: Represents textual data enclosed in single or double
              quotes. Used for storing words, sentences, or any sequence of
              characters.
            </li>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              customStyle={codeStyle}
              showLineNumbers={true}
            >
              {`let name = "Alice";
let message = 'Hello, world!';`}
            </SyntaxHighlighter>
            <li>
              Number: Represents numeric values, including integers (whole
              numbers) and decimals (floating-point numbers).
            </li>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              customStyle={codeStyle}
              showLineNumbers={true}
            >
              {`let age = 30;
let pi = 3.14159;`}
            </SyntaxHighlighter>
            <li>
              Boolean: Represents logical values: true or false. Used for
              conditions and decision-making.
            </li>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              customStyle={codeStyle}
              showLineNumbers={true}
            >
              {`let isLoggedIn = true;
let isNight = false; `}
            </SyntaxHighlighter>
            <li>
              Null: Represents the intentional absence of a value. Used to
              indicate that a variable doesn't point to any object.
            </li>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              customStyle={codeStyle}
              showLineNumbers={true}
            >
              {`let emptyVariable = null;`}
            </SyntaxHighlighter>
            <li>
              Undefined: Represents a variable that has been declared but not
              yet assigned a value. Also indicates a function that doesn't
              return a value explicitly.
            </li>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              customStyle={codeStyle}
              showLineNumbers={true}
            >
              {`let undeclaredVariable; // Declared but undefined
function noReturnValue() {} // Function without explicit return
console.log(undeclaredVariable); // Outputs: undefined
console.log(noReturnValue());     // Outputs: undefined`}
            </SyntaxHighlighter>
          </ul>
        </p>
      </div>

      <div className="section">
        <h3 className="section-title">Working with Variables</h3>
        <p>
          Variables are used to store data and reference values in your
          JavaScript code. Here's how to declare and use them:
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`// Declaration
let name = "Bob";

// Assignment
let age = 25;

// Reassignment
let score = 80;
score = 90; // Now score holds the value 90`}
        </SyntaxHighlighter>
        <p>
          While <code>var</code> (an older keyword) is still valid, it's
          generally recommended to use <code>let</code> for variable declaration
          due to its better scoping behavior.
        </p>
      </div>

      <div className="section">
        <h3 className="section-title">Type Coercion</h3>
        <p>
          JavaScript can sometimes automatically convert values from one data
          type to another during operations. This is called type coercion. Here
          are some common examples:
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`// Number to String
let num = 123;
let greeting = "The answer is " + num; // Concatenates num (now a string) to the greeting
console.log(greeting); // Outputs: "The answer is 123"

// String to Number
let numStr = "42";
let result = numStr * 2; // Tries to convert numStr to a number (42) and multiplies
console.log(result);    // Outputs: 84

// Boolean to Number
let isTrue = true;
let isFalse = false;
let sum = isTrue + 5; // true becomes 1
let difference = 10 - isFalse; // false becomes 0
console.log(sum);      // Outputs: 6
console.log(difference); // Outputs: 10`}
        </SyntaxHighlighter>
        <p>
          Understanding type coercion is important because it can sometimes lead
          to unexpected behavior in your code. It's best to be aware of how
          JavaScript handles different data types and conversions.
        </p>
      </div>
     
    </div>
  );
}

export default Chapter3;
