const express = require ("express")
const mongoose = require ("mongoose")
const cors = require("cors")




const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/lastproject").then(()=> console.log("sucesseful"))





app.listen(9000,()=>console.log(`server is running`))