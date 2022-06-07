import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register_Form from './component/Register'
import Layout from './component/layout'
import Login from './component/login'
import Profiles from './component/profile'


function App() {
  return (
    <div>
        <div style={{textAlign: 'center'}}>
            <Layout />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Register_Form />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/profile" element={<Profiles />}></Route>
          </Routes>
        </div>
    </div>
  );
}


export default App;
