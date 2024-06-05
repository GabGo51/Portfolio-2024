import React, { useRef, useState } from "react";
import "../styles/Projects.css";
import Project from "./Project";
import projectsData from "../data/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [hovered, setHovered] = useState("GOGOSSE");
  const [picked, setPicked] = useState("");

  const handleMouseOver = (projectName) => {
    if (projectName === hovered) {
      return;
    } else {
      animateTextOut(() => {
        animateTextIn();
        setHovered(projectName);
      });
    }
  };

  const handlePick = (projectName) => {
    setPicked(projectName);
    setHovered(false);
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
      y: 120,
      duration: 2,
      delay: 0.5,
    });
  }, []);

  const textRef = useRef(null);

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
        <h1 ref={textRef}>{hovered}</h1>
        <div className="accordion" ref={containerRef}>
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
