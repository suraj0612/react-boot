import React from 'react'
import Shop from './pages/Shop';
import Navbar from './Components/Navbar';
import { Route , Routes } from 'react-router-dom';
import Cart from './pages/Cart'

const Appa = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/' element={<Shop/>}/>
        </Routes>
    </div>
  )
}

export default Appa;
