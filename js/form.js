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
  Array.from(capacity.options).forEach((option) => {
    option.disabled = !allowed.includes(option.value)
  })
  capacity.value = allowed.includes(capacity.value) ? capacity.value : allowed[0]
}

roomNumber.addEventListener('change', updateCapacityOptions)

updateCapacityOptions()
