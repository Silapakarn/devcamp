
import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';


export default function App() {
  
  useEffect( ()=>{   

    const get = async () => {

      //response
      const response = await axios.get('/api/courses');

      //aUser
      const aUser = await response.data.courses;
      console.log(aUser)
      
      let str = '';
      
      for (let i = 0; i < aUser.length; i++) {
         
          str += `
              <tr class="col-api">
                  <td>${aUser[i].id}</td>
                  <td>${aUser[i].courses_name}</td>
                  <td>${aUser[i].instructors_name}</td>
              </tr>
              `;

          console.log(str)
      }
      document.getElementById('content').innerHTML = str;
  }

  get()

},[])

      return (<div className="container">

            <h1 class="center">Lab 2</h1>

            <table>

                  <th>id</th>
                  <th>courses_name</th>
                  <th>instructors_name</th>
                
                  <tbody className="row" id="content">
                  </tbody>

            </table>

        </div>
    );
}

