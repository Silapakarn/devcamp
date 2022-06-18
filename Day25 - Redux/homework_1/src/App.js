
import './App.css';
import { Routes, Route, } from "react-router-dom";
import ProductList from './Routing/Product List'
import Layouts from './Routing/Layout'
import Profile from './Routing/Profile'
import Cart from './Routing/Cart'


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Layouts />}>
        
      <Route index element={<ProductList/>}/>
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Cart" element={<Cart />} />
      </Route>
    
    </Routes>
  
  </>);
}

export default App;
