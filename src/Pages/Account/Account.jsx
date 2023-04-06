import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "../../stylesheets/account.css";
import Icon1 from "../../assets/Icon1.svg";
import Icon2 from "../../assets/Icon2.svg";
import Icon3 from "../../assets/Icon3.svg";
import Set from "../../assets/set.svg";
import Dropdown from "../../assets/dropdown.svg";
import Download from '../../assets/download1.svg'
import Mode from '../../assets/mode.svg'




// import CheckboxTree from "react-checkbox-tree";

const Account = () => {
  const [checked, setChecked] = useState([]);
  // const [expanded, setExpanded] = useState([]);
  const nodes = [
    {
      value: "",
      // label: '',
      // children: [
      //   { value: 'phobos', label: 'Phobos' },
      //   { value: 'deimos', label: 'Deimos' },
      // ],
    },
  ];

  return (
    <div className="account-home">
      <div className="account-wallet">
        <div className="wallet1">
          <img src={Icon1} alt="" />
          <div className="wallet2">
            <p>Total Account</p>
            <h4>1</h4>
          </div>
        </div>
        <div className="wallet1">
          <img src={Icon2} alt="" />
          <div className="wallet2">
            <p>Active </p>
            <h4>1</h4>
          </div>
        </div>
        <div className="wallet1">
          <img src={Icon3} alt="" />
          <div className="wallet2">
            <p>Inactive </p>
            <h4>0</h4>
          </div>
        </div>
      </div>
      <div className="table-down">
      <div className="download-settings">
      <button className="download">
          <img src={Download} alt="" />
          <p>Download</p>
        </button>
        <button>
          <img src={Set} alt="" />
          <p>Filter Status</p>
          <img src={Dropdown} alt="" />
        </button>
        <button>
          <img src={Set} alt="" />
          <p>Filter Date</p>
          <img src={Dropdown} alt="" />
        </button>
        </div>
        <Link to='/createuser' className="butto">
        <button className='rolls2'>
            <img src={Mode} alt="" />
            <p>Create User</p>
        </button>
        </Link>
      </div>
      <table className="account-table">
        <thead>
          <tr className="table-head1">
            <th>
              {/*<CheckboxTree className='check'
      nodes={nodes}
      checked={checked}
      onCheck={(checked) => setChecked(checked)}
      
  />*/}
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
            </th>
            <th>Account ID</th>
            <th>Name</th>
            <th>Email </th>
            <th>Roll</th>
            <th>Status</th>
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
      </table>
    </div>
  );
};

export default Account;

//how to create checkbox using react?
