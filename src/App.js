import React, { Component } from "react";

import { Line } from "./components";

import "./App.css";
import ballScore from "./ballScore";

class App extends Component {
  render() {
    const frames = new Array(10).fill([]);
    return (
      <Line.Container>
        <Line frames={frames} />
        <Line frames={frames} />
        <Line frames={frames} />
        <Line frames={frames} />
      </Line.Container>
    );
  }
}

export default App;
