import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";
function Chapter7() {
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
        <h3 className="section-title">Arrays and Objects in JavaScript</h3>
        <p>
          Arrays and objects are fundamental data structures in JavaScript that
          allow you to organize and manipulate collections of information.
        </p>
      </div>
      <div className="section">
        <h3 className="section-title">1. Arrays: Ordered Lists of Values</h3>
        <p>
          <ul>
            <li>
              Arrays hold multiple elements of any data type (numbers, strings,
              booleans, objects, even other arrays).
            </li>
            <li>
              Elements are accessed and manipulated using their zero-based index
              (starts from 0)
            </li>
          </ul>
        </p>
      </div>
      <div className="section">
        <p>
          <h4>a. Creating and Accessing Elements</h4>
          </p>
        <p>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >
            {`// Array declaration (literal syntax)
const fruits = ["Banana", "Orange", "Apple"];

// Accessing elements using index
console.log(fruits[0]); // Output: Banana
console.log(fruits[1]); // Output: Orange
console.log(fruits[2]); // Output: Apple
`}
          </SyntaxHighlighter>
        </p>
      </div>
      <div className="section">
        <p>
          <h4>b. Adding and Removing Elements</h4>
          </p>
        <p>
          <ul>
            <h3>Adding Elements</h3>
            <li>push(): Adds elements to the end of the array.</li>
            <li>unshift(): Adds elements to the beginning of the array.</li>
          </ul>

          <ul>
            <h3>Removing Elements</h3>
            <li>pop(): Removes the last element and returns it.</li>
            <li>shift(): Removes the first element and returns it.</li>
          </ul>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >{`fruits.push("Mango"); // Add "Mango" to the end
console.log(fruits);  // Output: ["Banana", "Orange", "Apple", "Mango"]
          
fruits.unshift("Grape"); // Add "Grape" to the beginning
console.log(fruits);  // Output: ["Grape", "Banana", "Oran"Apple", "Mango"]
          
const removedLast = fruits.pop();  // Remove and store last element
console.log(removedLast); // Output: Mango
console.log(fruits);    // Output: ["Grape", "Banana", "Oran"Apple"]
          
const removedFirst = fruits.shift();  // Remove and store first element
console.log(removedFirst); // Output: Grape
console.log(fruits);    // Output: ["Banana", "Orange", "Apple"]`}</SyntaxHighlighter>
        </p>
      </div>
      <div className="section">
        <h3 className="section-title">2. Array Methods: Powerful Tools for Manipulation</h3>
        <p>
        JavaScript provides built-in array methods for common operations
        </p>
        <p>
        <ul>
          <li>map(): Creates a new array with the results of calling a function on every element.</li>
          </ul>
          </p>
        <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
        >{ `const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]`}</SyntaxHighlighter>
      </div>
      
      <div className="section">
        <p>
        <ul>
          <li>filter(): Creates a new array with elements that pass a test implemented by the provided function.</li>
          </ul>
          </p>
        <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
        >{`const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]`}</SyntaxHighlighter>
      </div>

      <div className="section">
        <p>
        <ul>
          <li>reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.</li>
          </ul>
          </p>
        <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
        >{`const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15`}</SyntaxHighlighter>
      </div>

      <div className="section">
        <p>
        <ul>
          <li>forEach(): Executes a provided function once for each array element.</li>
          </ul>
          </p>
        <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
        >{`numbers.forEach(number => console.log(number));
// Output: 1, 2, 3, 4, 5 (logs each number on a new line)`}</SyntaxHighlighter>
      </div>

      <div className="section">
        <h3 className="section-title">3. Objects: Unordered Collections of Key-Value Pairs</h3>
        <p>
          <ul>
            <li>Objects store data as properties (key-value pairs).</li>
            <li>Properties can hold values of any data type.</li>
          </ul>
        </p>
        <p>
          <h4>a. Creating and Accessing Properties</h4>
          </p>
        <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
        >{`const person = {
name: "Alice",
age: 30,
city: "New York"
};

// Accessing properties using dot notation or bracket notation
console.log(person.name); // Output: Alice
console.log(person["age"]); // Output: 30 (useful for dynamic propeaccess)`}</SyntaxHighlighter>
      </div>
      <div className="section">
        <p>
          <h4>b. Updating Properties</h4>
          </p>
        <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
        >{`person.age = 31; // Update existing property
person.occupation = "Software Engineer"; // Add a new property
console.log(person);
/* Output:
  { name: 'Alice',
    age: 31,
    city: 'New York',
    occupation: 'Software Engineer' }
*/`}</SyntaxHighlighter>
      </div>
     
    </div>
  );
}

export default Chapter7;
