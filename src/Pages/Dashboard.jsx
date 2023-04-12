import React, { useEffect } from "react";
import "../stylesheets/dashboard.css";
import wallet from "../assets/wallet.svg";
import commission from "../assets/commission.svg";
import airtime from "../assets/airtime.svg";
import data from "../assets/data.svg";
import electricity from "../assets/electricity.svg";
import education from "../assets/Education.svg";
import betting from "../assets/Betting.svg";
import cable from "../assets/cable.svg";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useProfile } from "../Hook/Profile";

const Dashboard = () => {
  const { profile, isloading, error } = useProfile();

  useEffect(() => {
    profile();
  }, []);

  return (
    <div>
      <div className="wallet-bills">
        <div className="wallet-card">
          <div className="wallet-info">
            <img src={wallet} alt="" />
            <div className="wallet-balance">
              <p>Wallet Balance:</p>
              <h4>₦ 400,000</h4>
            </div>
          </div>
          <div className="wallet-in">
            <img src={commission} alt="" />
            <div className="wallet-balance">
              <p>Commission Balance:</p>
              <h4>₦ 230,000</h4>
            </div>
          </div>
        </div>
        <div className="pay-bills">
          <h4>Pay Bills</h4>
        </div>
        <hr />
        <div className="nav-icons">
          <Link to="/buyairtime">
            <img src={airtime} alt="" />
            <h4>Buy Airtime</h4>
          </Link>
          <Link to="/buydata">
            <img src={data} alt="" />
            <h4>Buy Data</h4>
          </Link>
          <Link to="/electricity">
            <img src={electricity} alt="" />
            <h4>Electricity</h4>
          </Link>
          <Link to="/cable">
            <img src={cable} alt="" />
            <h4>Buy Cable</h4>
          </Link>
          <Link to="/education">
            <img src={education} alt="" />
            <h4>Education</h4>
          </Link>
          <Link to="/betting">
            <img src={betting} alt="" />
            <h4>Betting</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
