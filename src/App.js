import logo from './logo.svg';
import './App.css';
import NavBar from './common/NavBar';import React from "react";
import {  
  
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <NavBar>        
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/me" element={<Home />} />
        <Route  path="/events" element={<Home />} />
      </Routes>
    </NavBar>
  );
}

export default App;
