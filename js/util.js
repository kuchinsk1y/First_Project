export function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomFloat(min, max, decimals = 5) {
  return Number((Math.random() * (max - min) + min).toFixed(decimals))
}

export function getRandomArrayElement(array) {
  return array[getRandomInteger(0, array.length - 1)]
}

function randomSort() {
  return 0.5 - Math.random()
}

export function getRandomArray(array) {
  const shuffled = array.slice().sort(randomSort)
  const count = getRandomInteger(1, array.length)
  return shuffled.slice(0, count)
}
