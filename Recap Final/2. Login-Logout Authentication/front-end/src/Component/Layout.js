import { Link } from "react-router-dom";

function Layout() {
    return (<>
 
            <li><Link to="/">Register Form</Link></li>
            <li style={{marginLeft: '18px'}}><Link to="/login">Login</Link></li>
    
        </>
    );
}

export default Layout;