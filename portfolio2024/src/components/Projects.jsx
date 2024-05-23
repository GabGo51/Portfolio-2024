import React from "react";
import "../styles/Projects.css";
import { useState } from "react";
import img1 from "../img/alex.png";
import img2 from "../img/gogosse.png";

const Projects = () => {
  const [hovered, setHovered] = useState("GOGOSSE");
  const [picked, setPicked] = useState("");

  const getClassName = (projectName) => {
    if (picked === projectName) return "project picked";
    if (hovered === projectName) return "project hovered";
    return "project";
  };

  const handleMouseOver = (projectName) => {
    setHovered(projectName);
  };

  const handlePick = (projectName) => {
    setPicked(projectName);
  };

  const handleReset = (e) => {
    e.stopPropagation(); // Prevents the div's onClick from firing
    setPicked("");
  };

  return (
    <div className="wrapper">
      <div className="projects">
        <h1>{hovered}</h1>
        <div className="accordion">
          <div
            onMouseOver={() => handleMouseOver("TATQ")}
            onClick={() => handlePick("TATQ")}
            className={getClassName("TATQ")}
          >
            {!picked && <img src={img1} />}
            {picked && <button onClick={handleReset}>x</button>}
          </div>
          <div
            onMouseOver={() => handleMouseOver("GOGOSSE")}
            onClick={() => handlePick("GOGOSSE")}
            className={getClassName("GOGOSSE")}
          >
            {!picked && <img src={img1} />}

            {picked && <button onClick={handleReset}>x</button>}
          </div>
          <div
            onMouseOver={() => handleMouseOver("Alexandra Nicolov")}
            onClick={() => handlePick("Alexandra Nicolov")}
            className={getClassName("Alexandra Nicolov")}
          >
            {!picked && <img src={img1} />}
            {picked && <button onClick={handleReset}>x</button>}
          </div>
          <div
            onMouseOver={() => handleMouseOver("WefinanceU")}
            onClick={() => handlePick("WefinanceU")}
            className={getClassName("WefinanceU")}
          >
            {!picked && <img src={img1} />}
            {picked && <button onClick={handleReset}>x</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
