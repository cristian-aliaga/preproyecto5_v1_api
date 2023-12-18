const express = require ('express'),
router = express.Router(),
userRouter = require('./User.router')
productRouter = require('./Product.router'),
categoryRouters = require('./Category.router')

router.use('/user', userRouter)
router.use('/post', productRouter)
router.use('/category', categoryRouters)

module.exports = router