import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
function AddProduct() {
    const [name,setname]=useState("")
    const [price,setprice]=useState("")
    const [desc,setdesc]=useState("")
    const [quantity,setquantity]=useState("")
    const [img,setimg]=useState("")
    const [status,setStatus]=useState("")
    const [Category,setCategory]=useState("")
    const navigate=useNavigate()

    const handlePost = (e) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append("name", name)
  formData.append("price", price)
  formData.append("desc", desc)
  formData.append("quantity", quantity)
  formData.append("status", status)
  formData.append("img", img); 
  formData.append("Category", Category);

  axios.post("http://localhost:7000/create/product", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  })
  .then(() => {Swal.fire({
  title: "Successful Added",
  icon: "success",
  draggable: true
});
     navigate("/Book") })
  .catch(err => console.error(err))
}

  return (
    <form className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-700 p-6 rounded-lg w-96">
        
        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="enter name" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={price} onChange={(e)=>setprice(e.target.value)} type="text" placeholder="enter Price" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={desc} onChange={(e)=>setdesc(e.target.value)} type="text" placeholder="enter desc" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={quantity} onChange={(e)=>setquantity(e.target.value)} type="text" placeholder="enter quantity" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="enter category" className="w-80 mb-3 px-3 py-2 rounded" />
        <input type="file" name="img"  onChange={(e) => setimg(e.target.files[0])}  className="w-80 mb-3 px-3 py-2 rounded border border-gray-300 bg-white text-gray-700 file:bg-orange-600 file:text-white file:px-4 file:py-2 file:rounded file:border-none hover:file:bg-orange-700"/>
        
        <input value={status} onChange={(e)=>setStatus(e.target.value)} type="text" placeholder="enter status" className="w-80 mb-3 px-3 py-2 rounded" />
        <button onClick={handlePost} className="w-80 bg-white text--600 font-semibold py-2 rounded">Add Product</button>

      </div>
    </form>
  )
}
export default AddProduct
