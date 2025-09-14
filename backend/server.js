const express = require ("express")
const mongoose = require ("mongoose")
const cors = require("cors")



const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/supermarket").then(()=> console.log("sucesseful"))





app.listen(1000,()=>console.log(`server is running`))