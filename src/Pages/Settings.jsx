import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-page">
        <div className="settings-header">
          <Link>
            <h5>Need Help?</h5>
          </Link>
        </div>
        <div className="settings-container">
          <Link>
            <p className="settings-margin">Change Transaction Pin</p>
          </Link>
          <hr />
          <Link>
            <p>Reset Transaction Pin</p>
          </Link>
          <hr />
          <Link>
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
