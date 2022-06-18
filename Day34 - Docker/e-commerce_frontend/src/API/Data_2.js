import React, { useEffect } from 'react';
import axios from 'axios';


export default function Data_2() {

    useEffect( ()=>{   
  
      const get = async () => {

        //response
        const response = await axios.get('/users/api/product/');
  
        //aUser
        const stock = await response.stock_hw;
        console.log(stock)
        
        let str = '';
        
        for (let i = 0; i < stock.length; i++) {
            str += `
                <div class="col-api">
                    <span class='bold'>${stock[i].product_name}</span><br>
                    ${stock[i].stock_left}<br>${stock[i].category}<br>
                </div>
                `;
            console.log(str)
        }
        document.getElementById('content').innerHTML = str;
    }
  
    get()
  
  },[])
        return (<>
  
                <div className="col">
                    Column 1
                </div>
  
            </>
        );
  }