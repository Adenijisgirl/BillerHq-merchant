import React from 'react'
import '../stylesheets/navbar.css'
import facebook from '../assets/facebook.svg'
import youtube from '../assets/youtube.svg'
import biller from '../assets/billerHQ.svg'
// import { useLocation } from "react-router-dom";


const Navbar = () => {
  // const location = useLocation();
  return (
    <div className='nav'>
        <div className="green-header">
            <a href=""><p>Lost Your Token?</p></a>
            <a href=""><p>096244444</p></a>
            <a href=""><p>09030009930</p></a>
            <a href=""><img src={facebook} alt="" /></a>
            <a href=""><img src={youtube} alt="" /></a>
        </div>
        <div className="location">
        <div className="logo">
            <img src={biller} alt="" />
        </div>
        <div>
        {/* {location.pathname === "/dashboard" ? (
          <div className="">
            <h4>Dashboard</h4>
             </div>
        ) : location.pathname === "/dashboard" ? (
          <div className="">
            <h4>Account</h4>
             </div> ) : null} */}
        </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar