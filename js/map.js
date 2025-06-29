import { createOfferCard } from './card.js'
import { createAdvertisements } from './data.js'

import {
  TOKYO_CENTER,
  MAP_ZOOM,
  ADDRESS_PRECISION,
  SIMILAR_ADS_COUNT,
  MAIN_PIN_ICON,
  AD_ICON
} from './constants.js'

const similarAds = createAdvertisements(SIMILAR_ADS_COUNT)
const addressField = document.querySelector('#address')

const map = L.map('map-canvas').on('load', () => activatePage()).setView(TOKYO_CENTER, MAP_ZOOM)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map)

const mainPinIcon = L.icon({
  iconUrl: MAIN_PIN_ICON.url,
  iconSize: MAIN_PIN_ICON.size,
  iconAnchor: MAIN_PIN_ICON.anchor,
})

const mainPinMarker = L.marker(TOKYO_CENTER, {
  draggable: true,
  icon: mainPinIcon,
}).addTo(map)

function setAddress({ lat, lng }) {
  addressField.value = `${lat.toFixed(ADDRESS_PRECISION)}, ${lng.toFixed(ADDRESS_PRECISION)}`
}

setAddress(TOKYO_CENTER)

mainPinMarker.on('move', (evt) => setAddress(evt.target.getLatLng()))

const adIcon = L.icon({
  iconUrl: AD_ICON.url,
  iconSize: AD_ICON.size,
  iconAnchor: AD_ICON.anchor,
})

similarAds.forEach((ad) => {
  L.marker({
    lat: ad.location.x,
    lng: ad.location.y,
  }, {
    icon: adIcon,
  })
    .addTo(map)
    .bindPopup(createOfferCard(ad), { keepInView: true })
})

function activatePage() {
  const form = document.querySelector('.ad-form')
  const mapFilters = document.querySelector('.map__filters')

  form.classList.remove('ad-form--disabled');
  [...form.elements].forEach(el => el.disabled = false);
  mapFilters.classList.remove('map__filters--disabled');
  [...mapFilters.elements].forEach(el => el.disabled = false);
}
