import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Projects from "./components/Projects";
import './styles/App.css'
import PhoneProjects from "./components/PhoneProjects";
import Cursor from "./Cursor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Cursor/>
      <div className="center">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + Me</h1>
        <div className="card center">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Projects />
      <PhoneProjects/>
    </div>
  );
}

export default App;
