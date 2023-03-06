import React from "react";
import '../stylesheets/commission.css'
import wallet from "../assets/wallet.svg";
import commission from "../assets/commission.svg";
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'react-router-dom'

const Commission = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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

    
  return (
    <div className="commission-body">
      <div className="wallet-card">
        <div className="wallet-info wallet-info2">
          <img src={wallet} alt="" />
          <div className="wallet-balance">
            <p>Wallet Balance:</p>
            <h4>₦ 400,000</h4>
          </div>
        </div>
        <div className="wallet-in wallet-in2">
          <img src={commission} alt="" />
          <div className="wallet-balance">
            <p>Commission Balance:</p>
            <h4>₦ 230,000</h4>
          </div>
        </div>
        <button>Refresh</button>
      </div>
      <div className="commit">
      <div className="commission-table">
      <form action="" className="commission-form">
          <p>Move funds from your commission to your wallet</p>
          <input type="number" placeholder="₦     ENTER AMOUNT" />
          {/* <Link onClick={refresh}> */}
            <button>
            <strong>PROCEED</strong>
          </button> 
          {/* </Link> */}
        </form>
        </div>
        </div>
    </div>
  );
};

export default Commission;
