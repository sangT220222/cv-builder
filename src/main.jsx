import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/App.jsx";  // Correct import path
import './styles/index.css'; // Adjust path if necessary

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
