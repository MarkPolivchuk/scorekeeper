import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Frame } from "../../components";

const Line = ({ frames, selected, select }) => {
  return (
    <div
      className={classNames("w-full flex h-16 border-b border-grey-dark", {
        "bg-yellow-lightest": !!selected
      })}
    >
      <div
        className={classNames("border-r border-l border-grey-dark")}
        style={{ flex: 2 }}
      />
      {frames.map((frame, index) => (
        <Frame
          frame={frame}
          key={index}
          selected={selected && selected.frame === index ? selected : undefined}
          select={ball => select(index, ball)}
        />
      ))}
      <div className="flex-1 border-r border-grey" />
    </div>
  );
};

Line.propTypes = {
  children: PropTypes.node,
  frames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  // if selected.line === this line's index
  selected: PropTypes.shape({
    ball: PropTypes.integer,
    frame: PropTypes.integer,
    line: PropTypes.integer
  })
};

export default Line;
