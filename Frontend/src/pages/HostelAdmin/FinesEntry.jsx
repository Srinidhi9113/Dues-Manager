import React,{useState,useEffect} from 'react'

export default function FinesEntry() {
  const [rooms,setRooms] = useState()
  const [showRoom,setShow] = useState()
  const [Room,setRoom] = useState({
    roomID:"",
    studentID:"",
    studentName:"",
    fine:"",
    dueDate:""
})

const [Return,setReturn] = useState(-1)

const handleReturn = ()=>{
  const tempList = rooms
  tempList.splice(Return,1)
  setRooms(tempList)
  setShow(tempList)
  setReturn(-1)
}


const FilterObjects = (Filter)=>{
  return rooms.filter((obj)=>{
      for(const key in Filter){
          if(Filter[key] && !obj[key].toString().includes(Filter[key])) return false
      }
      return true
  })
}

const handleRoomIDChange = (e)=>{
      // console.log(e.target.value)
      const tempBook = Room
      tempBook["roomID"] = e.target.value
      setRoom(tempBook)
      // console.log(FilterObjects({id,name,author,pub}))
      const tempList = FilterObjects(tempBook)
      setShow(tempList)
}

const handleStudentIDChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Room
  tempBook["studentID"] = e.target.value
  setRoom(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handlestudentNameChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Room
  tempBook["studentName"] = e.target.value
  setRoom(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handlefineChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Room
  tempBook["fine"] = e.target.value
  setRoom(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handledueDateChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Room
  tempBook["dueDate"] = e.target.value
  setRoom(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

useEffect(()=>{
  setRooms([
      {
          "roomID":1,
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
      {
        "roomID":2,
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
      {
        "roomID":3,
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
  ])
  setShow([
    {
        "roomID":1,
        "studentID":"PES1UG21CS622",
        "studentName":"Srinidhi P",
        fine:0,
        dueDate:(new Date()).toLocaleDateString('en-GB')
    },
    {
      "roomID":2,
        "studentID":"PES1UG21CS622",
        "studentName":"Srinidhi P",
        fine:0,
        dueDate:(new Date()).toLocaleDateString('en-GB')
    },
    {
      "roomID":3,
        "studentID":"PES1UG21CS622",
        "studentName":"Srinidhi P",
        fine:0,
        dueDate:(new Date()).toLocaleDateString('en-GB')
    },
])
},[])

  return (
    <div className='w-full p-2 relative'>
              {
            Return!==-1 &&
            <div className='bg-white rounded-md border-2 border-gray-400 p-3'>
                <div className='absolute top-3 right-5 hover:cursor-pointer hover:bg-gray-200 p-2 rounded-full' onClick={()=>setReturn(-1)}>X</div>
                <div className='text-3xl font-semibold'>Are you sure you want to cancel the selected fine??</div>
                <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleReturn}>Confirm</button></div>
            </div>
        }
              <div className='grid grid-rows-1 grid-cols-12 p-2 border-2 border-gray-300 rounded-md gap-2'>
            <div className='col-span-2'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Room ID' onChange={handleRoomIDChange}/>
            </div>
            <div className='col-span-3'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student ID' onChange={handleStudentIDChange}/>
            </div>
            <div className='col-span-3'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student Name' onChange={handlestudentNameChange}/>
            </div>
            <div className='col-span-2'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Fine Amount' onChange={handlefineChange}/>
            </div>
            <div className='col-span-2'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Due Date' onChange={handledueDateChange}/>
            </div>
        </div>

            {showRoom && showRoom.map((room,index)=>{
            return <div className='grid grid-cols-12 bg-white my-2 gap-2 rounded-md hover:cursor-pointer' key={index} onClick={()=>setReturn(index)}>
            <div className='col-span-2 px-2 py-1 rounded-md my-1 text-lg'>
                  {room.roomID}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {room.studentID}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {room.studentName}
              </div>
              <div className='col-span-2 px-2 py-1 rounded-md my-1 text-lg'>
                  {room.fine}
              </div>
              <div className='col-span-2 px-2 py-1 rounded-md my-1 text-lg'>
                  {room.dueDate}
              </div>
            </div>
    })}
    </div>
  )
}
