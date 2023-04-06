
import React, { useState } from "react";
import "../stylesheets/ekedc.css";
import { Link } from "react-router-dom";
import Eko from "../assets/Eko-Eleck.svg";
import Ikeja from "../assets/Ikeja.svg";
import EKEDC from "../assets/EKEDC.svg";
import AEDC from "../assets/AEDC.svg";
import EEDC from "../assets/EEDC.svg";
import IBEDC from "../assets/IBEDC.svg";
import KEDCO from "../assets/KEDCO.svg";
import PayElectricity from "./PayElectricity";
import { ElectricityTransaction } from "./ElectricityTransaction";


const Ekedc = (props) => {
  const [error,setError] = useState("")
  // const toogle = () =>{
    
  //   props.setPage("confirmElectricity")
  //   }
  const [light, setLight] = useState({
Meter: "",
Service: "",
Amount: "",
Email: "",
Number: "",
  });
  const authentication = (e) =>{
    e.preventDefault()
    if(
    light.Meter === "" ||
    light.Service === "" ||
    light.Amount === "" ||
    light.Email === "" ||
    light.Number === ""
  )
  { setError('input cant be empty')
  }
  else{
props.setPage("pinPage")
  }
};


  return (
  <div>
    <div
      className={`eko-electricity ${props.page === 'inputPage' ? '' : 'd-none'}`}
    >
      <div className="eko-style">
        <header>
          <h4>{props.electricity}</h4>
          <img src={props.electricity === 'Ikeja' ? Ikeja : props.electricity === 'Eko Electricity' ? EKEDC : props.electricity === 'Aedc' ? AEDC : props.electricity === 'EEDC' ? EEDC : props.electricity === 'Ibadan' ? IBEDC : props.electricity === 'Kano' ? KEDCO : '' } alt="" />
        </header>
        <form className="eko-form" action="">
          <div className="account">
            <label htmlFor="">Meter Number</label>
            <input type="text" onChange={(e) =>{setLight({...light, Meter : e.target.value})}} />
          </div>
          <div className="service-type">
            <label htmlFor="">Select Service Type </label>
            <select className="ekedc-service" onChange={(e) =>{setLight({...light, Service : e.target.value})}}>
              <option value="service"></option>
              <option value="prepaid">Prepaid</option>
              <option value="postpaid">PostPaid</option>
            </select>
          </div>
          <div className="amount">
            <label htmlFor="">Amount</label>
            <input type="text" onChange={(e) =>{setLight({...light, Amount : e.target.value})}} />
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
    <PayElectricity  light={light} page={props.page} setPage={props.setPage} electricity={props.electricity}  />
    <ElectricityTransaction electricity={props.electricity} setPage={props.setPage} light={light} setElectricity={props.setElectricity} />
    </div>

   
  );
};

export default Ekedc;
