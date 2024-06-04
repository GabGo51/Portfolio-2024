import React, { useState, useRef } from "react";
import "../styles/PhoneProjects.css";
import PhoneProject from "./PhoneProject";
import img1 from "../img/alex.png";
import img2 from "../img/gogosse.png";

const PhoneProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projectsContainerRef = useRef(null);

  const handleNext = () => {
    const container = projectsContainerRef.current;
    setCurrentProject((prev) => (prev + 1) % projects.length);
    container.scrollTo({
      left: container.offsetWidth * ((currentProject + 1) % projects.length),
      behavior: "smooth",
    });
  };

  const handlePrevious = () => {
    const container = projectsContainerRef.current;
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    container.scrollTo({
      left: container.offsetWidth * ((currentProject - 1 + projects.length) % projects.length),
      behavior: "smooth",
    });

    
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
        <div className="projects-container" ref={projectsContainerRef}>
          {projects.map((project, index) => (
            <PhoneProject
              key={index}
              projectNumber={project.number}
              projectName={project.name}
              imgSrc={project.img}
            />
          ))}
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