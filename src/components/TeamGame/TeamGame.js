import React from 'react'
import PropTypes from 'prop-types'

import { Line } from 'src/components'
import { framesTransform } from 'src/utils'

import styles from './TeamGame.module.css'

const Header = () => (
  <div className={styles.header}>
    <div className={styles.wideCell}>Bowlers</div>
    {new Array(10).fill().map((_, index) => (
      <div className={styles.cell} key={index}>
        {index + 1}
      </div>
    ))}
    <div className={styles.cell}>Total</div>
  </div>
)

const Footer = ({ lines }) => (
  <div className={styles.footer}>
    <div className={styles.wideCell}>Total</div>
    {new Array(10).fill().map((_, index) => (
      <div className={styles.cell} key={index}>
        {lines.reduce((acc, line) => {
          return acc + line[index].frameTotal
        }, 0)}
      </div>
    ))}
    <div className={styles.cell}>&nbsp;</div>
  </div>
)

const TeamGame = ({ lines }) => {
  if (!(lines && lines.length)) {
    return null
  }
  const parsedLines = lines.map(framesTransform)
  return (
    <div className={styles.teamGame}>
      <Header />
      {parsedLines.map((frames, lineIndex) => (
        <Line key={lineIndex} lineIndex={lineIndex} frames={frames} />
      ))}
      <Footer lines={parsedLines} />
    </div>
  )
}

TeamGame.propTypes = {
  children: PropTypes.node, // Line
}

export default TeamGame
