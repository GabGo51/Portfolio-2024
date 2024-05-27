import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1100); // Set initial state based on screen width

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1100); // Update state when the screen size changes
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop;
}