import React, { useState } from 'react'
import Element from './sidebar-element'
import CourseActive from '../../../assets/computer-active.svg'
import Home from './home'
import Library from './Library/library'
import Laboratory from './Laboratory/laboratory'
import Hostel from './Hostel/hostel'
import Mess from './Mess/mess'
import Course from './Course/course'

export default function Body() {
    const [tab,setTab] = useState("Home")
    const tabsList = ["Library","Laboratory","Hostel","Mess","Courses"]
  return (
    <div className='flex flex-row h-full'>
        <div className='h-full rounded-md w-14 bg-sky-800 hover:w-52 transition-all duration-100 flex flex-col'>
            {tabsList.map((tab,index)=><div onClick={()=>setTab(tab)} key={index}><Element active={CourseActive}>{tab}</Element></div>)}
        </div>
        
      {
        tab==="Home" && <Home/>
      }

      {
        tab==="Library" && <Library/>
      }
      {
        tab==="Laboratory" && <Laboratory/>
      }
      {
        tab==="Hostel" && <Hostel/>
      }
      {
        tab==="Mess" && <Mess/>
      }
      {
        tab==="Courses" && <Course/>
      }
    </div>
  )
}
