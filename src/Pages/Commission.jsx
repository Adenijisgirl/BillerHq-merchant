import React from "react";
import "../stylesheets/commission.css";
import wallet from "../assets/wallet.svg";
import commission from "../assets/commission.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "react-router-dom";
import TransferCommission from "./TransferCommission";
import ApprovedCommission from "./ApprovedCommission";

const Commission = () => {
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // const refresh = () => {
  //   axios.get(API_URL + '/counter').then((response) => {
  //     setItems(response.data);
  //     setLoading(false);
  //   }).catch((error) => {
  //     setLoading(false);
  //     setError(error.message);
  //   });
  // };
  // useEffect(refresh, []);
  // const [value, setValue] = useState(0);
  // const [balance, setbalance] = useState(400000);
  // const [commision, setCommision] = useState(230000);
  // const [message, setMessage] = useState("");
  // const [page, setPage] = useState("");
  // let walletbalance = 400000;
  // // let commisionbalance = 230000

  // const transfer = (e) => {
  //   e.preventDefault();
  //   if (value !== 0) {
  //     // let z = balance + value
  //     // console.log(z)
  //     setCommision(commision - value);
  //     setbalance(balance + value);
  //   } else {
  //     // console.log("input not filled");
  //     setMessage("input cant be empty");
  //   }
  // };
  // // console.log(balance);
  // // console.log(value);

  // const updateMessage = (e) => {
  //   if (e.target.value > commision) {
  //     setMessage("input is more than amount");
  //   } else {
  //     setValue(parseInt(e.target.value));
  //     setMessage("");
  //   }
  // };

  // const authentiaction = () => {
  //   if ((value = "")) {
  //     setPage("pinPage");
  //   }
  // };

  return (
    <div className="commission-body">
      <div className="wallet-card">
        <div className="wallet-info wallet-info2">
          <img src={wallet} alt="" />
          <div className="wallet-balance">
            <p>Wallet Balance:</p>
            {/* <h4>{balance < 0 ? 0 : balance}</h4> */}
            <h4>400,000</h4>
          </div>
        </div>
        <div className="wallet-in wallet-in2">
          <img src={commission} alt="" />
          <div className="wallet-balance">
            <p>Commission Balance:</p>
            {/* <h4>{commision < 0 ? 0 : commision}</h4> */}
            <h4>230,000</h4>
          </div>
        </div>
        {/* onClick={refresh} */}
        <button>Refresh</button>
      </div>
      <div className="commit">
        <div className="commission-table">
          <form action="" className="commission-form">
            <p>Move funds from your commission to your wallet</p>
            {/* <input
              onChange={updateMessage}
              type="number"
              placeholder="₦     ENTER AMOUNT"
            /> */}
             <input
              type="number"
              placeholder="₦     ENTER AMOUNT"
            />
            {/* <p className="error-message">{message}</p> */}
            {/* <Link onClick={transfer} toogle={authentiaction}> */}
            <Link to='/transfercommission'>
              <button>PROCEED</button>
            </Link>
          </form>
        </div>
      </div>
      {/* <TransferCommission
        page={page}
        setPage={setPage}
        toggle={authentiaction}
      /> */}
      {/* <ApprovedCommission /> */}
    </div>
  );
};

export default Commission;
