"use client"
import Images from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'



const foodItems = [
  { id: 1, name: "Panner", price: 250 },
  { id: 2, name: "Kulcha", price: 125.56 },
  { id: 3, name: "Pizza", price: 108.34 },
  { id: 4, name: "Biriyani", price: 350.43 },
  { id: 5, name: "Chicken Rice", price: 150.66 },
  { id: 6, name: "Fish", price: 225.58 }
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
              <p className="text-gray-600">Price:  ₹{item.price.toFixed(2)}</p>
              <button onClick={() => navigateToDetails(item.id)} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Order Now!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeMenu
