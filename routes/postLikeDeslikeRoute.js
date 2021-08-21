const express = require('express')
const Router = express.Router()
const postLikeDeslikeController = require('../controller/postLikeDeslikeController')

Router.post('/', postLikeDeslikeController.likes_deslikes)

module.exports = Router