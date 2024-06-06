import { useState } from "react";
import Projects from "./components//Project/Projects";
import './styles/App.css'
import PhoneProjects from "./components/Project/Phone version/PhoneProjects";
import Cursor from "./Cursor";
import About from './components/About/About'
import Header from "./components/Header/Header";
import useScreenWidth from "./hooks/useScreenWidth";


function App() {

  const isDesktop = useScreenWidth()
  

  return (
    <div className="app">
      <Cursor/>
      <Header/>
      <About/>
      {isDesktop? <Projects /> : <PhoneProjects/>}
      
    </div>
  );
}

export default App;
