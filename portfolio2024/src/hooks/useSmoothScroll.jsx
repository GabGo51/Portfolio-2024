import { useState } from "react";

const useSmoothScroll = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const smoothScroll = (element) => {
    const targetElement = document.querySelector(element);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false); // Close menu on link click
    } else {
      console.error(`Element not found: ${element}`);
    }
  };

  return { smoothScroll };
};

export default useSmoothScroll;
