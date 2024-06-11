import React from "react";
import { useLayoutEffect, useRef } from "react";
import "./Hero.css";
import { word } from "./data";
import gsap from "gsap";


const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.from('#words', {
        yPercent:'-80',
        duration:5, 
        ease:'expo.inOut'
        
      })
    }, comp);
    return () => ctx.revert();
  }, []);

  

  return (
    <div className="hero">
      <div ref={comp} className="slider-container">
        <div className="overlay"></div>
        <div id="words" className="words">
          {word.map((word, index) => {
          return <span key={index}>{word}</span>;
        })}
        </div>
        
      </div>
      
    </div>
  );
};

export default Hero;
