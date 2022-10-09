// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './page/register';
import Home from "./page/home";
import React from 'react';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
