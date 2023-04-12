import React, { useState } from "react";
import CreateRole from "../Rolls/CreateRole";
import { Link, useNavigate } from "react-router-dom";
import "../../stylesheets/account.css";
import { BASE_URL } from "../../Helper/Action";
import Axios from "axios";

const CreateUser = () => {
  let Navigate = useNavigate();
  const [messageError, setMessageError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [numberError, setNumberError] = useState("");

  const [inputInfo, setInputInfo] = useState({
    email: "",
    lastname: "",
    firstname: "",
    phone_number: "",
    namerole: "",
    gender: "",
  });

  let token = sessionStorage.getItem("access_token");

  const createUser = async (e) => {
    e.preventDefault();
    await Axios.post(`${BASE_URL}/api/invite/user`, inputInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        let user = response.data;
        Navigate("/usermessage");
      })
      .catch((err) => {
        setMessageError(err.response.data.message);
        setEmailError(err.response.data.data.email);
        setNumberError(err.response.data.data.phone_number);
        setFirstNameError(err.response.data.data.firstname);
        setLastNameError(err.response.data.data.lastname);
      });
  };
  return (
    <div>
      <div className="create-user">
        <form className="form-user">
          <div>
            <div className="form-label">
              <div className="new-user">
                <div className="create-error">
                  <div className="account-user">
                    <label htmlFor="">First Name </label>
                    <input
                      type="text"
                      placeholder="Laguda"
                      onChange={(e) => {
                        setInputInfo({
                          ...inputInfo,
                          firstname: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <p className="user-error1">{firstNameError}</p>
                </div>
                <div className="create-error">
                <div className="account-user">
                  <label htmlFor="">Phone Number </label>
                  <input
                    type="text"
                    placeholder="09020259254"
                    onChange={(e) => {
                      setInputInfo({
                        ...inputInfo,
                        phone_number: e.target.value,
                      });
                    }}
                  />
                </div>
                <p className="user-error1">{numberError}</p>
                </div>

                <div className="account-user">
                  <label htmlFor="">Gender</label>
                  <select
                    className="network-options"
                    onChange={(e) => {
                      setInputInfo({ ...inputInfo, gender: e.target.value });
                    }}
                  >
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div>
              <div className="create-error">
                <div className="account-user">
                  <label htmlFor="">Last Name </label>
                  <input
                    type="text"
                    placeholder="Temitayo"
                    onChange={(e) => {
                      setInputInfo({ ...inputInfo, lastname: e.target.value });
                    }}
                  />
                </div>
                <p className="user-error1">{lastNameError}</p>
</div>
<div className="create-error">
                <div className="account-user">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="text"
                    placeholder="lagudatemitayo2019@gmail.com"
                    onChange={(e) => {
                      setInputInfo({ ...inputInfo, email: e.target.value });
                    }}
                  />
                </div>
                <p className="user-error1">{emailError}</p>

                </div>
                <div className="account-user">
                  <label htmlFor="">Name Role</label>
                  <select
                    className="network-options"
                    onChange={(e) => {
                      setInputInfo({ ...inputInfo, namerole: e.target.value });
                    }}
                  >
                    <option value="mtn"></option>
                    <option value="admin">Admin</option>
                    <option value="subadmin">Sub Admin</option>
                    <option value="accountant">Accountant</option>
                  </select>
                </div>
              </div>
            </div>{" "}
            <p className="user-error">{messageError}</p>
          </div>
          <Link onClick={createUser}>
            <button>Send</button>
          </Link>
        </form>
      </div>
      {/* <CreateRole inputInfo={inputInfo} setInputInfo={setInputInfo} /> */}
    </div>
  );
};

export default CreateUser;
