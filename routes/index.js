const express = require('express')
const Router = express.Router()

const postRegisterRoute = require('./postRegisterRoute')
const postLogInRoute = require('./postLoginRoute')

Router.use('/signUp', postRegisterRoute)
Router.use('/login', postLogInRoute)

module.exports = Router
