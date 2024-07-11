import React from "react";
import { useRef, useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MouseContext } from "../../context/mouseContext";

const ProjectInfo = ({
  projectNumber,
  projectName,
  imgSrc,
  handleReset,
  mainP,
  techP,
  mockup1,
  mockup2,
  url,
  git,
}) => {
  const { cursorChangeHandler } = useContext(MouseContext);

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
    <div
      className="info-container"
      onMouseEnter={() => cursorChangeHandler("")}
    >
      <div className="row">
        <div className="text">
          <h3 ref={headerRef}>
            {projectNumber}
            {projectName}
          </h3>
          <p ref={p1ref}>{mainP}</p>
        </div>
        <a
          target="_blank"
          href={url}
          className="mock-box1"
          onMouseEnter={() => cursorChangeHandler("header")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <img alt="website mockup" className="mockup" src={mockup1} />
        </a>
      </div>
      <div className="row">
        <a
          target="_blank"
          href={url}
          className="mock-box2"
          onMouseEnter={() => cursorChangeHandler("header")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <img alt="website mockup" className="mockup" src={mockup2} />
        </a>
        <div className="text2">
          <h4 ref={subHeaderRef}>TechStack</h4>
          <p ref={p2ref}>{techP}</p>
          {projectName !== "TATQ" && projectName !== "WeFinanceU" ? (
            <div
              className="btn-box"
              ref={buttonRef}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <a target="#" href={url}>
                <button onMouseEnter={() => cursorChangeHandler("header")}>
                  View Site
                </button>
              </a>

              <a target="#" href={git}>
                <button onMouseEnter={() => cursorChangeHandler("header")}>
                  GitHub
                </button>
              </a>

              <button
                onClick={handleReset}
                onMouseEnter={() => cursorChangeHandler("header")}
              >
                x
              </button>
            </div>
          ) : (
            <div
              className="btn-box"
              ref={buttonRef}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <button
                className="disable"
                disabled
                onClick={handleReset}
                onMouseEnter={() => cursorChangeHandler("header")}
              >
                Still in developement
              </button>
              <button
                onClick={handleReset}
                onMouseEnter={() => cursorChangeHandler("header")}
              >
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
