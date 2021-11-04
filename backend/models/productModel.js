const mongoose = require("mongoose")
const {ReviewsSchema} = require("./reviewsModel")

const ProductSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    category: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    reviews: [ReviewsSchema],

    rating: {
        type: Number,
        require: true,
        default: 0
    },

    numReviews: {
        type: Number,
        required: true,
        default: 0
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },

    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product