import React from "react";
import "../styles/Projects.css";
import { useState } from "react";

const Projects = () => {
  const [hovered, isHovered] = useState("GOGOSSE");
  const [picked, isPicked] = useState("");

  const getClassName = (projectName) => {
    if (picked === projectName) return "project picked";
    if (hovered === projectName) return "project hovered";
    return "project";
  };

  return (
    <div className="wrapper">
      <div className="projects">
        <h1>{hovered}</h1>
        <div className="accordion">
          <div
            onMouseOver={() => isHovered("TATQ")}
            onClick={() => isPicked("TATQ")}
            className={getClassName("TATQ")}
          ></div>
          <div
            onMouseOver={() => isHovered("GOGOSSE")}
            className={getClassName("GOGOSSE")}
          ></div>
          <div
            onMouseOver={() => isHovered("Alexandra Nicolov")}
            className={getClassName("Alexandra Nicolov")}
          ></div>
          <div
            onMouseOver={() => isHovered("WefinanceU")}
            className={getClassName("WefinanceU")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
