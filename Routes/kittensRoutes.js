const express = require('express')
const router = express.Router()
const kittroller = require('../Controllers/kittensController.js')

router.get('/', kittroller.getAllKittens)
router.post('/', kittroller.createKittens)

module.exports = router
