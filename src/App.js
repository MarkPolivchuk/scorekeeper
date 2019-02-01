import React, { Component } from "react";

import { Line, Frame } from "./components";

import styles from "./App.module.css";

class App extends Component {
  render() {
    const frames = new Array(10).fill([]);

    return (
      <div className={styles.scorecard}>
        <Line>
          {frames.map(frame => (
            <Frame frame={frame} />
          ))}
        </Line>
        <Line>
          {frames.map(frame => (
            <Frame frame={frame} />
          ))}
        </Line>
        <Line>
          {frames.map(frame => (
            <Frame frame={frame} />
          ))}
        </Line>
        <Line>
          {frames.map(frame => (
            <Frame frame={frame} />
          ))}
        </Line>
        <Line>
          {frames.map(frame => (
            <Frame frame={frame} />
          ))}
        </Line>
      </div>
    );
  }
}

export default App;
