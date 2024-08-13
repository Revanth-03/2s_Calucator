import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  add2 = () => {
    this.setState({
      number: this.state.number + 2,
    });
  };

  square = () => {
    this.setState({
      number: this.state.number * this.state.number,
    });
  };

  double = () => {
    this.setState({ number: this.state.number + this.state.number });
  };
  divideby2 = () => {
    this.setState((prevstate) => {
      return {
        number: prevstate.number / 2,
      };
    });
  };

  subtract2 = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number - 2,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div style={{ fontSize: "2rem" }}>{this.state.number}</div>
        <div>
          <button onClick={this.add2}>Add2!</button>
          <button onClick={this.square}>Square!</button>
          <button onClick={this.double}>Double!</button>
          <button onClick={this.divideby2}>Divideby2!</button>
          <button onClick={this.subtract2}>Subtract2!</button>
        </div>
      </div>
    );
  }
}
