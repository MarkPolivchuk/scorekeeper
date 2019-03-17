import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import { CursorContext } from 'src/contexts'

const Pin = ({ value }) => (
  <button className="text-blue-dark font-bold hover:bg-blue hover:text-blue-lighter border-blue border-2 rounded-full h-12 w-12 mx-2">
    {value}
  </button>
)

const Button = ({ children, ...rest }) => (
  <button className="rounded-full flex-1 mx-2 py-2 bg-blue" {...rest}>
    {children}
  </button>
)

const PinDeck = () => {
  const cursor = useContext(CursorContext)
  return (
    <div
      className={classNames(
        'bg-white',
        'fixed pin-r pin-b',
        'py-4 px-2  mr-8 mb-8',
        'border border-grey-lighter shadow rounded-lg'
      )}
    >
      <div className="mb-4">
        <Pin value={2} />
        <Pin value={3} />
        <Pin value={5} />
        <Pin value={3} />
        <Pin value={2} />
      </div>
      <div className="w-full flex">
        <Button onClick={cursor.previous}>Prev</Button>
        <Button onClick={cursor.next}>Next</Button>
      </div>
    </div>
  )
}

PinDeck.propTypes = {
  children: PropTypes.node,
  frames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
}

export default PinDeck
