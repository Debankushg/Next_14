"use client"
import React from 'react'
import Images from 'next/image'

const page = ({ params }) => {

    const foodItems = [
        { id: 1, name: "Panner", price: 250 },
        { id: 2, name: "Kulcha", price: 125.56 },
        { id: 3, name: "Pizza", price: 108.34 },
        { id: 4, name: "Biriyani", price: 350.43 },
        { id: 5, name: "Chicken Rice", price: 150.66 },
        { id: 6, name: "Fish", price: 225.58 }
    ]



    const { product } = params;
    const item = foodItems.find(item => item.id === parseInt(product, 10));
    console.log(item, "params");

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
                        <p className="text-gray-900 font-semibold">Price: ₹{item.price.toFixed(2)}</p>
                        <button onClick={() => { /* function to handle the click event */ }}
                            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Book your Order
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page
