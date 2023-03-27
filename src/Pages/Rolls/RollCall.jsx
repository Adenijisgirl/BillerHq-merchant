import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/rolls.css";
import Success from "../../assets/success.svg";

const RollCall = () => {
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
    <div className="roll-call">
      <form action="" className="forming">
        <div className="roll1">
          <div className="roll3">
            <label htmlFor="">Name Role</label>
            <input type="text" placeholder="Admin" />
          </div>
        </div>
        <h5>Select Permission </h5>
        <div className="check-check">
          <div className="check1">
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
          </div>
          <div className="check1">
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
          </div>
          <div className="check1">
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
          </div>
          <div className="check1">
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className="check2">
              <input
                type="checkbox"
                onCheck={(checked) => setChecked(checked)}
              />
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
       <Link to='/createrole' className="roll-send">
       <button>Send</button>
       </Link>
      </form>

      {/* <div className="success">
        <div className="sort">
          <img src={Success} alt="" />
          <h5>SUCCESS</h5>
          <p>
            Thank you for your request. <br /> <br />
            Shortly lagudatemitayo2019@gmail.com will find a confirmation in
            your email.
          </p>
          <Link to="/createrole">
            <button>Continue</button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default RollCall;
