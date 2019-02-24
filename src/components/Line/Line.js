import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Frame } from '../../components'
import { ballScore, frameTotal, ballDisplay } from '../../utils'

const { isStrike, isSpare } = ballDisplay

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

const Line = ({ frames, selected, select }) => {
  return (
    <div
      style={{ width: '1000px' }}
      className={classNames(
        'flex flex-no-wrap h-16 border-b border-grey-dark',
        { 'bg-yellow-lightest': !!selected }
      )}
    >
      <BowlerCell />
      {new Array(10).fill().map((_, index) => {
        const [b0, b1, b2] = frames[index] || []
        const total = frameTotal(frames, index)
        return (
          <Frame
            key={index}
            b0={isStrike(b0) ? 'X' : ballScore(b0)}
            b1={isSpare(b0, b1) ? '/' : ballScore(b1)}
            b2={ballScore(b2)}
            total={total}
            selected={
              selected && selected.frame === index ? selected : undefined
            }
            select={ball => select(index, ball)}
          />
        )
      })}
      <TotalCell />
    </div>
  )
}

Line.propTypes = {
  children: PropTypes.node,
  frames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  // if selected.line === this line's index
  selected: PropTypes.shape({
    ball: PropTypes.number,
    frame: PropTypes.number,
    line: PropTypes.number,
  }),
}

export default Line
