import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
function Book(){
    const [data,setData]=useState([])
    const handlePost=()=>{
        axios.get("http://localhost:7000/read/product").then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        handlePost()
    },[])
     const  handleDelete=(id)=>{
      axios.delete(`http://localhost:7000/delete/product/${id}`).then(()=>{
        alert("succes deleted")
        handlePost()
    })
    }

 
    return <>

      <table className="text-center ml-10 mt-10 w-[900px] ">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="px-4 py-3 text-center font-semibold">Image</th>
              <th class="px-4 py-3 text-center font-semibold">Name</th>
              <th class="px-4 py-3 text-center font-semibold">Description</th>
              <th class="px-4 py-3 text-center font-semibold">Price</th>
              <th class="px-4 py-3 text-center font-semibold">Quantity</th>
              <th class="px-4 py-3 text-center font-semibold">Category</th>
              <th class="px-4 py-3 text-center font-semibold">status</th>
              <th class="px-4 py-3 text-center font-semibold">Actions</th>
            </tr>
          </thead>
{
    data.map((item)=>{
        return <tbody class="text-center">
            <tr class="hover:bg-blue-50">
           <td class="px-4 py-3  w-20"><img src={`http://localhost:7000/allimages/${item.PrImage}`} alt={item.PrImage} /></td>
              <td class="px-4 py-3">{item.name}</td>
              <td class="px-4 py-3">{item.desc}</td>
               <td class="px-4 py-3">{item.price}</td>

              <td class="px-4 py-3 ">{item.quantity}</td>
              <td class="px-4 py-3 ">{item.Category}</td>
              <td class={`${item.status==="Available" ? "text-green-500" : "text-red-600"}`}>{item.status}</td>
              <td class="px-4 py-3">
                <div>
<Link to={`/update/product/${item._id}`} > <i className="fa-solid fa-edit text-green-800"></i> </Link>
<i   onClick={() => handleDelete(item._id)}   className="fa-solid fa-trash text-red-700 cursor-pointer"></i>

                </div>
              </td>

            </tr>
           
          </tbody>
    })
}
        </table>
    </>
}
export default Book