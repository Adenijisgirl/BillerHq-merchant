import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mode from "../../assets/mode.svg";
import Success from "../../assets/success.svg";
import "../../stylesheets/rolls.css";

const CreateRole = () => {
  // const [checked, setChecked] = useState([]);
  // // const [expanded, setExpanded] = useState([]);
  // const nodes = [
  //   {
  //     value: "",
  //     // label: '',
  //     // children: [
  //     //   { value: 'phobos', label: 'Phobos' },
  //     //   { value: 'deimos', label: 'Deimos' },
  //     // ],
  //   },
  // ];

  return (
    <div className="">
      {/* <Link to='/rollcall' className='create-mode'>
        <button className='rolls'>
            <img src={Mode} alt="" />
            <p>Create Role</p>
        </button>
        </Link>
        <table className="account-table">
        <thead>
          <tr className="table-head1">
            <th>
            
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
            </th>
            <th>Account ID</th>
            <th>Name</th>
            <th>Email </th>
            <th>Roll</th>
            <th>Roll</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
            </th>
            <th>CICI-001-123</th>
            <th>Laguda Temitayo</th>
            <th>lagudatemitayo2019@gmail.com </th>
            <th>Admin</th>
            <th>Active</th>
            <th>...</th>
          </tr>
          </tbody>
      </table> */}
      <div className="success">
        <div className="sort">
          <img src={Success} alt="" />
          <h5>SUCCESS</h5>
          <p>
            Thank you for your request. <br /> <br />
            Shortly lagudatemitayo2019@gmail.com will find a confirmation in
            your email.
          </p>
          <Link to="/roll">
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateRole;
