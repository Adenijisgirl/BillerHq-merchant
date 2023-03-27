import React from "react";
import { Link } from 'react-router-dom'
import '../../stylesheets/account.css'

const CreateUser = () => {
  return (
    <div className="create-user">
      <form action="" className="form-user">
        <div className="form-label">
        <div className="new-user">
          <div className="account-user">
            <label htmlFor="">First Name </label>
            <input type="text" placeholder="Laguda " />
          </div>
          <div className="account-user">
            <label htmlFor="">Phone Number </label>
            <input type="text" placeholder="09020259254" />
          </div>
          <div className="account-user">
            <label htmlFor="">Gender</label>
            <select className="network-options">
              <option value="mtn"></option>
              <option value="mtn">Male</option>
              <option value="airtel">Female</option>
            </select>
          </div>
        </div>
        <div className="new-user">
          <div className="account-user">
            <label htmlFor="">Last Name </label>
            <input type="text"placeholder="Temitayo" />
          </div>
          <div className="account-user">
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder="lagudatemitayo2019@gmail.com" />
          </div>
          <div className="account-user">
            <label htmlFor="">Name Role</label>
            <select className="network-options">
              <option value="mtn"></option>
              <option value="mtn">Admin</option>
              <option value="airtel">Sub Admin</option>
              <option value="glo">Accountant</option>
            </select>
          </div>
          </div>
        </div>{" "}
        <Link>
          <button>Send</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateUser;
