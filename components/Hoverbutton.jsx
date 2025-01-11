import React from 'react'

export default function Hoverbutton() {
  return (
    <div>
        <a className="fancy relative bg-transparent border-2 border-black text-white font-bold uppercase tracking-wide text-sm inline-block float-right p-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white" href="#">
            <span className="top-key absolute h-[2px] w-[1.5625rem] bg-gray-300 top-[-2px] left-[0.625rem] transition-all duration-500 ease-out"></span>
            <span className="text block text-black hover:text-white text-lg leading-relaxed pl-8 text-left transition-all duration-300 ease-in-out">Add to Cart</span>
            <span className="bottom-key-1 absolute h-[2px] w-[1.5625rem] bg-gray-300 right-[1.875rem] bottom-[-2px] transition-all duration-500 ease-out"></span>
            <span className="bottom-key-2 absolute h-[2px] w-[0.625rem] bg-gray-300 right-[0.625rem] bottom-[-2px] transition-all duration-500 ease-out"></span>
    </a>
    </div>
  )
}
