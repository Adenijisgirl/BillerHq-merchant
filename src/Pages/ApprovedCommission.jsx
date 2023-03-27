import React from "react";
import { Link } from "react-router-dom";
import Mark from "../assets/Marked.svg";
import "../stylesheets/approvedcommission.css";

const ApprovedCommission = (props) => {
  return (
    <div>
      <div className="approved-commission">
        <img src={Mark} alt="" />
        <div className="marked-approved">
          <div className="approved-details">
            <h6>
              Amount: <br /> <br />
              <strong>{props.value}</strong>
            </h6>
          </div>
          <p className="approved-text">
            Commission as been moved to your wallet
          </p>
          <Link to="/dashboard">
            {" "}
            <button>Dashboard</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApprovedCommission;
