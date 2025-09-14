const ProductModel = require("../Model/product");

const createProduct = async (req, res) => {
  try {
    const { name, price, desc, quantity, Category } = req.body;
      const newData = new ProductModel({
      name: name,
      price: price,
      desc: desc,
      quantity: quantity,
      Category: Category,
      PrImage: req.file ? req.file.filename : null,      
    });

    const saveData = await newData.save();
    res.status(201).json(saveData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Server error" });
  }
};

const readProduct = async (req, res) => {
  try {
    const { Category } = req.body || {};
    let filterData = {};

    if (Category) {
      filterData = { Category: Category };  
    }

    const readData = await ProductModel.find(filterData);

    if (readData) {
      res.send(readData);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Server is not reading product" });
  }
};

// read single data
const ReadSingle = async (req, res) => {
  const getData = await ProductModel.findById(req.params.id)
  if (getData) {
    res.status(200).json(getData)
  } else {
    res.status(404).json({ message: "product not found" })
  }
}

// update

const Update = async (req, res) => {
  const updateData = await ProductModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  )
if(updateData){
  res.send("Success Update")
}
}

// delete
const Deletebook = async (req, res) => {
  const removeData = await ProductModel.deleteOne({ _id: req.params.id })
  if(removeData.deletedCount) {
    res.send("Success Deleted")
  } else {
    res.status(404).json({ message: "Product not found" })
  }
}






module.exports={createProduct,readProduct,ReadSingle,Update,Deletebook}