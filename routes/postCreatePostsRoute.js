const express = require('express')
const Router = express.Router()
const creatPostsController = require('../controller/postCreatePostsController')

Router.post('/', creatPostsController.create_posts)

module.exports = Router
