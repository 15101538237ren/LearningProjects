import React, { Component } from "react";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Welcom {this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
