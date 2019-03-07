import { ballScore, frameTotal, ballDisplay } from 'Utils'
const { isStrike, isSpare } = ballDisplay

const ball0Result = b0 => {
  return {
    value: isStrike(b0) ? 'X' : ballScore(b0),
    foul: false,
  }
}

const ball1Result = (b0, b1) => {
  return {
    value: isSpare(b0, b1) ? '/' : ballScore(b1),
    foul: false,
  }
}

const ball2Result = (b0, b1, b2) => {
  return {
    value: ballScore(b2),
    foul: false,
  }
}

const useFramesTransform = frames => {
  return new Array(10).fill().map((_, index) => {
    const [b0, b1, b2] = frames[index] || []
    const total = frameTotal(frames, index)
    return {
      b0: ball0Result(b0),
      b1: ball1Result(b0, b1),
      b2: ball2Result(b0, b1, b2),
      total,
    }
  })
}

export default useFramesTransform
