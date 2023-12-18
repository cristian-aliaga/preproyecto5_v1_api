const express = require('express'),
router = express.Router(),
{
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/Product.controller')

router.post('/', createProduct)
router.get('/', getProduct)
router.put('/',updateProduct)
router.delete('/', deleteProduct)

module.exports = router