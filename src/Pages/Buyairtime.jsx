import React, { useState } from "react";
import PinPage from "./PinPage";
import PayAirtime from "./PayAirtime";
import "../stylesheets/buyairtime.css";
import { Link } from "react-router-dom";
import AirtimeTransaction from "./AirtimeTransaction";

const Buyairtime = () => {
  const [pages, setPages] = useState("AirtimePage");
  const [error, setError] = useState("");

  const [airtime, setAirtime] = useState({
    Network: "",
    Number: "",
    Amount: "",
  });
  const authentication = () => {
    if (
      airtime.Network === "" ||
      airtime.Number === "" ||
      airtime.Amount === ""
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
  // const payPage = () =>{
  //   setPages('paidAirtime')

  // }
 
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
              <p className="airtime-error">{error}</p>
            </div>
            <Link onClick={authentication}>
              <button>PROCEED</button>
            </Link>
            {/* <p className="airtime-error">{error}</p> */}
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
