import React from "react";
import '../stylesheets/buycable.css'
import Gotv from '../assets/gotv.svg'
import Dstv from '../assets/dstv.svg'
import Startimes from '../assets/startimes.svg'
import {Link} from 'react-router-dom'






const Buycable = () => {
  return (
    <div className="buy-cable">
      <Link to="">
        <img src={Gotv} alt="" />
      </Link>
      <Link to="">
        <img src={Dstv} alt="" />
      </Link>
      <Link to="">
        <img src={Startimes} alt="" />
      </Link>
    </div>
  );
};

export default Buycable;
