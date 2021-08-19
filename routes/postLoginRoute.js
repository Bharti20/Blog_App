const express = require('express')
const Router = express.Router()

const postLoginController = require('../controller/postLoginController')

Router.post('/', postLoginController.log_in)

module.exports = Router