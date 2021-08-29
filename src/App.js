import "./App.css";
import React, { Component } from "react";
import Personel from "./Component/Personel/Personel";

class App extends Component {
  state = {
    show: false,
    statut: "Show",
    time: 0,
  };
  handleshow = () => {
    this.setState({ show: !this.state.show });
    this.setState({ statut: this.state.show ? "Show" : "Hide" });
    this.setState({ time: 0 });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="headApp">
          <button className="buttApp" onClick={this.handleshow}>
            {" "}
            {this.state.statut}{" "}
          </button>
          <h3>{this.state.time}</h3>
        </div>

        {this.state.show ? <Personel /> : null}
      </div>
    );
  }
}

export default App;
