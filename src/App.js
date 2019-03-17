import React from 'react'

import { PinDeck, TeamGame } from 'src/components'
import { useLines } from 'src/hooks'
import { CursorContext } from 'src/contexts'

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
  return (
    <CursorContext.Manager lines={lines}>
      <div className="m-2">
        <Button onClick={dropLine}>Drop line</Button>
        <Button onClick={addLine}>Add line</Button>
      </div>
      <TeamGame lines={lines} />
      <PinDeck />
    </CursorContext.Manager>
  )
}

export default App
