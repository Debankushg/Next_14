"use client"
import Images from 'next/image'
import dynamic from 'next/dynamic'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowDown } from "react-icons/fa";

const Rating = dynamic(() => import("@/components/Rating"), { ssr: false })

const foodItems = [
  { id: 1, name: "Panner", price: 250, rating: 3.5 },
  { id: 2, name: "Kulcha", price: 125.56, rating: 4.5 },
  { id: 3, name: "Pizza", price: 108.34, rating: 2.8 },
  { id: 4, name: "Biriyani", price: 350.43, rating: 4.8 },
  { id: 5, name: "Chicken Rice", price: 150.66, rating: 3.1 },
  { id: 6, name: "Fish", price: 225.58, rating: 4 }
]

const HomeMenu = () => {
  const router = useRouter()

  const navigateToDetails = (id) => {
    router.push(`/productDetails/${id}`)

  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((item) => (
          <div className="bg-white shadow-lg rounded-lg" key={item.id} >
            <Images src={`/images/${item.name}.jpg`} height={50} width={300} alt='Food_items' />
            <div className="p-4">
              <h5 className="text-xl text-black font-semibold mb-2">{item.name}</h5>
              <div className="text-gray-900 font-semibold">
                <Rating value={item.rating} />
                <div>
                  <div className="text-gray-900 font-semibold flex items-center">
                    <span>MRP:</span>
                    <span className="text-gray-400 line-through ml-1">₹{item.price.toFixed(2)}</span>
                    <FaArrowDown className="text-green-500 ml-2 mt-1" size={12} />
                    <span className="text-green-500">5% Off</span>
                  </div>

                </div>
                <div>
                  <span className="">Offered Price:</span>
                  <span className="text-red-500 ml-2">₹{(item.price * 0.95).toFixed(2)}</span>
                </div>
              </div>
              <button onClick={() => navigateToDetails(item.name)} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Order Now!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeMenu
