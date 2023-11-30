import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    const newDate = new Date();
    const weekDay = newDate.getDay(); //0-6
    const day = newDate.getDate();
    const months = newDate.getMonth(); //0-11
    const daysArr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthsArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      <div className="header">
        <div className="current-data">
          <p className="day">{daysArr[weekDay]}</p>
          <p className="data">
            {day} {monthsArr[months]}
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
