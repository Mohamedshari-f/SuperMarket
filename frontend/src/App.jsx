<<<<<<< HEAD
import {Routes, Route,} from "react-router-dom";
import Customer from "./costomer/costomer";
// import Home from "./Components/Home";
// import Product from "./Components/productDisplay";
// import Addproduct from "./Components/Addproduct";
// import UpdateProduct from "./Components/updateproduct";
// import Carts from "./Components/Carts";
// import Customer from "./Components/CustomerReg";
// import CustomerLogin from "./Components/customerLogin";
// import DashboardCards from "./Components/cards";
// import Dashboard from "./Components/Dashboard";

function App(){
  return <Routes>
    {/* <Route path="/product" element={<Product />}/> */}
    {/* <Route path="/cart" element={<Carts />}/> */}
    {/* <Route path="/" element= {<Home /> }/> */}
    {/* <Route path="/addproduct" element= {<Addproduct /> }/> */}
    {/* <Route path="/updateproduct/:id" element= {<UpdateProduct />}/> */}
    <Route path="/Customer" element= {<Customer/>}/>
    {/* <Route path="/cards" element= {<DashboardCards />}/> */}
    {/* <Route path="/dash" element= {<Dashboard />}/> */}
    <Route path="/customerlogin" element= {<CustomerLogin /> }/>
  </Routes>
=======
import { useState } from 'react'

import './App.css'
import AddProduct from './Product/addbook'
import Book from './Product/Book'
import Cart from './Product/Cart'


function App() {

  return <>
 
  </>
>>>>>>> fb76f8d59d5934ccc6c7acd0514dfde9a71eea80
}
export default App