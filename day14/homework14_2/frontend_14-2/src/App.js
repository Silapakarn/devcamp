
import axios from 'axios';
import React from 'react';
import './App.css';


export default function App() {

  axios.get('/api/users')
    .then(function (response) {

        let conten = document.getElementById('conten')
        const aUser = response.data.data;
        console.log(aUser)

        let str = '';

        for (let i=0; i<aUser.length; i++) {
            
            str += `
            <div class="col-api">
                <span class='bold'>${aUser[i].first_name}</span><br>
                ${aUser[i].email}<br>
                <img src='${aUser[i].avatar}'>
            </div>
            `;
        }
      conten.innerHTML = str;
    })

      return (<>
          <h1 class="center">Hello ReqRes users!</h1>

          <div className="container">
              <div className="row" id="conten">
                <div className="col">
                  Column 1
                </div>
              </div>
            </div>

        </>
    );
}

