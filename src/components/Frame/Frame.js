import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CursorContext } from 'src/contexts'

import styles from './Frame.module.css'

const Ball = ({ className, value, selected, onClick }) => (
  <div
    onClick={onClick}
    className={classNames(
      styles.ball,
      { [styles.selected]: selected },
      className
    )}
  >
    {value || ''}
  </div>
)

const Total = ({ total, onClick }) => (
  <div className={styles.total} onClick={onClick}>
    {total}
  </div>
)

const Frame = ({ frame, lineIndex, frameIndex }) => {
  const { b0, b1, b2, frameTotal } = frame
  const cursor = useContext(CursorContext)
  return (
    <div className={styles.frame}>
      <div className={styles.balls}>
        <Ball
          value={b0.value}
          onClick={() =>
            cursor.set({
              ball: 0,
              line: lineIndex,
              frame: frameIndex,
            })
          }
          selected={
            cursor.line === lineIndex &&
            cursor.frame === frameIndex &&
            cursor.ball === 0
          }
        />
        <Ball
          value={b1.value}
          onClick={() =>
            cursor.set({
              ball: 1,
              line: lineIndex,
              frame: frameIndex,
            })
          }
          selected={
            cursor.line === lineIndex &&
            cursor.frame === frameIndex &&
            cursor.ball === 1
          }
        />
        <Ball
          value={b2.value}
          onClick={() =>
            cursor.set({
              ball: 2,
              line: lineIndex,
              frame: frameIndex,
            })
          }
          selected={
            cursor.line === lineIndex &&
            cursor.frame === frameIndex &&
            cursor.ball === 2
          }
        />
      </div>
      <Total onClick={() => cursor.set({ ball: 0 })} total={frameTotal} />
    </div>
  )
}

Frame.propTypes = {
  index: PropTypes.number,
  balls: PropTypes.arrayOf(PropTypes.number),
}

export default Frame
