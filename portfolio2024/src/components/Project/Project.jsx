import React, { useContext } from "react";
import "./Projects.css";
import ProjectInfo from "./ProjectInfo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MouseContext } from "../../context/mouseContext";

const Project = ({
  projectNumber,
  projectName,
  imgSrc,
  hovered,
  picked,
  handleMouseOver,
  handlePick,
  handleReset,
  mainP,
  techP,
  mockup1,
  mockup2,
  url,
  git,
}) => {
  const getClassName = () => {
    if (picked === projectName) return "project picked";
    if (hovered === projectName) return "project hovered";
    if (picked && picked !== projectName) return "hide";
    return "project";
  };

  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div
      onMouseOver={() => handleMouseOver(projectName)}
      onMouseEnter={() => cursorChangeHandler("proj")}
      onMouseLeave={() => cursorChangeHandler("")}
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
          mainP={mainP}
          techP={techP}
          mockup1={mockup1}
          mockup2={mockup2}
          url={url}
          git={git}
        />
      )}
    </div>
  );
};

export default Project;
