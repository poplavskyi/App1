import { Component } from "react";
import './Controllers.scss';

class Controllers extends Component {
  render() {
    const {decrease, increase} = this.props;
    return (
      <div className="widget-controllers">
        <div className="button-container">
          <button
            className="button"
            type="button"
            onClick={decrease}
          >
            Cold
          </button>
          <button
            className="button"
            type="button"
            onClick={increase}
          >
            Hot
          </button>
        </div>
      </div>
    );
  }
}

export default Controllers;
