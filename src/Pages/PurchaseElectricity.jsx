import React from "react";
import { Link } from "react-router-dom";
import Lock from "../assets/password-padlock.svg";
import "../stylesheets/transfercommission.css";
import { StatefulPinInput } from 'react-input-pin-code';

const PurchaseElectricity = (props) => {

  const action = () => { props.setPage('payElectricity')}

  
  
  return (
    <div
      className={` commission-transfer ${
        props.page === "pinPage" ? "" : "d-none"   
      }`}
    >
      <div className="commission-access">
        <img src={Lock} alt="" />
        <div className="commission-word">Your Four Digit PIn </div>
        <p className="commission-message">
          This is your personal digit PIN needed to complete this transaction
        </p>
        <form action="">
          <div className="commission-input">
          <StatefulPinInput className="common"
      length={4}
      initialValue=""
    />
          </div>
          {/* <ResendOTP className='otp-button' renderButton={renderButton} renderTime={renderTime} /> */}
          <Link
            
          >

            <button onClick={action}  className="proceed-button">PROCEED</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PurchaseElectricity;