import React from "react";
import PropTypes from "prop-types";

import { Line } from "..";

const HeaderCell = ({ children }) => (
  <div className="w-24 border-l border-t border-grey h-full inline-flex justify-center items-center">
    {children}
  </div>
);
const Header = () => (
  <div className="flex border-b border-grey-dark text-center items-center h-8">
    <div
      className="text-left border-l border-transparent"
      style={{ flex: 2 }}
    />
    {new Array(10).fill().map((_, index) => (
      <HeaderCell key={index}>{index + 1}</HeaderCell>
    ))}
    <div className="flex-1 border-l border-t border-r border-grey h-full inline-flex justify-center items-center">
      Total
    </div>
  </div>
);

const FooterCell = ({ children }) => (
  <div className="w-24 border-l border-b border-grey h-full inline-flex justify-center items-center">
    {children}
  </div>
);

const Footer = () => (
  <div className="text-center h-8">
    <div className="inline-block text-left border-l border-transparent">
      Total
    </div>
    {new Array(10).fill().map((_, index) => (
      <FooterCell key={index} />
    ))}
    <div className="flex-1 border-l border-b border-r border-grey h-full inline-flex justify-center items-center">
      &nbsp;
    </div>
  </div>
);

const TeamGame = ({ lines, selected, select }) => {
  if (!(lines && lines.length)) {
    return null;
  }
  return (
    <div className="inline-flex flex-col m-2 border border-grey-dark w-auto">
      {/* <Header /> */}
      {lines.map((line, index) => (
        <Line
          key={index}
          frames={line}
          select={(frame, ball) => select(index, frame, ball)}
          selected={selected.line === index ? selected : undefined}
        />
      ))}
      {/* <Footer /> */}
    </div>
  );
};

TeamGame.propTypes = {
  children: PropTypes.node // Line
};

export default TeamGame;
