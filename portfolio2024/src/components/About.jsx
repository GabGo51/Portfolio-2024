import React, { useRef, useEffect } from "react";
import background from "../img/snowbackground.png";
import snow from "../img/snow.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/About.css";

const About = () => {
  const container = useRef();
  const board = useRef();

  useGSAP(() => {
    gsap.set(".snow", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".snow", "x", { duration: 0.1, ease: "easeIn" }),
      yTo = gsap.quickTo(".snow", "y", { duration: 0.1, ease: "easeIn" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  return (
    <div className="center wrapper" ref={container}>
      <img src={background} alt="about me" />
      <img className="snow" src={snow} alt="about me" ref={board} />
    </div>
  );
};

export default About;
