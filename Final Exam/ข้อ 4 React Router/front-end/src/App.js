import './App.css';
import { Routes, Route, Link, useParams } from "react-router-dom";
import Layouts from './Component/Layouts'
import Country_Management from './Component/Country_Management'

function App() {

  return (<>
    <Routes>
      <Route path="/" element={<Layouts />}/>
      <Route path="/Country_Management" element={<Country_Management />}/>

      <Route path="/Product" element={<Product/>}/>
      <Route path="/Product/:id" element={<ProductDetail />}/>
    </Routes>
  </>
  );
}




function Product() {
  const productList = [
    { id: '01', name: 'iPhone 11' },
    { id: '02', name: 'iPhone 12' },
    { id: '03', name: 'iPhone 13' }
  ]
  return (<><h2>Product</h2><ul>
    {productList.map(x => <li><Link to={`${x.id}`}>{x.name}</Link></li>)}
  </ul></>
  );
}

function ProductDetail() {
  let param = useParams();
  console.log(param);
  return (<><h2>Product Detail</h2><p>You open product {param.id}</p></>);
}


export default App;