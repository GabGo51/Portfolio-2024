import React, { useRef } from "react";
import "./Techstack.css";
import Toolbox from "./Toolbox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const techItemsDevelopment = [
  "React",
  "Javascript",
  "HTML",
  "CSS",
  "Styled-Components",
  "Tailwind",
  "Framer-Motion",
  "GSAP",
  "Node.js",
  "MongoDB",
  "Git",
  "Vercel",
];

const techItemsDesign = [
  "Figma",
  "Webflow",
  "Photoshop",
  "Krita",
  "SquareSpace",
  "Canva",
];

const Techstack = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const subheaderRef = useRef(null);
  const subheaderRef2 = useRef(null);

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Trigger animation when container is at center of viewport
        end: "center center", // Trigger animation when container is at center of viewport
        scrub: false, // Disable scrubbing effect
        markers: true, // Debug markers (optional)
        once: true, // Trigger animation only once
      },
    });
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Trigger animation when container is at center of viewport
        end: "center center", // Trigger animation when container is at center of viewport
        scrub: false, // Disable scrubbing effect
        markers: true, // Debug markers (optional)
        once: true, // Trigger animation only once
      },
    });

    t1.from(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 2,
    })
      .from(subheaderRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
      })
      .from(subheaderRef2.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
      });

    t2.from(gsap.utils.toArray(".tech-items p"), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      delay: 3,
    });
  }, []);

  return (
    <>
      <h2 ref={headerRef} className="tech-title">
        A Diversified Toolbox
      </h2>
      <div className="techstack" ref={containerRef}>
        <Toolbox />

        <div>
          <h3 ref={subheaderRef}>Development</h3>
          <div className="tech-items">
            {techItemsDevelopment.map((item, index) => (
              <React.Fragment key={index}>
                <p style={{ animationDelay: `${index * 0.4}s` }}>{item}</p>
                {index < techItemsDevelopment.length - 1 && (
                  <p style={{ animationDelay: `${index * 0.1}s` }}>&#183;</p>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <h3 ref={subheaderRef2}>Design</h3>
          <div className="tech-items">
            {techItemsDesign.map((item, index) => (
              <React.Fragment key={index}>
                <p style={{ animationDelay: `${index * 0.1}s` }}>{item}</p>
                {index < techItemsDesign.length - 1 && (
                  <p style={{ animationDelay: `${index * 0.1}s` }}>&#183;</p>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstack;
