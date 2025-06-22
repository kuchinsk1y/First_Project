import { TITLES, TYPES, CHECK_TIMES, FEATURES, PHOTOS } from './constants.js'
import { getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray } from './util.js'


export function createLocation() {
  return {
    x: getRandomFloat(35.65, 35.7),
    y: getRandomFloat(139.7, 139.8),
  }
}

export function createAuthor() {
  const avatarNumber = String(getRandomInteger(1, 8)).padStart(2, '0')
  return {
    avatar: `img/avatars/user${avatarNumber}.png`,
  }
}

export function createOffer(location) {
  return {
    title: getRandomArrayElement(TITLES),
    address: `${location.x}, ${location.y}`,
    price: getRandomInteger(1000, 100000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 10),
    checkin: getRandomArrayElement(CHECK_TIMES),
    checkout: getRandomArrayElement(CHECK_TIMES),
    features: getRandomArray(FEATURES),
    description: 'Просторное и светлое жилье со всеми удобствами.',
    photos: getRandomArray(PHOTOS),
  }
}

export function createAdvertisement() {
  const location = createLocation()
  return {
    author: createAuthor(),
    offer: createOffer(location),
    location,
  }
}

export function createAdvertisements(count) {
  return Array.from({ length: count }, createAdvertisement)
}
