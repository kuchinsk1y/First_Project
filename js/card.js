const cardTemplate = document.querySelector('#card').content.querySelector('.popup')

const typeMap = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
}

function createFeatureList(features, container) {
  container.innerHTML = ''
  if (!features || features.length === 0) return container.style.display = 'none'
  features.forEach((feature) => {
    const li = document.createElement('li')
    li.classList.add('popup__feature', `popup__feature--${feature}`)
    container.appendChild(li)
  })
}

function createPhotoGallery(photos, container) {
  container.innerHTML = ''
  if (!photos || photos.length === 0) return container.style.display = 'none'
  photos.forEach((src) => {
    const img = document.createElement('img')
    img.src = src
    img.classList.add('popup__photo')
    img.width = 45
    img.height = 40
    img.alt = 'Фотография жилья'
    container.appendChild(img)
  })
}

export function createOfferCard({ author, offer }) {
  const card = cardTemplate.cloneNode(true)

  const setTextContent = (selector, content) => {
    const element = card.querySelector(selector)
    if (!content) element.style.display = 'none'
    else element.textContent = content
  }

  setTextContent('.popup__title', offer.title)
  setTextContent('.popup__text--address', offer.address)
  setTextContent('.popup__text--price', `${offer.price} ₽/ночь`)
  setTextContent('.popup__type', typeMap[offer.type])
  setTextContent('.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`)
  setTextContent('.popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`)
  setTextContent('.popup__description', offer.description)

  createFeatureList(offer.features, card.querySelector('.popup__features'))
  createPhotoGallery(offer.photos, card.querySelector('.popup__photos'))

  const avatar = card.querySelector('.popup__avatar')
  if (author.avatar) avatar.src = author.avatar
  else avatar.style.display = 'none'
  return card
}
