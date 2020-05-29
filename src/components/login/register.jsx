import React, { Component } from "react";
import { RegisterForm } from "../login";

import "./styleLogin.scss";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
export class Register extends Component {
  render() {
    return (
      <div>
        <div className="iconplaceholder">
          <VpnKeyIcon className="lockIcon" />
        </div>
        <RegisterForm />
      </div>
    );
  }
}

export default Register;
