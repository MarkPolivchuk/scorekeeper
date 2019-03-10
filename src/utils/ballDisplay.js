import { specials } from 'Data'

const { CLEAN_DECK, HEADPIN } = specials

const isStrike = frame => {
  const [b0] = frame
  return (b0 & CLEAN_DECK) === CLEAN_DECK
}

const isSpare = frame => {
  const [b0, b1] = frame
  return !isStrike(frame) && ((b0 | b1) & CLEAN_DECK) === CLEAN_DECK
}

const isHeadPin = frame => {
  const [b0] = frame
  return (b0 & HEADPIN) === HEADPIN
}

const ballDisplay = { isStrike, isSpare, isHeadPin }

export default ballDisplay
