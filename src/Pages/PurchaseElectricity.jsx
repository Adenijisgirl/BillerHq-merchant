import React from "react";
import { Link } from "react-router-dom";
import Lock from "../assets/password-padlock.svg";
import "../stylesheets/transfercommission.css";
// import OTPInput, { ResendOTP } from "otp-input-react";

const PurchaseElectricity = (props) => {
  // const [OTP, setOTP] = useState("");
  //Custom timer and button component
  // const renderButton = (buttonProps) => {
  //   return <button {...buttonProps}>Resend</button>;
  // };
  // const renderTime = (remainingTime) => {
  //   return <span>{remainingTime} seconds remaining</span>;
  // };

  //Hide timer and show sec in button component
  //  const renderButton = (buttonProps) => {
  //    return (
  //     <button {...buttonProps}>
  //        {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend"}
  //      </button>
  //    );
  //  };
  //  const renderTime = () => React.Fragment;
  ;
  return (
    <div
      className={` commission-transfer ${
        props.electricity === "pinPage" ? "" : "d-none"   
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
            {/* <OTPInput
              className="input"
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              secure
            /> */}
            {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
            <input
              className="in-input"
              type="number"
              placeholder="0"
              maxlength="1"
              autofocus
              secure
            />
            <input
              className="in-input"
              type="number"
              placeholder="0"
              maxlength="1"
              secure
            />
            <input
              className="in-input"
              type="number"
              placeholder="0"
              maxlength="1"
              secure
            />
            <input
              className="in-input"
              type="number"
              placeholder="0"
              maxlength="1"
              secure
            />
          </div>
          {/* <ResendOTP className='otp-button' renderButton={renderButton} renderTime={renderTime} /> */}
          <Link
            onClick={() => {
              props.toggle("confirmElectricity");
            }}
          >

            <button  className="proceed-button">PROCEED</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PurchaseElectricity;