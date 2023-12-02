import React,{useState,useEffect} from 'react'

export default function StudentsEntry() {
    const [students,setStudents] = useState()
    const [showStudents,setShow] = useState()
    const [student,setStudent] = useState({
        studentID:"",
        studentName:"",
        studentBatch:""
    })
    const [idEntry,setIDEntry] = useState()
    const [nameEntry,setNameEntry] = useState()
    const [batchEntry,setBatchEntry] = useState()
    const [error,setError] = useState()
    const [showForm,setShowForm] = useState(false)
    const [equip,setEquip] = useState()
    const [date,setDate] = useState()
    const [amount,setAmount] = useState()

    const [showImpose,setImpose] = useState(-1)

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

    const handleBatchChange = (e)=>{
        // console.log(e.target.value)
        const tempstudent = student
        tempstudent["studentBatch"] = e.target.value
        setStudent(tempstudent)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempstudent)
        setShow(tempList)
    }

    const handleEntry = ()=>{
        if(!idEntry || !nameEntry || !batchEntry){
            setError("Enter all details")
        }
        else{
        const tempList = students
        tempList.push({studentID:idEntry,studentName:nameEntry,studentBatch:batchEntry})
        setStudents(tempList)
        setShow(tempList)
        setShowForm(false)
        }
    }

    const handleImpose = ()=>{
        if(!equip || !amount || !date) setError("Enter all details")
        else{
            setImpose(-1)
        }
    }

    useEffect(()=>{
        setStudents([
            {
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                studentBatch:"K"
            },
            {
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                studentBatch:"T"
            },{
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                studentBatch:"A"
            },
        ])
        setShow([
            {
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                studentBatch:"K"
            },
            {
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                studentBatch:"T"
            },{
                studentID:"PES1UG21CS622",
                studentName:"Srinidhi P",
                studentBatch:"A"
            },
        ])
    },[])


  return (
    <div className='w-full p-2 relative'>
        {
            showImpose!==-1 && 
            <div className='bg-white rounded-md border-2 border-gray-400 p-3'>
                <div className='absolute top-3 right-5 hover:cursor-pointer hover:bg-gray-200 p-2 rounded-full' onClick={()=>setImpose(-1)}>X</div>
                <div className='text-2xl font-semibold'>Impose Fine:</div>
                {error && <div className='text-red-800 text-sm '>{error}</div>}
                <label>Equipment ID:</label>
                <input className='w-full h-8 border-2 border-gray-300 px-2 rounded-md' onChange={(e)=>{setEquip(e.target.value);setError("")}}></input>
                <label>Due Date:</label>
                <input className='w-full h-8 border-2 border-gray-300 px-2 rounded-md' placeholder='DD/MM/YYYY' onChange={(e)=>{setDate(e.target.value);setError("")}}/>
                <label>Amount:</label>
                <input className='w-full h-8 border-2 border-gray-300 px-2 rounded-md' onChange={(e)=>{setAmount(e.target.value);setError("")}}/>
                <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleImpose}>Enter</button></div>
            </div>
        }
      <div className='grid grid-rows-1 grid-cols-3 p-2 border-2 border-gray-300 rounded-md gap-2'>
        <div className=''>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student ID' onChange={handleIDChange}/>
        </div>
        <div className=''>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student Name' onChange={handleNameChange}/>
        </div>
        <div className=''>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student Batch' onChange={handleBatchChange}/>
        </div>
      </div>
      {showStudents && showStudents.map((student,index)=>{
        return <div className='grid grid-cols-3 bg-white my-2 gap-2 rounded-md hover:cursor-pointer' onClick={()=>setImpose(index)} key={index}>
            <div className='px-2 py-1 rounded-md my-1 text-lg'>{student.studentID}</div>
            <div className='px-2 py-1 rounded-md my-1 text-lg'>{student.studentName}</div>
            <div className='px-2 py-1 rounded-md my-1 text-lg'>{student.studentBatch}</div>
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
            <label>Student Name:</label>
            <input className='w-full h-8 rounded-md border-2 border-gray-400 px-2' onChange={(e)=>{setNameEntry(e.target.value);setError("")}}/>
            <label>Batch:</label>
            <input className='w-full h-8 rounded-md border-2 border-gray-400 px-2' onChange={(e)=>{setBatchEntry(e.target.value);setError("")}}/>
            <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleEntry}>Enter</button></div>
        </div>}
    </div>
    </div>
  )
}
