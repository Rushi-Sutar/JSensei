import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import '../ChaptersCss/Chapters.css'

function Chapter2() {
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
    <h3 className="section-title">Setting up your development environment</h3>
    <p>
      Choose a text editor or Integrated Development Environment (IDE) to
      write your code. Some popular choices include Visual Studio Code,
      Sublime Text, Atom, and Brackets.
    </p>
    <p>
      Since JavaScript runs in the browser, choose a modern browser for
      testing and debugging your code. Common choices include Google Chrome,
      Mozilla Firefox, and Microsoft Edge.
    </p>
    <p>
      For testing your JavaScript applications locally, you may need a local
      development server. You can use tools like Node.js with http-server or
      live-server to quickly set up a local server.
    </p>
  </div>
  <div className="section">
    <h3 className="section-title">Writing your first JavaScript program</h3>
    <p>
      Start by creating an HTML file (index.html) where you can include your
      JavaScript code. This will serve as the entry point for your web
      application.
    </p>
      </div>
      <SyntaxHighlighter
          language="html"
        style={atomDark}
        showLineNumbers={true}
          customStyle={codeStyle}
        >
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First JavaScript Program</title>
</head>
<body>
    <h1>Hello, JavaScript!</h1>
    <script src="app.js"></script>
</body>
</html>`}
        </SyntaxHighlighter>
        <p>
          Create a new JavaScript file (app.js) and start writing your
          JavaScript code.
        </p>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
        customStyle={codeStyle}
        showLineNumbers={true} 
        >
{`// app.js
console.log("Hello, world!");`}
         </SyntaxHighlighter> 

  <div className="section">
        <h3 className="section-title">Understanding basic syntax</h3>
        <p>
        <ul>
    <li>
      Variables are used to store data values. In JavaScript, you can
      declare variables using var, let, or const.
        </li>
    <li>
      JavaScript supports various data types, including numbers, strings,
      booleans, arrays, objects, and more.
    </li>
    <li>
      Functions are blocks of reusable code. You can define functions using
      the function keyword.
          </li>
          </ul>
          </p>
      </div>
      
</div>
      
  );
}

export default Chapter2;
