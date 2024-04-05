import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";
function Chapter10() {
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
        <h3 className="section-title">
          DOM Manipulation: Bringing Your Web Pages to Life
        </h3>
        <p>
          <p>
            The Document Object Model (DOM) is the heart of interactive web
            pages. It represents the structure and content of your HTML document
            as a tree of objects in JavaScript, allowing you to dynamically
            manipulate the page after it loads. Here's a breakdown of key DOM
            manipulation concepts for your JS learning website.
          </p>

          <h4>1. Introduction to the DOM</h4>
          <ul>
            <li>
              The DOM serves as a bridge between your HTML code and your
              JavaScript code.
            </li>
            <li>
              It transforms the static HTML structure into a dynamic,
              interactive object hierarchy that JavaScript can access and
              modify.
            </li>
          </ul>

          <h4>2. Selecting DOM Elements</h4>
          <p>
            You can use various methods to target specific elements on the page:
          </p>
          <ul>
            <li>
              getElementById(id): Retrieves an element by its unique id
              attribute.
            </li>
            <li>
              getElementsByTagName(tag): Returns a collection of elements with
              the specified HTML tag name.
            </li>
            <li>
              querySelector(selector): Uses CSS selectors (like .class-name or
              #id) to select the first matching element.
            </li>
            <li>
              querySelectorAll(selector): Similar to querySelector, but returns
              a list of all matching elements.
            </li>
          </ul>

          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
              {`const heading = document.getElementById("main-title"); // Get element with id="main-title"
const paragraphs = document.getElementsByTagName("p"); // Get all <p> elements
const buttons = document.querySelectorAll(".button"); // Get all elements with class="button"`}
                      </SyntaxHighlighter>


          <h4>3. Modifying DOM Elements</h4>
          <p>
            Once you have a reference to a DOM element, you can manipulate its
            properties and content:
          </p>
          <ul>
            <li>
              textContent: Sets or retrieves the text content of an element.
            </li>
            <li>
              innerHTML: Sets or retrieves the HTML content within an element
              (including child elements).
            </li>
            <li>setAttribute(name, value): Sets an attribute on an element.</li>
            <li>
              classList: Adds, removes, or toggles CSS classes on an element.
            </li>
          </ul>

          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
              {`heading.textContent = "New Title!"; // Change the text content of the heading
const firstParagraph = paragraphs[0];
firstParagraph.innerHTML = "<b>This paragraph has been modified!</b>"; // Add bold formatting
buttons.forEach(button => button.classList.add("active")); // Add "active" class to all buttons`}
                      </SyntaxHighlighter>


          <h4>4. Event Handling</h4>
          <ul>
            <li>
              Events are user interactions or browser actions that trigger
              specific code execution.
            </li>
            <li>
              You can attach event listeners to DOM elements to respond to these
              events:
            </li>
            <li>
              addEventListener(event, handler): Attaches an event listener to an
              element.
            </li>
            <li>
              event: The type of event (e.g., "click", "mouseover", "submit").
            </li>
            <li>handler: The function to be executed when the event occurs.</li>
          </ul>

          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
              {`const button = document.getElementById("submit-button");
button.addEventListener("click", function() {
  console.log("Submit button clicked!");
  // Perform actions in response to the click event
});`}
           </SyntaxHighlighter>
        </p>
      </div>
      
    </div>
  );
}

export default Chapter10;
