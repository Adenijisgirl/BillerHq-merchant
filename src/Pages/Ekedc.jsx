import React from 'react'
import '../stylesheets/ekedc.css'
import {Link} from 'react-router-dom'
import Eko from '../assets/Eko-Eleck.svg'

const Ekedc = () => {
  return (
    
   <div className='eko-electricity'>
    <div className='eko-style'>
    <header>
        <h4>EKO ELECTRIC</h4>
        <img src={Eko} alt="" />
    </header>
    <form className='eko-form' action="">
        <div className="account">
            <label htmlFor="">Account Number</label>
            <input type="text" />
        </div>
        <div className="service-type">
            <label htmlFor="">Select Service Type </label>
            <select className="ekedc-service">
              <option value="mtn"></option>
              <option value="mtn">MTN</option>
              <option value="airtel">AIRTEL</option>
              <option value="glo">GLO</option>
              <option value="etisalat">ETISALAT</option>
            </select>
        </div>
        <div className="amount">
            <label htmlFor="">Amount</label>
            <input type="text" />
        </div>
        <button>PROCEED</button>
    </form>
   </div>
   </div>
  )
}

export default Ekedc