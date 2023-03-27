import React from "react";
import { Link } from "react-router-dom";
import Ikeja from "../assets/Ikeja.svg";
import EKEDC from "../assets/EKEDC.svg";
import AEDC from "../assets/AEDC.svg";
import EEDC from "../assets/EEDC.svg";
import IBEDC from "../assets/IBEDC.svg";
import KEDCO from "../assets/KEDCO.svg";
import "../stylesheets/payelectricity.css";

const PayElectricity = (props) => {
  // const action = () => {
  //   props.setPage(paidAirtime)
  // }

  return (
    <div
      className={`pay-airtime ${
        props.page === "payElectricity" ? "" : "d-none"
      }`}
    >
      <div className="airtime-network2">
        <div className="select-network select-network2">
          <h5>
          Name:
            <p>
SULAIMON BASIRAT A
</p>
          </h5>
          <h5>
          Meter Number:
            <p>{props.light.Meter}</p>
          </h5>
          <img
            src={
              props.electricity === "Ikeja"
                ? Ikeja
                : props.electricity === "Eko Electricity"
                ? EKEDC
                : props.electricity === "Aedc"
                ? AEDC
                : props.electricity === "EEDC"
                ? EEDC
                : props.electricity === "Ibadan"
                ? IBEDC
                : props.electricity === "Kano"
                ? KEDCO
                : ""
            }
            alt=""
          />
        </div>
        <div className="select-network select-network2">
          <h5>
            Phone Number:
            <p>09020259254</p>
          </h5>
          <h5>
            Selected Service Network:
            <p>{props.light.Service}</p>
          </h5>
        </div>
        <div className="airtime-amount">
          <h4>
            Amount: <br /> <br />
            <strong>&#8358; {props.light.Amount}</strong>
          </h4>
        </div>
        <Link
          handleClick={() => {
            props.setElectricity("paidElectricity");
          }}
        >
          <button>Pay</button>
        </Link>
      </div>
    </div>
  );
};

export default PayElectricity;
