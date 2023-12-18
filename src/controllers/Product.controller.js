const Product = require('../models/Product.model')

const createProduct = async (req, res) => {
    try {
        const post = new Product(req.body)
        const resp = await post.save()
        return res.json({
            message: 'Producto Creado',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err.message
        })
    }
}

const getProduct = async (req, res) => {
    try {
        const resp = await Product.find()
                .populate('category')
        return res.json({
            message: 'Product',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err.message
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const newData = req.body

        const resp = await Product.findByIdAndUpdate(
            newData.postId,
            { $set: newData },
            { new: true })

        return res.json({
            message: 'Producto Actualizado',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const resp = await Product.findByIdAndDelete(req.body.postId)

        return res.json({
            message: 'Producto Eliminado',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err
        })
    }
}

module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}