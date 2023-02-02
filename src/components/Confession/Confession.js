import {React, useState} from 'react'
import "./Confession.css"
import { addDoc } from 'firebase/firestore';
import { confessionRef } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';
function Confession() {

    // function for grabing the values
    const [toname , setToName] = useState("");
    const [year , setYear] = useState("");
    const [branch , setBranch] = useState("");
    const [message , setMessage] = useState("");
    const [fromname , setFromName] = useState("");
    let navigate = useNavigate();
    const createConfession = async () =>{
        console.log("I am here");
        await addDoc(confessionRef, {toname, year, branch, message, fromname})
        navigate("/");
    };

  return (
    <div className="confession-container">
        <div  className='confession-form'>
            <div className="formgroup toname">
                <label htmlFor="Name" required>To Name</label>
                <input type="text" name="Name" id="Name" onChange={(event)=>{
                    setToName(event.target.value);
                }} />
            </div>
            <div className="formgroup year">
                <label htmlFor="Year">Year</label>
                <select name="Year" id="year" onChange={(event)=>{
                    setYear(event.target.value);
                }}>
                    <option value="unknown" selected>Unknown</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="formgroup branch">
                <label htmlFor="Branch">Branch</label>
                <select name="Branch" id="Branch" onChange={(event)=>{
                    setBranch(event.target.value);
                }}>
                    <option value="Unknown" selected>Unknown</option>
                    <option value="ME">Mechanical</option>
                    <option value="AU">Mechanical Auto</option>
                    <option value="PD">Mechanical Production</option>
                    <option value="CS">Computer Science</option>
                    <option value="AI">Artificial Intelligence</option>
                    <option value="BT">Bio Technology</option>
                    <option value="EC">Electronics</option>
                </select>
            </div>
            <div className="formgroup message">
                <label htmlFor="Message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={(event)=>{
                    setMessage(event.target.value);
                }} ></textarea>
            </div>
            <div className="formgroup fromname">
                <label htmlFor="SenderName">Your Name</label>
                <input type="text" name="SenderName" id="SenderName" placeholder="Unknown" onChange={(event)=>{
                    setFromName(event.target.value);
                }} />
            </div>
            <div className="formgroup button">
                <button  className='button-19' onClick={ createConfession }> submit </button>
                <input type="reset" value="Clear" className='button-19'/>
            </div>
        </div>
    </div>
  )
}

export default Confession