import React, { useState } from "react";
import "../../stylesheets/education.css"
import PinPage from '../Education/PinPage'
import PayEducation from "./PayEducation";




const Layout = () => {
  const [page, setPage] = useState('educationPage')
  const [error, setError] = useState("")
const [education, setEducation] = useState({
  Service: "",
  Price: "",
  Quantity: "",
  Amount: "",
  Number: "",
  Email: ""
})

const authentication = (e) => {
  e.preventDefault()
  if(
    education.Service === "" ||
    education.Price === "" ||
    education.Quantity === "" ||
    education.Amount === "" ||
    education.Number === "" ||
    education .Email === ""
  ){
  return setError('input can not be empty');
   }
    else{
    setPage("pinPage");
  };
};


  const toggle = () => {
    setPage("confirmEducation");
   
  }



  return (
    <div>
    <div className={`education-layout ${page === 'educationPage' ? '' : 'd-none'}`} >
      <form action="">
        <div className="exams-education">
          <h4>Exams</h4>
          <p>You can get your Exams result here</p>
        </div>
        <div className="exams-form">
          <div className="exam-details">
            <label htmlFor="">Service Provider</label>
            <select name="" id="" onChange={(e)=>{setEducation({...education, Service : e.target.value})}}>
              <option value=""></option>
              <option value="WAEC">WAEC Result Checker</option>{" "}
            </select>
          </div>
          <div className="education-details">
            <div className="education-price">
                <label htmlFor="">Price</label>
                <input type="number" onChange={(e)=>{setEducation({...education, Price : e.target.value})}} />
            </div>
            <div className="education-quantity">
            <label htmlFor="">Quantity</label>
                <input type="number" onChange={(e)=>{setEducation({...education, Quantity : e.target.value})}} />
            </div>
          </div>
          <div className="education-details">
            <div className="education-price">
                <label htmlFor="">Amount</label>
                <input type="number" onChange={(e)=>{setEducation({...education, Amount : e.target.value})}} />
            </div>
            <div className="education-quantity">
            <label htmlFor="">Phone Number</label>
                <input type="number" onChange={(e)=>{setEducation({...education, Number : e.target.value})}} />
            </div>
          </div>
          <div className="exam-details">
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e)=>{setEducation({...education, Email : e.target.value})}}/>
          </div>
        </div>
        <p className="airtime-error">{error}</p>
        <button onClick={authentication}>Proceed</button>
      </form>
      </div>
      <PinPage page={page} setPage={setPage} />
      <PayEducation page={page} education={education} />
   
    </div>
  );
};

export default Layout;
