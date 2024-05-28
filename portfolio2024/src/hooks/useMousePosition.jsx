import { useEffect, useRef, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const mousePositionRef = useRef(mousePosition);

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      const newMousePosition = { x: clientX, y: clientY };

      // Check if the mouse position has actually changed
      if (
        mousePositionRef.current.x !== newMousePosition.x ||
        mousePositionRef.current.y !== newMousePosition.y
      ) {
        mousePositionRef.current = newMousePosition;
        setMousePosition(newMousePosition);
      }
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}