import React from 'react'
import '../stylesheets/navbar.css'
import facebook from '../assets/facebook.svg'
import youtube from '../assets/youtube.svg'
import biller from '../assets/billerHQ.svg'
import { useLocation, Link } from "react-router-dom";



const Navbar = () => {
  const location = useLocation();
  // let pagename = location.pathname
  // pagename = pagename.slice(1)
  // console.log(pagename)
  // let breadcrumb 
  // switch(pagename){
  //   case 'Dashboard':
  //   breadcrumb = 'Dashboard';
  //   break;
  //   case 'Account':
  //     breadcrumb = 'Account';
  //     break;
  //     case 'History':
  //     breadcrumb = 'History';
  //     break;
  //     case 'Commission':
  //     breadcrumb = 'Commission';
  //     break;
  //     case 'Settings':
  //     breadcrumb = 'Settings';
  //     break;
  //     case 'Support':
  //     breadcrumb = 'Support';
  //     break;
  //   default:
  //    breadcrumb = 'Dashboard'
  // }
  return (
    <div className='nav'>
        <div className="green-header">
            <Link to=""><p>Lost Your Token?</p></Link>
            <Link to=""><p>096244444</p></Link>
            <Link to=""><p>09030009930</p></Link>
            <Link to=""><img src={facebook} alt="" /></Link>
            <Link a=""><img src={youtube} alt="" /></Link>
        </div>
        <div className="location">
        <div className="logo">
            <img src={biller} alt="" />
        </div>
        <div className='breadcrum-nav'>
         {/* <h4> {
            breadcrumb
          } </h4> */}
        {location.pathname === "/dashboard" ? (
          <div className="">
            <h4>Dashboard</h4>
             </div>
        ) : location.pathname === "/account" ? (
          <div className="">
            <h4>Account</h4>
             </div> ) :  location.pathname === "/history" ? (
          <div className="">
            <h4>History</h4> </div> ) : location.pathname === "/commission" ? (
          <div className="">
            <h4>Commission</h4> </div> ) : location.pathname === "/Settings" ? (
          <div className="">
            <h4>Settings</h4> </div> ) : location.pathname === "/support" ? (
          <div className="">
            <h4>Support</h4> </div> ) : location.pathname === "/buyairtime" ? (
          <div className="">
            <h4>Buy Airtime</h4> </div> ) : location.pathname === "/buydata" ? (
          <div className="">
            <h4>Buy Data</h4> </div> ) :  location.pathname === "/settings" ? (
          <div className="">
            <h4>Settings</h4></div> ) :location.pathname === "/buyairtime" ? (
          <div className="">
            <h4>Buyairtime</h4>
             </div> ) : location.pathname === "/buydata" ? (
          <div className="">
            <h4>Buydata</h4>
             </div> ) : location.pathname === "/eletricity" ? (
          <div className="">
            <h4>Eletricity</h4>
             </div> ) : location.pathname === "/cable" ? (
          <div className="">
            <h4>Buycable</h4>
             </div> ) : location.pathname === "/ekedc" ? (
          <div className="">
            <h4>Ekedc</h4>
             </div> ) : null }
        </div>
        </div>
        <hr />
        </div>
  )
}

export default Navbar