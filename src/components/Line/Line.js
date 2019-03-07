import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Frame } from 'Components'
import { useFramesTransform } from 'Hooks'

const BowlerCell = () => (
  <div
    className={classNames(
      'inline-flex border-r border-grey-dark w-48 h-full p-2'
    )}
  >
    Mark Polivchuk
  </div>
)

const TotalCell = () => <div className="flex-1 border-grey" />

const Line = ({ frames, selected = false, select }) => {
  const parsedFrames = useFramesTransform(frames)
  return (
    <div
      style={{ width: '1000px' }}
      className={classNames(
        'flex flex-no-wrap h-16 border-b border-grey-dark',
        { 'bg-yellow-lightest': !!selected }
      )}
    >
      <BowlerCell />
      {parsedFrames.map(({ b0, b1, b2, total }, index) => (
        <Frame
          key={index}
          b0={b0}
          b1={b1}
          b2={b2}
          total={total}
          selected={selected && selected.frame === index ? selected : undefined}
          select={ball => select(index, ball)}
        />
      ))}
      <TotalCell />
    </div>
  )
}

Line.propTypes = {
  children: PropTypes.node,
  frames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  // if selected.line === this line's index, else false
  selected: PropTypes.shape({
    ball: PropTypes.number,
    frame: PropTypes.number,
    line: PropTypes.number,
  }),
}

export default Line
