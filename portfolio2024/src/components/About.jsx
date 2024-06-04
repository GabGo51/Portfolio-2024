import { useEffect, useState, useRef } from "react";
import "../styles/About.css";
import background from "../img/snowbackground2.png";
import snow from "../img/snow.png";

const About = () => {
  const podRef1 = useRef(null);
  const podRef2 = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseOnScreen, setIsMouseOnScreen] = useState(true);

  useEffect(() => {
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

  return (
    <div className="center about">
      <div className="moving-img" >
        <div className="frame">
          <div ref={podRef1}>
            <img src={background}  />
          </div>
          
        </div>
      </div>
      <div className="moving-img2" ref={podRef2}>
        <img className="snow" src={snow} />
      </div>
    </div>
  );
};

export default About;
