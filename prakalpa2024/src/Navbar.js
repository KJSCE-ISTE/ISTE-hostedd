import React, { useState } from "react"; 
//import { Link } from "react-scroll";
import ISTELogo from "./assets/Iste.png"; 
import SomaiyaLogo from "./assets/kjsce.jpg"; 
import HamburgerIcon from "./assets/hamburger.jpg"; 
import "./Navbar.css";  

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const scrollTo = (id) => {
    setShowMenu(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={ISTELogo} alt="ISTE Logo" className="logo-iste" />
        </div>
        <div className="navbar-center">
          <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
            <li onClick={() => scrollTo("home")}>
              Home
            </li>
            <li onClick={() => scrollTo("software-section")}>
              Themes
            </li>
            {/* <li onClick={() => scrollTo("hardware-section")}>
              Hardware
            </li> */}
            {/* <li onClick={() => scrollTo("paper-section")}>
              Paper
            </li> */}
            <li onClick={() => scrollTo("info-section")}>
              Competitions
            </li>
            <li onClick={() => scrollTo("contact")}>
              Contact us
            </li>
            {/* Rest can lead to their respective sections */}
          </ul>
          <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
            <img src={HamburgerIcon} alt="Hamburger Icon" />
          </div>
        </div>
        <div className="navbar-right">
          <img src={SomaiyaLogo} alt="Somaiya Logo" className="logo-somaiya" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;