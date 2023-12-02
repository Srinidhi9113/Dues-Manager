import React from 'react'

export default function FeeCard(props) {
  return (
    <div className='m-3 rounded-lg bg-white px-5 py-10 h-fit text-lg'>
        <div className='text-gray-500'>{props.fee.course_id}</div>
        <div className='flex justify-between items-center'>
        <div><span className='font-bold'>{props.fee.course_name}</span></div>
        <div className='mr-10'>
            <div>Fee: {props.fee.fee}/-</div>
            <div> Pending: {props.fee.pending}/-</div>
            <div> Due Date: {props.fee.dueDate}</div>
        </div>
        </div>
    </div>
  )
}
