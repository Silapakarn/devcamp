import './App.css';
import { Routes, Route, } from "react-router-dom";
import Layouts from './Component/Layout'
import Dashboard from './Component/Dashboard'
import Warehouse_Management  from './Component/Warehouse_Management';
import Stock_Management from './Component/Stock Management';
import { CurrencyContext } from './Component/CurrencyContext'
import Profile from './Component/profile'

const token = localStorage.getItem('token') || null;


function App() {
  return (
      <CurrencyContext.Provider value={token}> 
            <Routes>
                  <Route path="/" element={<Layouts />}>
                  <Route index element={<Dashboard />} />
                  <Route path="/Stock_Management" element={<Stock_Management />} />
                  <Route path="/Warehouse_Management" element={<Warehouse_Management />} />
                  <Route path="/profile" element={<Profile />} />

                  </Route>
            </Routes>
      </CurrencyContext.Provider>
  );
}

export default App;
