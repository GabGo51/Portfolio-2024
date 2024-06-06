import React from "react";
import "./PhoneProjects.css";


const PhoneProject = ({
  projectNumber,
  projectName,
  imgSrc,
  handlePick,
}) => {
  

  return (
    <div
      
      onClick={() => handlePick(projectName)}
      className="phone-project"
    >
     <img src={imgSrc}/>
    </div>
  );
};

export default PhoneProject;
