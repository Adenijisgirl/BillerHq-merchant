import React from "react";
import { VscSearch } from "react-icons/vsc";
import "../stylesheets/history.css";
import { Link } from "react-router-dom";
import download from '../assets/download.svg'


const History = () => {
  return (
    <div className="history-home">
      
      <div className="history-transaction">
        <div className="total-transaction">
          <div className="main-total">
            <p>Total </p>
            <div>0</div>
          </div>
          <h4>N0.00</h4>
        </div>
        <div className="total-transaction">
          <div className="main-total">
            <p>Credit</p>
            <div>0</div>
          </div>
          <h4>N0.00</h4>
        </div>
        <div className="total-transaction">
          <div className="main-total">
            <p>Debit</p>
            <div>0</div>
          </div>
          <h4>N0.00</h4>
        </div>
      </div>
      <div className="reset-transaction">
        <Link to="/wallethistory">
          <button className="butt">View Wallet Account History</button>
        </Link>
        <button>Reset All Filter </button>
      </div>
       <div className="class-transact">
          <h4>Transactions</h4> 
          </div>
      <div className="transactions-row">
       
          <form action="">
        <div className="history-product">
          <div className="product">
            <label htmlFor="">Filter Product</label>
            <select name="Filter Product" id="">
              <option value="none" selected></option>
              <option value="">Mtn data</option>
              <option value="">Glo data</option>
              <option value="">Airtel data</option>
              <option value="">9mobile data</option>
              <option value="">Mtn Airtime</option>
              <option value="">Glo Airtime</option>
              <option value="">Airtel Airtime</option>
              <option value="">9mobile Airtime</option>
              <option value="">EKEDC</option>
              <option value="">Ikeja Eletricity</option>
              <option value="">IBECD</option>
              <option value="">AEDC</option>
              <option value="">EEDC</option>
              <option value="">KEDCO</option>
              <option value="">Gotv</option>
              <option value="">Dstv</option>
              <option value="">StarTimes</option>
            </select>
          </div>
          <div className="date-history">
            <div className="product">
              <label for="Date">Start Date</label>
              <input type="date" id="start" name="trip-start" />
            </div>
            <div className="product">
              <label for="Date">End Date</label>
              <input type="date" id="start" name="trip-start" />
            </div>
          </div>
          <button> Filter </button>
        </div>
      </form>
          <div className="transaction-upload">
            <button> <img src={download} alt="" /> <p> Download </p> </button>
            {/* <button>Excel </button>
            <button>PDF</button> */}
          </div>
        {/* </div> */}
        {/* <form action="">
          <VscSearch />
          <input
            className="input-search"
            type="text"
            placeholder="  Search here..."
          />
        </form>*/}
      </div> 
      <table>
        <thead>
          <th className="table-head">
            <tr>Tran seq.</tr>
            <tr>Product</tr>
            <tr>Reference</tr>
            <tr>Payment method</tr>
            <tr>Amount</tr>
            <tr>Beneficiary</tr>
            <tr>Status</tr>
            <tr>Date</tr>
          </th>
        </thead>
        <tbody >
          <th className="table-paragraph">
            <tr >No data available in table</tr>
            </th>
        </tbody>
      </table>
      <div className="pagination">
        <p>
          Showing <strong> 10 </strong>from <strong>46</strong> data
        </p>
      </div>
    </div>
  );
};

export default History;
