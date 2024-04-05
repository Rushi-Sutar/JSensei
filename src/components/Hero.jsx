import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>Master JavaScript programming</h1>
      <h2 className="subtext">
        with our comprehensive lessons and exercises.
      </h2>
      <Link to="/lessons" className="btn">
        Get Started
      </Link>
    </section>
  );
}

export default Hero;
