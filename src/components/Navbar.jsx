import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
  return (
    <>
      <header>
        <nav className="navbar">
          <h3 className="logo">JSensei</h3>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lessons">Lessons</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <a className="login-button" href="">
            Login
          </a>
              </nav>
              


              <nav className="small-navbar">
      <h3 className="logo">JSensei</h3>
      <button onClick={toggleMenu}style={{zIndex:1000,backgroundColor:'black', border:'none',fontSize:'20px'}}>
                      { menuOpen?<RxCross2 style={{color:"white"}} />:<RxHamburgerMenu style={{color:"white"}}/>}
      </button>
      {menuOpen && (
        <div className="menu">
          <ul className="mobile-nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lessons">Lessons</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>

      </header>
    </>
  );
}

export default Navbar;
