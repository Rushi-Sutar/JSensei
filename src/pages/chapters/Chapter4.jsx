import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";

function Chapter4() {
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
        <h3 className="section-title">Arithmetic Operators</h3>
        <p>
          Arithmetic operators are used to perform arithmetic operations on
          numbers. Here are the common arithmetic operators in JavaScript:
        </p>
        <p>
          <ul>
            <li>Addition (+): Adds two operands.</li>
            <li>
              Subtraction (-): Subtracts the second operand from the first
              operand.
            </li>
            <li>Multiplication (*): Multiplies two operands.</li>
            <li>
              Division (/): Divides the first operand by the second operand.
            </li>
            <li>
              Modulus (%): Returns the remainder of the division of the first
              operand by the second operand.
            </li>
            <li>Increment (++): Increases the value of an operand by 1.</li>
            <li>Decrement (--): Decreases the value of an operand by 1.</li>
          </ul>
        </p>
        <p>Example:</p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`let a = 5;
let b = 2;

let addition = a + b; // 7
let subtraction = a - b; // 3
let multiplication = a * b; // 10
let division = a / b; // 2.5
let modulus = a % b; // 1
let increment = a++; // a is now 6
let decrement = b--; // b is now 1`}
        </SyntaxHighlighter>
      </div>

      <div className="section">
        <h3 className="section-title">Comparison Operators</h3>
        <p>
          Comparison operators are used to compare two values and return a
          boolean value (true or false). Here are the common comparison
          operators in JavaScript:
        </p>
        <p>
          <ul>
            <li>Equal (==): Returns true if the operands are equal.</li>
            <li>Not Equal (!=): Returns true if the operands are not equal.</li>
            <li>
              Strict Equal (===): Returns true if the operands are equal and of
              the same type.
            </li>
            <li>
              Strict Not Equal (!==): Returns true if the operands are not equal
              and/or not of the same type.
            </li>
            <li>
              Greater Than ({">"}): Returns true if the left operand is greater
              than the right operand.
            </li>
            <li>
              Less Than (&lt;): Returns true if the left operand is less than
              the right operand.
            </li>
            <li>
              Greater Than or Equal To ({">"}=): Returns true if the left
              operand is greater than or equal to the right operand.
            </li>
            <li>
              Less Than or Equal To (&lt;=): Returns true if the left operand is
              less than or equal to the right operand.
            </li>
          </ul>
        </p>
        <p>Example:</p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`let x = 5;
let y = 10;

console.log(x == y); // false
console.log(x != y); // true
console.log(x === '5'); // false (strict comparison)
console.log(x !== '5'); // true (strict comparison)
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true`}
        </SyntaxHighlighter>
      </div>

      <div className="section">
        <h3 className="section-title">Logical Operators</h3>
        <p>
          Logical operators are used to combine conditional statements. Here are
          the common logical operators in JavaScript:
        </p>
        <p>
          <ul>
            <li>Logical AND (&&): Returns true if both operands are true.</li>
            <li>
              Logical OR (||): Returns true if at least one operand is true.
            </li>
            <li>
              Logical NOT (!): Returns true if the operand is false and vice
              versa.
            </li>
          </ul>
        </p>
        <p>Example:</p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`let p = true;
let q = false;

console.log(p && q); // false
console.log(p || q); // true
console.log(!p); // false`}
        </SyntaxHighlighter>
      </div>

      <div className="section">
        <h3 className="section-title">Conditional (Ternary) Operator</h3>
        <p>
          The conditional (ternary) operator is a shorthand for an if-else
          statement. It evaluates a condition and returns one of two
          expressions, depending on whether the condition is true or false.
        </p>
        <p>Syntax: condition ? expression1 : expression2</p>
        <p>Example:</p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`let age = 20;
let allowed = (age >= 18) ? "Allowed" : "Not Allowed";
console.log(allowed); // "Allowed"`}
        </SyntaxHighlighter>
        <p>
          In this example, if age is greater than or equal to 18, the variable
          allowed will be assigned the value "Allowed", otherwise, it will be
          assigned the value "Not Allowed".
        </p>
      </div>
     
    </div>
  );
}

export default Chapter4;
