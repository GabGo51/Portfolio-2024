import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useScreenWidth from "../../hooks/useScreenWidth";
import "./Hero.css";

const Hero = () => {
  const isDesktop = useScreenWidth();

  const colors = ["#4b878a", "#1e2d29", "#000000", "#1e2d29", "#887caf"];
  const colorRef = useRef(null);

  useGSAP(() => {

    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    t1.from("hr", {

      width:0,
      duration:2,
    })
    .from(".name > *", {
      opacity:0,
      y:20,
      stagger:0.3,
    })
    .to(".job",{
      height:"40%",
      
    })
    .from(".job > h1", {
      opacity:0
    })


    t2.from(".job",{
      width:"0%",
      duration:1, 
      delay:0.2
    })
  });

  return (
    <div className={isDesktop ? "hero section" : "phone section"}>
      <div className="name">
        <h1>Gabriel</h1>
        <h1>Gosselin</h1>
      </div>
      <hr className="line" />
      <div className="job" ref={colorRef}>
        <h1>Creative</h1>
        <h1>Developer</h1>
      </div>
    </div>
  );
};

export default Hero;
