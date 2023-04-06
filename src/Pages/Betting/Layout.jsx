import React from "react";
import "../../stylesheets/education.css";

const Layout = () => {
  return (
    <div className="education-layout">
      <form action="">
        <div className="exams-education">
          <h4>Bet</h4>
          <p>Place bet here</p>
        </div>
        <div className="exams-form">
          <div className="exam-details">
            <label htmlFor="">Select Provider</label>
            <select name="" id="">
              <option value="">Select Provider</option>
              <option value="Bet9ja">Bet9ja</option>{" "}
              <option value="BangBet">BangBet</option>{" "}
              <option value="NairaBet">NairaBet</option>{" "}
              <option value="1xBet">1xBet</option>{" "}
              <option value="BetKing">BetKing</option>{" "}
              <option value="BetWay">BetWay</option>{" "}
              <option value="MerryBet">MerryBet</option>{" "}
            </select>
          </div>
          
          <div className="education-details">
            <div className="education-price">
              <label htmlFor="">Amount</label>
              <input type="number" />
            </div>
            <div className="education-quantity">
              <label htmlFor="">Phone Number</label>
              <input type="number" />
            </div>
          </div>
          <div className="exam-details">
            <label htmlFor="">Customer ID</label>
            <input type="text" />
          </div>
          <div className="exam-details">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
        </div>
        <button>Proceed</button>
      </form>
    </div>
  );
};

export default Layout;
