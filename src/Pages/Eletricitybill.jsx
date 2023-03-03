import React from "react";
import {Link} from 'react-router-dom'
import '../stylesheets/electricitybill.css'
import Ikeja from "../assets/Ikeja.svg";
import EKEDC from "../assets/EKEDC.svg";
import AEDC from "../assets/AEDC.svg";
import EEDC from "../assets/EEDC.svg";
import IBEDC from "../assets/IBEDC.svg";
import KEDCO from '../assets/KEDCO.svg'

const Eletricitybill = () => {
  return (
    <div className="eletricity-bill">
      <Link to="">
        {" "}
        <img src={Ikeja} alt="" />
      </Link>
      <Link to="/ekedc">
        <img src={EKEDC} alt="" />
      </Link>
      <Link a="">
        {" "}
        <img src={AEDC} alt="" />
      </Link>
      <Link to="">
        {" "}
        <img src={EEDC} alt="" />
      </Link>
      <Link to="">
        <img src={IBEDC} alt="" />
      </Link>
      <Link to="">
        <img src={KEDCO} alt="" />
      </Link>
    </div>
  );
};

export default Eletricitybill;
