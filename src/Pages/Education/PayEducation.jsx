import React from "react";
import { Link } from "react-router-dom";

import "../../stylesheets/payairtime.css";


const PayEducation = (props) => {
  const action = () => {
    props.setPage("paidAirtime");
  };
  return (
    <div
      className={`pay-airtime ${
        props.page === "confirmEducation" ? "" : "d-none"
      }`}
    >
      <div className="airtime-network2">
        <div className="select-network">
          <h5>
            Selected Service:
            {/* <p>{props.education.Service}</p> */}
          </h5>
          <h5>
            Phone Number:
            <p>{props.education.Number}</p>
          </h5>
          <h5>
            Price:
            <p>{props.education.Price}</p>
          </h5>
          {/* <img src={props.airtime.Network === 'airtel' ? Airtelnetwork : props.airtime.Network === 'mtn' ? Mtnnetwork : props.airtime.Network === 'glo' ? Glonetwork: props.airtime.Network === '9mobile' ? Etisalatnetwork : ''} alt="" /> */}
        </div>
        <div className="select-network">
          <h5>
            Quantity:
            <p>{props.education.Quantity}</p>
          </h5>
          <h5>
            Email:
            <p>{props.education.Email}</p>
          </h5>
        </div>
        <div className="airtime-amount">
          <h4>
            Amount: <br /> <br />
            <strong>&#8358; {props.education.Amount}</strong>
          </h4>
        </div>

        {/* <Link onClick={action}> */}
        <Link>
          <button>Pay</button>
        </Link>
      </div>
    </div>
  );
};

export default PayEducation;
