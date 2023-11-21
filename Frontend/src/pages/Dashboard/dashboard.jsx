import React, { useState } from 'react'
import Topbar from './components/topbar'
import Body from './components/body'


export default function Dashboard() {
  const [tab,setTab] = useState("home")
  return (
    <div className='bg-gray-100 h-screen flex flex-col'>
      <Topbar/>
      <Body/>      
    </div>
  )
}
