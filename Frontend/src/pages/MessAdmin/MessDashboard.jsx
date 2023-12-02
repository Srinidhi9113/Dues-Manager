import React from 'react'
import Topbar from '../LibAdmin/TopBar'
import Body from './Body'

export default function MessDashboard() {
  return (
    <div className='bg-gray-100 h-screen flex flex-col'>
      <Topbar/>
      <Body/>
    </div>
  )
}
