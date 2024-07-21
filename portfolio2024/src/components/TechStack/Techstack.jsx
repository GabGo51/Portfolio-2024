import React, { useRef } from "react";
import "./Techstack.css";
import Toolbox from "./Toolbox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useScreenWidth from "../../hooks/useScreenWidth";
import icon1 from "../../img/Icons/code.png";
import icon2 from "../../img/Icons/brush.png";

const techItemsDevelopment = [
  "React",
  "Vite",
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

  const isDesktop = useScreenWidth()
  

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Trigger animation when container is at center of viewport
        end: "center center", // Trigger animation when container is at center of viewport
        scrub: false, // Disable scrubbing effect
        
        once: true, // Trigger animation only once
      },
    });
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Trigger animation when container is at center of viewport
        end: "center center", // Trigger animation when container is at center of viewport
        scrub: false, // Disable scrubbing effect
        
        once: true, // Trigger animation only once
      },
    });

    t1.from(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      
    })
    .from(".flex-h > *", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.3,
    })
      .to('.tech-hr', {
        opacity: 1,
        width:isDesktop? "20%": 140,
        duration: 0.5,
      })
      .to('.tech-icon', {
        marginLeft:"auto",
        duration:2, 
        delay:0.2, 
        
      });

    t2.from(gsap.utils.toArray(".tech-items p"), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      delay: 2,
    });
  }, []);

  return (
    <div id="techstack" ref={containerRef} className="section techstack-container">
      <h2 ref={headerRef} className="tech-title">
        A Diversified Toolbox
      </h2>

      <div className="techstack" >
        <Toolbox />

        <div>
          <div  className="flex-h">
            <h3 className="tech-subtitle">Development</h3>
            <img src={icon1} alt="icon" className="tech-icon" />
          </div>
          <hr className="tech-hr"></hr>

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
          <div  className="flex-h">
            <h3 className="tech-subtitle">Design</h3>
            <img src={icon2} alt="icon" className="tech-icon" />
          </div>
          <hr className="tech-hr"></hr>

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
    </div>
  );
};

export default Techstack;
