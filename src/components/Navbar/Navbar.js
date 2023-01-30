import React from 'react';
import './assets/Navbar.css';
import logo from './assets/logo.png';

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="sct confessions logo"/>
        </div>
        {/* <ul>
            <li>Home</li>
            <li>Confess</li>
            <li>Wall</li>
        </ul> */}
    </nav>
  )
}

export default Navbar