const express = require("express")
const router = express.Router()
const Product = require("../models/productModel")
const asyncHandler = require("express-async-handler")

// @desc    Fetch All Products
// @route   GET /api/products
// @access   Public
router.get("/", asyncHandler( async(req, res) => {
    const products = await Product.find({})
    return res.json(products)
}))


// @desc    Fetch Single Product
// @route   GET /api/products/:id
// @access   Public
router.get("/:id", asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) {
        return res.json(product)
    }

    throw new Error("Product Not Found.")
}))

module.exports = router