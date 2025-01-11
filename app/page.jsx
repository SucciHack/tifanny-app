"use client"
import React, { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Spinner from '@/components/Spinner'

export default function page() {
  const [loading, setLoading] = useState(true)
      useEffect(()=>{
          const timer = setTimeout(()=>{
              setLoading(false)
          },1000)
          return ()=> clearTimeout(timer);
      },[])
  return (
  <>
    {loading ? (<Spinner/>): (
      <div>
      <Navbar/>
      <Hero/>
    </div>
    )}
  </>
  )
}
