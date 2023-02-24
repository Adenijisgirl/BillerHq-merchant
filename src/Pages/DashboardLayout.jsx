import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Account from "../Pages/Account";
import Dashboard from "../Pages/Dashboard";
import "../stylesheets/dashboardlayout.css";
import {ReactComponent as Closeicon} from "../assets/closeicon.svg";

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
          <Footer />
          <BrowserRouter>
            <Routes>
              <Route path="/dashboard" index exact element={<Dashboard />} />
              <Route path="/account" exact element={<Account />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
