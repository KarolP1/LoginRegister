import React, { Component } from "react";
import "./App.scss";
import { Login, Register } from "./components/login/";
import LoginPane from "./assets/images/507.jpg";
import { Button } from "@material-ui/core";
export class App extends Component {
  state = {
    displayLogin: true,
  };
  constructor(props) {
    super(props);
    this.ShowRegister = this.ShowRegister.bind(this);
    this.state = {
      displayRegister: false,
      currentActivity: <Login />,
    };
  }

  ShowRegister() {
    this.setState({
      displayRegister: !this.state.displayRegister,
    });
    console.log(this.state.displayRegister);
  }
  render() {
    const displayRegister = this.state.displayRegister;
    let Activity;
    let ButtonText;
    if (displayRegister === true) {
      Activity = <Register />;
      ButtonText = (
        <h6 classname="registerLoginText">Masz już konto? Zaloguj się!</h6>
      );
    } else {
      Activity = <Login />;
      ButtonText = (
        <h6 classname="registerLoginText">
          Nie masz jeszcze konta? Zarejestruj się!
        </h6>
      );
    }
    return (
      <div className="mainContainer">
        <img src={LoginPane} alt="landscape" />
        <div className="loginSide">
          <div className="loginContainer">{Activity}</div>
          <div className="footer">
            <Button className="gotoregister" onClick={this.ShowRegister}>
              {ButtonText}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
