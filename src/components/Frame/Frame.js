import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

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

const Frame = ({ frame, select, selected = false }) => {
  const { b0, b1, b2, frameTotal } = frame
  return (
    <div className={styles.frame}>
      <div className={styles.balls}>
        <Ball
          value={b0.value}
          onClick={() => select(0)}
          selected={selected.ball === 0}
        />
        <Ball
          value={b1.value}
          onClick={() => select(1)}
          selected={selected.ball === 1}
        />
        <Ball
          value={b2.value}
          onClick={() => select(2)}
          selected={selected.ball === 2}
        />
      </div>
      <Total onClick={() => select(0)} total={frameTotal} />
    </div>
  )
}

Frame.propTypes = {
  index: PropTypes.number,
  balls: PropTypes.arrayOf(PropTypes.number),
  // if this line and frame are selected, else false
  selected: PropTypes.shape({
    ball: PropTypes.number,
    frame: PropTypes.number,
    line: PropTypes.number,
  }),
}

export default Frame
