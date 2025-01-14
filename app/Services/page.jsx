"use client"
import AddProductForm from '@/components/AddProductForm'
import Navbar from '@/components/Navbar'
import Productcard, { products } from '@/components/Productcard'
import Spinner from '@/components/Spinner'
import React, { useEffect, useState } from 'react'

export default function Services() {
  
   const products = [
    {
      image:'/food.jpg',
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?",
      price:320
    },
    {
      image:'/herotif.jpg',
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?",
      price:600
    },
    {
      image:'/Jampers.jpg',
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?",
      price:200
    },
    {
      image:'/food.jpg',
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?",
      price:20
    },
    {
      image:'/vegetables.jpg',
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?",
      price:500
    },
    {
      image:'/side-view-organic-fresh-juices-bottles-served-with-tubes-fruits-wooden-cutting-board.jpg',
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?",
      price:900
    },
    {
      image:'/woman-shopping.jpg',
      name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque?",
      price:100
    }
  ]
  const storedProducts =JSON.parse(localStorage.getItem('products')) || products
  console.log(storedProducts)
  const [myProducts , setMyProducts]=useState(storedProducts)
  console.log(myProducts , "theses are the products")

  function transporter(newProduct){
    setMyProducts((prevProducts)=> 
      {
        const updatedProducts=[...prevProducts, newProduct]
        localStorage.setItem('products',JSON.stringify(updatedProducts))
         return updatedProducts
       }
    )
   
    // console.log(myProducts , "theses are the products from transporter")

  }
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
                <Productcard products={myProducts}/>
                <AddProductForm transporter={transporter}/>
        </div>
      )}

    </div>
  )
}
