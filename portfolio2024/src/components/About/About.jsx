import { useEffect, useContext, useState, useRef } from "react";
import "../About/About.css";
import background from "../../img/Others/snowbackground3.png";
import snow from "../../img/Others/snow.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScreenWidth from "../../hooks/useScreenWidth";
import Linkedin from "../../img/Icons/Linkedin.png";
import Git from "../../img/Icons/Git.png";
import "../../styles/App.css";
import { MouseContext } from "../../context/mouseContext";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const isDesktop = useScreenWidth();

  const { cursorChangeHandler } = useContext(MouseContext);

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
      const offsetX = (x - window.innerWidth / 2) / 40;
      const offsetY = (y - window.innerHeight / 2) / 40;

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
  const frameRef = useRef(null);

  useGSAP(() => {
    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top-=100 center",
      },
      opacity: 0,
      y: -30,
      x: -30,
      duration: 1,
    });
    gsap.to(frameRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top-=100 center",
      },
      scale: 1,
      duration: 2,
    });

    gsap.from(".text-about > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="center about section" ref={containerRef} id="about">
      <div className="moving-img">
        <div
          className="frame"
          ref={frameRef}
          onMouseEnter={() => cursorChangeHandler("hover")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <div ref={podRef1}>
            <img src={background} />
          </div>
          <div className="text-about">
            <h3>Introducing myself</h3>
            <p className="p2">
              Hi, I'm Gab, a fearless little fella who loves to create stuff
              both offline and online. I aim to design simply while bringing my
              creations to life.
            </p>

            <p className="p3">
              {" "}
              "Dont overthink it, just focus on the landing"
            </p>
            <div className="icon-container" onMouseLeave={() => cursorChangeHandler("hover")}>
              <a className="git"
                target="blank_"
                href="https://github.com/GabGo51"
                onMouseEnter={() => cursorChangeHandler("buttonn")}
                
              >
                <img src={Git} alt="icon" className="icon" />
              </a>
              <a className="linkedin"
                onMouseEnter={() => cursorChangeHandler("button")}
                
                target="blank_"
                href="https://www.linkedin.com/in/gabriel-gosselin/"
              >
                <img src={Linkedin} alt="icon" className="icon" />
              </a>
            </div>
          </div>
          <div
            className="moving-img2"
            ref={podRef2}
            onMouseEnter={() => cursorChangeHandler("hover")}
          >
            <img className="snow" src={snow} ref={imgRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
