import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/electricitybill.css";
import Ikeja from "../assets/Ikeja.svg";
import EKEDC from "../assets/EKEDC.svg";
import AEDC from "../assets/AEDC.svg";
import EEDC from "../assets/EEDC.svg";
import IBEDC from "../assets/IBEDC.svg";
import KEDCO from "../assets/KEDCO.svg";
import Ekedc from "./Ekedc";
import PinPage from "./PinPage";
import PurchaseElectricity from "./PurchaseElectricity";
const Eletricitybill = () => {
  const [electricity, setElectricity] = useState("");
  const toogle = () =>{
  setElectricity("confirmElectricity")
  }

  const [page, setPage] = useState("");
//  const toggle = () =>{
//   setElectricity('redirect')
//  }

  const handleClick = () => {
    setElectricity("paidElectricity")
  }
 
  return (
    <div>
      <div className={`eletricity-bill ${electricity === '' ? '' : 'd-none'}`}>
        <Link onClick={() => {setElectricity("Ikeja")}}>
          {" "}
          <img src={Ikeja} alt="" />
        </Link>
        <Link onClick={() => {setElectricity("Eko Electricity")}}>
          <img src={EKEDC} alt="" />
        </Link>
        <Link onClick={() => {setElectricity("Aedc")}}>
          {" "}
          <img src={AEDC} alt="" />
        </Link>
        <Link onClick={() => {setElectricity("EEDC")}}>
          {" "}
          <img src={EEDC} alt="" />
        </Link>
        <Link onClick={() => {setElectricity("Ibadan")}}>
          <img src={IBEDC} alt="" />
        </Link>
        <Link onClick={() => {setElectricity("Kano")}}>
          <img src={KEDCO} alt="" />
        </Link>
      </div>
      <Ekedc electricity={electricity} page={page} setPage={setPage} />
      <PurchaseElectricity page={page} toogle={setElectricity} setPage={setPage}/>
    </div>
  );
};

export default Eletricitybill;
