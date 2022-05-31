
 import React from "react";
 import {Outlet, Link} from "react-router-dom";



 function Layout() {
  return (<>
  <div>
    <nav className="layout-navigationut">
        <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shopstock">Shop Stock</Link></li>
              <li><Link to="/location">Warehouse Location</Link></li>
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