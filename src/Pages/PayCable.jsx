import React from 'react'
import { Link } from 'react-router-dom'
import Gotv from "../assets/gotv.svg";
import Dstv from "../assets/dstv.svg";
import Startimes from "../assets/startimes.svg";
import '../stylesheets/payelectricity.css'


const PayCable = (props) => {
  return (
    <div className={`pay-airtime ${ props.page === "payElectricity"? "" : 'd-none'}`}>
      <div className="airtime-network2">
        <div className="select-network select-network2">
        <h5>
            Card Number:
            <p>{props.light.Account}</p>
          </h5>
          <h5>
            Bouquet:
            <p>{props.light.Cable}</p>
          </h5>
          <img
              src={
                props.electricity === "Gotv"
                  ? Gotv
                  : props.electricity === "Dstv"
                  ? Dstv
                  : props.electricity === "Startimes"
                  ? Startimes
                  : ""
              }
              alt=""
            />        </div>
        <div className="airtime-amount">
          <h4>
            Amount: <br /> <br /><strong>{props.light.Amount}</strong>
          </h4>
        </div>
        <Link handleClick={() => {props.setElectricity("paidElectricity")}}>
          <button>Pay</button>
        </Link>
      </div>
    </div>
  )
}

export default PayCable