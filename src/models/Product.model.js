const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    price: { type: String },
    state: { type: Boolean },
    image: { type: String },
    stock: { type: String },
    category: { type: mongoose.ObjectId, ref: 'Category' }
})

const Post = mongoose.model('Product', productSchema)

module.exports = Post
