import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <Link to={'/'}><img src={logo} alt="sct confessions logo"/></Link>
        </div>
        <ul>
            <Link  to={'/Confess'}>
              <li>Confess</li>
            </Link>
            <Link to={'/Wall'}>
              <li>Wall</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar