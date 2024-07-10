import useMousePosition from "./hooks/useMousePosition";
import { MouseContext } from "./context/mouseContext";
import { useContext, useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  const cursorRef = useRef(null);

  useGSAP(() => {
    // Use GSAP to animate the cursor
    gsap.to(cursorRef.current, {
      duration: 0.5,
      left: x,
      top: y,
      ease: "power2.out", // Use easing function for smoother animation
    });
  }, [x, y]);

  const cursorClass = cursorType === "hover" || cursorType === "button" || cursorType === "proj" || cursorType === "buttonn"  || cursorType === "header" ? `dot ${cursorType}` : "dot";
  const containerClass = cursorType === "proj" || cursorType === "hover" ? "container2" : "container";
  const projClass = cursorType === "proj" ? "proj-active" : "";

  console.log(cursorClass);

  return (
    <div className={`${containerClass} ${projClass}`}>
      <div ref={cursorRef} className={cursorClass}>
        {cursorType === "hover" && <p className="text-cursor"><span>Try</span> <span>Moving</span></p>}
        {cursorType === "proj" && <p className="text-cursor">More +</p>}
      </div>
    </div>
  );
};

export default Cursor;