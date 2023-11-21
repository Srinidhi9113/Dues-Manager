import React from 'react'

export default function FineCard(props) {
  return (
    <div className='m-3 rounded-lg bg-white px-5 py-10 h-fit text-lg'>
        <div className='text-gray-500'>{props.fine.libID}:{props.fine.libName}</div>
        <div className='flex justify-between items-center'>
        <div><span className='font-bold'>Fine On: </span>{props.fine.bookName}({props.fine.bookID})</div>
        <div className='mr-10'>
            <div>Fine: {props.fine.fine}/-</div>
            <div> Pending: {props.fine.pending}/-</div>
            <div> Due Date: {props.fine.dueDate}</div>
        </div>
        </div>
    </div>
  )
}
