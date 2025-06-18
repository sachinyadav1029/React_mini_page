import React from "react";
import './App.css'

const Product = ({ imgurl , dishname , hotalname , buttext }) => {
  return (
    <div className="w-[20vw] h-[40vh] rounded-2xl bg-sky-100 shadow-lg shadow-black/50 backdrop-blur-md flex flex-col ml-5 ">
       <img src={imgurl} className="w-[15vw] h-[20vh] ml-auto mr-auto mt-5 rounded-lg"/>
       <h1 className="text-center text-2xl capitalize" >{dishname} </h1>
       <h2 className="text-center text-2xl capitalize ">{hotalname}</h2>
       <button className=" w-[6vw] h-[7vh] border border-2  text-white bg-blue-700 ml-auto mr-auto text-center rounded-2xl capitalize">{buttext}</button>

    </div>
  );
}


export default Product



 
