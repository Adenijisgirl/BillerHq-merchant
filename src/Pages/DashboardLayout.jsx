import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Account from "../Pages/Account";
import Dashboard from "../Pages/Dashboard";
import "../stylesheets/dashboardlayout.css";

function App() {
  return (
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
  );
}

export default App;
