import { specials } from 'Data'

const { CLEAN_DECK, HEADPIN } = specials

const isStrike = b0 => {
  return (b0 & CLEAN_DECK) === CLEAN_DECK
}

const isSpare = (b0, b1) => {
  return !isStrike(b0) && ((b0 | b1) & CLEAN_DECK) === CLEAN_DECK
}

const isHeadPin = b0 => {
  return (b0 & HEADPIN) === HEADPIN
}

const ballDisplay = { isStrike, isSpare, isHeadPin }

export default ballDisplay
