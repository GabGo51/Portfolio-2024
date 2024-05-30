import { useState } from "react";
import Projects from "./components/Projects";
import './styles/App.css'
import PhoneProjects from "./components/PhoneProjects";
import Cursor from "./Cursor";
import About from './components/About'
import Header from "./components/Header";


function App() {
  

  return (
    <div className="app">
      <Cursor/>
      <Header/>
      <About/>
      
      <Projects />
      <PhoneProjects/>
    </div>
  );
}

export default App;
