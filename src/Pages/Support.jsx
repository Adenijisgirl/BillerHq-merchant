import React from 'react'
import Envelope from '../assets/mail.svg'
import Call from '../assets/call.svg'
import Message from '../assets/message.svg'
import '../stylesheets/support.css'
import { Link } from 'react-router-dom'








const Support = () => {
  return (
    <div className='support-home'>
      <form action="">
        <div className="support-details">
          <div className="form-write">
          <div className="form-name">
            <div className="form-full">
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder='Full Name' />
            </div>
            <div className="form-full">
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder='+12 3456 7890'/>
            </div>
          </div>
          <div className="form-address">
          <div className="form-full">
              <label htmlFor="">Email Address</label>
              <input type="text" placeholder='Email Address' />
            </div>
            <div className="form-full">
              <label htmlFor="">Company</label>
              <input type="text" placeholder='ex. Steffani Studio' />
            </div>
          </div>
          </div>
          <div className="form-mess">
            <div className="form-message">
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Say something about you...'></textarea>
              {/* <input type="text"   /> */}
            </div>
            <Link to='/adminsupport'>
            <button>SUBMIT FORM </button>
            </Link>
          </div>
        </div>
      </form>
      <div className="support-details support-detail">
        <div className="contact-support">
          <img src={Envelope} alt="" />
          <div className="email">
            <h5>Contact us by email</h5>
            <p>support@yourcompany</p>
          </div>
          </div>
          <div className="contact-support">
          <img src={Call} alt="" />
          <div className="email">
            <h5>Give us a call</h5>
            <p>+12 3456 7890</p>
          </div>
          </div>
          <div className="contact-support">
          <img src={Message} alt="" />
          <div className="email">
            <h5>Let’s chat</h5>
            <p>Open live chat</p>
          </div>
    
        </div>
      </div>
    </div>
  )
}

export default Support