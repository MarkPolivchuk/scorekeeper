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
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          1
        </div>
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          3
        </div>
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          4
        </div>
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          5
        </div>
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          2
        </div>
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          6
        </div>
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          7
        </div>
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          8
        </div>
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          9
        </div>
        <div className="flex-1 border-l border-t border-grey h-full inline-flex justify-center items-center">
          10
        </div>
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
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
        <div className="flex-1 border-l border-b border-grey h-full inline-flex justify-center items-center" />
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
