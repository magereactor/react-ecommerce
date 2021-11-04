const mongoose = require("mongoose")

const ReviewsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        required: true
    },

    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Reviews = mongoose.model("Reviews", ReviewsSchema)

module.exports = {
    Reviews,
    ReviewsSchema
}