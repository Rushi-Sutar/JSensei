import React, { useState } from "react";
import "../ChaptersCss/Chapters.css";

function Chapter1() {
  return (
    <div className="main">
      <div className="section">
        <h3 className="section-title">What is JavaScript?</h3>
        <p>
          JavaScript is a high-level, interpreted programming language primarily
          used for front-end web development. It is known for its versatility
          and is often referred to as the language of the web. JavaScript allows
          developers to add interactivity, dynamic behavior, and complex
          functionalities to web pages. Originally designed to run in web
          browsers, JavaScript has evolved to support server-side development as
          well (Node.js). It is a crucial component of modern web development
          alongside HTML and CSS.
        </p>
      </div>
      <div className="section">
        <h3 className="section-title">Why learn JavaScript?</h3>
        <p>
          Learning JavaScript opens up a plethora of opportunities in the field
          of web development and beyond. Here are some reasons why learning
          JavaScript is valuable:
          <ul>
            <li>
              Universal language of the web: JavaScript is supported by all
              modern web browsers, making it an essential skill for web
              developers.
            </li>
            <li>
              Versatility: JavaScript can be used for both front-end and
              back-end development, allowing developers to build full-stack
              applications.
            </li>
            <li>
              Popularity and demand: JavaScript is one of the most widely-used
              programming languages, and there is a high demand for skilled
              JavaScript developers in the job market.
            </li>
            <li>
              Community and resources: JavaScript has a vast and active
              community, with abundant learning resources, libraries, and
              frameworks available for developers.
            </li>
            <li>
              Career opportunities: Proficiency in JavaScript can lead to
              lucrative career opportunities in web development, software
              engineering, and related fields.
            </li>
          </ul>
        </p>
      </div>
      <div className="section">
        <h3 className="section-title">Brief History of JavaScript</h3>
        <p>
          JavaScript was created by Brendan Eich, a programmer working at
          Netscape Communications Corporation, in just ten days in May 1995.
          Initially named "Mocha" and later "LiveScript," it was finally renamed
          JavaScript to capitalize on the popularity of Java at the time. The
          first version of JavaScript was implemented in the Netscape Navigator
          web browser.
        </p>
        <p>
          In 1996, Microsoft released its own version of JavaScript called
          JScript, which was implemented in Internet Explorer. This led to
          inconsistencies in JavaScript implementations across different
          browsers, known as the "browser wars."
        </p>
        <p>
          In 1997, JavaScript was standardized under the name ECMAScript by Ecma
          International. ECMAScript defines the syntax and semantics of
          JavaScript and serves as the basis for all JavaScript implementations.
          Since then, multiple versions of ECMAScript have been released,
          introducing new features and enhancements to the language.
        </p>
        <p>
          JavaScript's popularity continued to grow, especially with the advent
          of AJAX (Asynchronous JavaScript and XML) in the early 2000s, which
          allowed web pages to update content dynamically without reloading the
          entire page.
        </p>
        <p>
          Today, JavaScript is one of the most widely-used programming
          languages, powering the interactive experiences of millions of
          websites and web applications worldwide.
        </p>
      </div>
    </div>
  );
}

export default Chapter1;
