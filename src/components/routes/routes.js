import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timetable from "./pages/timetable";

export class routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={Timetable} />
          <Route path={"/homepage"} component={Timetable} />
          <Route path="/timetable" component={Timetable} />
        </Switch>
      </Router>
    );
  }
}

export default routes;
