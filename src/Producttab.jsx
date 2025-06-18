import React from 'react'
import Product from './Product'
import './App.css'
export const Producttab = () => {
  return (
    <div  className=" w-full min-h-screen flex gap-4 justify-start items-center  bg-gradient-to-br from-pink-200 via-yellow-100 to-white " >

        <Product imgurl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" dishname="Pizza" 
        hotalname="sumitHotel" buttext="Addtocart" />

         <Product imgurl="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D" dishname="Cake" 
        hotalname="sumitHotel" buttext="buy now"
        />
         <Product imgurl="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww" dishname="burger" 
        hotalname="sumitHotel" buttext="Addtocart"
        />
         <Product imgurl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" dishname="Pizza" 
        hotalname="sumitHotel" buttext="Addtocart"
        />

    </div>
  )
}

export default Producttab
