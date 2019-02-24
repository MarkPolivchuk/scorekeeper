import ballScore from './ballScore'

const frameScore = (balls = []) =>
  balls.reduce((score, ball) => {
    return score + ballScore(ball)
  }, 0)

const frameTotal = (frames, index) => {
  if (!frames[index]) {
    return null
  }
  if (index === 0) {
    return frameScore(frames[index])
  }
  return frameScore(frames[index]) + frameTotal(frames, index - 1)
}

export default frameTotal
