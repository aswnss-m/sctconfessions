import React from 'react'
import "./Wall.css"
import Card from './Card'
function Wall() {
  return (
    <div className='Wall'>
      <div className="searchbar">
        <form action="POST">
          <input type="text" placeholder='Search Name'/>
          <input type="submit" value="search" />
        </form>
      </div>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Wall