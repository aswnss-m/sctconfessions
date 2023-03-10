import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import "./Main.css"
function Main() {
  return (
    <main>
        <img src={logo} alt="sct confessions logo" className='main-logo' />
        <h1>Welcome to our Valentine's Day Confessions page!</h1>
        <p>This is the perfect place to anonymously share your deepest thoughts, feelings, and secrets with the world. Whether you're confessing your love for someone special or expressing your heartbreak, we're here to listen.</p>
        <div className="buttongroup">
        <Link to={'/Confess'}><button className="button-19">Confess</button></Link>
        <Link to={'/Wall'}><button className="button-19">Confession Wall</button></Link>
        </div>
    </main>
  );
}

export default Main;