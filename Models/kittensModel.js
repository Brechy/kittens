const uuid = require('uuid/v4') //v4 is random
const kittens = [{
  id: uuid(),
  name: 'Spoopy',
  age: 'katten'
}]

function getAllKittens() {
  return kittens
}

function getOneKitten() {
  return kitten
}

function create(body) {
  const errors = []
  const name = body.name

  let response;
  if(!name) {
    errors.push('Please name your kitten')
    response = { error }
  } else {
    cosnt kitten = {
      id: uuid(),
      name
    }
    kittens.push(kitten)
    response = kitten
  }
  return response
}

module.exports = {
  getAllKittens,
  createKittens
}
