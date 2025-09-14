import React, { useEffect, useState } from "react";

export default function Cart() {

const [productsData, setProducts] = useState([]);
console.log(productsData);

useEffect(() => {
  const getData = JSON.parse(localStorage.getItem("products")) || []
  const update=getData.map(item=>({
    ...item,quantity:1,maxQuantity:item.qu
  }))
  setProducts(update)
}, []);

const handleDeleteItem=(id)=>{
  const removeItem=productsData.filter((item)=>item._id!==id)
  localStorage.setItem("products",JSON.stringify(removeItem))
  setProducts(removeItem)
}

const TotalPrice = productsData.reduce((sum, item) => sum + Number(item.price*(item.quantity)), 0);

const handleIncrement = (id) => {
  setProducts(prd => prd.map(
    item => item._id === id ? { ...item, quantity: item.quantity + 1 } : item
  ));
};

const handleDecrement = (id) => {
  setProducts(prd => prd.map(
    item => item._id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
  ));
};

  return (
    <div className="flex justify-between gap-6 p-6 bg-gray-100 min-h-screen">
      
      <div className="w-2/3 bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

       
        <div className="grid grid-cols-5 font-semibold border-b pb-2 mb-2">
          <span className="col-span-2">Product Details</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Price</span>
          <span className="text-center">Total</span>
        </div>

      {
  productsData.map((item) => {
    return  <div  className="grid grid-cols-5 items-center border-b py-4">
        <div className="col-span-2 flex items-center gap-4">
          <img src={`http://localhost:7000/allimages/${item.PrImage}`} alt={item.PrImage} className="w-20 h-28 object-contain"/>
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-purple-600">{item.desc}</p>
            <button onClick={()=>handleDeleteItem(item._id)} className="text-red-500 text-sm mt-1">Remove</button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button  onClick={()=>handleDecrement(item._id)}  className="px-2 py-1 bg-gray-200 rounded">-</button>
          <span>{item.quantity}</span>
          <button onClick={()=>handleIncrement(item._id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
        </div>

        <p className="text-center">${item.price}</p>
        <p className="text-center">${item.price*item.quantity}</p>
      </div>
   
  })
}

      </div>

     
      <div className="w-1/3 bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Items</span>
          <span>{productsData.length}</span>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Shipping</label>
          <select className="w-full border rounded4r p-2">
            <option>Choose delivery option</option>
            <option>Delivery</option>
            <option>On our center</option>
          </select>
        </div>

        
        <div className="mb-4">
          <label className="block text-sm mb-1">Promo Code</label>
          <div className="flex">
            <input type="text" className="border rounded-l p-2 w-full" placeholder="Enter your code" />
            <button className="bg-red-500 text-white px-4 rounded-r"> Apply </button>
          </div>
        </div>

       
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total Cost</span>
          <span>${TotalPrice}</span>
        </div>

    
        <button className="w-full bg-purple-600 text-white py-2 rounded-xl">  Checkout </button>
      </div>
    </div>
  );

}