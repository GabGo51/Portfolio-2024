import React from "react";
import "./Techstack.css";

const techItemsDevelopment = [
  "React",
  "Javascript",
  "HTML",
  "CSS",
  "Styled-Components",
  "Tailwind",
  "Framer-Motion",
  "GSAP",
  "Node.js",
  "MongoDB",
  "Git",
  "Vercel",
];

const techItemsDesign = [
  "Figma",
  "Webflow",
  "Photoshop",
  "Krita",
  "SquareSpace",
  "Canva",
];

const Techstack = () => {
  return (
    <div className="techstack">
      <h2>A Diversified Toolbox</h2>
      <div>
        <h3>Development</h3>
        <div className="tech-items">
          {techItemsDevelopment.map((item, index) => (
            <React.Fragment key={index}>
              <p style={{ animationDelay: `${index * 0.4}s` }}>{item}</p>
              {index < techItemsDevelopment.length - 1 && (
                <p style={{ animationDelay: `${index * 0.1}s` }}>&#183;</p>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>
        <h3>Design</h3>
        <div className="tech-items">
          {techItemsDesign.map((item, index) => (
            <React.Fragment key={index}>
              <p style={{ animationDelay: `${index * 0.1}s` }}>{item}</p>
              {index < techItemsDesign.length - 1 && (
                <p style={{ animationDelay: `${index * 0.1}s` }}>&#183;</p>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
