// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
// npm i -D sass
import './temperature.scss';

class App extends Component {
  state = {
    temperature: 20,
  };

  render() {

    const {temperature} = this.state;

    const newDate = new Date();
    const weekDay = newDate.getDay(); //0-6
    const day = newDate.getDate();
    const months = newDate.getMonth(); //0-11
    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 

    return (
      <div className="widget-container">
        <div className="header">
          <div className="current-data">
            <p className="day">{daysArr[weekDay]}</p>
            <p className="data">{day} {monthsArr[months]}</p>
          </div>
        </div>
        <div className="temperature-display">
          <div className="temperature-icon">
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 11.5h2v2h-2z" />
              <path d="M6 14.5h4v2H6zM11 9.5h2v2h-2z" />
              <path d="M10 12.5h4v2h-4z" />
              <path d="M15 8.5h2v2h-2z" />
              <path d="M14 11.5h4v2h-4z" />
              <path d="M19 6.5h2v2h-2zM5 6.5h2v2H5z" />
              <path d="M4 9.5h4v2H4z" />
              <path d="M9 4.5h2v2H9zM17 4.5h2v2h-2zM3 11.5h2v2H3zM21 11.5h2v2h-2z" />
            </svg>

            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2l-2.5 4h5L12 2zm0 18l2.5-4h-5L12 20zm6.5-14l-4 6 1.5 2.5 4-6-1.5-2.5zm-13 0l-4 6 1.5 2.5 4-6-1.5-2.5zm5.5 7.5L12 15l-1.5-2.5-4-6 1.5-2.5 4 6L12 9.5z"
                fill="#000"
              />
            </svg>
          </div>
          {temperature}
        </div>
        <div className="widget-controllers">
          <div className="button-container">
            <button className="button" type="button">
              Cold
            </button>
            <button className="button" type="button">
              Hot
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
