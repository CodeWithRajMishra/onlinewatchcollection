import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashBoard from "./AdminDashBoard";
import AddProduct from "./adminpages/AddProduct";
import MyCart from "./pages/MyCart";
import CheckOut from "./pages/CheckOut";
import PaymentDone from "./pages/PaymentDone";



const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>}/>
            <Route path="mycart" element={<MyCart/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="paydone" element={<PaymentDone/>}/>
            </Route>
          </Routes>
          <Routes>
             <Route path="/admin" element={<AdminDashBoard/>}>
              <Route path="addproduct" element={<AddProduct/>}/>
             </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;