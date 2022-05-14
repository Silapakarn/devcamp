import React from "react";
import {Link} from "react-router-dom";


  function ShopStock() {

    const productList = [
    { id: '01', name: 'iPhone 11' , img:'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg'},
    { id: '02', name: 'iPad Pro' , img:'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg'},
    { id: '03', name: 'Max book' , img:'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg'},
    { id: '04', name: 'CPU' , img:'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg'},
    { id: '05', name: 'GPU' , img:'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg'},
    { id: '06', name: 'Android' , img:'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg'}
    ]

    return (<>
    <h2>Product iPhone</h2>
    
    <ul>
    {productList.map(x => 
          <li key={x.id} style={{listStyle: 'none'}}><Link to={`${x.id}/${x.name}`}> {x.name}</Link></li>)}
    </ul>
    </>

    );
   }


export default ShopStock;
