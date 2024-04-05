import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";

function Chapter5() {
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
        <h3 className="section-title">Control Flow Statements</h3>
        <p>
          Control flow statements dictate the execution path of your JavaScript
          code based on conditions or user input. They allow for making
          decisions and branching the program's flow.
        </p>
      </div>
      <div className="section">
        <h3 className="section-title">1. if...else Statements</h3>
        <p>
          The if...else statement is the fundamental control flow structure. It
          checks a condition and executes a block of code if the condition is
          true, and optionally, an alternative block if it's false.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`let grade = 85;

if (grade >= 90) {
  console.log("Excellent! You got an A.");
} else if (grade >= 80) {
  console.log("Great job! You got a B.");
} else if (grade >= 70) {
  console.log("Good work! You got a C.");
} else {
  console.log("You need to study more.");
}`}
        </SyntaxHighlighter>
        </div>
      <div className="section">

        <h3 className="section-title">2. switch Statement</h3>
        <p>
          The switch statement provides a multi-way branching mechanism based on
          a single expression's value. It compares the expression with each case
          label and executes the corresponding code block.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Midweek grind.");
    break;
  case "Friday":
    console.log("Thank goodness, it's Friday!");
    break;
  default:
    console.log("Enjoy the weekend!");
}`}
          </SyntaxHighlighter>
          </div>
        <div className="section">

        <h3 className="section-title">Loops</h3>
        <p>
          Loops allow you to execute a block of code repeatedly until a certain
          condition is met. Here are the common looping constructs in
          JavaScript:
        </p>
      </div>
      <div className="section">
      
        <h3 className="section-title">1. for Loop</h3>
        <p>
          The for loop iterates a specific number of times based on an
          initialization, condition, and increment/decrement expression.
          </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}`}
        </SyntaxHighlighter>
        </div>
        <div className="section">

        <h3 className="section-title">2. while Loop</h3>
        <p>
          The while loop continues execution as long as a specified condition
          remains true.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++; // Increment count to eventually exit the loop
}`}
        </SyntaxHighlighter>
      </div>
      <div className="section">
      
        <h3 className="section-title">3. do...while Loop</h3>
        <p>
          The do...while loop ensures the code block executes at least once,
          even if the condition is initially false.Then, it continues looping as
          long as the condition remains true.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={codeStyle}
          showLineNumbers={true}
        >
          {`let i = 0;

do {
    console.log("Current value of i:", i);
    i++;
} while (i < 5);
`}
        </SyntaxHighlighter>
      </div>
     
    </div>
  );
}

export default Chapter5;
