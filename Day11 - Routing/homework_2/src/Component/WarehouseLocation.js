import React from "react";
import {Link} from "react-router-dom";



  function WarehouseLocation() {

    /* data Location */
    const Data_Location = [
      { id: '01',
      Warehouse_Name: 'Shop Warehouse',
      Latitude: '10', 
      Longitude: '-10', 
      Tel_No: '0999999999',
      Fax_No: '+66666'},
  
      { id: '02',
       Warehouse_Name: 'Linked Warehouse',
      Latitude: '10', 
      Longitude: '-10', 
      Tel_No: '0999999999', 
      Fax_No: '+66666'},
  
      { id: '03',
      Warehouse_Name: 'Unique Ware Space',
      Latitude: '10', 
      Longitude: '-10', 
      Tel_No: '0999999999',
      Fax_No: '+66666'},
  
      { id: '04',
      Warehouse_Name: 'Great Warehouse',
      Latitude: '10', 
      Longitude: '-10', 
      Tel_No: '0999999999', 
      Fax_No: '+66666'},
  
      { id: '05', 
      Warehouse_Name: 'Bulk Supply', 
      Latitude: '10', 
      Longitude: '-10', 
      Tel_No: '0999999999', 
      Fax_No: '+66666'},
    ]

      return (<><div style={{margin: '1rem'}}>

        <h2>Warehouse Location</h2>

        <ul>{console.log(Data_Location)}

          {
          Data_Location.map(x => 
          <li key={x.id} style={{listStyle: 'none'}}>
            
            <Link to={`${x.id}/${x.Warehouse_Name}/${x.Latitude}/${x.Longitude}/${x.Tel_No}/${x.Fax_No}`}> {x.Warehouse_Name}</Link>

          </li>)
          }
          
        </ul>

      </div>
        
    </>
    );
  }
  

  export default WarehouseLocation;