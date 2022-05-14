import React from "react";
import { useParams } from "react-router-dom";


function ProductDetail() {

    
    let param = useParams();
    console.log(param);

    return (<>
        <h2>Product Detail</h2>
        <p>You open product {param.id}</p>
        <p>Product name is: {param.name}</p>
       
    </>);
   }

export default ProductDetail;
