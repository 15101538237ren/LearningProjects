import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState(
      (previousState, props) => ({
        counter: previousState.counter + 1,
      }),
      () => console.log("Callback of setState is called")
    );
  }
  incrementFive() {
    for (var i = 0; i < 5; i++) {
      this.increment();
    }
  }
  render() {
    return (
      <div>
        <h1>Counter - {this.state.counter}</h1>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Increment 5
        </button>
      </div>
    );
  }
}

export default Counter;
