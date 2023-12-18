const Post = require('../models/Product.model')

const createProduct = async (req, res) => {
    try {
        const post = new Post(req.body)
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
        const resp = await Post.find()
                .populate('category')
                .populate('user')
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

        const resp = await Post.findByIdAndUpdate(
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
        const resp = await Post.findByIdAndDelete(req.body.postId)

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