import React, { useState } from "react";
import {Link} from 'react-router-dom'
import PayData from "./PayData";
import PinPage from "./PinPage";
import '../stylesheets/buydata.css'





const Buydata = () => {
  const [pages, setPages] = useState("AirtimePage");
  const [error, setError] = useState("");

  const [airtime, setAirtime] = useState({
    Network: "",
    Bundle: "",
    Number: "",
    Amount: "",
  });
  const authentication = () => {
    if (
      airtime.Network === "" ||
      airtime.Bundle === "" ||
      airtime.Number === "" ||
      airtime.Amount === ""
    ) {
      return setError("Input can't be empty");
    } else {
      setPages("pinPage");
    }
  };
  const toggle = () =>{
    setPages('confirmAirtime')
  }
  const payPage = () =>{
    setPages('paidAirtime')

  }
  
  return (
    <div>
    <div className={`buyairtime-home ${pages === 'AirtimePage' ? '': 'd-none'}`}>
      <form className="form" action="">
        <div className="airtime-input">
          <div className="airtime-network">
            <label htmlFor="">Select Mobile Network</label>
            <select className="network-options" onChange={(e) =>{setAirtime({...airtime, Network : e.target.value})}}>
              <option value="mtn"></option>
              <option value="mtn">MTN</option>
              <option value="airtel">AIRTEL</option>
              <option value="glo">GLO</option>
              <option value="etisalat">ETISALAT</option>
            </select>
          </div>
          <div className="airtime-network">
            <label htmlFor="">Bundle</label>
            <select className="network-options" onChange={(e) =>{setAirtime({...airtime, Bundle : e.target.value})}}>
              <option value=""></option>
              <option value="Bundle 1">Bundle 1</option>
              <option value="Bundle 2">Bundle 2</option>
              <option value="Bundle 3">Bundle 3</option>
              <option value="Bundle 4">Bundle 4</option>
            </select>
          </div>
          <div className="phone-airtime">
            <div className="number-airtime">
              <label htmlFor="">Phone Number</label>
              <input type="number" onChange={(e) =>{setAirtime({...airtime, Number : e.target.value})}} />
            </div>
            <div className="number-airtime">
              <label htmlFor="">Amount</label>
              <input type="number" placeholder="&#8358;" onChange={(e) =>{setAirtime({...airtime, Amount : e.target.value})}} />
            </div>
          </div>
          <Link onClick={authentication}>
          <button>PROCEED</button>
          </Link>
          <p className="airtime-error">{error}</p>
        </div>
      </form>
    </div>
    <PinPage page={pages} toggle={setPages} />
    <PayData page={pages} airtime={airtime} />
    </div>
  );
};

export default Buydata;
