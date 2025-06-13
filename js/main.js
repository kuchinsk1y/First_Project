import { createAdvertisements } from './data.js'

const SIMILAR_ADS_COUNT = 10
const similarAds = createAdvertisements(SIMILAR_ADS_COUNT)

// eslint-disable-next-line no-console
console.log(similarAds)

