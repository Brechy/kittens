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

//update kitten works as an add and update since filter won't filter a missing id
const updateKitten = (update) => {
  const filter = (obj) => {
    if(obj.id === update.id) {
      return false
    } else {
      return true
    }
  }
  let kittens = getAllKittens();
  if (update.id === undefined) {
    let max = 0; // first id will be 1.  default max + 1
    for (let i = 0; i < kittens.length; i++) {
      if (kittens[i].id > max) {
        max = kittens[i].id;
      }
    }
    update.id = max + 1
    // there was no id so nothing to filter.
  } else {
    let filteredKittens = kittens.filter(filter)
  }
  filteredKittens.push(update)

  let j = JSON.stringify(filteredKittens)
  fs.writeFileSync('db.json', j)
  return update;
}

module.exports = {
  getAllKittens,
  getOneKitten,
  updateKitten
}
