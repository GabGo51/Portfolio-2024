import { useState } from "react";

import Projects from "./components/Projects";
import './styles/App.css'
import PhoneProjects from "./components/PhoneProjects";
import Cursor from "./Cursor";

import ImageFollow from "./components/ImageFollow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Cursor/>
      <ImageFollow/>
      
      <Projects />
      <PhoneProjects/>
    </div>
  );
}

export default App;
