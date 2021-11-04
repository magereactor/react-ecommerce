const mongoose = require("mongoose")

const connectDatabase = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Database connected: ${dbConnection.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDatabase