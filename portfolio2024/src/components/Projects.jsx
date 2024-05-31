import React, { useState } from "react";
import "../styles/Projects.css";
import Project from "./Project";
import img1 from "../img/alex.png";
import img2 from "../img/gogosse.png";

const Projects = () => {
  const [hovered, setHovered] = useState("GOGOSSE");
  const [picked, setPicked] = useState("");

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

  const projects = [
    {number:"01", name: "TATQ", img: img1 },
    {number:"02", name: "GOGOSSE", img: img2 },
    {number:"03", name: "Alexandra Nicolov", img: img1 },
    {number:"04", name: "WefinanceU", img: img2 },
  ];

  return (
    <div className="wrapper" id="projects">
      <div className="projects">
        <h1 >{hovered}</h1>
        <div className="accordion">
          {projects.map((project) => (
            <Project
              key={project.name}
              projectNumber={project.number}
              projectName={project.name}
              imgSrc={project.img}
              hovered={hovered}
              picked={picked}
              handleMouseOver={handleMouseOver}
              handlePick={handlePick}
              handleReset={handleReset}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
