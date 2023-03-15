import React from "react";
import { Link } from "react-router-dom";
import Mtnnetwork from "../assets/mtnnetwork.svg";
import "../stylesheets/payairtime.css";
import Etisalatnetwork from '../assets/9mobile.webp'
import Airtelnetwork from '../assets/airtel.png'
import Glonetwork from '../assets/Globacom.svg'

const PayData = (props) => {
  
  return (
    <div className={`pay-airtime ${props.page === 'confirmAirtime' ? '': 'd-none'}`}>
      <div className="airtime-network2">
        <div className="select-network">
          <h5>
            Select Mobile Network:
            <p>{props.airtime.Network}</p>
          </h5>
          <h5>
            Phone Number:
            <p>{props.airtime.Number}</p>
          </h5>
          <img src={props.airtime.Network === 'airtel' ? Airtelnetwork : props.airtime.Network === 'mtn' ? Mtnnetwork : props.airtime.Network === 'glo' ? Glonetwork: props.airtime.Network === '9mobile' ? Etisalatnetwork : ''} alt="" />
        </div>
        <div className="airtime-amount">
          <h4>
            Amount: <br /> <br /><strong> &#8358; {props.airtime.Amount}</strong>
          </h4>
        </div>
        <Link onClick={(e)=>{props.payPage("paidAirtime")}}>
          <button>Pay</button>
        </Link>
      </div>
    </div>
  );
};

export default PayData;