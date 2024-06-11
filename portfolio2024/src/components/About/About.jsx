import { useEffect, useState, useRef } from "react";
import "../About/About.css";
import background from "../../img/snowbackground2.png";
import snow from "../../img/snow.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScreenWidth from "../../hooks/useScreenWidth";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const isDesktop = useScreenWidth();

  const podRef1 = useRef(null);
  const podRef2 = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseOnScreen, setIsMouseOnScreen] = useState(true);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseEnter = () => {
      setIsMouseOnScreen(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOnScreen(false);
    };

    const handleMouse = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
      setIsMouseOnScreen(true);
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouse);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const { current: podElement1 } = podRef1;
    const { current: podElement2 } = podRef2;

    const movePods = () => {
      const { x, y } = position;
      const offsetX = (x - window.innerWidth / 2) / 56;
      const offsetY = (y - window.innerHeight / 2) / 56;

      if (isMouseOnScreen) {
        podElement1.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        podElement2.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
      } else {
        podElement1.style.transform = "none";
        podElement2.style.transform = "none";
      }
    };

    movePods();

    return () => {
      podElement1.style.transform = "none";
      podElement2.style.transform = "none";
    };
  }, [position, isMouseOnScreen]);

  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.from(imgRef.current, {
      scrollTrigger: containerRef,
      opacity: 0.8,
      y: -60,
      x: -60,
      duration: 2,
    });
  }, []);

  return (
    <div className="center about" ref={containerRef}>
      <div className="moving-img">
        <div className="frame">
          <div ref={podRef1}>
            <img src={background} />
          </div>
          <div className="text-about">
            <h3>About</h3>
            <p className="p2">
              Hi, I'm Gabriel. I'm a fullstack developer. I am the one the real
              g one the only one the one that take it up upon this street
            </p>
          </div>
        </div>
      </div>
      <div className="moving-img2" ref={podRef2}>
        <img className="snow" src={snow} ref={imgRef} />
      </div>
    </div>
  );
};

export default About;
