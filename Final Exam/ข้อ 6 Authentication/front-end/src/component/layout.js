import { Link } from "react-router-dom";
import Logout from '../component/logout'

function Layout() {

  function Logout() {
    const token = localStorage.getItem('token')
      if(token) {
          localStorage.removeItem('token')
          window.location.href="/"
      }
      return (
      <></>
      )
    } 


    return (<>
          <nav>
                <ul style={{display: 'flex', listStyle: 'none'}}>
                      <li ><Link to="/">Register Form</Link></li>
                      <li style={{marginLeft: '10px'}}><Link to="/login">Login</Link></li>

                      <li style={{marginLeft: '10px'}} onClick={Logout}><Link to="/">Logout</Link></li>
                </ul>
          </nav>
            
     
        </>
    );
}

export default Layout;