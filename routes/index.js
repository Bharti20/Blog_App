const express = require('express')
const Router = express.Router()

const postRegisterRoute = require('./postRegisterRoute')
const postLogInRoute = require('./postLoginRoute')
const createPostsRoute = require('./postCreatePostsRoute')
const getAllPostsRoute = require('./getAllPostRoute')
const likeDeslikesRoute = require('./postLikeDeslikeRoute')
const getLikesDeslikesRoute = require('./getLikesDeslikesRoute')

Router.use('/signUp', postRegisterRoute)
Router.use('/login', postLogInRoute)
Router.use('/createPost', createPostsRoute)
Router.use('/allPosts',getAllPostsRoute )
Router.use('/likeDeslike', likeDeslikesRoute)
Router.use('/showLikesDeslikes', getLikesDeslikesRoute)

module.exports = Router
