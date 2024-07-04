import React from "react";
import { useLayoutEffect, useRef } from "react";
import "./Hero.css";
import { word } from "./data";
import gsap from "gsap";
import useScreenWidth from "../../hooks/useScreenWidth";


const Hero = () => {

  const isDesktop = useScreenWidth()
  

  

  return (
    <div className={isDesktop ? ("hero section"):("phone section")}>
      <div className="name">
        <h1>Gabriel</h1><h1>Gosselin</h1>
      </div>
      <hr className="line"></hr>
      <div className="job">
        <h1>Creative</h1>
        <h1>Developper</h1>
      
      </div>
    </div>
  );
};

export default Hero;
