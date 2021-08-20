const express = require('express')
const Router = express.Router()

const getAllPostsController = require('../controller/getAllPostsController')

Router.get('/', getAllPostsController.allPosts)

module.exports = Router