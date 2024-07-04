import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectInfo = ({ projectNumber, projectName, imgSrc, handleReset, mainP, techP }) => {
  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(subHeaderRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(p1ref.current, {
      opacity: 0,
      fontSize: "5px",
      duration: 1,
      delay: 0.5,
    });
    gsap.from(p2ref.current, {
      opacity: 0,
      fontSize: "5px",
      duration: 1,
      delay: 0.5,
    });
    gsap.to("button", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
    });
  }, []);

  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const p1ref = useRef(null);
  const p2ref = useRef(null);
  const buttonRef = useRef(null);

  return (
    <div className="info-container">
      <div className="row">
        <div className="text">
          <h3 ref={headerRef}>
            {projectNumber}
            {projectName}
          </h3>
          <p ref={p1ref}>
            {mainP}
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
          <h4 ref={subHeaderRef}>TechStack</h4>
          <p ref={p2ref}>
            {techP}
          </p>
          {projectName !== "TATQ" ? (
            <div className="btn-box" ref={buttonRef}>
              <button onClick={handleReset}>View Site</button>
              <button onClick={handleReset}>GitHub</button>
              <button onClick={handleReset}>x</button>
            </div>
          ) : (
            <div className="btn-box" ref={buttonRef}>
              <button className="disable" disabled onClick={handleReset}>Still in developement</button>
              <button onClick={handleReset}>x</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
