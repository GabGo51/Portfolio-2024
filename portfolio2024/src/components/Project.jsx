import React from "react";
import "../styles/Projects.css";


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
      {!picked && hovered !== projectName && <p>{projectNumber}</p>}
      {hovered && <img src={imgSrc} alt={projectName} />}
      {picked && <button onClick={handleReset}>x</button>}
    </div>
  );
};

export default Project;
