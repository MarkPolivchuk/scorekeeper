import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Frame } from 'Components'
import { useFramesTransform } from 'Hooks'

import styles from './Line.module.css'

const BowlerCell = () => <div className={styles.bowler}>Mark Polivchuk</div>

const TotalCell = () => <div className={styles.total} />

const Line = ({ frames, selected = false, select }) => {
  const parsedFrames = useFramesTransform(frames)
  return (
    <div
      className={classNames(styles.line, {
        [styles.selected]: !!selected,
      })}
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
