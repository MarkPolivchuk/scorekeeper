import { useReducer } from 'react'

const Line = () => {
  return new Array(10).fill([])
}

const testLine = [
  [0b011000, 0b000011, 0b000100],
  [0b011111],
  [0b011110, 0b000001],
  [0b011100, 0b000001, 0b000010],
  [0b011000, 0b000111],
  [0b011111],
  [0b011111],
  [0b011111],
  [0b000100, 0b000010, 0b011000],
  [0b011111, 0b011111, 0b011110],
]

const perfect = [
  [0b011111],
  [0b011111],
  [0b011111],
  [0b011111],
  [0b011111],
  [0b011111],
  [0b011111],
  [0b011111],
  [0b011111],
  [0b011111, 0b011111, 0b011111],
]

const initialState = [testLine, perfect]

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, new Line()]
    case 'drop':
      return [...state.slice(0, -1)]
    default:
      return state
  }
}

/**
 * This manages the state of the scorekeeper,
 * such as deciding which ball is being edited,
 * who's turn is active, etc
 */
const useLines = () => {
  const [lines, dispatch] = useReducer(reducer, initialState)
  return {
    lines,
    addLine: () => dispatch({ type: 'add' }),
    dropLine: () => dispatch({ type: 'drop' }),
  }
}

export default useLines
