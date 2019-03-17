import { ballDisplay, ballScore } from 'src/utils'
const { isStrike, isSpare } = ballDisplay

const frameScore = (frames, index) => {
  const frame = frames[index]
  const nextFrame = frames[index + 1] || []
  const nextNextFrame = frames[index + 2] || []
  if (!frame || frame.length === 0) {
    return null
  }
  let score = 0
  // In 10th frame, just calculate each ball score
  // because strikes and spares cannot count future frames
  if (isStrike(frame) && index !== 9) {
    score += ballScore(frame[0])
    score += ballScore(nextFrame[0]) // next ball
    score += ballScore(nextFrame[1] || nextNextFrame[0]) // next next ball
  } else if (isSpare(frame) && index !== 9) {
    score += ballScore(frame[0])
    score += ballScore(frame[1])
    score += ballScore(nextFrame[0]) // next ball
  } else {
    score += ballScore(frame[0])
    score += ballScore(frame[1])
    score += ballScore(frame[2])
  }
  return score
}

const frameTotal = (frames, index) => {
  if (!(frames[index] && frames[index].length > 0)) {
    return null
  }
  let score =
    index === 0
      ? frameScore(frames, index)
      : frameScore(frames, index) + frameTotal(frames, index - 1)

  return score
}

const ball0Result = frame => {
  const [b0] = frame
  return {
    value: isStrike(frame) ? 'X' : ballScore(b0),
    foul: false,
  }
}

const ball1Result = frame => {
  const [b0, b1] = frame
  return {
    value: isSpare(frame) ? '/' : ballScore(b1),
    foul: false,
  }
}

const ball2Result = frame => {
  const [b0, b1, b2] = frame
  return {
    value: ballScore(b2),
    foul: false,
  }
}

const framesTransform = frames => {
  return new Array(10).fill().map((_, index) => {
    const frame = frames[index] || []
    return {
      b0: ball0Result(frame),
      b1: ball1Result(frame),
      b2: ball2Result(frame),
      frameTotal: frameTotal(frames, index),
    }
  })
}

export default framesTransform
