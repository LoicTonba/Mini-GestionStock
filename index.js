const express = require("express")
const app = express()

require('dotenv').config()

const productRouter = require('./routes/product.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api/v1/product", productRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running....")
})