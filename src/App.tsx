import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="w-full min-h-screen flex justify-center">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
