import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./styleRegiste.scss";

export class RegisterForm extends Component {
  render() {
    return (
      <form className="LoginForm">
        <input className="input" type="text" placeholder="Login" />
        <input className="input" type="email" placeholder="email" />
        <input className="input" type="password" placeholder="Hasło" />
        <input className="input" type="password" placeholder="Powtórz Hasło" />
        <Button className="buttonS">Zarejestruj</Button>
      </form>
    );
  }
}

export default RegisterForm;
