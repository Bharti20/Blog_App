const express = require('express')
const Router = express.Router()

const postRegisterRoute = require('./postRegisterRoute')

Router.use('/signUp', postRegisterRoute)


module.exports = Router
