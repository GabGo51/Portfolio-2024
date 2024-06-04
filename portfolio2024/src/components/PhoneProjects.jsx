import React, { useState, useRef } from "react";
import "../styles/PhoneProjects.css";
import PhoneProject from "./PhoneProject";
import projectsData from "../data/projects";
import gsap from 'gsap'
import  {useGSAP} from '@gsap/react'

const PhoneProjects = () => {
  const projects = projectsData
  const [currentProject, setCurrentProject] = useState(0);
  const projectsContainerRef = useRef(null);
  const textRef = useRef(null)

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
    const previousProjectIndex = (currentProject - 1 + projects.length) % projects.length;
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
    gsap.fromTo(textRef.current, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.2,
    });
  };

  const animateTextOut = (callback) => {
    gsap.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.2,
      onComplete: callback,
    });
  };


  return (
    <div className="phone-wrapper">
      <h4 ref={textRef}>{projects[currentProject].name} - {projects[currentProject].number}</h4>
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