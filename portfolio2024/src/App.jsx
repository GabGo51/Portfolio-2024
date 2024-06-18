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

//lenis is simple and fucking goated 



function App() {

  const isDesktop = useScreenWidth()

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  

  return (
    <div className="app">
      <ReactLenis root>
      <Cursor/>

      <Header/>
      <Hero/>
      <About/>
      <Techstack/>
      
      {isDesktop? <Projects /> : <PhoneProjects/>}
      </ReactLenis>
    </div>
  );
}

export default App;
