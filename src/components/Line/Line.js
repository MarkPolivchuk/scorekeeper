import React from "react";
import PropTypes from "prop-types";

import { Frame } from "../../components";

const Line = ({ frames }) => {
  return (
    <div className="w-full flex h-16 border-b border-grey-dark ">
      <div className="border-r border-l border-grey-dark" style={{ flex: 2 }}>
        Mark Polivchuk
      </div>
      {frames.map((frame, index) => (
        <Frame frame={frame} key={index} />
      ))}
      <div className="flex-1 border-r border-grey">150</div>
    </div>
  );
};

Line.propTypes = {
  children: PropTypes.node,
  frames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};

const HeaderCell = ({ children }) => (
  <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
    {children}
  </div>
);

const FooterCell = ({ children }) => (
  <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center">
    {children}
  </div>
);

Line.Container = ({ children }) => {
  if (!(children && children.length)) {
    return null;
  }
  return (
    <div className="flex flex-col m-2">
      <div className="flex border-b border-grey-dark text-center items-center h-8">
        <div
          className="text-left border-l border-transparent"
          style={{ flex: 2 }}
        />
        {new Array(10).fill().map((_, index) => (
          <HeaderCell key={index + 1}>{index}</HeaderCell>
        ))}
        <div className="flex-1 border-l border-t border-r border-grey h-full inline-flex justify-center items-center">
          Total
        </div>
      </div>
      {children}
      <div className="flex text-center h-8">
        <div
          className="text-left border-l border-transparent"
          style={{ flex: 2 }}
        />
        {new Array(10).fill().map((_, index) => (
          <FooterCell key={index} />
        ))}
        <div className="flex-1 border-l border-b border-r border-grey h-full inline-flex justify-center items-center">
          650
        </div>
      </div>
    </div>
  );
};

Line.Container.propTypes = {
  children: PropTypes.node
};

export default Line;
