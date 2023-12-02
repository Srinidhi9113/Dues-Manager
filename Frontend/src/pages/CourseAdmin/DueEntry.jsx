import React,{useState,useEffect} from 'react'

export default function FinesEntry() {
  const [courses,setCourses] = useState()
  const [showCourse,setShow] = useState()
  const [Course,setCourse] = useState({
    studentID:"",
    studentName:"",
    dept:"",
    batch:"",
    fine:"",
    dueDate:""
})

const [Return,setReturn] = useState(-1)

const handleReturn = ()=>{
  const tempList = courses
  tempList.splice(Return,1)
  setCourses(tempList)
  setShow(tempList)
  setReturn(-1)
}


const FilterObjects = (Filter)=>{
  return courses.filter((obj)=>{
      for(const key in Filter){
          if(Filter[key] && !obj[key].toString().includes(Filter[key])) return false
      }
      return true
  })
}

const handleStudentIDChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Course
  tempBook["studentID"] = e.target.value
  setCourse(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handlestudentNameChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Course
  tempBook["studentName"] = e.target.value
  setCourse(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handlefineChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Course
  tempBook["fine"] = e.target.value
  setCourse(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handledueDateChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Course
  tempBook["dueDate"] = e.target.value
  setCourse(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}


const handleDeptChange = (e)=>{
    // console.log(e.target.value)
    const tempstudent = Course
    tempstudent["dept"] = e.target.value
    setCourse(tempstudent)
    // console.log(FilterObjects({id,name,author,pub}))
    const tempList = FilterObjects(tempstudent)
    setShow(tempList)
}

const handleBatchChange = (e)=>{
    // console.log(e.target.value)
    const tempstudent = Course
    tempstudent["batch"] = e.target.value
    setCourse(tempstudent)
    // console.log(FilterObjects({id,name,author,pub}))
    const tempList = FilterObjects(tempstudent)
    setShow(tempList)
}

useEffect(()=>{
  setCourses([
      {
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          dept:"CSE",
          batch:"K",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
      {
        "roomID":2,
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          dept:"ECE",
          batch:"K",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
      {
        "roomID":3,
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          dept:"CSE",
          batch:"A",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
  ])
  setShow([
    {
        "studentID":"PES1UG21CS622",
        "studentName":"Srinidhi P",
        dept:"CSE",
        batch:"K",
        fine:0,
        dueDate:(new Date()).toLocaleDateString('en-GB')
    },
    {
      "roomID":2,
        "studentID":"PES1UG21CS622",
        "studentName":"Srinidhi P",
        dept:"ECE",
        batch:"K",
        fine:0,
        dueDate:(new Date()).toLocaleDateString('en-GB')
    },
    {
      "roomID":3,
        "studentID":"PES1UG21CS622",
        "studentName":"Srinidhi P",
        dept:"CSE",
        batch:"A",
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
                <div className='text-3xl font-semibold'>Are you sure you want to remove the due??</div>
                <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleReturn}>Confirm</button></div>
            </div>
        }
              <div className='grid grid-rows-1 grid-cols-12 p-2 border-2 border-gray-300 rounded-md gap-2'>
            <div className='col-span-2'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student ID' onChange={handleStudentIDChange}/>
            </div>
            <div className='col-span-3'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student Name' onChange={handlestudentNameChange}/>
            </div>
            <div className='col-span-2'>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Department' onChange={handleDeptChange}/>
        </div>
        <div className='col-span-1'>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Batch' onChange={handleBatchChange}/>
        </div>
            <div className='col-span-2'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Fine Amount' onChange={handlefineChange}/>
            </div>
            <div className='col-span-2'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Due Date' onChange={handledueDateChange}/>
            </div>
        </div>

            {showCourse && showCourse.map((room,index)=>{
            return <div className='grid grid-cols-12 bg-white my-2 gap-2 rounded-md hover:cursor-pointer' key={index} onClick={()=>setReturn(index)}>
              <div className='col-span-2 px-2 py-1 rounded-md my-1 text-lg'>
                  {room.studentID}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {room.studentName}
              </div>
              <div className='col-span-2 px-2 py-1 rounded-md my-1 text-lg'>{room.dept}</div>
            <div className='col-span-1 px-2 py-1 rounded-md my-1 text-lg'>{room.batch}</div>
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
