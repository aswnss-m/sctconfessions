import React from 'react'
import "./Card.css"
// import comment from "../assets/comment-fill.png"
function Card(props) {
  return (
    <div className="card">
        <h2 className="card-to">To : <span>{props.name}</span></h2>
        <p className="card-to-branch">Branch : {props.branch}</p>
        <p className="card-to-year">Year : {props.year}</p>
        <p className="card-message">
            {props.message}
        </p>
        {/* <img className="card-comment-icon" src={comment} alt='comment-icon' /> */}
        <p className="card-comment-count" href='/Confess'> from : {props.fromname} </p>
    </div>
  )
}

export default Card