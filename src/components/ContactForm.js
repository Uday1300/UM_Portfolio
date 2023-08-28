import "./form.css";
import React from 'react'

const from = () => {
  return (
    <div className="Form">
      <form action="">
        <label >Your Name</label>
        <input type="text"></input>
        <label >E-mail</label>
        <input type="email"></input>
        <label >Subject</label>
        <input type="text"></input>
        <label >Message</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default from
