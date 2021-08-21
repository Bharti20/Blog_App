const express = require('express')
const Router = express.Router()

const getLikesDeslikesController = require('../controller/getLikesDeslikesController')

Router.get('/', getLikesDeslikesController.allLikesDeslikes)

module.exports = Router