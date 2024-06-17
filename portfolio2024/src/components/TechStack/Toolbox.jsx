import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Techstack.css";
import Techstack from "./Techstack";

const Toolbox = () => {
  const widthRef = useRef(null);
  const heightRef = useRef(null);
  const containerRef = useRef(null)

  useGSAP(() => {

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Trigger animation when container is at center of viewport
        end: "center center", // Trigger animation when container is at center of viewport
        scrub: false, // Disable scrubbing effect
        markers: true, // Debug markers (optional)
        once: true, // Trigger animation only once
      }
    });

    t1
      .to(widthRef.current,{ width: "100%", opacity: 1, duration: 0.8 })
      .to(heightRef.current, { height: "100%", opacity: 1, duration: 0.8 }, "-=0.5")
      .to(widthRef.current,{ height: "100%", opacity: 1, duration: 0.8 })
      .to(heightRef.current, { width: "100%", opacity: 1, duration: 0.8 }, "-=0.5")
      .to([widthRef.current, heightRef.current], { borderRadius: "30px", duration: 0.8, delay:0.5 }, "-=0.5");

  }, []);

  return (
    <div className="toolbox" ref={containerRef}>
      <div className="width" ref={widthRef}></div>
      <div className="height" ref={heightRef}></div>
    </div>
  );
};

export default Toolbox;