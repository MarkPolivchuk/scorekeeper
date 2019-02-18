import React, { useState, useReducer } from "react";

import { Line, PinDeck, TeamGame } from "./components";
import { useSelected, useLines } from "./hooks";

const Button = ({ children, ...rest }) => (
  <button
    className="px-2 py-1 border border-blue text-blue-dark rounded-full ml-2"
    {...rest}
  >
    {children}
  </button>
);

const App = () => {
  const [lines, { addLine, dropLine }] = useLines();
  const [selected, { nextBall, prevBall }] = useSelected(lines);
  return (
    <div>
      <TeamGame lines={lines} selected={selected} />
      <Button onClick={dropLine}>Drop line</Button>
      <Button onClick={addLine}>Add line</Button>
      <PinDeck next={nextBall} previous={prevBall} />
    </div>
  );
};

export default App;
