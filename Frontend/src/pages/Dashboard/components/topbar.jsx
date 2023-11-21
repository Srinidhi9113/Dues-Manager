import React from 'react'
import MenuBurger from '../../../assets/menu-burger.svg'
import User from '../../../assets/user.svg'

export default function Topbar() {
  return (
    <div className='w-full flex flex-row bg-white items-center px-5 py-3 justify-between'>
      <img src={MenuBurger} alt="Menu" className='sm:h-7 h-5'/>
      <h1 className='sm:text-3xl text-2xl text-sky-950'>My University</h1>
      <div className='sm:h-10 sm:w-10 h-8 w-8 rounded-full bg-gray-300 flex flex-col justify-end items-center overflow-hidden'>
        <img src={User} className='h-8'/>
      </div>
    </div>
  )
}
