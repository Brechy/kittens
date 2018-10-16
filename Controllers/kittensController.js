const kittensModel = require('../Models/kittensModel.js')

//getAllKittens
function getAllKittens(req, res, next) {
  const data = model.getAllKittens()
  res.status(200).json({ data })
}

//createKittens
function createKittens(req, res, next) {
  const result = model.create(req.body)

  if(result.errors) {
    return next({
      status: 400,
      message: 'Could not make a new kitten',
      errors: result.errors
    })
  }
  res.status(201).json({ data: result })
}

module.exports = {
  getAllKittens,
  createKittens
}
