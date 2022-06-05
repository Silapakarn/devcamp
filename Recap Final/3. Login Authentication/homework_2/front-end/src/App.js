import { Routes, Route, } from "react-router-dom";
import './App.css';
import { CurrencyContext } from './component/CurrencyContext'
import Layouts from './component/Layouts'
import Dashboard from './component/Dashboard'
import Warehouse_Management  from './component/Warehouse_Management';
import Stock_Management from './component/Stock Management';
import Profile from './component/profile'

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