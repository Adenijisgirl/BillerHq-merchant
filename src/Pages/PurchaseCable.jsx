import React, { useState } from "react";
import "../stylesheets/ekedc.css";
import { Link } from "react-router-dom";
import Gotv from "../assets/gotv.svg";
import Dstv from "../assets/dstv.svg";
import Startimes from "../assets/startimes.svg";
import PayElectricity from "../Pages/PayElectricity"
import PurchaseElectricity from '../Pages/PurchaseElectricity'
import PayCable from "./PayCable";




const PurchaseCable = (props) => {
  const [error, setError] = useState("");
  const [light, setLight] = useState({
    Account: "",
    Cable: "",
    Amount: "",
    Email: "",
    Number: "",
  
  });
  const authentication = (e) => {
    e.preventDefault();
    if (light.Meter === "" || light.Service === "" || light.Amount === "" || light.Email === "" || light.Number === "") {
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
            <div className="amount">
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e) =>{setLight({...light, Email : e.target.value})}} />
          </div>
          <div className="amount">
            <label htmlFor="">Phone Number</label>
            <input type="text" onChange={(e) =>{setLight({...light, Number : e.target.value})}} />
          </div>
            <button onClick={authentication}>PROCEED</button>
            <p className="airtime-error">{error}</p>
          </form>
        </div>
      </div>
      {/* <PurchaseElectricity page={page} toogle={setElectricity} setPage={setPage}/> */}
      <PurchaseElectricity  light={light} page={props.page} setPage={props.setPage} electricity={props.electricity}  />
      <PayCable  light={light} page={props.page} setPage={props.setPage} electricity={props.electricity}  />


    </div>
  );
};

export default PurchaseCable;
