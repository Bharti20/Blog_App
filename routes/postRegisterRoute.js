const express = require('express')
const Router = express.Router()
const postRegisterController = require('../controller/postRegisterController')

Router.post('/', postRegisterController.register)

module.exports = Router

