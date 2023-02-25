import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Account from "../Pages/Account";
import History from "../Pages/History";
import Dashboard from "../Pages/Dashboard";
import Commission from '../Pages/Commission'
import Buyairtime from "../Pages/Buyairtime";
import "../stylesheets/dashboardlayout.css";
import Buydata from "./Buydata";
import Settings from "../Pages/Settings";

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
    <div>
      <div className="page-option">
        <div>
          <Navbar />
        </div>
        <div className="side-layout">
          <Sidebar />

          <div>
            <Routes>
              <Route path="/dashboard" index exact element={<Dashboard />} />
              <Route path="/account" exact element={<Account />} />
              <Route path="/account" exact element={<History />} />
              <Route path="/account" exact element={<Commission />} />
              <Route path="/buyairtime" exact element={<Buyairtime />} />
              <Route path="/buydata" exact element={<Buydata />} />
              <Route path="/settings" exact element={<Settings />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
