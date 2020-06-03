import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Timetable from "./pages/timetable";

export class routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/"} component={Timetable} />
        <Route path={"/homepage"} component={Timetable} />
        <Route path="/timetable" component={Timetable} />
      </Switch>
    );
  }
}

export default routes;
