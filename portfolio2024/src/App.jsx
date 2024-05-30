import { useState } from "react";
import Projects from "./components/Projects";
import './styles/App.css'
import PhoneProjects from "./components/PhoneProjects";
import Cursor from "./Cursor";
import About from './components/About'


function App() {
  

  return (
    <div className="app">
      <Cursor/>
      <About/>
      
      <Projects />
      <PhoneProjects/>
    </div>
  );
}

export default App;
