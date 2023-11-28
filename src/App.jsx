import React, { Component } from "react";
// npm i -D sass
import "./temperature.scss";

class App extends Component {
  state = {
    temperature: 20,
  };

  increaseTemperature = () => {
    if (this.state.temperature < 29) {
      this.setState((prev) => ({ ...prev, temperature: prev.temperature + 1 }));
    }
  };

  decreaseTemperature = () => {
    if (this.state.temperature > 0) {
      this.setState((prev) => ({ ...prev, temperature: prev.temperature - 1 }));
    }
  };

  createDisplayBackground = () => {
    const { temperature } = this.state;
    const classStatus = ["widget-container"];
    if (temperature < 10) {
      classStatus.push("cold");
    } else if (temperature > 20) {
      classStatus.push("hot");
    } else {
      classStatus.push("normal");
    }
    return classStatus.join(" ");
  };

  render() {
    const { temperature } = this.state;

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

    const background = this.createDisplayBackground();

    return (
      <div className={background}>
        <div className="header">
          <div className="current-data">
            <p className="day">{daysArr[weekDay]}</p>
            <p className="data">
              {day} {monthsArr[months]}
            </p>
          </div>
        </div>
        <div className="temperature-display">
          <div className="temperature-icon">
            {temperature > 20 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100px"
                height="100px"
              >
                <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z" />
              </svg>
            )}

            {temperature < 10 && (
              <svg
                enable-background="new 0 0 100 100"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M94.972,49H82.931l7.653-7.653c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L80.103,49h-7.172l7.653-7.653  c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L70.103,49h-17.69l12.509-12.509h12.823c0.552,0,1-0.447,1-1s-0.448-1-1-1  H66.922l5.07-5.07h12.824c0.552,0,1-0.447,1-1s-0.448-1-1-1H73.992l8.534-8.534c0.391-0.391,0.391-1.023,0-1.414  s-1.023-0.391-1.414,0l-8.534,8.534V15.184c0-0.553-0.448-1-1-1s-1,0.447-1,1v12.823l-5.071,5.071V22.255c0-0.553-0.448-1-1-1  s-1,0.447-1,1v12.822L51,47.586V29.897l9.067-9.067c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L51,27.069v-7.172  l9.067-9.067c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L51,17.069V5.028c0-0.553-0.448-1-1-1s-1,0.447-1,1v12.041  l-7.653-7.653c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L49,19.897v7.172l-7.653-7.653  c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L49,29.897v17.689L36.492,35.078V22.255c0-0.553-0.448-1-1-1s-1,0.447-1,1  v10.823l-5.071-5.071V15.184c0-0.553-0.448-1-1-1s-1,0.447-1,1v10.823l-8.534-8.534c-0.391-0.391-1.023-0.391-1.414,0  s-0.391,1.023,0,1.414l8.534,8.534H15.184c-0.552,0-1,0.447-1,1s0.448,1,1,1h12.823l5.07,5.07H22.255c-0.552,0-1,0.447-1,1  s0.448,1,1,1h12.823L47.586,49h-17.69l-9.067-9.067c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L27.068,49h-7.172  l-9.067-9.067c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L17.068,49H5.028c-0.552,0-1,0.447-1,1s0.448,1,1,1h12.04  l-7.653,7.652c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L19.896,51h7.172  l-7.653,7.652c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L29.896,51h17.689  L35.077,63.508H22.255c-0.552,0-1,0.447-1,1s0.448,1,1,1h10.823l-5.071,5.071H15.184c-0.552,0-1,0.447-1,1s0.448,1,1,1h10.822  l-8.533,8.533c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l8.534-8.534v10.823  c0,0.553,0.448,1,1,1s1-0.447,1-1V71.993l5.071-5.071v10.824c0,0.553,0.448,1,1,1s1-0.447,1-1V64.922L49,52.414v17.69l-9.067,9.066  c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0L49,72.932v7.172l-9.067,9.066c-0.391,0.391-0.391,1.023,0,1.414  s1.023,0.391,1.414,0L49,82.932v12.04c0,0.553,0.448,1,1,1s1-0.447,1-1v-12.04l7.653,7.652c0.195,0.195,0.451,0.293,0.707,0.293  s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L51,80.104v-7.172l7.653,7.652c0.195,0.195,0.451,0.293,0.707,0.293  s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L51,70.104v-17.69l12.508,12.508v12.823c0,0.553,0.448,1,1,1s1-0.447,1-1  V66.922l5.071,5.071v12.823c0,0.553,0.448,1,1,1s1-0.447,1-1V73.993l8.534,8.534c0.195,0.195,0.451,0.293,0.707,0.293  s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-8.533-8.533h10.823c0.552,0,1-0.447,1-1s-0.448-1-1-1H71.993  l-5.071-5.071h10.823c0.552,0,1-0.447,1-1s-0.448-1-1-1H64.922L52.414,51h17.689l9.067,9.066c0.195,0.195,0.451,0.293,0.707,0.293  s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L72.931,51h7.172l9.067,9.066c0.195,0.195,0.451,0.293,0.707,0.293  s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L82.931,51h12.04c0.552,0,1-0.447,1-1S95.524,49,94.972,49z" />
              </svg>
            )}
          </div>
          {temperature}
        </div>
        <div className="widget-controllers">
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.decreaseTemperature}
            >
              Cold
            </button>
            <button
              className="button"
              type="button"
              onClick={this.increaseTemperature}
            >
              Hot
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
