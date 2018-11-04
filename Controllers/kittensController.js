const kittensModel = require('../Models/kittensModel.js')

//getAllKittens
function getAllKittens(req, res, next) {
  const data = model.getAllKittens()
  res.status(200).json(data)
}

//getOneKitten
function getOneKitten(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);

    const data = model.getOneKitten(id);
    if(data) {
      res.status(200).json(data);
    } else {
      res.status(404).end();
    }
  } catch(err) {
    res.status(400).json("invalid request");
  }
}

//createKittens
function createKitten(req, res, next) {
  try {
    const result = model.updateKitten(req.body)

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}

//createOneKitten
function updateKitten(req, res, next) {
  try {
    const result = model.updateKitten(req.body)

    res.status(200).json(result)
  } catch (err) {
    res.status(400).json(err);
  }
}

//deleteOneKitten
// async function deleteOneKitten(req, res, next) {
//   try {
//     const id = parseInt(req.params.id, 2);
//
//     if(success) {
//       res.status(204).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch(err) {
//     next(err);
//   }
// }

module.exports = {
  getAllKittens,
  getOneKitten,
  createKitten,
  updateKitten,
}
