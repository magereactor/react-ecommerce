const express = require("express")
const dotenv = require("dotenv")
const connectDatabase = require("./config/db")
const ProductRoutes = require("./routes/productRoutes")
const {notFound, errorHandler} = require("./middleware/errorMiddleware")

dotenv.config()

//connect to database
connectDatabase()

const app = express()

//mount routers
app.use("/api/products", ProductRoutes);

//mount error handling middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`
   Server started at port ${PORT}. Server running in ${process.env.NODE_ENV}
`))