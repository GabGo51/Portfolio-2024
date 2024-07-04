import React, { useState } from "react";
import "../Header/Header.css";

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

  return (
    <header>
      <div className="logo">
        <div>Logo</div>
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