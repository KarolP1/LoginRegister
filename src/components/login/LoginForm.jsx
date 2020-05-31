import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./styleLogin.scss";
import LoadingCircle from "../../assets/images/25.svg";
import {
  getInStorage,
  setInStorage,
  getFromStorage,
} from "../../utils/storage";
import HomeComponent from "../routes/pages/homePage";

import RoutList from "../routes/routes";

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      signInError: "",
      token: "",
      signinEmail: "",
      signinPassword: "",
    };
    this.onLogin = this.onLogin.bind(this);

    this.onTextboxChangeSigninEmail = this.onTextboxChangeSigninEmail.bind(
      this
    );
    this.onTextboxChangeSigninPassword = this.onTextboxChangeSigninPassword.bind(
      this
    );
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token !== 0) {
      const token = obj.token;

      fetch("http://localhost:8080/api/account/verify?token=" + token)
        .then((res) => res.json())
        .then((json) => {
          if (json.succes === true) {
            this.setState({
              token: token,
              isLoading: false,
            });
            return <HomeComponent />;
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({ isLoading: false });
    }
  }

  onTextboxChangeSigninEmail(event) {
    this.setState({
      signinEmail: event.target.value,
    });
  }
  onTextboxChangeSigninPassword(event) {
    this.setState({
      signinPassword: event.target.value,
    });
  }
  onLogin() {
    const { signinEmail, signinPassword, signInError } = this.state;
    const loginData = { signinEmail, signinPassword };
    this.setState({
      isLoading: true,
      email: this.state.signinEmail,
      password: this.state.signinPassword,
    });

    fetch("http://localhost:8080/api/account/signin", {
      crossDomain: true,
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        CORS: "*",
      },
      body: JSON.stringify({
        email: loginData.signinEmail,
        password: loginData.signinPassword,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          setInStorage("the_main_app", { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signinEmail: "",
            signinPassword: "",
            token: json.token,
          });
          window.location.reload(false);
        }
      });
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signinEmail,
      signinPassword,
    } = this.state;

    if (isLoading) {
      return (
        <div className="loadingPlaceholder">
          <img className="icon" src={LoadingCircle} alt="circle" />
        </div>
      );
    }

    if (!token) {
      return (
        <form className="LoginForm">
          <input
            className="input"
            type="text"
            placeholder="email"
            value={signinEmail}
            onChange={this.onTextboxChangeSigninEmail}
          />
          <input
            className="input"
            type="password"
            placeholder="Hasło"
            value={signinPassword}
            onChange={this.onTextboxChangeSigninPassword}
          />
          <Button className="buttonS" onClick={this.onLogin}>
            Zaloguj
          </Button>
          {signInError ? <p>{signInError}</p> : null}
        </form>
      );
    }
    return <HomeComponent />;
  }
}

export default LoginForm;
