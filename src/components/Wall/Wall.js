import React, { useEffect, useState } from 'react'
import "./Wall.css"
import Card from './Card'
import { getDocs } from 'firebase/firestore';
import { confessionRef } from '../firebase/firebase-config';
function Wall() {
  const [messageList,setMessageList] = useState([]);
  
  useEffect( ()=>{
    const getMessages = async () =>{
      const message = await getDocs(confessionRef);
      setMessageList(message.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    };

    getMessages();
  })
  // const data = [
  //   {
  //     name:"Aswin Lal",
  //     time:"10:00 AM",
  //     branch:"AI-ML",
  //     year:"3",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto fuga molestias, magni ad soluta natus, optio dolorum quod autem voluptates debitis provident magnam doloremque maiores enim quidem. Ut, amet!",
  //     comment:20,
  //   },
  //   {
  //     name:"Aswin Lal",
  //     time:"10:00 AM",
  //     branch:"AI-ML",
  //     year:"3",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto fuga molestias, magni ad soluta natus, optio dolorum quod autem voluptates debitis provident magnam doloremque maiores enim quidem. Ut, amet!",
  //     comment:20,
  //   },
  //   {
  //     name:"Aswin Lal",
  //     time:"10:00 AM",
  //     branch:"AI-ML",
  //     year:"3",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto fuga molestias, magni ad soluta natus, optio dolorum quod autem voluptates debitis provident magnam doloremque maiores enim quidem. Ut, amet!",
  //     comment:20,
  //   },
  //   {
  //     name:"Aswin Lal",
  //     time:"10:00 AM",
  //     branch:"AI-ML",
  //     year:"3",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iusto fuga molestias, magni ad soluta natus, optio dolorum quod autem voluptates debitis provident magnam doloremque maiores enim quidem. Ut, amet!",
  //     comment:20,
  //   },
  // ]
  return (
    <div className='Wall'>
      <div className="searchbar">
        <form action="POST">
          <input type="text" placeholder='Search Name'/>
          <input type="submit" value="search" />
        </form>
      </div>
        {messageList.map((value)=>
          <Card name={value.toname} branch={value.branch} year={value.year} message = {value.message} fromname={value.fromname} />
  )}
    </div>
  )
}

export default Wall