import React, { Component } from "react";
import "./App.scss";
import { Login } from "./components/login/";
import LoginPane from "./assets/images/507.jpg";
import { getFromStorage } from "./utils/storage";
import HomeComponent from "./components/routes/pages/homePage";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userId: getFromStorage("the_main_app"),
    };

    console.log("userID", this.state.userId);
  }
  render() {
    if (getFromStorage("the_main_app") !== null) {
      return <HomeComponent />;
    }
    return (
      <Router>
        <div className="mainContainer">
          <img src={LoginPane} alt="landscape" />
          <div className="loginSide">
            <div className="loginContainer">
              <Login />
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
