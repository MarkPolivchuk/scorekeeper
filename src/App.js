import React from 'react'

import { PinDeck, TeamGame } from './components'
import { useSelected, useLines } from './hooks'

const Button = ({ children, ...rest }) => (
  <button
    className="px-2 py-1 border border-blue text-blue-dark rounded-full ml-2"
    {...rest}
  >
    {children}
  </button>
)

const App = () => {
  const { lines, addLine, dropLine } = useLines()
  const [selected, { nextBall, prevBall, setSelected }] = useSelected(lines)
  return (
    <div>
      <div className="m-2">
        <Button onClick={dropLine}>Drop line</Button>
        <Button onClick={addLine}>Add line</Button>
      </div>
      <TeamGame
        lines={lines}
        selected={selected}
        select={(line, frame, ball) => {
          setSelected({ line, frame, ball })
        }}
      />
      <PinDeck next={nextBall} previous={prevBall} />
    </div>
  )
}

export default App
