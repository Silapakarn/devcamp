import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout'
import Register_Form from './Component/Register_Form'
import Login from './Component/login'
import Profile from './Component/profile'

function App() {
  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center',listStyleType: 'none'}}>
            <Layout />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Register_Form />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
