const express = require ("express")
const mongoose = require ("mongoose")
const cors = require("cors")
const ProductRouter=require("./Router/product")



const app = express()
app.use(cors())
app.use(express.json())
app.use(ProductRouter)
app.use("/allImages", express.static("images"))


mongoose.connect("mongodb://localhost:27017/supermarket").then(()=> console.log("sucesseful"))





app.listen(1000,()=>console.log(`server is running`))