import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import pinValues from "../../data/pins";

/**
 * Each ball thrown can be represented by a 5-bit binary number with each bit
 * representing a pin from left to right.
 *
 * If the pin was knocked down by that ball, the corresponding bit is a 1, else 0
 * @param {number} [pins=0b00000] state of the pindeck knocked down by this ball
 */
const score = (pins = 0b00000) => {
  let value = 0;
  pinValues.forEach(pin => {
    if ((pins & pin.bin) === pin.bin) {
      value += pin.val;
    }
  });
  return value;
};

const Balls = ({ children }) => (
  <div className="inline-flex w-full h-1/2 border-b border-grey">
    {children}
  </div>
);

const Ball = ({ className, score, isLast }) => (
  <div
    className={classNames(
      "flex-1 inline-flex justify-center items-center h-8 border-grey",
      { "border-r": !isLast },
      className
    )}
  >
    {score || ""}
  </div>
);

const Total = ({ total }) => (
  <div className="w-full inline-flex justify-center items-center h-8">
    {total}
  </div>
);

const Frame = ({ index, balls }) => {
  return (
    <div className="inline-flex flex-1 h-full flex-wrap border-r border-grey-dark">
      <Balls>
        <Ball score={score(0b11000)} />
        <Ball score={score(0b00110)} />
        <Ball score={score(0b00001)} isLast />
      </Balls>
      <Total total={15} />
    </div>
  );
};

Frame.propTypes = {
  index: PropTypes.number,
  balls: PropTypes.arrayOf(PropTypes.number)
};

export default Frame;
