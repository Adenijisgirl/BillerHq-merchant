import React, { useState } from "react";
import "../stylesheets/buycable.css";
import Gotv from "../assets/gotv.svg";
import Dstv from "../assets/dstv.svg";
import Startimes from "../assets/startimes.svg";
import { Link } from "react-router-dom";
import PurchaseCable from "./PurchaseCable";
import PinPage from "./PinPage";
import PurchaseElectricity from "./PurchaseElectricity";

const Buycable = () => {
  const [electricity, setElectricity] = useState("");
  const toogle = () => {
    setElectricity("confirmElectricity");
  };

  const [page, setPage] = useState("");

  return (
    <div>
      <div className={`eletricity-bill ${electricity === "" ? "" : "d-none"}`}>
        <Link
          to=""
          onClick={() => {
            setElectricity("Gotv");
            setPage("inputPage");
          }}
        >
          <img src={Gotv} alt="" />
        </Link>
        <Link
          to=""
          onClick={() => {
            setElectricity("Dstv");
            setPage("inputPage");
          }}
        >
          <img src={Dstv} alt="" />
        </Link>
        <Link
          to=""
          onClick={() => {
            setElectricity("Startimes");
            setPage("inputPage");
          }}
        >
          <img src={Startimes} alt="" />
        </Link>
      </div>
      <PurchaseCable electricity={electricity} page={page} setPage={setPage} />
      {/* <PurchaseCable electricity={electricity} page={page} setPage={setPage} /> */}
      <PurchaseElectricity
        page={page}
        toogle={setElectricity}
        setPage={setPage}
      />
    </div>
  );
};

export default Buycable;
