import React,{useState,useEffect} from 'react'

export default function StudentsEntry() {
    const [students,setStudents] = useState()
    const [showStudents,setShow] = useState()
    const [student,setStudent] = useState({
        studentID:"",
        studentName:"",
        dept:"",
        batch:""
    })
    const [idEntry,setIDEntry] = useState()
    const [nameEntry,setNameEntry] = useState()
    const [deptEntry,setDeptEntry] = useState()
    const [batchEntry,setBatchEntry] = useState()
    const [error,setError] = useState()
    const [showForm,setShowForm] = useState(false)

    const FilterObjects = (Filter)=>{
        return students.filter((obj)=>{
            for(const key in Filter){
                if(Filter[key] && !obj[key].toString().includes(Filter[key])) return false
            }
            return true
        })
    }

    const handleIDChange = (e)=>{
        // console.log(e.target.value)
        const tempstudent = student
        tempstudent["studentID"] = e.target.value
        setStudent(tempstudent)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempstudent)
        setShow(tempList)
    }

    const handleNameChange = (e)=>{
        // console.log(e.target.value)
        const tempstudent = student
        tempstudent["studentName"] = e.target.value
        setStudent(tempstudent)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempstudent)
        setShow(tempList)
    }

    const handleDeptChange = (e)=>{
        // console.log(e.target.value)
        const tempstudent = student
        tempstudent["dept"] = e.target.value
        setStudent(tempstudent)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempstudent)
        setShow(tempList)
    }

    const handleBatchChange = (e)=>{
        // console.log(e.target.value)
        const tempstudent = student
        tempstudent["batch"] = e.target.value
        setStudent(tempstudent)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempstudent)
        setShow(tempList)
    }

    const handleEntry = ()=>{
        if(!idEntry){
            setError("Enter all details")
        }
        else{
        const tempList = students
        tempList.push({studentID:idEntry,studentName:"Srinidhi",dept:"CSE",batch:"K"})
        setStudents(tempList)
        setShow(tempList)
        setShowForm(false)
        }
    }

    useEffect(()=>{
        setStudents([
            {
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                dept:"CSE",
                batch:"K"
            },
            {
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                dept:"ECE",
                batch:"K"
            },{
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                dept:"CSE",
                batch:"A"
            },
        ])
        setShow([
            {
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                dept:"CSE",
                batch:"K"
            },
            {
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                dept:"ECE",
                batch:"K"
            },{
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                dept:"CSE",
                batch:"A"
            },
        ])
    },[])


  return (
    <div className='w-full p-2 relative'>
      <div className='grid grid-rows-1 grid-cols-4 p-2 border-2 border-gray-300 rounded-md gap-2'>
        <div className=''>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student ID' onChange={handleIDChange}/>
        </div>
        <div className=''>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student Name' onChange={handleNameChange}/>
        </div>
        <div className=''>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Department' onChange={handleDeptChange}/>
        </div>
        <div className=''>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Batch' onChange={handleBatchChange}/>
        </div>
      </div>
      {showStudents && showStudents.map((student,index)=>{
        return <div className='grid grid-cols-4 bg-white my-2 gap-2 rounded-md hover:cursor-pointer' onClick={()=>setImpose(index)} key={index}>
            <div className='px-2 py-1 rounded-md my-1 text-lg'>{student.studentID}</div>
            <div className='px-2 py-1 rounded-md my-1 text-lg'>{student.studentName}</div>
            <div className='px-2 py-1 rounded-md my-1 text-lg'>{student.dept}</div>
            <div className='px-2 py-1 rounded-md my-1 text-lg'>{student.batch}</div>
        </div>
      })}

<div className='absolute bottom-5 right-5'>
        <div className='h-14 w-14 rounded-full bg-sky-800 flex justify-center text-4xl text-white font-bold hover:cursor-pointer' onClick={()=>setShowForm(prev=>!prev)}>+</div>
        {showForm && 
        <div className='bg-white rounded-md p-3 w-72 absolute bottom-16 right-5'>
            <div className='text-xl font-bold'>Add a new student:</div>
            {error && <div className='text-red-800 text-sm '>{error}</div>}
            <label>Student ID:</label>
            <input className='w-full h-8 rounded-md border-2 border-gray-400 px-2' onChange={(e)=>{setIDEntry(e.target.value);setError("")}}/>
            <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleEntry}>Enter</button></div>
        </div>}
    </div>
    </div>
  )
}
