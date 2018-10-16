const kittensModel = require('../Models/kittensModel.js')

//getAllKittens
function getAllKittens(req, res, next) {
  const data = model.getAllKittens()
  res.status(200).json({ data })
}

//getOneKitten
function getOneKitten(req, res, next) {
  const data = model.getOneKitten()
  res.status(200).join({ data })
}

//createKittens
function createKittens(req, res, next) {
  const result = model.create(req.body)

  if(result.errors) {
    return next({
      status: 400,
      message: 'Could not make new kittens',
      errors: result.errors
    })
  }
  res.status(201).json({ data: result })
}

//createOneKitten
function createOneKitten(req, res, next) {
  const result = model.create(req.body)

  if(result.errors) {
    return next({
      status: 400,
      message: 'Could not make a new kitten'
      errors: result.errors
    })
  }
  res.status(201).json({ data: result })
}

//deleteOneKitten
function deleteOneKitten(req, res, next) {

}

module.exports = {
  getAllKittens,
  createKittens,
  createOneKitten,
  deleteOneKitten
}
