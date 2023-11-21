import React from 'react'

export default function Modal({handleExit,txnError,enterTransaction,handleSubmit}) {
  return (
    <div className='absolute top-10 left-1/2 transform -translate-x-1/2 w-1/2 bg-white border-2 border-gray-200 z-50 rounded-xl p-5'>
          <div className='absolute top-3 right-5 hover:cursor-pointer p-1 hover:bg-gray-200 rounded-full' onClick={handleExit}>X</div>
          <div className='text-2xl font-semibold mb-2'>Make Payment: </div>
          <label className='text-lg'>Transaction ID:{txnError && <span className='text-red-600 text-xs'> *(Enter a transaction ID)</span>}</label><input className='p-1 rounded-lg w-full border-2 border-gray-200' onChange={enterTransaction}/>
          <div className='flex justify-center items-center mt-3'><button className='px-5 py-1 bg-sky-800 text-white text-lg rounded-lg' onClick={handleSubmit}>Pay</button></div>
    </div>
  )
}
