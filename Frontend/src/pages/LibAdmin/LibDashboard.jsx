import React from 'react'
import Topbar from './TopBar'
import Body from './Body'

export default function LibDashboard() {
  return (
    <div className='bg-gray-100 h-screen flex flex-col'>
      <Topbar/>
      <Body/>
    </div>
  )
}
