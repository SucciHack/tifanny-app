import Image from 'next/image'
import React, { useState } from 'react'
import Hoverbutton from './Hoverbutton';

export default function Productcard({products}) {

  return (
    <>
    <div className="p-2 mt-24 flex justify-between items-center px-20">
        <h2 className='text-xl font-bold text-black'>Products Section</h2>
        <button className='py-2 px-3 bg-blue-500 text-white'>Add Product</button>
      </div>
   <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[90%] mx-auto my-auto '>
   {
    products.map((product,i)=>{
      return  (
        <div key={i} className='text-black bg-gradient-to-tr from-[#fffbeb] to-[#F2F2F2] rounded-md overflow-hidden shadow-lg'>
      <Image src={product.image} alt={product.name} width={4565} height={3814} className='w-[100%] h-[200px] object-cover'/>
      <p className='text-sm px-2 text-center'>{product.name}</p>
      <div className="flex flex-col gap-2 text-lg p-3 items-center justify-center ">
      <p className='text-lg font-bold'>${product.price}</p>
        <div className="flex gap-2">
            <Hoverbutton/>
        </div>
      </div>
      </div>
      )

    })
   }
   </div>
</>
  )
}
