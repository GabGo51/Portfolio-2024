import React from "react";
import "./Projects.css";
import ProjectInfo from "./ProjectInfo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = ({
  projectNumber,
  projectName,
  imgSrc,
  hovered,
  picked,
  handleMouseOver,
  handlePick,
  handleReset,
}) => {
  const getClassName = () => {
    if (picked === projectName) return "project picked";
    if (hovered === projectName) return "project hovered";
    if (picked && picked !== projectName) return "hide"
    return "project";
  };


  return (
    <div
      onMouseOver={() => handleMouseOver(projectName)}
      onClick={() => handlePick(projectName)}
      className={getClassName()}
    >
      {!picked && hovered !== projectName && (
        <p className="number">{projectNumber}</p>
      )}
      {hovered && <img src={imgSrc} alt={projectName} />}
      {picked && (
        <ProjectInfo
          key={projectName}
          projectNumber={projectNumber}
          projectName={projectName}
          imgSrc={imgSrc}
          handleReset={handleReset}
        />
      )}
    </div>
  );
};

export default Project;
