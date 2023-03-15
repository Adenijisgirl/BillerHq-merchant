import React, { useState } from "react";
import "../stylesheets/ekedc.css";
import { Link } from "react-router-dom";
import Gotv from "../assets/gotv.svg";
import Dstv from "../assets/dstv.svg";
import Startimes from "../assets/startimes.svg";
import PayElectricity from "../Pages/PayElectricity"




const PurchaseCable = (props) => {
  const [error, setError] = useState("");
  const [light, setLight] = useState({
    Account: "",
    Cable: "",
    Amount: "",
  });
  const authentication = (e) => {
    e.preventDefault();
    if (light.Meter === "" || light.Service === "" || light.Amount === "") {
      setError("input cant be empty");
    } else {
      props.setPage("pinPage");
    }
  };

  return (
    <div>
      <div
        className={`eko-electricity ${
          props.electricity === "" || props.page === "pinPage" ? "d-none" : ""
        }`}
      >
        <div className="eko-style">
          <header>
            <h4>{props.electricity}</h4>
            <img
              src={
                props.electricity === "Gotv"
                  ? Gotv
                  : props.electricity === "Dstv"
                  ? Dstv
                  : props.electricity === "Startimes"
                  ? Startimes
                  : ""
              }
              alt=""
            />
          </header>
          <form className="eko-form" action="">
            <div className="account">
              <label htmlFor="">Card Number</label>
              <input
                type="text"
                onChange={(e) => {
                  setLight({ ...light, Meter: e.target.value });
                }}
              />
            </div>
            <div className="service-type">
              <label htmlFor="">Bouquet </label>
              <select
                className="ekedc-service"
                onChange={(e) => {
                  setLight({ ...light, Cable: e.target.value });
                }}
              >
                <option value=""></option>
                <option value='Current Due'>Current Due</option>
                <option value='Top up'>Top up</option>
              </select>
            </div>
            <div className="amount">
              <label htmlFor="">Amount</label>
              <input
                type="text"
                onChange={(e) => {
                  setLight({ ...light, Amount: e.target.value });
                }}
              />
            </div>
            <button onClick={authentication}>PROCEED</button>
            <p className="airtime-error">{error}</p>
          </form>
        </div>
      </div>
      <PayElectricity  light={light} page={props.page} setPage={props.setPage} electricity={props.electricity}  />

    </div>
  );
};

export default PurchaseCable;