import React from 'react'
import "./Card.css"
import comment from "../assets/comment-fill.png"
function Card() {
  return (
    <div className="card">
        <h2 className="card-to">To : <span>Suroor</span></h2>
        <p className="card-time">7:00pm</p>
        <p className="card-to-branch">AI-ML</p>
        <p className="card-to-year">3 year</p>
        <p className="card-message">
            Lorem ipsum dolor sit amet sdlsksldksl elit. Aperiam nihil, reiciendis consequatur voluptatem aliquam unde adipisci cupiditate, porro
        </p>
        <img className="card-comment-icon" src={comment} />
        <a className="card-comment-count">10 comments</a>
    </div>
  )
}

export default Card