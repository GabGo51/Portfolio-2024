import React from "react";

const ProjectInfo = ({ projectNumber, projectName, imgSrc }) => {

  
  return (
    <div className="info-container">
      <div className="row">
        <div className="text">
          <h3>
            {projectNumber}
            {projectName}
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="black-box">
          <img />
        </div>
      </div>
      <div className="row">
        <div className="red-box">
          <img />
        </div>
        <div className="text2">
          <h4>TechStack</h4>
          <p>remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
