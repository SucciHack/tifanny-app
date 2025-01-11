"use client"
import Navbar from '@/components/Navbar'
import Productcard, { products } from '@/components/Productcard'
import Spinner from '@/components/Spinner'
import React, { useEffect, useState } from 'react'

export default function Services() {
  const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        },1000)
        return ()=> clearTimeout(timer);
    },[])
  return (
    <div>
      {loading ?(<Spinner/>):(
        <div className="">
                <Navbar/>
                <Productcard/>
        </div>
      )}

    </div>
  )
}
