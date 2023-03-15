import React, { useState} from "react";
import "../stylesheets/sidebar.css";
import { Link } from "react-router-dom";
import merchant from "../assets/laguda.svg";
import icon1 from "../assets/Vector6.svg";
import icon2 from "../assets/Vector7.svg";
import icon3 from "../assets/Vector8.svg";
import icon4 from "../assets/Vector9.svg";
import icon5 from "../assets/Vector1.svg";
import icon6 from "../assets/Vector2.svg";
import icon7 from "../assets/Vector3.svg";
import {MdPlayArrow} from 'react-icons/md'

const Sidebar = () => {
  const [tab, setTab] = useState("Report");
  return (
    <div className="hr-margin navbar">
      <div
            className="container nav-container"
          >
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            
            
      <div className="sidebar-options menu-items">
        <div className="hr-guide">
          <div className="merchant-info">
            <img src={merchant} alt="" />
            <h4>
              Hi <strong>Cico Serve</strong>
            </h4>
            <p> Wallet ID: 10773943</p>
          </div>
          <hr />
          <div className="side-menu">
            <Link to="/dashboard" >
              <img src={icon1} alt="" />
              <span className="span">Dashboard</span>
              {/* <span> <MdPlayArrow /></span> */}
            </Link>

            <Link to="/account">
              <img src={icon2} alt="" />
              <span className="span">Account</span>
            </Link>
            <Link to="/history">
              <img src={icon3} alt="" />
              <span className="span">History</span>
            </Link>
            <Link to="/commission">
              <img src={icon4} alt="" />
              <span className="span">Commission</span>
            </Link>
            <Link to="/settings">
              <img src={icon5} alt="" />
              <span className="span">Settings</span>
            </Link>
            <Link to="/support" className="span">
              <img src={icon6} alt=""  />
              <span className="span">Support</span>
            </Link>
            <Link to="/dashboard">
              <img src={icon7} alt="" />
              <span className="span">Logout</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="side-hr">
        <hr className='hr' />
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
