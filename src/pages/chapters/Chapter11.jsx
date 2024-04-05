import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../ChaptersCss/Chapters.css";
function Chapter11() {
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
      <h3 className="section-title">Let and Const</h3>
      <p>
        Provide a brief recap of let and const for variable declaration, emphasizing their block scope and benefits over the older var keyword.
      </p>
    </div>
    <div className="section">
      <h3 className="section-title">Template Literals</h3>
      <p>
        Offer a more concise and readable way to create string literals, especially when incorporating variables or expressions.
      </p>
      <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >{`const name = "Alice";
const greeting = "Hello, " + name + "!"; // Traditional concatenation
const greeting2 = \`Hello, \${name}!\`; // Template literal with embedded variable
console.log(greeting); // Output: Hello, Alice!
console.log(greeting2); // Output: Hello, Alice!`}</SyntaxHighlighter>
    </div>
    <div className="section">
      <h3 className="section-title">Destructuring Assignment</h3>
      <p>
        Enables extracting values from objects or arrays into separate variables in a more concise way.
      </p>
      <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >{`const person = { name: "Bob", age: 30 };
// Traditional approach
const name1 = person.name;
const age1 = person.age;
// Destructuring assignment
const { name, age } = person;
console.log(name); // Output: Bob
console.log(age); // Output: 30
const numbers = [1, 2, 3];
// Traditional approach
const firstNumber = numbers[0];
const rest = numbers.slice(1); // Get remaining elements
// Destructuring assignment
const [firstNumber, ...rest] = numbers;
console.log(firstNumber); // Output: 1
console.log(rest); // Output: [2, 3] (array containing remaining elements)`}</SyntaxHighlighter>
    </div>
    <div className="section">
      <h3 className="section-title">Spread and Rest Operators</h3>
      <p>
        The spread operator (...) allows you to expand iterables (arrays, strings) and object properties into individual elements within expressions. The rest operator (...) collects remaining elements/properties into a new array/object.
      </p>
      <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={codeStyle}
            showLineNumbers={true}
          >{`
        const numbers1 = [1, 2, 3];
        const numbers2 = [4, 5, 6];
        // Combine arrays using spread operator
        const combinedNumbers = [...numbers1, ...numbers2];
        console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]
  
        const person1 = { name: "Charlie" };
        const person2 = { age: 25 };
        // Combine object properties using spread operator
        const combinedPerson = { ...person1, ...person2 };
        console.log(combinedPerson); // Output: { name: "Charlie", age: 25 }
  
        function sum(x, y, z) {
          return x + y + z;
        }
        // Use rest operator to handle more arguments than expected
        const args = [1, 2, 3, 4]; // Extra arguments
        const firstTwo = args[0];
        const restArgs = args.slice(1); // Get remaining arguments
        const result = sum(firstTwo, ...restArgs); // Spread restArgs into function call
        console.log(result); // Output: 10
        `}</SyntaxHighlighter>
    </div>
    <div className="section">
      <h3 className="section-title">Classes and Inheritance</h3>
      <p>
        Introduced a class-based syntax for object-oriented programming, providing a more structured way to define objects and their behaviors. Inheritance allows creating new classes (subclasses) that inherit properties and methods from existing classes (superclasses).
      </p>
      <SyntaxHighlighter
      language="javascript"
      style={atomDark}
      customStyle={codeStyle}
      showLineNumbers={true}
    >{`lass Animal {
 constructor(name) {
   this.name = name;
 }
  
 speak() {
   console.log("Generic animal sound");
 }

  
lass Dog extends Animal {
 constructor(name, breed) {
   super(name); // Call parent class constructor
   this.breed = breed;
 }
  
 speak() {
     console.log("Woof!"); // Override speak method for dogs
   }
 }
 const dog = new Dog("Fido", "Labrador");
 dog.speak(); // Output: Woof!
 console.log(dog.name); // Output: Fido`}</SyntaxHighlighter>
      </div>
     
  </div>
  
  )
}

export default Chapter11
