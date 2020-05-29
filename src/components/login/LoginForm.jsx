import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./styleLogin.scss";

export class LoginForm extends Component {
  render() {
    return (
      <form className="LoginForm">
        <input className="input" type="text" placeholder="Login" />
        <input className="input" type="password" placeholder="Hasło" />
        <Button className="buttonS">Zaloguj</Button>
      </form>
    );
  }
}

export default LoginForm;
