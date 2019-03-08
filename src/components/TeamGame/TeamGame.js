import React from 'react'
import PropTypes from 'prop-types'

import { Line } from 'Components'

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

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.wideCell}>Total</div>
    {new Array(10).fill().map((_, index) => (
      <div className={styles.cell} key={index} />
    ))}
    <div className={styles.cell}>&nbsp;</div>
  </div>
)

const TeamGame = ({ lines, selected, select }) => {
  if (!(lines && lines.length)) {
    return null
  }
  return (
    <div className={styles.teamGame}>
      <Header />
      {lines.map((line, index) => (
        <Line
          key={index}
          frames={line}
          select={(frame, ball) => select(index, frame, ball)}
          selected={selected.line === index ? selected : undefined}
        />
      ))}
      <Footer />
    </div>
  )
}

TeamGame.propTypes = {
  children: PropTypes.node, // Line
}

export default TeamGame
