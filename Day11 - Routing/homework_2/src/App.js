import './App.css';
import { Routes, Route, } from "react-router-dom";
import React from "react";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import ShopStock from "./Component/ShopStock";
import WarehouseLocation from "./Component/WarehouseLocation";
import WarehouseDetail from "./Component/WarehouseDetail";
import Contact from "./Component/contact";
import ProductDetail from "./Component/ProductDetail-iPhone";


function App() {
  return (
    <div style={{margin: '1rem'}}>  
      <h2>Web Shop-Stock</h2>
      <Routes>
        
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shopstock" element={<ShopStock />} />
        <Route path="shopstock/:id/:name" element={<ProductDetail />} />

        <Route path="location" element={<WarehouseLocation />} />
        <Route path="location/:id/:Warehouse_Name/:Latitude/:Longitude/:Tel_No/:Fax_No" element={<WarehouseDetail />} />

        <Route path="contact" element={<Contact />} />
        
        </Route>
      </Routes>
    </div>
  );
}


export default App;
