const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const productSchema =mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },     
    quantity: { type: Number, required: true },
    PrImage: { type: String, required: true },  
    Category: { type: String, required: true },  
    status:{type:String, enum:["Available","out of stock"], default: "Available"}
  },{ timestamps: true });


productSchema.plugin(AutoIncrement, { inc_field: "id" });

productSchema.pre("save",function(next){
  this.status=this.quantity>0 ? "Available" : "out of stock"
  next()
})


productSchema.pre("updateOne",function(next){
  const update=this.getUpdate()

  const quantity=update.$set?.quantity

  if(quantity!==undefined){
    update.$set.status=quantity>0 ? "Available" : "out of stock"
  }
  next()
})
module.exports = mongoose.model("Product", productSchema);
