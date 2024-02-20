import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
