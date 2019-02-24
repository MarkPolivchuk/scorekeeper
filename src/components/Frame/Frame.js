import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Ball = ({ className, value, isLast, selected, onClick }) => (
  <div
    onClick={onClick}
    className={classNames(
      'flex-1 inline-flex justify-center items-center h-8 border-grey',
      { 'border-r': !isLast },
      { 'bg-yellow-light': selected },
      className
    )}
  >
    {value || ''}
  </div>
)

const Total = ({ total, onClick }) => (
  <div
    className="w-full inline-flex justify-center items-center h-8"
    onClick={onClick}
  >
    {total}
  </div>
)

const Frame = ({ b0, b1, b2, total, select, selected }) => {
  return (
    <div className="inline-flex flex-1 h-full flex-wrap border-r border-grey-dark">
      <div className="inline-flex w-full h-1/2 border-b border-grey">
        <Ball
          value={b0}
          onClick={() => select(0)}
          selected={selected && selected.ball === 0}
        />
        <Ball
          value={b1}
          onClick={() => select(1)}
          selected={selected && selected.ball === 1}
        />
        <Ball
          value={b2}
          onClick={() => select(2)}
          selected={selected && selected.ball === 2}
          isLast
        />
      </div>
      <Total onClick={() => select(0)} total={total} />
    </div>
  )
}

Frame.propTypes = {
  index: PropTypes.number,
  balls: PropTypes.arrayOf(PropTypes.number),
  // if this line and frame are selected, else undefined.
  selected: PropTypes.shape({
    ball: PropTypes.number,
    frame: PropTypes.number,
    line: PropTypes.number,
  }),
}

export default Frame
