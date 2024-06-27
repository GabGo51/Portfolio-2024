import { useState } from "react";
import Projects from "./components//Project/Projects";
import './styles/App.css'
import PhoneProjects from "./components/Project/Phone version/PhoneProjects";
import Cursor from "./Cursor";
import About from './components/About/About'
import Header from "./components/Header/Header";
import useScreenWidth from "./hooks/useScreenWidth";
import Hero from "./components/Hero/Hero";
import Techstack from "./components/TechStack/Techstack";
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./components/Contact/Contact";

//lenis is simple and fucking goated 



function App() {

  const isDesktop = useScreenWidth()

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })


  useGSAP(() => {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => changeStyles(index),
        onLeaveBack: () => changeStyles(index - 1),
      });
    });

    const changeStyles = (index) => {
      const backgroundColors = ['#e5e5e5', '#e5e5e5', '#1d1d1d', '#878787']; // Define your background colors here
      const fontColors = ['#000000', '#000000', '#ffffff', '#ffffff']; // Define your font colors here
      document.documentElement.style.backgroundColor = backgroundColors[index] || '#ffffff';
      document.documentElement.style.color = fontColors[index] || '#000000';
    };
  }, []);
  

  return (
    <div className="app">
      <ReactLenis root>
      <Cursor/>

      <Header/>
      <Hero/>
      <About/>
      <Techstack/>
      
      {isDesktop? <Projects /> : <PhoneProjects/>}
      <Contact/>
      </ReactLenis>
    </div>
  );
}

export default App;
