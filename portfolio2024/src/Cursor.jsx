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

  useEffect(() => {
    // Use GSAP to animate the cursor
    gsap.to(cursorRef.current, {
      duration: 0.5,
      left: x,
      top: y,
      ease: "power2.out", // Use easing function for smoother animation
    });
  }, [x, y]);

  return (
    <>
      {cursorType !== "proj" ? (
        <div className="container">
          <div
            ref={cursorRef}
            className={
              cursorType === "hover" ||
              cursorType === "button" ||
              cursorType === "proj" ||cursorType === "buttonn"
                ? `dot ${cursorType}`
                : "dot"
            }
          >
            {cursorType === "hover" && <p className="text-cursor"><span>Try</span> <span>Moving</span> </p>}
            {cursorType === "proj" && <p className="text-cursor">More plus</p>}
          </div>
        </div>
      ) : (
        <div className="container2">
          <div
            ref={cursorRef}
            className={
              cursorType === "hover" ||
              cursorType === "button" ||
              cursorType === "proj"
                ? `dot ${cursorType}`
                : "dot"
            }
          >
            {cursorType === "hover" && <p className="text-cursor"><span>Try</span> <span>Moving</span> </p>}
            {cursorType === "proj" && <p className="text-cursor">More +</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Cursor;
