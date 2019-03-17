import React, { useReducer, useCallback } from 'react'

const initialState = {
  line: 0,
  frame: 0,
  ball: 0,
}

const CursorContext = React.createContext(initialState)

const reducer = lines => (state, action) => {
  const { frame, ball, line } = state
  switch (action.type) {
    case 'next':
      // last ball of game
      if (line === lines.length - 1 && frame === 9 && ball === 2) {
        return state
      }
      // last ball of frame
      if (ball === 2) {
        return {
          ball: 0,
          frame: line === lines.length - 1 ? frame + 1 : frame,
          line: (line + 1) % lines.length,
        }
      } else {
        return {
          line,
          frame,
          ball: ball + 1,
        }
      }
    case 'previous':
      // first ball of game
      if (line === 0 && frame === 0 && ball === 0) {
        return state
      }
      // first
      if (ball === 0) {
        return {
          ball: 2,
          frame: line === 0 ? frame - 1 : frame,
          line: (line + (lines.length - 1)) % lines.length,
        }
      } else {
        return {
          line,
          frame,
          ball: ball - 1,
        }
      }
    case 'set':
      return action.data
    default:
      return state
  }
}

CursorContext.Manager = ({ lines, children }) => {
  const [cursor, dispatch] = useReducer(reducer(lines), initialState)
  const set = useCallback(data => {
    dispatch({ type: 'set', data })
  })
  const next = useCallback(() => {
    dispatch({ type: 'next' })
  })
  const previous = useCallback(() => {
    dispatch({ type: 'previous' })
  })
  return (
    <CursorContext.Provider
      value={{
        ...cursor,
        set,
        next,
        previous,
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export default CursorContext
