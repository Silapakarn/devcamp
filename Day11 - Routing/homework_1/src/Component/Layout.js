
 import React from "react";
 import { Outlet, Link } from "react-router-dom";



 function Layout() {
  return (<>
  <div>
    <nav>
        <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/aboutUs">About us</Link></li>
              <li><Link to="/contact">Contact</Link></li>        
        </ul>
    </nav>
    <hr />
  </div>
  <Outlet />
  </>
  );
 }

 export default Layout;