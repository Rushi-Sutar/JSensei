import React, { useState } from "react";
import Chapter1 from "../pages/chapters/Chapter1";
import Chapter2 from "../pages/chapters/Chapter2";
import Chapter3 from "../pages/chapters/Chapter3";
import Chapter4 from "../pages/chapters/Chapter4";
import Chapter5 from "../pages/chapters/Chapter5";
import Chapter6 from "../pages/chapters/Chapter6";
import Chapter7 from "../pages/chapters/Chapter7";
import Chapter8 from "../pages/chapters/Chapter8";
import Chapter9 from "../pages/chapters/Chapter9";
import Chapter10 from "../pages/chapters/Chapter10";
import Chapter11 from "../pages/chapters/Chapter11";
import Chapter12 from "../pages/chapters/Chapter12";
// import Chapter13 from "../pages/chapters/Chapter13";
// import Chapter14 from "../pages/chapters/Chapter14";
// import Chapter15 from "../pages/chapters/Chapter15";
// import Chapter16 from "../pages/chapters/Chapter16";
// import Chapter17 from "../pages/chapters/Chapter17";
// import Chapter18 from "../pages/chapters/Chapter18";
// import Chapter19 from "../pages/chapters/Chapter19";
// import Chapter20 from "../pages/chapters/Chapter20";
import NotFound from "../pages/chapters/NotFound";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx"; 

