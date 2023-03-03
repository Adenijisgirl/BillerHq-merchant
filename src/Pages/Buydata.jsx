import React from "react";
import {Link} from 'react-router-dom'
const Buydata = () => {
  return (
    <div className="buyairtime-home">
      <form className="form" action="">
        <div className="airtime-input">
          <div className="airtime-network">
            <label htmlFor="">Select Mobile Network</label>
            <select className="network-options">
              <option value="mtn"></option>
              <option value="mtn">MTN</option>
              <option value="airtel">AIRTEL</option>
              <option value="glo">GLO</option>
              <option value="etisalat">ETISALAT</option>
            </select>
          </div>
          <div className="airtime-network">
            <label htmlFor="">Bundle</label>
            <select className="network-options">
              <option value="mtn"></option>
              <option value="mtn">Bundle 1</option>
              <option value="airtel">Bundle 2</option>
              <option value="glo">Bundle 3</option>
              <option value="etisalat">Bundle 4</option>
            </select>
          </div>
          <div className="phone-airtime">
            <div className="number-airtime">
              <label htmlFor="">Phone Number</label>
              <input type="number" />
            </div>
            <div className="number-airtime">
              <label htmlFor="">Amount</label>
              <input type="number" />
            </div>
          </div>
          <Link to='/'>
          <button>PROCEED</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Buydata;
