import React from 'react'
import "./Confession.css"
function Confession() {
  return (
    <div className="confession-container">
        <form action={'/Wall'} className='confession-form'>
            <div className="formgroup toname">
                <label htmlFor="Name" required>To Name</label>
                <input type="text" name="Name" id="Name" />
            </div>
            <div className="formgroup year">
                <label htmlFor="Year">Year</label>
                <select name="Year" id="year">
                    <option value="unknown">Unknown</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="formgroup branch">
                <label htmlFor="Branch">Branch</label>
                <select name="Branch" id="Branch">
                    <option value="UNK">Unknown</option>
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
                <textarea name="message" id="message" cols="30" rows="10" ></textarea>
            </div>
            <div className="formgroup fromname">
                <label htmlFor="SenderName">Your Name</label>
                <input type="text" name="SenderName" id="SenderName" />
            </div>
            <div className="formgroup button">
                <input type="submit" value="Submit" className='button-19'/>
                <input type="reset" value="Clear" className='button-19'/>
            </div>
        </form>
    </div>
  )
}

export default Confession