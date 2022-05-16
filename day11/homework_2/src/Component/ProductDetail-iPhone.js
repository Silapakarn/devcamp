import React from "react";
import { useParams } from "react-router-dom";


function ProductDetail() {

    
    let param = useParams();
    console.log(param);

    return (<><div style={{margin: '1rem'}}>

        <h2>Product Detail</h2>
        <p>You open product {param.id}</p>
        <p>Product name is: {param.name}</p>

    </div>
        
       
    </>);
   }

export default ProductDetail;
