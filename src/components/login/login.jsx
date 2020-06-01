import React, { Component } from "react";

import { LoginForm } from "../login";
import "./styleLogin.scss";
import LockOpenIcon from "@material-ui/icons/LockOpen";

export class Login extends Component {
  render() {
    return (
      <div>
        <div className="iconplaceholder">
          <LockOpenIcon className="lockIcon" />
        </div>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
