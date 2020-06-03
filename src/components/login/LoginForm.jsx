import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./styleLogin.scss";
import LoadingCircle from "../../assets/images/25.svg";
import { setInStorage, getFromStorage } from "../../utils/storage";
import HomeComponent from "../routes/pages/homePage";

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
    this.fakeLogIn = this.fakeLogIn.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token === null) {
      const token = obj.token;

      fetch("http://145.239.87.60:4000/users/authenticate" + token)
        .then((res) => res.json())
        .then(console.log("dupa"))
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

  fakeLogIn() {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWQ2NGYyOWM0ZTMwMTRhNDAzOGM0Y2EiLCJpYXQiOjE1OTExMDQ1ODl9.ZCqaUy3INkQzPAdYay8k2kqhlzNl5j4SxmqASKT2eXQ",
      });
      console.log("dupa");
      setInStorage("the_main_app", { token: this.state.token });
    }, 1000);
    {
      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
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
    const { signinEmail, signinPassword } = this.state;
    const loginData = { signinEmail, signinPassword };
    this.setState({
      isLoading: true,
      email: this.state.signinEmail,
      password: this.state.signinPassword,
    });

    fetch("http://145.239.87.60:4000/users/authenticate", {
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
      .then(console.log("succes"))
      .then((res) => res.json())
      .then((json) => {
        if (json.message !== "Username or password is incorrect") {
          setInStorage("the_main_app", { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signinEmail: "",
            signinPassword: "",
            token: json.token,
          });
          window.location.reload();
        } else {
          this.setState({
            isLoading: false,
            signInError: json.message,
          });
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
    return <p>zalogowano</p>;
  }
}

export default LoginForm;
