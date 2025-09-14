const express = require("express")
const productControl = require("../Control/productControl")
const uploadImages = require("../mallware/uploadImage")
const router = express.Router()

// Product
router.post("/create/product", uploadImages.single("img"), productControl.createProduct);
router.get("/read/product",productControl.readProduct)
router.get("/readSingle/product/:id",productControl.ReadSingle)
router.put("/update/product/:id", uploadImages.single("img"), productControl.Update)
router.delete("/delete/product/:id", productControl.Deletebook)
module.exports=router