function Lessons() {
    const sections = [
        {
          title: " 1. Introduction to JavaScript",
          content: (
            <div>
              <p>What is JavaScript?</p>
              <p>Why learn JavaScript?</p>
              <p>Brief history of JavaScript</p>
            </div>
          ),
        },
        {
          title: " 2. Getting Started with JavaScript",
          content: (
            <div>
              <p>Setting up your development environment</p>
              <p>Writing your first JavaScript program</p>
              <p>Understanding basic syntax</p>
            </div>
          ),
        },
        {
          title: " 3. Data Types and Variables",
          content: (
            <div>
              <p>Primitive data types (string, number, boolean, null, undefined)</p>
              <p>Working with variables</p>
              <p>Type coercion</p>
            </div>
          ),
        },
        {
          title: " 4. Operators and Expressions",
          content: (
            <div>
              <p>Arithmetic operators</p>
              <p>Comparison operators</p>
              <p>Logical operators</p>
              <p>Conditional (ternary) operator</p>
            </div>
          ),
        },
        {
          title: " 5. Control Flow and Loops",
          content: (
            <div>
              <p>if...else statements</p>
              <p>switch statement</p>
              <p>for loop</p>
              <p>while loop</p>
              <p>do...while loop</p>
            </div>
          ),
        },
        {
          title: " 6. Functions",
          content: (
            <div>
              <p>Declaring and calling functions</p>
              <p>Function parameters and arguments</p>
              <p>Return statement</p>
              <p>Arrow functions</p>
            </div>
          ),
        },
        {
          title: " 7. Arrays and Objects",
          content: (
            <div>
              <p>
                Working with arrays (creation, accessing elements, adding/removing
                elements)
              </p>
              <p>Array methods (map, filter, reduce, forEach)</p>
              <p>
                Working with objects (creation, accessing properties, updating
                properties)
              </p>
            </div>
          ),
        },
        {
          title: " 8. Scope and Closures",
          content: (
            <div>
              <p>Global scope vs. local scope</p>
              <p>Function scope vs. block scope</p>
              <p>Closures and their practical applications</p>
            </div>
          ),
        },
        {
          title: " 9. Asynchronous JavaScript",
          content: (
            <div>
              <p>Understanding asynchronous programming</p>
              <p>Callback functions</p>
              <p>Promises</p>
              <p>Async/await</p>
            </div>
          ),
        },
        {
          title: " 10. DOM Manipulation",
          content: (
            <div>
              <p>Introduction to the Document Object Model (DOM)</p>
              <p>Selecting DOM elements</p>
              <p>Modifying DOM elements</p>
              <p>Event handling</p>
            </div>
          ),
        },
        {
          title: " 11. Introduction to ES6+",
          content: (
            <div>
              <p>Let and const</p>
              <p>Template literals</p>
              <p>Destructuring assignment</p>
              <p>Spread and rest operators</p>
              <p>Classes and inheritance</p>
            </div>
          ),
        },
        {
          title: " 12. Error Handling",
          content: (
            <div>
              <p>Understanding errors in JavaScript</p>
              <p>try...catch statement</p>
              <p>Error objects</p>
            </div>
          ),
        },
        {
          title: " 13. Debugging JavaScript",
          content: (
            <div>
              <p>Using browser developer tools</p>
              <p>Console methods (log, error, warn)</p>
              <p>Debugging techniques</p>
            </div>
          ),
        },
        {
          title: " 14. Testing JavaScript",
          content: (
            <div>
              <p>Introduction to unit testing</p>
              <p>Popular testing frameworks (e.g., Jest, Mocha)</p>
              <p>Writing and running test cases</p>
            </div>
          ),
        },
        {
          title: " 15. JavaScript Libraries and Frameworks",
          content: (
            <div>
              <p>
                Overview of popular JavaScript libraries and frameworks (e.g.,
                React, Angular, Vue.js)
              </p>
              <p>Choosing the right library or framework for your project</p>
            </div>
          ),
        },
        {
          title: " 16. Advanced JavaScript Concepts (Optional)",
          content: (
            <div>
              <p>Prototypal inheritance</p>
              <p>Functional programming concepts (map, reduce, filter)</p>
              <p>Memory management and performance optimization</p>
            </div>
          ),
        },
        {
          title: " 17. JavaScript Best Practices",
          content: (
            <div>
              <p>Code formatting and style conventions</p>
              <p>Modular code organization</p>
              <p>Performance optimization tips</p>
            </div>
          ),
        },
        {
          title: " 18. Resources and Further Learning",
          content: (
            <div>
              <p>Recommended books, articles, and tutorials</p>
              <p>Online courses and video tutorials</p>
              <p>JavaScript community forums and websites</p>
            </div>
          ),
        },
        {
          title: " 19. Projects and Exercises",
          content: (
            <div>
              <p>Hands-on coding exercises</p>
              <p>Mini-projects to reinforce learning</p>
              <p>Suggestions for real-world projects to apply skills</p>
            </div>
          ),
        },
        {
          title: " 20. Community and Support",
          content: (
            <div>
              <p>Discussion forums for asking questions and sharing knowledge</p>
              <p>Mentorship programs or opportunities for peer-to-peer learning</p>
              <p>Events, meetups, and conferences for networking</p>
            </div>
          ),
        },
      ];
      const [page, setpage] = useState(1);
  const [isopen, setIsopen] = useState(true);
  
  return (
    <>
      <div className="container">
        <section
          className={`left-section ${isopen ? "open" : ""}`}
        >
          <div className="drawer">
            <button
              onClick={() => setIsopen(!isopen)}
              style={isopen ? { textAlign: "center" } : {}}
            >
              {isopen ? <MdKeyboardArrowRight /> : <RxCross2 />}
            </button>
          </div>
          {sections.map((section, index) => (
            <div className="accordion-item" key={index}>
              <button
                className={`menu-buttons ${isopen ? "hide" : ""}`}
                onClick={() => {
                  setpage(index + 1)
                  setIsopen(!isopen);
                }
                }
              >
                {section.title}
              </button>
            </div>
          ))}
        </section>
        <section className="right-section">
          {page === 1 ? (
            <Chapter1/>
          ) : page === 2 ? (
            <Chapter2 />
          ) : page === 3 ? (
            <Chapter3 />
          ) : page === 4 ? (
            <Chapter4 />
          ) : page === 5 ? (
            <Chapter5 />
          ) : page === 6 ? (
            <Chapter6 />
          ) : page === 7 ? (
            <Chapter7 />
          ) : page === 8 ? (
            <Chapter8 />
          ) : page === 9 ? (
            <Chapter9 />
          ) : page === 10 ? (
            <Chapter10 />
          ) : page === 11 ? (
            <Chapter11 />
          ) : page === 12 ? (
            <Chapter12 />
          ) : page === 13 ? (
            <NotFound />
          ) : page === 15 ? (
            <NotFound />
          ) : page === 16 ? (
            <NotFound />
          ) : page === 17 ? (
            <NotFound />
          ) : page === 18 ? (
            <NotFound />
          ) : page === 19 ? (
            <NotFound />
          ) : (
            <NotFound />
          )}
           <div className="Navigation-buttons">
            <button onClick={() => { page != 1 ? setpage(page - 1) : setpage(1) }}>Prev</button>
        <button onClick={()=>setpage(page+1)}>Next</button>
      </div>
        </section>
      </div>
    </>
  )
}

export default Lessons
