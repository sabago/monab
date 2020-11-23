import React from 'react';
import './App.css';
import Routes from './routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes/>        
      </Router> 
    </div>
  );
}

export default App;
