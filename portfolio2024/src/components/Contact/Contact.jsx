import React, { useContext } from "react";
import "./Contact.css";
import { MouseContext } from "../../context/mouseContext";

const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div id="connect" className="contact section">
      <h3>Let's Connect</h3>
      <div className="cards-container">
        <a
          href="mailto:gosselin.gabriel@outlook.com"
          className="card"
          onMouseEnter={() => cursorChangeHandler("header")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <div>
            <h4>Email</h4>
            <p>gosselin.gabriel@outlook.com</p>
          </div>
        </a>
        <a
          href="tel:+14507127842"
          className="card"
          onMouseEnter={() => cursorChangeHandler("header")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <div>
            <h4>Phone Number</h4>
            <p>450 712 7842</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
