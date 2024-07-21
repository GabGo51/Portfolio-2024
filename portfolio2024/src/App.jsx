import { useState, useEffect } from "react";
import Projects from "./components//Project/Projects";
import "./styles/App.css";
import PhoneProjects from "./components/Project/Phone version/PhoneProjects";
import Cursor from "./Cursor";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import useScreenWidth from "./hooks/useScreenWidth";
import Hero from "./components/Hero/Hero";
import Techstack from "./components/TechStack/Techstack";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./components/Contact/Contact";


//lenis is simple and fucking goated

function App() {
  const isDesktop = useScreenWidth();

  const handleAnimationHeight = () =>{
    if(isDesktop){
      return "top center"
    }else{
      return "top-=230 center"
    }
  }

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);

  useGSAP(() => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: handleAnimationHeight(),
        

        onEnter: () => {
          changeStyles(index);
          // Change scrollbar thumb color when entering project section
          if (index === 3) {
            // Adjust index based on your section order
            document.documentElement.style.setProperty(
              "--scrollbar-thumb-color",
              "var(--green)"
            );
          }
        },
        onLeaveBack: () => changeStyles(index - 1),
        // markers:true
      });
    });

    const changeStyles = (index) => {
      const backgroundColors = ["#e5e5e5", "#e5e5e5", "#1d1d1d", "#878787","#e5e5e5"]; // Define your background colors here
      const fontColors = ["#000000", "#000000", "#ffffff", "#ffffff"]; // Define your font colors here
      document.documentElement.style.backgroundColor =
        backgroundColors[index] || "#ffffff";
      document.documentElement.style.color = fontColors[index] || "#000000";
    };
  }, []);

  return (
    <div className="app">
      <ReactLenis root>
        <Cursor />

        <Header />
        <Hero />
        <About />
        <Techstack />

        {isDesktop ? <Projects /> : <PhoneProjects />}
        <Contact />
      </ReactLenis>
    </div>
  );
}

export default App;
