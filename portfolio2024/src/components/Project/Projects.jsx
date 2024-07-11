import React, { useRef, useState, useContext } from "react";
import { MouseContext } from "../../context/mouseContext";
import "./Projects.css";
import Project from "./Project";
import projectsData from "../../data/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "../../hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(projectsData[1]);
  const [picked, setPicked] = useState(false);


  const { smoothScroll } = useSmoothScroll();
  const { cursorChangeHandler } = useContext(MouseContext);

  const handleMouseOver = (project) => {
    if (picked) {
      cursorChangeHandler("")
      return;
    }
    if (project === hoveredProject) {
      cursorChangeHandler("proj")
      return;
    } else {
      
      animateTextOut(() => {
        setHoveredProject(project);
        animateTextIn();
      });
    }
  };

  const handlePick = (project) => {
    cursorChangeHandler("")
    setPicked(project.name);
    setHoveredProject(false);
    smoothScroll("#projects")
  };

  const handleReset = (e) => {
    e.stopPropagation(); // Prevents the div's onClick from firing
    setPicked(false);
    setHoveredProject(projectsData[3]);
  };

  const projects = projectsData;

  const containerRef = useRef(null);
  const accordionRef = useRef(null)

  useGSAP(() => {
    // DO NOT REMOVE EVEN DHO IDK WHAT THIS DOES
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // Animation starts when top of container hits bottom of viewport
        end: "bottom top", // Animation ends when bottom of container hits top of viewport
        toggleActions: "play none none reverse", // Defines when animation plays and reverses
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });
    gsap.to(".accordion > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top center",
        toggleActions: "play none none reverse",
      },
      delay: 0.5,
      height: "75vh",
      stagger: 0.2,
    });
  }, []);

  const textRef = useRef(null);

  const animateTextIn = () => {
    const children = textRef.current.children;
    gsap.fromTo(
      children,
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
    const children = textRef.current.children;
    gsap.to(children, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      stagger: 0.05, // Stagger start times by 0.1 seconds
      onComplete: callback,
    });
  };

  return (
    <div className="wrapper section" id="projects" ref={containerRef}>
      <div className="projects">
        {!picked && <h2>Selected work</h2>}

        {!picked && (
          <div ref={textRef} className="title">
            <h3>{hoveredProject.name}</h3>
            <span>&#183;</span>
            <h4>{hoveredProject.type}</h4>
          </div>
        )}

        <div className="accordion" ref={accordionRef} >
          {projects.map((project) => (
            <Project
              key={project.name}
              projectNumber={project.number}
              projectName={project.name}
              imgSrc={project.img}
              mainP={project.mainP}
              techP={project.techP}
              hovered={hoveredProject.name}
              picked={picked}
              handleMouseOver={() => handleMouseOver(project)}
              handlePick={() => handlePick(project)}
              handleReset={handleReset}
              type={project.type}
              mockup1={project.mockup1}
              mockup2={project.mockup2}
              
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
