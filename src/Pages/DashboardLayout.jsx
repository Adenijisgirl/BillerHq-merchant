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
import EletricityBill from "./ElectricityBill";
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

function App() {
  // const [sidebar, setSidebar] = useState(true);

  // const handleclick = () => {
  //   setSidebar(!sidebar);
  // };
  return (
    // <div className={` ${sidebar ? "sidbarcollapse" : "dashboardlayout"}`}>
    //     <div className='sidebar'>
    //         <div className='logocontainer'>
    //             {/* <Logoicon /> */}
    //             <Closeicon className='closeicon' onClick={handleclick} />
    //         </div>
    //         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    //     </div>
    <div className="biller">
      <div className="page-option">
        <div>
          <Navbar />
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
              <Route path="/eletricity" exact element={<EletricityBill />} />
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
