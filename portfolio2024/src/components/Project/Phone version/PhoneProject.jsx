import React from "react";
import "./PhoneProjects.css";

const PhoneProject = ({ projectNumber, projectName, imgSrc, handlePick, url }) => {
  return (
    <div className="phone-project">
      <a href={url} target="#">
        <img src={imgSrc} />
      </a>
    </div>
  );
};

export default PhoneProject;
