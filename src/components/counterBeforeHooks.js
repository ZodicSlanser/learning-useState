import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;