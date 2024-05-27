import React, { useState } from "react";
import "../styles/PhoneProjects.css";
import PhoneProject from "./PhoneProject";
import img1 from "../img/alex.png";
import img2 from "../img/gogosse.png";


const PhoneProjects = () => {
  
  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const projects = [
    { number: "01", name: "TATQ", img: img1 },
    { number: "02", name: "GOGOSSE", img: img2 },
    { number: "03", name: "Alexandra Nicolov", img: img1 },
    { number: "04", name: "WefinanceU", img: img2 },
  ];

  return (
    <div className="phone-wrapper">
      <div className="phone-projects">
        <h1>{projects[currentProject].number}{projects[currentProject].name}</h1>
        <div className="phone-accordion">
          <PhoneProject
            key={projects[currentProject].name}
            projectNumber={projects[currentProject].number}
            projectName={projects[currentProject].name}
            imgSrc={projects[currentProject].img}
          />
        </div>
        <div className="arrow-buttons">
          <button onClick={handlePrevious}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default PhoneProjects;