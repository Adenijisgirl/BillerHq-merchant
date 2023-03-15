import React from "react";
import "../stylesheets/history.css";

const History = () => {
  return (
    <div className="history-home">
      <form action="">
        <div className="history-product">
          <div className="product">
            <label htmlFor="">Filter Product</label>
            <select name="Filter Product" id="">
              <option value="none" selected></option>
              <option value="male">Mtn data</option>
              <option value="male">Glo data</option>
              <option value="male">Airtel data</option>
              <option value="male">9mobile data</option>
              <option value="female">Mtn Airtime</option>
              <option value="female">Glo Airtime</option>
              <option value="female">Airtel Airtime</option>
              <option value="female">9mobile Airtime</option>
              <option value="other">EKEDC</option>
              <option value="other">Ikeja Eletricity</option>
              <option value="other">IBECD</option>
              <option value="other">AEDC</option>
              <option value="other">EEDC</option>
              <option value="other">KEDCO</option>
              <option value="other">Gotv</option>
              <option value="other">Dstv</option>
              <option value="other">StarTimes</option>
            </select>
          </div>
          <div className="product">
            <label for="Date">Start Date</label>
            <input type="date" id="start" name="trip-start" />
          </div>
          <div className="product">
            <label for="Date">End Date</label>
            <input type="date" id="start" name="trip-start" />
          </div>
          <button> Filter </button>
        </div>
      </form>
      <div className="history-transaction">
        <div className="total-transaction">
          <div className="main-total">
            <p>Total Transactions </p>
            <div>0</div>
          </div>
          <h4>N0.00</h4>
        </div>
        <div className="total-transaction">
          <div className="main-total">
            <p>Successful</p>
            <div>0</div>
          </div>
          <h4>N0.00</h4>
        </div>
        <div className="total-transaction">
          <div className="main-total">
            <p>Failed</p>
            <div>0</div>
          </div>
          <h4>N0.00</h4>
        </div>
      </div>
      <div className="reset-transaction">
        {/* <button>wallet account</button> */}
        <button>Reset All Filter </button>
      </div>
      <div className="transactions-row">
        <div className="transaction-upload">
          <button>CSV</button>
          <button>Excel </button>
          <button>PDF</button>
        </div>
        <form action="">
          <div className="filter-option">
            <label htmlFor="">Filter Product</label>
            <select name="Filter Product" id="">
              <option value="none" selected>
                Filter Product
              </option>
              <option value="male">Mtn data</option>
              <option value="male">Glo data</option>
              <option value="male">Airtel data</option>
              <option value="male">9mobile data</option>
              <option value="female">Mtn Airtime</option>
              <option value="female">Glo Airtime</option>
              <option value="female">Airtel Airtime</option>
              <option value="female">9mobile Airtime</option>
              <option value="other">EKEDC</option>
              <option value="other">Ikeja Eletricity</option>
              <option value="other">IBECD</option>
              <option value="other">AEDC</option>
              <option value="other">EEDC</option>
              <option value="other">KEDCO</option>
              <option value="other">Gotv</option>
              <option value="other">Dstv</option>
              <option value="other">StarTimes</option>
            </select>{" "}
          </div>
          <div className="filter-date">
            <label for="Date">Start Date</label>
            <input type="date" id="start" name="trip-start" />
          </div>
        </form>
      </div>
      {/* <table>
        <tr>
          <th>#</th>
          <th>Wallet ID</th>
          <th>Reference</th>
          <th>Product </th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Balance </th>
          <th>Date</th>
        </tr>
        <div className="table-paragraph">
          <h5>No data available in table</h5>
        </div>
        
      </table> */}
      <div className="pagination">
        <p>
          Showing <strong> 10 </strong>from <strong>46</strong> data
        </p>
      </div>
    </div>
  );
};

export default History;
