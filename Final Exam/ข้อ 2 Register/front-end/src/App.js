import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register_Form from './component/Register'


function App() {
  return (
    <div>

        <div>
          <Routes>
            <Route path="/" element={<Register_Form />}></Route>
    
          </Routes>
        </div>
    </div>
  );
}


export default App;
