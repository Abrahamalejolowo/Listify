import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div>
        <div className=' lg:w-[60%] md:w-[70%] sm:w-[70%] mx-auto mt-10 p-5 border border-gray-300 rounded-lg bg-white shadow-lg '>
                <img src="src/assets/listify-logo.png" className='w-10 h-10 ml-[45%]' alt="" />
                <h1 className=' lg:text-4xl md:text-3xl text-3xl font-bold  lg:px-[29%] md:px-[15%] px-[5%]  '>Welcome to Listify</h1>
            <p className='text-xl lg:px-10 mt-4  '> A simple and intuitive To-Do List app to help you organize tasks, stay productive, and manage your daily activities effortlessly. </p>
            <div className='flex justify-between px-10 mt-10'>
                <Link to={"/Signin"} className='bg-black text-white py-3 px-5 text-2xl font-semibold hover:text-red-500'>Signin</Link>
                <Link to={"/Login"} className='bg-black text-white text-2xl font-semibold py-3 px-5 hover:text-red-500'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Welcome
