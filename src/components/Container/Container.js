import { Component } from "react";
import './Container.scss';

class Container extends Component {
  render() {

    const {children, background} = this.props;

    return (
      <div className={background}>
        {children}
      </div>
    )
  }
}

export default Container;
