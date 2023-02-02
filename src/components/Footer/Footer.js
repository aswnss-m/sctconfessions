import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
function Footer() {
  return (
    <footer>
        <p>
            Made with 💖 by <Link exact to="https://www.linkedin.com/in/aswnss">aswnss</Link>
        </p>
    </footer>
  )
}

export default Footer