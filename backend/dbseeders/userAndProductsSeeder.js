const mongoose = require("mongoose")
const dotenv = require("dotenv")
const users = require("../data/users")
const products = require("../data/products")
const User = require("../models/userModel")
const Product = require("../models/productModel")
const connectDatabase = require("../config/db")

dotenv.config()
connectDatabase()

const importData = async () => {
    try {
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        
        const adminUser = createdUsers[0]._id

        await Product.deleteMany()
        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log("Data Imported!")
        process.exit(1)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

const destroyData = async() => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        console.log("Data Destroyed!")
        process.exit(1)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

if( process.argv[2] === '-d' ) {
    destroyData()
} else {
    importData()
}