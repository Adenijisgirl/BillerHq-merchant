import React from "react";
import { Link } from "react-router-dom";
import Send from "../assets/send.svg";
import '../stylesheets/adminsupport.css'




const AdminSupport = () => {
  return (
    <div className="admin-support">
      <div className="sent-support">
        <img src={Send} alt="" />
        <p>Message as been sent to Admin </p>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminSupport;
