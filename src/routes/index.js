const express = require ('express'),
router = express.Router(),
userRouter = require('./User.router')
// postRouter = require('./Post.router'),
categoryRouters = require('./Category.router')

router.use('/user', userRouter)
// router.use('/post', postRouter)
router.use('/category', categoryRouters)

module.exports = router