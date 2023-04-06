import React, { useEffect, useState } from "react";
import PinPage from "./PinPage";
import PayAirtime from "./PayAirtime";
import "../stylesheets/buyairtime.css";
import { Link } from "react-router-dom";
import AirtimeTransaction from "./AirtimeTransaction";
import {BASE_URL} from '../Helper/Action'
import Axios from 'axios'

const bASE_URL = process.env.REACT_APP_BASE_URL;


const Buyairtime = () => {
  const [pages, setPages] = useState("AirtimePage");
  const [error, setError] = useState("");

  const [airtime, setAirtime] = useState({
    Network: "",
    Number: "",
    Amount: "",
    Email: "",
  });
  const authentication = () => {
    if (
      airtime.Network === "" ||
      airtime.Number.length !== 11 ? "must be eleven digit" : "" ||
      airtime.Amount.length !== 3 ? "can't be less than 3 digit" :"" ||
      airtime.Email === ""
    ) {
      return setError("Input can't be empty");
    } else {
      setPages("pinPage");
    };
  };
  const toggle = () =>{
    setPages('confirmAirtime')
  }
  const click = () =>{
    setPages('PaidAirtime')

  }

  //define url
  
  const clickLogin = async(e) =>{
    e.preventDefault();
    await Axios.post(`${bASE_URL}/merchants`, airtime
    ).then ((response) => {console.log(response)}
    ).catch((err)=> {console.log(err)})
      }
 
  return (
    <div>
      <div className={`buyairtime-home ${pages === 'AirtimePage' ? '': 'd-none'}`}>
        <form className="form" action="">
          <div className="airtime-input">
            <div className="airtime-network">
              <label htmlFor="">Select Mobile Network</label>
              <select onChange={(e) =>{setAirtime({...airtime, Network : e.target.value})}} className="network-options">
                <option value="mtn"></option>
                <option value="mtn">MTN</option>
                <option value="airtel">AIRTEL</option>
                <option value="glo">GLO</option>
                <option value="etisalat">ETISALAT</option>
              </select>
            </div>
            <div className="phone-airtime">
              <div className="number-airtime">
                <label htmlFor="">Phone Number</label>
                <input type="number" onChange={(e) =>{setAirtime({...airtime, Number : e.target.value})}} />
                
              </div>
              <div className="number-airtime">
                <label htmlFor="">Amount</label>
                <input type="number" placeholder='&#8358;' onChange={(e) =>{setAirtime({...airtime, Amount : e.target.value})}} />
              </div>
            </div>
            <div className="eko-form">
                <label htmlFor="">Email</label>
                <input type="text" placeholder='lagudatemitayo@gmail.com' onChange={(e) =>{setAirtime({...airtime, Email : e.target.value})}} />
              </div>
            <p className="airtime-error">{error}</p>
            <Link onClick={authentication}>
              <button>PROCEED</button>
            </Link>
          </div>
        </form>
      </div>
      <PinPage page={pages} toggle={setPages} />
      <PayAirtime page={pages} airtime={airtime} />
      <AirtimeTransaction page={pages} airtime={airtime} click={setPages} />
    </div>
  );
};

export default Buyairtime;
//how to make page pop up on another using react?
