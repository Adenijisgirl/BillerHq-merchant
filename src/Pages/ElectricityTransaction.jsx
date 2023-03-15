import React from "react";
import { Link } from "react-router-dom";
import Ikeja from "../assets/Ikeja.svg";
import EKEDC from "../assets/EKEDC.svg";
import AEDC from "../assets/AEDC.svg";
import EEDC from "../assets/EEDC.svg";
import IBEDC from "../assets/IBEDC.svg";
import KEDCO from "../assets/KEDCO.svg";
import Marked from "../assets/Marked.svg";

export const ElectricityTransaction = (props) => {
  return (
    <div
      className={`pay-airtime ${props.electricity === "paidElectricity" ? "" : "d-none"}`}
    >
      <img src={Marked} alt="" />
      <h4>Transaction successful</h4>
      <div className="air-time">
        <div className="select-network">
          <h5>
            Selected Mobile Network:
            <p>{props.Network}</p>
          </h5>
          <h5>
            Phone Number:
            <p>{props.Number}</p>
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
        <div className="last-transaction-details">
          <h5>
            Selected Service:
            <p>{props.Services}</p>
          </h5>
        </div>
        <div className="airtime-amount">
          <h4>
            Amount: <br /> <br />
            <strong>{`&#8358; ${props.Amount}`}</strong>
          </h4>
        </div>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
};
