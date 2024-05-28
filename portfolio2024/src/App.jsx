import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Projects from "./components/Projects";
import './styles/App.css'
import PhoneProjects from "./components/PhoneProjects";
import Cursor from "./Cursor";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

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
