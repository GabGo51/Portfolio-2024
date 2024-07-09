import React, { useState } from "react";
import "../Header/Header.css";
import logo from '../../img/logo.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const smoothScroll = (element) => {
    const targetElement = document.querySelector(element);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false); // Close menu on link click
    } else {
      console.error(`Element not found: ${element}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useGSAP(() => {
    gsap.from("header", {
      opacity: 0,
      y: -100,
      duration: 1,
      delay:3, 
    });
    
  }, []);

  return (
    <header>
      <div className="logo">
        
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {toggleMenu ? <div>+</div> : <div>-</div>}
      </button>
      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li>
            <p onClick={() => smoothScroll("#about")}>About</p>
          </li>
          <li>
            <p onClick={() => smoothScroll("#techstack")}>Techstack</p>
          </li>
          <li>
            <p onClick={() => smoothScroll("#projects")}>Work</p>
          </li>
          <li>
            <p onClick={() => smoothScroll("#connect")}>Connect</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;