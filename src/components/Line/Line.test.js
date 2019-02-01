import React from "react";
import ReactDOM from "react-dom";
import Line from "./Line";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Line />, div);
  ReactDOM.unmountComponentAtNode(div);
});
