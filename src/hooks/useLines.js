import { useReducer } from 'react'

const Line = () => {
  return new Array(10)
}

const testLine = [
  [0b011000, 0b000011, 0b000100],
  [0b011111],
  [0b011110, 0b000001],
  [0b010000, 0b000001, 0b001110],
  [0b011000, 0b000111],
  [0b011111],
  [0b011111],
  [0b011111],
  [0b000100, 0b000010, 0b011000],
  [0b011111, 0b011111, 0b011110],
]

const initialState = [testLine]

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
  return [
    lines,
    {
      addLine: () => dispatch({ type: 'add' }),
      dropLine: () => dispatch({ type: 'drop' }),
    },
  ]
}

export default useLines
