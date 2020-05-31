import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeComponent from "./pages/homePage";
import Timetable from "./pages/timetable";

export class routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={<div>hell</div>} />
          <Route path={"/homepage"} component={HomeComponent} />
          <Route path="/timetable" component={Timetable} />
        </Switch>
      </Router>
    );
  }
}

export default routes;
