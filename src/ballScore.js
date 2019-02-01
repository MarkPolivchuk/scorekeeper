import pinValues from "./data/pins";

/**
 * Each ball thrown can be represented by a 5-bit binary number with each bit
 * representing a pin from left to right.
 *
 * If the pin was knocked down by that ball, the corresponding bit is a 1, else 0
 * @param {Object} state
 * @param {number} state.ball 0, 1, or 2
 * @param {number} [state.deck=0b00000] state of the pindeck before the ball
 * @param {number} [state.pins=0b00000] state of the pindeck knocked down by this ball
 */
const ballScore = ({
  // 0, 1, or 2
  ball,
  //
  deck = 0b00000,
  // pins knocked down by the ball
  pins = 0b00000
}) => {
  let score = 0;
  pinValues.forEach(pin => {
    if ((pins & pin.bin) === pin.bin) {
      score += pin.val;
    }
  });
  return score;
};

export default ballScore;
