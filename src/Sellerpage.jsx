import React from 'react';

export const Sellerpage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center   bg-gradient-to-br from-pink-200 via-yellow-100 to-white ">
      <form className="w-[45vw] h-[80vh]  border border-2 outline outline-2 outline-white  flex flex-col  rounded-3xl shadow-xl " >
        <h1 className='text-center mt-10 mb-10 text-4xl '> 📦 Add New Seller </h1>
         <lable className=" ml-[8.5vw] mb-1.5 "> Seller Name : </lable>
          <input type="text" placeholder=" e.g Yadav Traders " className=" w-[25vw] h-[6vh] border border-1 outline-1 outline-black-200 ml-[8vw] mb-5  rounded-xl" />
          <lable className=" ml-[8.5vw] mb-1.5 "> Email Address : </lable>
       <input type="text" placeholder="  e.g Yadavji@gamil.com" className=" w-[25vw] h-[6vh] border border-1 outline-1 outline-black-200 ml-[8vw] mb-5  rounded-xl" />
       <lable className=" ml-[8.5vw] mb-1.5 "> Shop Name : </lable>
      <input type="text" placeholder=" e.g  Yadav Doodh Dairy " className=" w-[25vw] h-[6vh]  border border-1 outline-1 outline-black-200 ml-[8vw] mb-5 rounded-xl" />
      <lable className=" ml-[8.5vw] mb-1.5 "> Phone No: </lable>
      <input type="number" placeholder=" +91  " className=" w-[25vw] h-[6vh]  border border-1 outline-1 outline-black-200 ml-[8vw] mb-5 rounded-xl" />
      <button className=" w-[10vw] h-[7vh] border border-2 px-4 py-2 bg-blue-500  ml-auto mr-auto text-center rounded-2xl"> 🧑Add Seller </button>
      </form>
    </div>
  );
};

export default Sellerpage;