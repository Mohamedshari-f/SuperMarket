import {Routes, Route, BrowserRouter,} from "react-router-dom";
import Customer from "./costomer/costomer";
import CustomerLogin from "./costomer/logincostomer";
import Dashboard from "./dashboard/dashboard";


function App(){
  return <BrowserRouter>
  <Routes>

    <Route path="/" element= {<Dashboard/> }/>
   
    <Route path="/Customer" element= {<Customer/> }/>
    <Route path="/CustomerLogin" element= {<CustomerLogin/> }/>
  </Routes>

  </BrowserRouter>
}
export default App