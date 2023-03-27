import React from "react";
import "../stylesheets/history.css";
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
      {/* <Link to="/wallethistory">
        <button className="butt">View Wallet Account History</button>
      </Link> */}
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
    // <div className="history-home">
    //   <form action="">
    //     <div className="history-product">
    //       <div className="product">
    //         <label htmlFor="">Filter Product</label>
    //         <select name="Filter Product" id="">
    //           <option value="none" selected></option>
    //           <option value="mtn">Mtn data</option>
    //           <option value="glo">Glo data</option>
    //           <option value="airtel">Airtel data</option>
    //           <option value="9mobilr">9mobile data</option>
    //           <option value="mtn">Mtn Airtime</option>
    //           <option value="glo">Glo Airtime</option>
    //           <option value="airtel">Airtel Airtime</option>
    //           <option value="9mobile">9mobile Airtime</option>
    //           <option value="Ekedc">EKEDC</option>
    //           <option value="Ie">Ikeja Eletricity</option>
    //           <option value="ibedc">IBECD</option>
    //           <option value="other">AEDC</option>
    //           <option value="other">EEDC</option>
    //           <option value="other">KEDCO</option>
    //           <option value="other">Gotv</option>
    //           <option value="other">Dstv</option>
    //           <option value="other">StarTimes</option>
    //         </select>
    //       </div>
    //       <div className="product">
    //         <label for="Date">Start Date</label>
    //         <input type="date" id="start" name="trip-start" />
    //       </div>
    //       <div className="product">
    //         <label for="Date">End Date</label>
    //         <input type="date" id="start" name="trip-start" />
    //       </div>
    //       <button> Filter </button>
    //     </div>
    //   </form>
    //   <div className="history-transaction">
    //     <div className="total-transaction">
    //       <div className="main-total">
    //         <p>Total Transactions </p>
    //         <div>0</div>
    //       </div>
    //       <h4>N0.00</h4>
    //     </div>
    //     <div className="total-transaction">
    //       <div className="main-total">
    //         <p>Successful</p>
    //         <div>0</div>
    //       </div>
    //       <h4>N0.00</h4>
    //     </div>
    //     <div className="total-transaction">
    //       <div className="main-total">
    //         <p>Failed</p>
    //         <div>0</div>
    //       </div>
    //       <h4>N0.00</h4>
    //     </div>
    //   </div>
    //   <div className="reset-transaction">
    //     {/* <button>wallet account</button> */}
    //     <button>Reset All Filter </button>
    //   </div>
    //   <div className="transactions-row">
    //     <div className="transaction-upload">
    //       <button>CSV</button>
    //       <button>Excel </button>
    //       <button>PDF</button>
    //     </div>
    //     <form action="">
    //       <div className="filter-option">
    //         <label htmlFor="">Filter Product</label>
    //         <select name="Filter Product" id="">
    //           <option value="none" selected>
    //             Filter Product
    //           </option>
    //           <option value="male">Mtn data</option>
    //           <option value="male">Glo data</option>
    //           <option value="male">Airtel data</option>
    //           <option value="male">9mobile data</option>
    //           <option value="female">Mtn Airtime</option>
    //           <option value="female">Glo Airtime</option>
    //           <option value="female">Airtel Airtime</option>
    //           <option value="female">9mobile Airtime</option>
    //           <option value="other">EKEDC</option>
    //           <option value="other">Ikeja Eletricity</option>
    //           <option value="other">IBECD</option>
    //           <option value="other">AEDC</option>
    //           <option value="other">EEDC</option>
    //           <option value="other">KEDCO</option>
    //           <option value="other">Gotv</option>
    //           <option value="other">Dstv</option>
    //           <option value="other">StarTimes</option>
    //         </select>{" "}
    //       </div>
    //       <div className="filter-date">
    //         <label for="Date">Start Date</label>
    //         <input type="date" id="start" name="trip-start" />
    //       </div>
    //     </form>
    //   </div>
    //   <table>
    //     <thead>
    //       <th className="table-head">
    //         <tr>Tran seq.</tr>
    //         <tr>Product</tr>
    //         <tr>Reference</tr>
    //         <tr>Payment method</tr>
    //         <tr>Amount</tr>
    //         <tr>Beneficiary</tr>
    //         <tr>Status</tr>
    //         <tr>Date</tr>
    //       </th>
    //     </thead>
    //     <tbody >
    //       <th className="table-paragraph">
    //         <tr >No data available in table</tr>
    //         </th>
    //     </tbody>
    //   </table>
    //   <div className="pagination">
    //     <p>
    //       Showing <strong> 10 </strong>from <strong>46</strong> data
    //     </p>
    //   </div>
    // </div>
  );
};

export default History;
