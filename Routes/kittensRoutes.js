const express = require('express')
const router = express.Router()
const kittroller = require('../Controllers/kittensController.js')

router.get('/kittens', kittroller.getAllKittens)
router.get('/kittens/:id', kittroller.getOneKitten)

router.post('/kittens', kittroller.createKittens)
router.put('/kittens/:id', kittroller.putOneKitten)

router.delete('/kittens/:id', kittroller.deleteOneKitten)

module.exports = router
