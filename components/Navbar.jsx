import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";


export default function Navbar() {
  return (
  <div className='bg-black absolute w-[100%] top-0 z-50'>
      <div className='p-4 flex justify-between text-white items-center  shadow-sm lg:w-[80%] gap-5 mx-auto'>
      <div className="text-sm text-pink-200">
        <div className="flex items-center">
            <h2 className='logo text-2xl md:text-2xl lg:text-3xl'>Tiffany</h2>
        </div>
      </div>
        <div className="justify-between items-center w-[300px] rounded-md overflow-hidden border-[1px] lg:w-[600px] hidden md:flex lg:flex">
            <input type="text" placeholder='Enter a product...'  className='bg-transparent focus:outline-none pl-2 placeholder:text-sm w-[80%]'/>
            <button className='p-3 px-3'><CiSearch/></button>
      </div>
      <div className=" text-white flex text-sm gap-4 md:gap-6 lg:gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="./Services">Services</a>
        <a href="#">Contact Us</a>
        <button className='text-lg'><FaCartPlus/></button>
      </div>
    </div>
  </div>
  )
}
