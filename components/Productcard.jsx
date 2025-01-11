import Image from 'next/image'
import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Hoverbutton from './Hoverbutton';

export const products = [
  {
    image:'/food.jpg',
    name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?"
  },
  {
    image:'/herotif.jpg',
    name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?"
  },
  {
    image:'/Jampers.jpg',
    name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?"
  },
  {
    image:'/food.jpg',
    name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?"
  },
  {
    image:'/vegetables.jpg',
    name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?"
  },
  {
    image:'/side-view-organic-fresh-juices-bottles-served-with-tubes-fruits-wooden-cutting-board.jpg',
    name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?"
  },
  {
    image:'/woman-shopping.jpg',
    name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?"
  }
]

export default function Productcard() {
  
  return (
   <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[90%] mx-auto my-auto mt-10'>
   {
    products.map((product,i)=>{
      return  (
        <div key={i} className='text-black bg-gradient-to-tr from-[#fffbeb] to-[#F2F2F2] rounded-md overflow-hidden shadow-lg'>
      <Image src={product.image} alt={product.name} width={4565} height={3814} className='w-[100%] h-[200px] object-cover'/>
      <div className="flex flex-col gap-2 text-lg p-3 items-center justify-center ">
        <p className='text-sm'>{product.name}</p>
        <div className="flex gap-2">
            <Hoverbutton/>
        </div>
      </div>
      </div>
      )
    })
   }
   </div>
  )
}
