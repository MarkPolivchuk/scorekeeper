import React from "react";
import ReactDOM from "react-dom";
import TeamGame from "./TeamGame";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TeamGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
