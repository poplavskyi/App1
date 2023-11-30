import React, { Component } from "react";
import "./styles/index.scss";
import Header from "./components/Header/Header";
import Temperature from "./components/Temperature/Temperature";
import Controllers from "./components/Controllers/Controllers";
import Container from "./components/Container"; // зроблено через index.js для прикладу

class App extends Component {
  state = {
    temperature: 21,
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
    const background = this.createDisplayBackground();

    return (
      <Container background={background}>
        <Header />
        <Temperature temperature={temperature} />
        <Controllers increase={this.increaseTemperature} decrease={this.decreaseTemperature}/>
      </Container>
    );
  }
}

export default App;
