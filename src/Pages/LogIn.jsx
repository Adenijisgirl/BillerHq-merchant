import React from "react";
import google from "../assets/googlelogo.svg";
import group3 from "../assets/Group3.svg";
import eye from "../assets/passwordeye.svg";
import facebook from "../assets/facebooklogo.svg";
import "../stylesheets/login.css";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../Helper/Action";
import Axios from "axios";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  let Navigate = useNavigate()

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const clickLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await Axios.post(`${BASE_URL}/api/login`, value)
      .then((response) => {
        // let user = response.data.data;
        sessionStorage.setItem("access_token", response.data.access_token);
        setIsLoading(false);
        Navigate('/dashboard')
        console.log(response)
      })
      .catch((err) => {
        setEmailError(err.response.data.data.email);
        setPasswordError(err.response.data.data.password);
        setIsLoading(false);
      });
  };
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
            <div>
              <div className="name-sign">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  onChange={(e) => {
                    setValue({ ...value, email: e.target.value });
                  }}
                />
              </div>
              <p className="login-error">{emailError}</p>
            </div>
            <div>
              <div className="name-sign">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  onChange={(e) => {
                    setValue({ ...value, password: e.target.value });
                  }}
                />
                <img className="password-eye" src={eye} alt="" />
              </div>
              <p className="login-error">{passwordError}</p>
            </div>
            <div className="forgot-signin">
              <button className="password-sign">Forgot password?</button>
              <Link onClick={clickLogin}>
                <button className="signin-sign">
                  {" "}
                  {isLoading ? <Loading /> : "SignIn"}
                </button>
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
            <p className="form-protect">
              Protected by reCAPTCHA and subject to the{" "}
              <strong>Uniswitch Privacy Policy</strong> and{" "}
              <strong>Terms of Service.</strong>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
