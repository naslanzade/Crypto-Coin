import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/img/icon-1.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClikc = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <a href="" className="navbar-logo">
          <img src={logo} alt="" />
        </a>
        <div className="menu-icon" onClick={handleClikc}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="item" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/aboutmain" className="item" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="item" onClick={closeMobileMenu}>
              Service
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="item" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>

          <li className="nav-item">
            <ul className="links">
              <li className="link-item">
                <p>
                  <i className="fa-brands fa-facebook-f"></i>
                </p>
              </li>
              <li className="link-item">
                <p>
                  <i class="fa-brands fa-twitter"></i>
                </p>
              </li>
              <li className="link-item">
                <p>
                  <i class="fa-brands fa-linkedin-in"></i>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
