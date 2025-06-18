import React from 'react'

export const Home = () => {
  return (
    <div className=' w-[100vw] h-[100vh] gap-10 flex bg-gradient-to-br from-pink-200 via-yellow-100 to-white  p-10' >
      <div className='w-[50vw] h-[70vh] border-2 outline outline-white shadow-lg shadow-black/50 backdrop-blur-md  rounded-2xl ml-10'> 
        <img src="/bg-img.png" alt="Home_page_imge"  className='w-[100%] h-[100%] ' />
      </div>
      <div className='w-[35vw] h-[80vh]  border-2 outline outline-white shadow-lg shadow-black/50 backdrop-blur-md  rounded-2xl p-10 space-y-4 '>
        <h1 className='text-6xl font-bold'>Welcome</h1>
        <h1 className='text-3xl'>To Ultimate</h1>
        <h1 className='text-2xl text-red-500'>Food Delivery App ---- Parul ka Zomato 😋</h1>
        <h2 className='text-xl italic'>"GOOD FOOD WITH GOOD MINDSET 🍽️"</h2>
        <button className='px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition'>Explore Now 🚀</button>
      </div>
    </div>
  )
}

export default Home;