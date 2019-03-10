import { pins } from 'src/data'

/**
 * Each ball thrown can be represented by a 6-bit binary number with
 * the first bit representing a foul, and each additional bit
 * representing a pin from left to right.
 *
 * If the ball contains a foul, the first bit will be 1, otherwise 0
 * If the pin was knocked down by that ball, the corresponding bit is a 1, else 0
 * @param {number} [pins=0b000000] state of the pindeck knocked down by this ball
 */
const ballScore = (ball = 0b000000) => {
  let value = 0
  pins.forEach(pin => {
    if ((ball & pin.bin) === pin.bin) {
      value += pin.val
    }
  })
  return value
}

export default ballScore
