import React from "react";
import google from "../assets/googlelogo.svg";
import group3 from "../assets/Group3.svg";
import eye from '../assets/passwordeye.svg'
import facebook from '../assets/facebooklogo.svg'
import "../stylesheets/login.css";
import Navbar from "../Components/Navbar";
import { Link } from 'react-router-dom'
import { useState } from "react";
import {BASE_URL} from '../Helper/Action'
import Axios from "axios";


const LogIn = () => {
  const [value, setValue] = useState(
    {
      Email: "",
      Password: ""
    }
  )
  const clickLogin = async(e) =>{
e.preventDefault();
await Axios.post(`${BASE_URL}/merchants/auth/token`, value
).then ((response) => {console.log(response)}
).catch((err)=> {console.log(err)})
  }

  // Axios.post(‘${BASE_URL}/merchant, data).then((response)=> log response).catch((err)=> log err)

  
  return (
    <div>
      <Navbar />
      <div className="signin">
        <div className="left-sign">
          <h3>Welcome back!</h3>
          <p>
            Keep track of your business all in one place. Pick up right where
            you left off!! Sign in to continue…
          </p>
          <div className="followers">
            <img src={group3} alt="" />
            <p>3k+ people joined us, now it’s your turn</p>
          </div>
        </div>
        <div className="right-signin">
          <form action="">
            <h3>Sign in</h3>
            <div className="name-sign">
              <label htmlFor="">Email</label>
              <input type="email" onClick={clickLogin} onChange={(e)=>{setValue({...value, Email: e.target.value})}} />
            </div>
            <div className="name-sign">
              <label htmlFor="">Password</label>
              <input type="password" onClick={clickLogin}  onChange={(e)=>{setValue({...value, Password: e.target.value})}}/>
              <img className="password-eye" src={eye} alt="" />
            </div>
            <div className="name-sign">
              <label htmlFor="">Confirm Password</label>
              <input type="password" onClick={clickLogin}  onChange={(e)=>{setValue({...value, Password: e.target.value})}}/>
              <img className="password-eye" src={eye} alt="" />
            </div>
            <div className="forgot-signin">
              <button className="password-sign">Forgot password?</button>
              <Link to='/dashboard'>
              <button className="signin-sign">Sign In</button>
              </Link>
            </div>
            <div className="hr-or">
              <hr />
              <p>or</p>
              <hr />
            </div>
            <div className="forgot-signin">
              <button className="google-signin">
                <img src={google} alt="" />
                <p>Google</p>
              </button>
              <button className="google-signin">
                <img src={facebook} alt="" />
                <p>Facebook</p>
              </button>
            </div>
            <p className="form-protect">Protected by reCAPTCHA and subject to the <strong>Uniswitch Privacy Policy</strong>  and <strong>Terms of Service.</strong> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
