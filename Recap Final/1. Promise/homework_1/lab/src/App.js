import React, { useEffect} from 'react'
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:3000/users')
      const req = await response.data.data
      console.log(req)

      let str = '';

      for(let i = 0; i < req.data.length; i++) {
        str += `
              <div class="col-api">
                  <span class='bold'>${req[i].first_name}</span><br>
                  ${req[i].email}<br>
                  <img src='${req[i].avatar}'>
              </div>
              `;
          console.log(str)
      }
      document.getElementById('content').innerHTML = str;
    }
    getData()
  }, [])

  return (
    <>
      <h1 class="center">Hello ReqRes users!</h1>

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

export default App;
