import React, { useState, useRef } from "react";
import "./PhoneProjects.css";
import PhoneProject from "./PhoneProject";
import projectsData from "../../../data/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

  const handleViewSite = () => {
    
    if (currentProject === 0 || currentProject === 2 ){
      return 
    }
    else{
      return window.open(projects[currentProject].url, "_blank");
    }
  };

  const handleViewText = () =>{
    if (currentProject === 0 || currentProject === 2 ){
      return "Still in Development"
    }
    else{
      return "View Site"
    }
  }

  const containerRef = useRef(null)

  useGSAP(() => {
   
    gsap.from(".phone-title > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top center",
        
      },
      
      y: 20,
      opacity:0,
      stagger: 0.2,
    });
    gsap.from(".projects-container", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top center",
        
      },
      
      y: 20,
      opacity:0,
      scale:0.6,
      duration:1,
      stagger: 0.2,
    });
    gsap.from(".arrow-buttons", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top center",
        
      },
      
      width:100,
      duration:1
    });
    gsap.from(".view", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top center",
        
      },
      
      opacity:0,
      delay:1
    });
  }, []);


  return (
    <div className="phone-wrapper section" id="projects" ref={containerRef}>
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
          <button className="view" onClick={()=>handleViewSite()}>{handleViewText()}</button>
          <button onClick={handleNext}><img className="arrow-icon" src={iconright} alt="icon"/></button>
        </div>
      </div>
    </div>
  );
};

export default PhoneProjects;
