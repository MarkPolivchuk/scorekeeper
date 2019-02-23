import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Line } from '..'

const Cell = ({ children, isLast }) => (
  <div
    className={classNames(
      'flex-1 h-full inline-flex justify-center items-center',
      { 'border-r border-grey-dark': !isLast }
    )}
  >
    {children}
  </div>
)

const WideCell = ({ children }) => (
  <div className="w-48 border-r border-grey-dark h-full inline-flex justify-start items-center p-2">
    {children}
  </div>
)

const Header = () => (
  <div className="flex border-b border-grey-dark text-center items-center h-8">
    <WideCell>Bowlers</WideCell>
    {new Array(10).fill().map((_, index) => (
      <Cell key={index}>{index + 1}</Cell>
    ))}
    <Cell isLast>Total</Cell>
  </div>
)

const Footer = () => (
  <div className="text-center flex h-8">
    <WideCell>Total</WideCell>
    {new Array(10).fill().map((_, index) => (
      <Cell key={index} />
    ))}
    <Cell isLast>&nbsp;</Cell>
  </div>
)

const TeamGame = ({ lines, selected, select }) => {
  if (!(lines && lines.length)) {
    return null
  }
  return (
    <div className="inline-flex flex-col m-2 mb-64 border border-grey-dark w-auto">
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
