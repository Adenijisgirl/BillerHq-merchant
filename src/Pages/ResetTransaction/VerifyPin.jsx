import React from "react";
import { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link } from 'react-router-dom'
import '../../stylesheets/verifypin.css'




const VerifyPin = () => {
      const [OTP, setOTP] = useState("");
//   //Custom timer and button component
//    const renderButton = (buttonProps) => {
//      return <button {...buttonProps}>Resend</button>;
//    };
//    const renderTime = (remainingTime) => {
//      return <span>{remainingTime} seconds remaining</span>;
//    };

 // Hide timer and show sec in button component
    const renderButton = (buttonProps) => {
      return (
       <button {...buttonProps}>
          {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend"}
        </button>
      );
    };
    const renderTime = () => React.Fragment;


  return (
    <div className="verifypin">
      <form action="" className="verify-form">
        <div className="verify">
          {<OTPInput
              className="input"
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={5}
              otpType="number"
              disabled={false}
              secure
            /> }
          { <ResendOTP className='otp-button' renderButton={renderButton} renderTime={renderTime} /> }
        </div>
        <p>Copy the verification code in your authy application
 to verify this account recovery</p>
        <Link to='/confirmreset'>
            <button className="button">SUBMIT</button>
        </Link>
      </form>
    </div>
  );
};

export default VerifyPin;
