import React, { useState, useRef } from "react";
import "./PhoneProjects.css";
import PhoneProject from "./PhoneProject";
import projectsData from "../../../data/projects";
import gsap from "gsap";
import iconleft from "../../../img/Icons/left.png"
import iconright from "../../../img/Icons/right.png"


const PhoneProjects = () => {
  const projects = projectsData;
  const [currentProject, setCurrentProject] = useState(0);
  const projectsContainerRef = useRef(null);
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  const handleNext = () => {
    const container = projectsContainerRef.current;
    const nextProjectIndex = (currentProject + 1) % projects.length;

    animateTextOut(() => {
      setCurrentProject(nextProjectIndex);
      animateTextIn();
    });
    container.scrollTo({
      left: container.offsetWidth * nextProjectIndex,
      behavior: "smooth",
    });
  };

  const handlePrevious = () => {
    const container = projectsContainerRef.current;
    const previousProjectIndex =
      (currentProject - 1 + projects.length) % projects.length;
    animateTextOut(() => {
      setCurrentProject(previousProjectIndex);
      animateTextIn();
      container.scrollTo({
        left: container.offsetWidth * previousProjectIndex,
        behavior: "smooth",
      });
    });
  };

  const animateTextIn = () => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
      }
    );
    gsap.fromTo(
      textRef2.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
      }
    );
  };

  const animateTextOut = (callback) => {
    gsap.to(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      onComplete: callback,
    });
  };

  return (
    <div className="phone-wrapper section" id="projects">
      <div className="phone-title">
        <h4 ref={textRef}>
          {projects[currentProject].number} - {projects[currentProject].name}{" "}
        </h4>
        <h4 className="sub" ref={textRef2}>
          {projects[currentProject].type} 
        </h4>
      </div>

      <div className="phone-projects">
        <div className="projects-container" ref={projectsContainerRef}>
          {projects.map((project, index) => (
            <PhoneProject
              key={index}
              projectNumber={project.number}
              projectName={project.name}
              imgSrc={project.img}
              url={project.url}
            />
          ))}
        </div>
        <div className="arrow-buttons">
          <button onClick={handlePrevious}><img className="arrow-icon" src={iconleft} alt="icon"/></button>
          <button onClick={handleNext}><img className="arrow-icon" src={iconright} alt="icon"/></button>
        </div>
      </div>
    </div>
  );
};

export default PhoneProjects;
