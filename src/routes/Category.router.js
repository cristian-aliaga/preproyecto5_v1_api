const express = require('express'),
router = express.Router(),
{
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/Category.controller')
const auth = require('../middlewares/auth')

router.post('/', createCategory)
router.get('/', getCategories)
router.put('/', updateCategory)
router.delete('/', deleteCategory)

module.exports = router