import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";
function Chapter9() {
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
          Asynchronous JavaScript: Handling Non-Blocking Operations
        </h3>
        <p>
          <p>
            JavaScript is a single-threaded language, meaning it can only
            execute one task at a time. However, web applications often involve
            operations that take time, such as fetching data from a server or
            waiting for user input. Asynchronous programming allows JavaScript
            to handle these operations without blocking the main thread, keeping
            the user interface responsive.
          </p>

          <h4>1. Understanding Asynchronous Programming</h4>
          <ul>
            <li>
              <strong>Synchronous vs. Asynchronous:</strong>
            </li>
            <ul>
              <li>
                Synchronous: Operations complete before the next line of code
                executes.
              </li>
              <li>
                Asynchronous: Operations take time and don't block the main
                thread. The program continues execution, and the result is
                delivered later (often through callbacks or promises).
              </li>
            </ul>
            <li>
              <strong>Benefits:</strong>
            </li>
            <ul>
              <li>
                Improved user experience: The UI remains responsive while
                waiting for asynchronous operations.
              </li>
              <li>
                Efficient resource utilization: JavaScript can handle multiple
                requests concurrently.
              </li>
            </ul>
          </ul>

          <h4>2. Callback Functions</h4>
          <ul>
            <li>
              A traditional way to handle asynchronous operations in JavaScript.
            </li>
            <li>
              A function is passed as an argument to another function (the one
              performing the asynchronous task).
            </li>
            <li>
              When the asynchronous operation completes, the callback function
              is invoked with the result (or error).
            </li>
          </ul>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
            {`function fetchData(url, callback) {
    const xhr = new XMLHttpRequest(); // Create an XHR object
    xhr.open("GET", url); // Open a GET request
    xhr.onload = function() { // Callback function for successful request
      if (xhr.status === 200) { // Check for success status code
        callback(null, xhr.responseText); // Call the provided callback with data (and null for error)
      } else {
        callback(new Error("Failed to fetch data"), null); // Call callback with error and null data
      }
    };
    xhr.send(); // Send the request (triggers asynchronous operation)
  }
  
  fetchData("https://api.example.com/data", function(error, data) {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Data:", data); // Process the fetched data
    }
  });`}
          </SyntaxHighlighter>

          <h4>3. Promises</h4>
          <ul>
            <li>
              Introduced in ES6 (ECMAScript 2015), providing a cleaner syntax
              for asynchronous operations.
            </li>
            <li>
              A promise is an object representing the eventual completion (or
              failure) of an asynchronous operation.
            </li>
            <li>
              It has three states: pending, fulfilled (resolved), or rejected.
            </li>
            <li>Promises offer chaining and error handling mechanisms.</li>
          </ul>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
            {`function fetchData(url) {
    return new Promise((resolve, reject) => { // Create a promise
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.responseText); // Resolve the promise with data
        } else {
          reject(new Error("Failed to fetch data")); // Reject the promise with error
        }
      };
      xhr.send();
    });
  }
  
  fetchData("https://api.example.com/data")
    .then(data => { // Handle successful resolution (fulfilled promise)
      console.log("Data:", data);
    })
    .catch(error => { // Handle promise rejection (error)
      console.error("Error:", error);
    });`}
          </SyntaxHighlighter>

          <h4>4. Async/Await (ES7)</h4>
          <ul>
            <li>
              Introduced in ES7 (ECMAScript 2017), providing syntactic sugar for
              working with promises.
            </li>
            <li>
              Makes asynchronous code look more synchronous (but it's still
              asynchronous under the hood).
            </li>
            <li>Requires the async keyword before a function to use await.</li>
          </ul>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
            {`async function fetchData(url) {
    try {
      const response = await fetch(url); // Use the fetch API (similar to promises)
      const data = await response.text();
      console.log("Data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  fetchData("https://api.example.com/data");`}
          </SyntaxHighlighter>
        </p>
      </div>
      
    </div>
  );
}

export default Chapter9;
