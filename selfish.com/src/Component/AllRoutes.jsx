import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Bag from '../Pages/Bag'
import Gifts from '../Pages/Gifts'
import Home from '../Pages/Home'

import Mens from '../Pages/Mens'
import NewIn from '../Pages/NewIn'
import Outwear from '../Pages/Outwear'
import Register from '../Pages/Register'
import Stories from '../Pages/Stories'
import Values from '../Pages/Values'
import Womens from '../Pages/Womens'
import Children from '../Pages/Children'
import Cart from '../Pages/Cart'
import SinglePage from '../Pages/SinglePage'


import PaymentPage from '../Pages/Paymentpage'

import AdminPage from '../Admin/AdminPage'
import PrivateRoutes from './PrivateRoutes'
const AllRoutes = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>}></Route>
       
        <Route path="/childrens" element={<Children/>}></Route>
        <Route path="/mens" element={<Mens/>}></Route>
        <Route path="/womens" element={<Womens/>}></Route>
        <Route path="/outwear" element={<Outwear/>}></Route>
        <Route path="/bag" element={<Bag/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/values" element={<Values/>}></Route>
        <Route path="/newin" element={<NewIn/>}></Route>
        <Route path="/stories" element={<Stories/>}></Route>
        <Route path="/gifts" element={<Gifts/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/description/:id" element={<SinglePage/>}></Route>
       <Route  path="/adminpage" element={<PrivateRoutes><AdminPage/></PrivateRoutes>}></Route>
        <Route path="/paymentpage" element={<PaymentPage/>}></Route>
      </Routes>
   
  )
}

export default AllRoutes
