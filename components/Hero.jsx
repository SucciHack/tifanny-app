import Image from 'next/image'
import React from 'react'
import Buttonhero from './Buttonhero'

export default function Hero() {
  return (
    <div>
      <div className='relative'>
        <div>
        <Image src='/woman-shopping.jpg' alt='image' width={6000} height={4000} className='h-screen object-cover'/>
        <div className='bg-black h-[auto] opacity-50 absolute inset-0'>
        </div>
        <Buttonhero/>
        </div>
      </div>
    </div>
  )
}
