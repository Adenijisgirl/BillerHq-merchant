import React from "react";
import { Link } from "react-router-dom";
import '../../stylesheets/resetpin.css'


const ResetPin = () => {
  return (
    <div className="resetpin">
      <form action="" className="reset-form">
        <div className="pin-reset">
          <div className="reset-details">
            <label htmlFor="">Enter Email </label>
            <input type="email" />
          </div>
          <p>
            Opps. It happens to the best of us. Input your email address to fix
            the issue.
          </p>
          <Link to='/verifypin'>
            <button>SUBMIT</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPin;
