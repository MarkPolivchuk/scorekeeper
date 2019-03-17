import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Frame } from 'src/components'
import { CursorContext } from 'src/contexts'

import styles from './Line.module.css'

const BowlerCell = () => <div className={styles.bowler}>Mark Polivchuk</div>

const TotalCell = () => <div className={styles.total} />

const Line = ({ frames, lineIndex }) => {
  const cursor = useContext(CursorContext)
  return (
    <div
      className={classNames(styles.line, {
        [styles.selected]: cursor.line === lineIndex,
      })}
    >
      <BowlerCell />
      {frames.map((frame, frameIndex) => (
        <Frame
          key={frameIndex}
          lineIndex={lineIndex}
          frameIndex={frameIndex}
          frame={frame}
        />
      ))}
      <TotalCell />
    </div>
  )
}

Line.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  index: PropTypes.number,
}

export default Line
