import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Producttab from './Producttab'
import Sellerpage from './Sellerpage'
import Login from './Login'
import Home from './Home'
const Navbar = () => {
  return (
   <>
     {/* {link wala part } */}
     <div className='h-[10vh] w-[100vw]border-2 outline outline-2 outline-black mt-0.5 flex flex-row justify-end items-center bg-gradient-to-br from-rose-100 via-orange-100 to-amber-50   '>
      <Link to="/" className='mr-8 text-black font-semibold'>Home</Link>
  <Link to="/product" className='mr-8 text-black font-semibold'>Product</Link>
  <Link to="/sellerpage" className='mr-8 text-black font-semibold'>Seller</Link>
  <Link to="/login" className='mr-20 text-black font-semibold'>Login</Link>
     </div>

    {/* {brow} */}
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='product' element={<Producttab/>}/>
       <Route path='sellerpage' element={<Sellerpage/>} />
       <Route path='login' element={<Login/>}/>

    </Routes>

   </>
  )
}

export default Navbar