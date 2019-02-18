import { useReducer } from "react";

const Line = () => {
  return new Array(10).fill([]);
};

const initialState = [new Line(), new Line(), new Line()];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, new Line()];
    case "drop":
      return [...state.slice(0, -1)];
    default:
      return state;
  }
};

/**
 * This manages the state of the scorekeeper,
 * such as deciding which ball is being edited,
 * who's turn is active, etc
 */
const useLines = () => {
  const [lines, dispatch] = useReducer(reducer, initialState);
  return [
    lines,
    {
      addLine: () => dispatch({ type: "add" }),
      dropLine: () => dispatch({ type: "drop" })
    }
  ];
};

export default useLines;
