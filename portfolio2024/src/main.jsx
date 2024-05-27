import React from 'react'
import ReactDOM from 'react-dom/client'
import MouseContextProvider from "./context/mouseContext.jsx";
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider> 
  </React.StrictMode>,
)
