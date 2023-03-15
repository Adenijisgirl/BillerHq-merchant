import React from 'react'
import { Link } from 'react-router-dom'
import Mark from '../assets/Marked.svg'
import '../stylesheets/newpin.css'

const NewPin = () => {
  return (
    <div>
         <div className="approved-commission">
        <div className="marked-approved mark-mark">
        <img className='mark' src={Mark} alt="" />
        
          
          <p className="approved-text">
          Transaction Pin as been Updated 
           </p> <br /> <br /> 
          <Link to="/dashboard">
            {" "}
            <button>Dashboard</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewPin


