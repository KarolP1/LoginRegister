import "../styles/schedule.scss";

import React, { Component } from "react";

import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
class Schedule extends Component {
  render() {
    return (
      <ScheduleComponent className="scheduleMother">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}
export default Schedule;
