import Image from 'next/image'
import React from 'react'

export default function Herocard() {
  return (
    <div>
        <div className="w-[90%] mx-auto md:max-w-xs border border-blue-200 rounded-xl bg-transparent p-4">
            <div className="flex items-center gap-4">
                <span className="flex-shrink-0 flex items-center justify-center rounded-full bg-blue-500 p-2 text-white">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                    <path clipRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fill-Rule="evenodd"></path>
                </svg>
                </span>
                <p className="font-semibold text-white">New message!</p>
            </div>
            <Image src='/herotif.jpg' alt='' width={4565} height={3814} className='w-[600px] h-[200px] object-cover mt-2'/>
            <p className="mt-4 text-white hidden md:block lg:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde
                vel adipisci blanditiis voluptates eum. Nam, cum minima?
            </p>

            <div className="mt-6">
                <a className="block w-full rounded-lg bg-blue-600 text-white text-center font-semibold text-sm leading-5 py-3 px-5" href="">
                Take a Look
                </a>
            </div>
        </div>

    </div>
  )
}
