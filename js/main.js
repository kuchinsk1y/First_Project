import { createAdvertisements } from './data.js'
// import { createOfferCard } from './card.js'
import './form.js'
import './map.js'


const SIMILAR_ADS_COUNT = 10
const similarAds = createAdvertisements(SIMILAR_ADS_COUNT)

// eslint-disable-next-line no-console
console.log(similarAds)

// const mapCanvas = document.querySelector('#map-canvas')

// const firstAd = similarAds[0]
// const offerCard = createOfferCard(firstAd)
// mapCanvas.appendChild(offerCard)
