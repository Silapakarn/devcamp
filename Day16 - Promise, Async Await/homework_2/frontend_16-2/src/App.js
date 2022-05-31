
import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';


export default function App() {

  useEffect( ()=>{   

    const get = async () => {

      //response
      const response = await axios.get('/api/users');

      //aUser
      const aUser = await response.data.user;
      console.log(aUser)
      
      let str = '';
      
      for (let i = 0; i < aUser.length; i++) {
          str += `
              <div class="col-api">
                  <span class='bold'>${aUser[i].id}<br>${aUser[i].firstname}</span><br>
                  ${aUser[i].lastname}<br>${aUser[i].salary}<br>${aUser[i].address}<br>
              </div>
              `;
          console.log(str)
      }
      document.getElementById('content').innerHTML = str;
  }

  get()

},[])

      return (<>
          <h1 class="center">Homework 2</h1>

          <div className="container">
              <div className="row" id="content">
                <div className="col">
                  Column 1
                </div>
              </div>
            </div>

        </>
    );
}

