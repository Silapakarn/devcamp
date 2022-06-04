import './App.css';
import { Routes, Route, } from "react-router-dom";
import Layouts from './Component/Layouts'
import Create_Product from './Component/Create_Product'
import Edit_Product from './Component/Edit_Product'

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Layouts />}/>
      <Route path="/view-product" element={<Create_Product />} />
      <Route path="/update-product/:id" element={<Edit_Product />} />
    </Routes>
  </>
  );
}

export default App;
