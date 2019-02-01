import React, { Component, useReducer } from "react";

import { Line } from "./components";

import "./App.css";
import ballScore from "./ballScore";

const Bowler = () => {
  return {
    name: "",
    frames: new Array(10).fill([])
  };
};

const initialBowlers = new Array(5).fill(new Bowler());

const reducer = (bowlers, action) => {
  switch (action.type) {
    case "add": {
      return [...bowlers, new Bowler()];
    }
    case "remove": {
      return [...bowlers.slice(0, -1)];
    }
    default: {
      return bowlers;
    }
  }
};

const App = () => {
  const [bowlers, dispatch] = useReducer(reducer, initialBowlers);
  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: "add" })} type="button">
          Add
        </button>
        <button onClick={() => dispatch({ type: "remove" })} type="button">
          Remove
        </button>
      </div>
      <Line.Container>
        {bowlers.map((bowler, index) => (
          <Line frames={bowler.frames} key={index} />
        ))}
      </Line.Container>
    </div>
  );
};

export default App;
