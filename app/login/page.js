"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const router = useRouter()

  const submitBtn = (e) => {
    e.preventDefault()
    if (data.email !== "" && data.password !== "") {
      router.push('/')
    }
    console.log(data)
  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[#f5f1d7]">
        <div className="bg-[#1b2038] p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-100">Email</label>
              <input type="email" id="email" name="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                              p-2 text-black"
                required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-100">Password</label>
              <input type="password" id="password" name="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
                             text-black p-2"
                required />
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md
                                        hover:bg-indigo-700 focus:outline-none focus:ring-2
                                        focus:ring-indigo-500 focus:ring-opacity-50" onClick={submitBtn}>

              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
