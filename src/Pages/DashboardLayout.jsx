import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Account from "../Pages/Account/Account";
import History from "../Pages/History";
import Dashboard from "../Pages/Dashboard";
import Commission from '../Pages/Commission'
import BuyAirtime from "./BuyAirtime";
import "../stylesheets/dashboardlayout.css";
import BuyData from "./BuyData";
import Settings from "../Pages/Settings";
import ElectricityBill from "./ElectricityBill";
import Ekedc from "./Ekedc";
import BuyCable from "./BuyCable";
import Support from './Support'
import TransferCommission from "./TransferCommission";
import ApprovedCommission from "./ApprovedCommission";
import ChangePin from "./ChangePin/ChangePin";
import NewPin from "./NewPin";
import Privacy from "./Privacy";
import ResetPin from "./ResetTransaction/ResetPin";
import VerifyPin from "./ResetTransaction/VerifyPin";
import WalletHistory from "./WalletHistory";
import AdminSupport from "./AdminSupport";
import ConfirmReset from "./ResetTransaction/ConfirmReset";
import PinPage from "./PinPage";
import PayAirtime from "./PayAirtime";
import AirtimeTransaction from "./AirtimeTransaction";
import PayElectricity from "./PayElectricity";
import Roll from "./Rolls/Roll";
import RollCall from "./Rolls/RollCall";
import CreateRole from "./Rolls/CreateRole";
import CreateUser from "./Account/CreateUser";
import Education from "./Education/Layout"
import Betting from "./Betting/Layout"
import google from "../assets/googlelogo.svg";
import group3 from "../assets/Group3.svg";
import "../stylesheets/login.css";

function App() {
  // const [page, setPage] =useState("")
  // const [error, setError] = useState('')
  // const [signIn, setSignIn] = useState({
  //   Name: '',
  //   Password: ''
  // })
  // const authentication = (e) =>{
  //   e.preventDefault()
  //   if(signIn.Name === "" ||
  //   signIn.Password === "")
  //   return setError('input can not be empty')
  //   else{
  //     setPage('dashboard')
  //   }
  // }
  
  return (
   
    <div className="biller">
      <div className="page-option">
        <div>
          <Navbar />
         
          {/* <div className={`signin ${page === ""? "" : "d-none"}`}>
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
              <input type="email" onChange={(e)=>{setSignIn({...signIn, Name: e.target.value})}} />
            </div>
            <div className="name-sign">
              <label htmlFor="">Password</label>
              <input type="password" onChange={(e)=>{setSignIn({...signIn, Password: e.target.value})}} />
            </div>
            <div className="forgot-signin">
              <button className="password-sign">Forgot password?</button>
              <button className="signin-sign" onClick={authentication}>Sign In</button>
            </div>
            <p className="airtime-error"></p>
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
                <img src="" alt="" />
                <p>Facebook</p>
              </button>
            </div>
            <p className="form-protect">Protected by reCAPTCHA and subject to the <strong>Uniswitch Privacy Policy</strong>  and <strong>Terms of Service.</strong> </p>
          </form>
        </div>
      </div> */}
      
        </div>
        <div className="side-layout">
          <Sidebar />

          <div className="dashboard-layout">
            <Routes>
              <Route path="/dashboard" index exact element={<Dashboard />} />
              <Route path="/account" exact element={<Account />} />
              <Route path="/history" exact element={<History />} />
              <Route path="/commission" exact element={<Commission />} />
              <Route path="/buyairtime" exact element={<BuyAirtime />} />
              <Route path="/buydata" exact element={<BuyData />} />
              <Route path="/settings" exact element={<Settings />} />
              <Route path="/electricity" exact element={<ElectricityBill />} />
              <Route path='/ekedc' exact element={<Ekedc/>} />
              <Route path='/cable' exact element={<BuyCable/>} />
              <Route path='/support' exact element={<Support />} />
              <Route path='/transfercommission' exact element={<TransferCommission />} />
              <Route path='/approvedcommission' exact element={<ApprovedCommission />} />
              <Route path='/changepin' exact element={<ChangePin />} />
              <Route path='/newpin' exact element={<NewPin />} />
              <Route path='/privacy' exact element={<Privacy />} />
              <Route path='/resetpin' exact element={<ResetPin />} />
              <Route path='/verifypin' exact element={<VerifyPin />} />
              <Route path='/wallethistory' exact element={<WalletHistory />} />
               <Route path='/adminsupport' exact element={<AdminSupport />} /> 
               <Route path='/confirmreset' exact element={<ConfirmReset />} /> 
               <Route path='/pinpage' exact element={<PinPage />} /> 
               <Route path='/payairtime' exact element={<PayAirtime />} /> 
               <Route path='/airtimetransaction' exact element={<AirtimeTransaction />} /> 
               <Route path='/payelectricity' exact element={<PayElectricity />} /> 
               <Route path='/roles' exact element={<Roll />} /> 
               <Route path='/rolecall' exact element={<RollCall />} /> 
               <Route path='/createrole' exact element={<CreateRole />} />
               <Route path='/createuser' exact element={<CreateUser />} />
               <Route path='/education' exact element={<Education />} />
               <Route path='/betting' exact element={<Betting />} />
            </Routes>

            
          </div>
          <div>
          <Footer />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
