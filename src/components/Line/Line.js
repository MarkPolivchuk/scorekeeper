import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Frame } from "../../components";

const BowlerCell = () => (
  <div
    className={classNames("inline-flex border-r border-grey-dark w-48 h-full")}
  >
    Mark Polivchuk
  </div>
);

const TotalCell = () => <div className="flex-1 border-grey" />;

const Line = ({ frames, selected, select }) => {
  return (
    <div
      style={{ width: "800px" }}
      className={classNames(
        "flex flex-no-wrap h-16 border-b border-grey-dark",
        { "bg-yellow-lightest": !!selected }
      )}
    >
      <BowlerCell />
      {new Array(10).fill().map((_, index) => (
        <Frame
          frame={frames[index]}
          key={index}
          selected={selected && selected.frame === index ? selected : undefined}
          select={ball => select(index, ball)}
        />
      ))}
      <TotalCell />
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
