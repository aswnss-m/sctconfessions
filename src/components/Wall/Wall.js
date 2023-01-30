import React from 'react'
import "./Wall.css"
import Card from './Card'
function Wall() {
  const data = [
    {
      name:"Aswin Lal",
      time:"10:00 AM",
      branch:"AI-ML",
      year:"3",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto fuga molestias, magni ad soluta natus, optio dolorum quod autem voluptates debitis provident magnam doloremque maiores enim quidem. Ut, amet!",
      comment:20,
    },
    {
      name:"Aswin Lal",
      time:"10:00 AM",
      branch:"AI-ML",
      year:"3",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto fuga molestias, magni ad soluta natus, optio dolorum quod autem voluptates debitis provident magnam doloremque maiores enim quidem. Ut, amet!",
      comment:20,
    },
    {
      name:"Aswin Lal",
      time:"10:00 AM",
      branch:"AI-ML",
      year:"3",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto fuga molestias, magni ad soluta natus, optio dolorum quod autem voluptates debitis provident magnam doloremque maiores enim quidem. Ut, amet!",
      comment:20,
    },
    {
      name:"Aswin Lal",
      time:"10:00 AM",
      branch:"AI-ML",
      year:"3",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto fuga molestias, magni ad soluta natus, optio dolorum quod autem voluptates debitis provident magnam doloremque maiores enim quidem. Ut, amet!",
      comment:20,
    },
  ]
  return (
    <div className='Wall'>
      <div className="searchbar">
        <form action="POST">
          <input type="text" placeholder='Search Name'/>
          <input type="submit" value="search" />
        </form>
      </div>
        {data.map((value)=>
          <Card name={value.name} time={value.time} branch={value.branch} year={value.year} message = {value.message} comment={value.comment} />
  )}
    </div>
  )
}

export default Wall