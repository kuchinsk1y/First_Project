const typeToMinPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const typeField = document.querySelector('#type')
const priceField = document.querySelector('#price')

typeField.addEventListener('change', () => {
  const minPrice = typeToMinPrice[typeField.value]
  priceField.min = minPrice
  priceField.placeholder = minPrice
})

const timeIn = document.querySelector('#timein')
const timeOut = document.querySelector('#timeout')

timeIn.addEventListener('change', () => timeOut.value = timeIn.value)
timeOut.addEventListener('change', () => timeIn.value = timeOut.value)

const roomNumber = document.querySelector('#room_number')
const capacity = document.querySelector('#capacity')

const roomCapacityMap = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
}

function updateCapacityOptions() {
  const allowed = roomCapacityMap[roomNumber.value]
  if (!allowed.includes(capacity.value)) capacity.value = allowed[0]
}

function validateRoomCapacity() {
  const allowed = roomCapacityMap[roomNumber.value]
  if (!allowed.includes(capacity.value)) capacity.setCustomValidity('Выбранное количество гостей не подходит для выбранного количества комнат.')
  else capacity.setCustomValidity('')
}

const titleField = document.querySelector('#title')
titleField.required = true
titleField.minLength = 30
titleField.maxLength = 100
priceField.required = true
priceField.max = 1000000

roomNumber.addEventListener('change', () => {
  updateCapacityOptions()
  validateRoomCapacity()
})

capacity.addEventListener('change', validateRoomCapacity)

updateCapacityOptions()
validateRoomCapacity()

const form = document.querySelector('.ad-form')

form.method = 'post'
form.action = 'https://echo.htmlacademy.ru/'

form.addEventListener('submit', (evt) => {
  validateRoomCapacity()
  if (!form.checkValidity()) evt.preventDefault()
})
