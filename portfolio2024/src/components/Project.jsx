import React from "react";
import "../styles/Projects.css";
import ProjectInfo from "./ProjectInfo";
import projectsData from "../data/projects";

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
        <>
          <button onClick={handleReset}>x</button>
          <ProjectInfo
            key={projectName}
            projectNumber={projectNumber}
            projectName={projectName}
            imgSrc={imgSrc}
          />
        </>
      )}
    </div>
  );
};

export default Project;
