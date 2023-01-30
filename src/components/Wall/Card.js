import React from 'react'
import "./Card.css"
import comment from "../assets/comment-fill.png"
function Card(props) {
  return (
    <div className="card">
        <h2 className="card-to">To : <span>{props.name}</span></h2>
        <p className="card-time">{props.time}</p>
        <p className="card-to-branch">{props.branch}</p>
        <p className="card-to-year">{props.year} year</p>
        <p className="card-message">
            {props.message}
        </p>
        <img className="card-comment-icon" src={comment} />
        <a className="card-comment-count">{props.comment} comments</a>
    </div>
  )
}

export default Card