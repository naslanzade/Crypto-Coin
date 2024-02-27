import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutMain from "./components/Pages/About/AboutMain";
import Service from "./components/Pages/Service/ServiceMain";


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutmain" element={<AboutMain />}/>
          <Route path="/servicemain" element={<Service />}/>
        </Routes>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
