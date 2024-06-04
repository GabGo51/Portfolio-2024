import { useState } from "react";
import Projects from "./components/Projects";
import './styles/App.css'
import PhoneProjects from "./components/PhoneProjects";
import Cursor from "./Cursor";
import About from './components/About'
import Header from "./components/Header";
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
