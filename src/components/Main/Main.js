import React from 'react';
import logo from '../assets/logo.png';
import "./Main.css"
function Main() {
  return (
    <main>
        <img src={logo} alt="sct confessions logo" className='main-logo' />
        <h1>Welcome to our Valentine's Day Confessions page!</h1>
        <p>This is the perfect place to anonymously share your deepest thoughts, feelings, and secrets with the world. Whether you're confessing your love for someone special or expressing your heartbreak, we're here to listen.</p>
        <div className="buttongroup">
        <button className="button-19" role="button">Confess</button>
        <button className="button-19" role="button">Confession Wall</button>
        </div>
    </main>
  );
}

export default Main;