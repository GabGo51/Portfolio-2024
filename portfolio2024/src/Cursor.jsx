
import useMousePosition from "./hooks/useMousePosition";
import { MouseContext } from "./context/mouseContext";
import { useContext } from "react";
import "./styles/Cursor.css"



const Cursor = () => {
  const {cursorType} = useContext(MouseContext);
  
    // 1.
  const { x, y } = useMousePosition();
  return (
    <div className="container">     
      <div 
        className={cursorType === 'hover' || 'button' ? `dot ${cursorType}` : 'dot'}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </div>
  );
};



export default Cursor;