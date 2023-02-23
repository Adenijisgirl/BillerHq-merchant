import React from "react";
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

const Sidebar = () => {
  return (
    <div className="hr-margin">
    <div className="sidebar-options">
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
          <a href="/dashboard">
            <img src={icon1} alt="" />
            <span>Dashboard</span>
          </a>
          <a href="/account">
            <img src={icon2} alt="" />
            <span>Account</span>
          </a>
          <a href="">
            <img src={icon3} alt="" />
            <span>History</span>
          </a>
          <a href="">
            <img src={icon4} alt="" />
            <span>Commission</span>
          </a>
          <a href="">
            <img src={icon5} alt="" />
            <span>Settings</span>
          </a>
          <a href="">
            <img src={icon6} alt="" />
            <span>Support</span>
          </a>
          <a href="">
            <img src={icon7} alt="" />
            <span>Logout</span>
          </a>
        </div>
      </div>
      </div>
      <div className="side-hr">
          <hr />
        </div>
      
    </div>
  );
};

export default Sidebar;
