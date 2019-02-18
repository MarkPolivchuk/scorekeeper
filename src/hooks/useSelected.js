import { useReducer } from "react";

const initialState = {
  frame: 9,
  ball: 0,
  line: 2
};

const reducer = lines => (state, action) => {
  const { frame, ball, line } = state;
  switch (action.type) {
    case "next":
      // last ball of game
      if (line === lines.length - 1 && frame === 9 && ball === 2) {
        return state;
      }
      // last ball of frame
      if (ball === 2) {
        return {
          ball: 0,
          frame: line === lines.length - 1 ? frame + 1 : frame,
          line: (line + 1) % lines.length
        };
      } else {
        return {
          line,
          frame,
          ball: ball + 1
        };
      }
    case "previous":
      // first ball of game
      if (line === 0 && frame === 0 && ball === 0) {
        return state;
      }
      // first
      if (ball === 0) {
        return {
          ball: 2,
          frame: line === 0 ? frame - 1 : frame,
          line: (line + (lines.length - 1)) % lines.length
        };
      } else {
        return {
          line,
          frame,
          ball: ball - 1
        };
      }
    case "set":
      return state;
    default:
      return state;
  }
};

/**
 * This manages the state of the scorekeeper,
 * such as deciding which ball is being edited,
 * who's turn is active, etc
 */
const useSelected = lines => {
  const [selected, dispatch] = useReducer(reducer(lines), initialState);
  return [
    selected,
    {
      nextBall: () => dispatch({ type: "next" }),
      prevBall: () => dispatch({ type: "previous" })
    }
  ];
};

export default useSelected;
