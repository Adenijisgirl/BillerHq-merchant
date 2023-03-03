import React from "react";
import '../stylesheets/buyairtime.css'
const Buyairtime = () => {
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
          <button>PROCEED</button>
        </div>
      </form>
    </div>
  );
};

export default Buyairtime;
