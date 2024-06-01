"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import Images from 'next/image'
import { FaArrowDown } from "react-icons/fa";


const Rating = dynamic(() => import("@/components/Rating"), { ssr: false })


const page = ({ params }) => {

    const foodItems = [
        { id: 1, name: "Panner", price: 250, rating: 3.5 },
        { id: 2, name: "Kulcha", price: 125.56, rating: 4.5 },
        { id: 3, name: "Pizza", price: 108.34, rating: 2.8 },
        { id: 4, name: "Biriyani", price: 350.43, rating: 4.8 },
        { id: 5, name: "Chicken Rice", price: 150.66, rating: 3.1 },
        { id: 6, name: "Fish", price: 225.58, rating: 4 }
    ]



    const { product } = params;
    const item = foodItems.find(item => item.name === product);


    if (!item) {
        return <p>Item not found</p>;
    }

    return (
        <div className="flex gap-10 p-10 mt-10 items-center justify-center">
            <div className="flex-shrink-0">
                <div className='rounded-md overflow-hidden max-w-xs mx-auto'>
                    <Images src={`/images/${item.name}.jpg`} alt='Food item' width={600} height={250} />
                </div>
            </div>
            <div className="flex-grow">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <h1 className="font-bold text-2xl mb-2 text-gray-800">{item.name}</h1>
                        <p className="text-gray-700 text-base">
                            Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomato, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
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

                        <button onClick={() => { /* function to handle the click event */ }}
                            className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Book your Order
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page
