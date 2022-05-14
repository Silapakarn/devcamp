import './App.css';
import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Portfolio from "./Component/Portfolio";
import AboutUs from "./Component/aboutUs";
import Contact from "./Component/contact";


function App() {
  return (
    <div>  
      <h2>Web Portfolio</h2>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
