import React from 'react'
import Images from 'next/image'


const page = () => {
  return (
    <>

      <div className="relative bg-[url('/images/About.jpg')] bg-cover bg-center text-white p-[10%] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center z-10">Our Story</h1>
      </div>

      <div className="bg-amber-50 text-gray-800 p-8 md:p-16">
        <p className="text-2xl font-extrabold md:text-4xl mb-4 text-amber-700 text-center">Welcome To The India Restaurant</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Delicious Food, Friendly Staff, Cozy Atmosphere & Positive Emotions!</h2>

        <div className="flex flex-col md:flex-row justify-around items-center">
          <p className="text-md md:text-lg mb-8 md:w-1/2">
            Haji Syed Mohammad Kalim built a small eatery more than 40 years ago to provide lip-smacking Mughlai dishes at pocket-friendly prices. The place garnered immense popularity in no time because they delivered palatable delicacies consistently at a very reasonable range. Today, the proprietors of India Restaurant, Syed Anwar Azeem, Syed Misbah Kalim, and Syed Shahmeer Kalim, took forward the legacy of their father to a different dimension. They have collected their father’s dream and changed it into a beautiful reality. The India restaurant currently provides a delightful and vibrant ambiance having a seating arrangement for 300 people. The restaurant now has added heterogeneity in its menu with Indian and Chinese cuisine. This place still holds its roots and swears by serving the best biryani in town. It is also exploring and experimenting with other flavours and cuisines to give new aspects to the place.
          </p>
          <Images src="/images/chicken.jpg" alt="Food item" width={100} height={200} className="rounded-lg shadow-lg md:ml-8 md:w-1/2" />
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center mt-8">
          <Images src="/images/kabab.jpg" alt="Food item" width={100} height={100} className="rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8  md:w-1/2 " />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h1>
            <p className="text-md md:text-lg">To help our customers enjoy simple edible pleasures and reach their hearts through their stomachs.</p>
          </div>
        </div>
      </div>
    </>


  )
}

export default page
