import React from 'react'

export default function Element(props) {
  return (
    <div className='w-full h-16 pl-4 hover:bg-white hover:bg-opacity-20 py-3 flex flex-row overflow-hidden items-center hover:cursor-pointer'>
        <img src={props.active} className='h-6'/>
        <div className='text-white ml-5 text-lg'>{props.children}</div>
    </div>
  )
}
