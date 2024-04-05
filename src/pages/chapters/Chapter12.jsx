import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";
function Chapter12() {
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
        <h3 className="section-title">Understanding Errors in JavaScript</h3>
        <p>
          Errors are unexpected conditions that arise during program execution,
          halting normal program flow. They can occur due to syntax mistakes,
          runtime errors (e.g., accessing undefined variables), or exceptions
          thrown by external libraries.
        </p>
      </div>
      <div className="section">
        <h3 className="section-title">try...catch Statement</h3>
        <p>
          The try...catch statement is the primary mechanism for handling errors
          in JavaScript. It provides a way to intercept errors and execute
          alternative code to prevent the program from crashing.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`try {
// Code that might throw an error
const result = undefinedVariable / 2; // Attempting to divide by undefined
console.log(result);
} catch (error) {
// Code to handle the error
console.error("Error:", error.message); // Access error message from the error object
// Handle the error gracefully (e.g., provide a user-friendly message)
}`}
        </SyntaxHighlighter>
      </div>
      <div className="section">
        <h3 className="section-title">Error Objects</h3>
        <p>
          When an error occurs, JavaScript creates an error object that contains
          information about the error. You can access properties of this object
          within the catch block to understand the nature of the error.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`try {
  const result = parseInt("hello"); // Parsing a non-numeric string
  console.log(result);
} catch (error) {
  console.error("Error:", error.name); // Output: Error: TypeError
  console.error("Error message:", error.message); // Output: "parseInt argument must be a string and a radix"
}`}
        </SyntaxHighlighter>
      </div>
      
    </div>
  );
}

export default Chapter12;
