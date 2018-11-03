const uuid = require('uuid/v4') //v4 is random
const fs = require('fs');
console.log(fs)

//get all kittens
const getAllKittens = () => {
  let s = fs.readFileSync('db.json', 'utf8');
  let j = JSON.parse(s)
  return j;
}

//get one kitten by id
const getOneKitten = (id) => {
  const filter = (obj) => {
    if(obj.id === id){
      return true
    } else {
      return false
    }
  }
  let filteredKittens = getAllKittens().filter(filter)
  if(filteredKittens.length === 0) {
    return undefined
  } else {
    return filteredKittens[0]
  }
}

//update kitten works as an add and delete as this is a static JSON file system. This is a full CRUD api
const updateKitten = (update) => {
  const filter = (obj) => {
    if(obj.id === update.id) {
      return false
    } else {
      return true
    }
  }
  let filteredKittens = getAllKittens().filter(filter)
  filteredKittens.push(update)

  let j = JSON.stringify(filteredKittens)
  fs.writeFileSync(j)
}

module.exports = {
  getAllKittens,
  getOneKitten,
  updateKitten
}
