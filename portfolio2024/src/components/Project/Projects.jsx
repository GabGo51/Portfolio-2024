import React, { useRef, useState } from "react";
import "./Projects.css";
import Project from "./Project";
import projectsData from "../../data/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(projectsData[0]);
  const [picked, setPicked] = useState("");

  const handleMouseOver = (project) => {
    if (project === hoveredProject) {
      return;
    } else {
      animateTextOut(() => {
        animateTextIn();
        setHoveredProject(project);
      });
    }
  };

  const handlePick = (project) => {
    setPicked(project.name);
    setHoveredProject(false);
  };

  const handleReset = (e) => {
    e.stopPropagation(); // Prevents the div's onClick from firing
    setPicked("");
  };

  const projects = projectsData;

  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: containerRef,
      scale: 0.8,
      y: 50,
      duration: 4,
      delay: 0.5,
    });
  }, []);

  const textRef = useRef(null);
  const textRef2 = useRef(null);

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
        duration: 0.3,
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
        duration: 0.3,
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
    <div className="wrapper" id="projects">
      
      <div className="projects">
      <h2>Selected work</h2>
        {!picked && (
          <div ref={textRef} className="title">
            
            <h1 >{hoveredProject.name}</h1>
            <span>&#183;</span>
            <h3 >{hoveredProject.type}</h3>
          </div>
        )}

        <div className="accordion" ref={containerRef}>
          {projects.map((project) => (
            <Project
              key={project.name}
              projectNumber={project.number}
              projectName={project.name}
              imgSrc={project.img}
              hovered={hoveredProject.name}
              picked={picked}
              handleMouseOver={() => handleMouseOver(project)}
              handlePick={() => handlePick(project)}
              handleReset={handleReset}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;