import './App.css';
import { Routes, Route, } from "react-router-dom";
import Layouts from './Component/Layouts'
import Create_Product from './Component/Create_Product'
import Edit_Product from './Component/Edit_Product'
import Login from './Login/login'
import LoginLine from './Login/LoginLine'




function App() {
  return (<>
    <div>
        <Routes>

            <Route path="/" element={<Login />}/>
            <Route path="/profile" element={<Layouts />}/>
            <Route path="/view-product" element={<Create_Product />} />
            <Route path="/update-product/:id" element={<Edit_Product />} />

        </Routes>
    </div>
  </>
  );
}

export default App;







