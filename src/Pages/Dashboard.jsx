import React from 'react';
import '../stylesheets/dashboard.css'
import wallet from '../assets/wallet.svg';
import commission from '../assets/commission.svg'
import airtime from '../assets/airtime.svg'
import data from '../assets/data.svg'
import electricity from '../assets/electricity.svg'
import cable from '../assets/cable.svg'
import Footer from '../Components/Footer';





const Dashboard = () => {
    
  


  return (
    <div>
        <div>
        </div>
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
                <a href=''>
                <img src={airtime} alt="" />
                <h4>Buy Airtime</h4>
                </a>
                <a href=''>
                <img src={data} alt="" />
                <h4>Buy Data</h4>
                </a>
                <a href=''>
                <img src={electricity} alt="" />
                <h4>Electricity</h4>
                </a>
                <a href=''>
                <img src={cable} alt="" />
                <h4>Buy Cable</h4>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Dashboard