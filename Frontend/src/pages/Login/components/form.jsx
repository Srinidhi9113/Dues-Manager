import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
  const navigate = useNavigate()
  const onSubmit = ()=>{
    navigate("/student")
  }
  return (
    <div className='md:h-screen md:w-1/2 flex justify-center items-center'>
        <div className='bg-sky-900 bg-opacity-60 p-10 rounded-lg sm:w-96 flex flex-col'>
            <h2 className='sm:text-5xl text-4xl font-bold text-white mb-7 text-center'>Login</h2>
            <label className='sm:text-xl text-lg text-white sm:mb-3 pl-5 font-semibold'>Username :</label>
            <input className='w-full mb-5 sm:h-10 h-7 rounded-full px-5'/>
            <label className='sm:text-xl text-lg text-white sm:mb-3 pl-5 font-semibold'>Password :</label>
            <input type="password" className='w-full mb-5 sm:h-10 h-7 rounded-full px-5'/>
            <button className='py-3 px-5 bg-sky-950 text-white rounded-lg text-lg hover:shadow-lg' onClick={onSubmit}> Sign In</button>
            <p className='text-white text-center mt-3 hover:text-sky-400 hover:cursor-pointer'>Forgot Password?..</p>
        </div>
    </div>
  )
}
