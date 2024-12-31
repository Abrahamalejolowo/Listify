import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg bg-white shadow-lg'>
        <div className='flex justify-between ml-2'>
            <h1 className='text-4xl font-bold'>Login</h1>
            <img src="src/conponent/listify-logo.png" alt="" className="w-10 h-10"/>
        </div>
        <p className='text-gray-600 mt-4 text-xl font-thin'>Enter your credentials to access your account</p>
        <div>
            <div>
                <p className='font-semibold text-2xl mt-6'>Email </p>
                <div className='border-black border-[2px] py-2 px-2'><input type='text' placeholder='Email......' required className='w-full outline-none text-[16px]'/></div>
            </div>
            <div>
                <p className='font-semibold text-2xl mt-5'>Password </p>
                <div className='border-black border-[2px] py-2 px-2'><input type='password' placeholder='password......' className='w-full outline-none'/></div>
            </div>
        </div>
        <div className='flex justify-between'>
            <Link to={"/home"} className='  mt-2 px-6 py-2 bg-black text-2xl text-white hover:text-rose-500 font-semibold'>Login</Link>
            <Link to={"/Signin"} className='mt-2  text-xl text-black hover:text-red-500 font-semibold'>Signup</Link>
        </div>
    </div>
  )
}

export default Login