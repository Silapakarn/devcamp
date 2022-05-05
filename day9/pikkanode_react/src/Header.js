import React from 'react';

function Header() {
    return (
        <div className="Navbar">
            <ul>
                <a href="#"><img src="https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png" className="img_logo"/></a>
                <li><a href="#signout">Sign out</a></li>
                <li><a href="#signin">Sign in</a></li>
                <li><a href="#signup">Sign up</a></li>
                <li><a class="active" href="#home">Create pikka</a></li>         
            </ul>
        </div>
    );
}

export default Header;