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

    res.status(201).json(req.body)
  } catch (err) {
    res.status(500).json(err);
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
    })
  }
  res.status(201).json({ data: result })
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
  createKittens,
  createOneKitten
}
