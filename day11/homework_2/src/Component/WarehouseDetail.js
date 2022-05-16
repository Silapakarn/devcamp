import React from "react";
import {useParams} from "react-router-dom";


function WarehouseDetail() {

    let param = useParams();
    console.log(param);

   
    return (<><div style={{margin: '1rem'}}>
        <h3>Warehouse Detail</h3>
        <p>You open Warehouse id: {param.id}</p>
        <p>Warehouse name is: {param.Warehouse_Name}</p>
        <p>Latitude is: {param.Latitude}</p>
        <p>Longitude is: {param.Longitude}</p>
        <p>Tel_No is: {param.Tel_No}</p>
        <p>Fax_No is: {param.Fax_No}</p>
    </div>
    </>);
    
   }

export default WarehouseDetail;