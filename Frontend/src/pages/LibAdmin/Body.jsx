import React,{useState} from 'react'
import CourseActive from '../../assets/computer-active.svg'
import Element from './sidebar-element'
import Home from '../Dashboard/components/home'
import BookEntry from './BookEntry'
import BorrowerEntry from './BorrowerEntry'

export default function Body() {
    const [tab,setTab] = useState("Home")
    const tabsList = ["Books Entry","Borrowers Entry"]
  return (
    <div className='flex flex-row h-full'>
      <div className='h-full rounded-md w-14 bg-sky-800 hover:w-60 transition-all duration-100 flex flex-col'>
            {tabsList.map((tab,index)=><div onClick={()=>setTab(tab)} key={index}><Element active={CourseActive}>{tab}</Element></div>)}
        </div>

    {
        tab==="Home" && <Home/>
      }
      {
        tab==="Books Entry" && <BookEntry/>
      }
      {
        tab==="Borrowers Entry" && <BorrowerEntry/>
      }
    </div>
  )
}
