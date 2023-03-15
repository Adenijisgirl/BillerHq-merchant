import React from "react";
import { Link } from "react-router-dom";
import Mtnnetwork from "../assets/mtnnetwork.svg";
import Marked from '../assets/Marked.svg'
import "../stylesheets/payairtime.css";
import '../stylesheets/airtimetransaction.css'

const AirtimeTransaction = (props) => {
  return (
    <div className={`pay-airtime ${props.page === 'paidAirtime' ? '' : 'd-none'}`} >
        <img src={Marked} alt="" />
        <h4>Transaction successful</h4>
      <div className="air-time">
        <div className="select-network">
          <h5>
            Select Mobile Network:
            <p>{props.Network}</p>
          </h5>
          <h5>
            Phone Number:
            <p>{props.Number}</p>
          </h5>
          <img src={Mtnnetwork} alt="" />
        </div>
        <div className="airtime-amount">
          <h4>
            Amount: <br /> <br /><strong> &#8358;{props.Amount}</strong>
          </h4>
        </div>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default AirtimeTransaction;
