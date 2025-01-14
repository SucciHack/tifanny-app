import React from 'react'
import Herocard from './Herocard'
import Link from 'next/link'

export default function Buttonhero() {
  return (
    <div className='flex flex-col justify-center items-center absolute inset-0'>
        <h2 className='text-lg md:text-4xl lg:text-6xl mt-[300px]'>We do the best Ladies hair styles</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, porro.</p>
      <Link href='/Services' id="bottone1" className="px-8 py-4 rounded-md bg-[#d5f365] border-none text-center cursor-pointer transition-transform duration-400 hover:shadow-[7px_5px_56px_-14px_#d5f365] active:transform active:scale-95 active:shadow-[7px_5px_56px_-10px_#d5f365] z-10 text-white mt-3">
        <strong>Discover Services</strong>
        <div>
        </div>
    </Link>
    <div className='flex gap-3 mt-3 flex-col min-h-[300px] md:flex-row'>
    </div>
    </div>
  )
}
