import React, { useState } from "react";
import '../stylesheets/buycable.css'
import Gotv from '../assets/gotv.svg'
import Dstv from '../assets/dstv.svg'
import Startimes from '../assets/startimes.svg'
import {Link} from 'react-router-dom'
import PurchaseCable from "./PurchaseCable";
import PinPage from './PinPage'





const Buycable = () => {

  const [electricity, setElectricity] = useState("");
  const toogle = () =>{
  setElectricity("confirmElectricity")
  }

  const [page, setPage] = useState("");

  return (
    <div>
    <div className={`eletricity-bill ${electricity === '' ? '' : 'd-none'}`}>
      <Link to="">
        <img src={Gotv} alt="" onClick={()=>{setElectricity("Gotv")}}  />
      </Link>
      <Link to="">
        <img src={Dstv} alt="" onClick={()=>{setElectricity("Dstv")}} />
      </Link>
      <Link to="">
        <img src={Startimes} alt="" onClick={()=>{setElectricity("Startimes")}} />
      </Link>
    </div>
          <PurchaseCable electricity={electricity} page={page} setPage={setPage} />
          <PinPage />

    </div>
  );
};

export default Buycable;
