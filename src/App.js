import React from "react";
import {BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import './App.css';
import  Navbar  from './components/Navbar/Navbar';
import Footer  from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
