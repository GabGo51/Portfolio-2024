// Header.js
import React, { useContext , useState} from "react";
import "../Header/Header.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MouseContext } from "../../context/mouseContext";
import useSmoothScroll from "../../hooks/useSmoothScroll"; // Adjust path as necessary

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cursorChangeHandler } = useContext(MouseContext);
  const { smoothScroll } = useSmoothScroll();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useGSAP(() => {
    gsap.from("header", {
      opacity: 0,
      y: -100,
      duration: 1,
      delay: 3,
    });
  }, []);

  return (
    <header>
      <div className="logo">
        {/* Insert logo component or image */}
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <div>-</div> : <div>+</div>}
      </button>
      <nav className={menuOpen ? "open" : ""}>
        <ul onMouseLeave={() => cursorChangeHandler("")}>
          <li
            onMouseEnter={() => cursorChangeHandler("header")}
            onClick={() => smoothScroll("#about")}
          >
            <p>About</p>
          </li>
          <li
            onMouseEnter={() => cursorChangeHandler("header")}
            onClick={() => smoothScroll("#techstack")}
          >
            <p>Techstack</p>
          </li>
          <li
            onMouseEnter={() => cursorChangeHandler("header")}
            onClick={() => smoothScroll("#projects")}
          >
            <p>Work</p>
          </li>
          <li
            onMouseEnter={() => cursorChangeHandler("header")}
            onClick={() => smoothScroll("#connect")}
          >
            <p>Connect</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
