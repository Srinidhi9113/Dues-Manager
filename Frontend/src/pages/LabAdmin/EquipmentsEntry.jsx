import React, { useEffect, useState } from 'react'

export default function EquipmentsEntry() {
    const [equipments,setEquipments] = useState()
    const [showEquip,setShow] = useState()
    const [equip,setEquip] = useState({
        "equipID":"",
        "equipName":""
    })
    const [showImpose,setImpose] = useState(-1)
    const [student,setStudent] = useState()
    const [date,setDate] = useState()
    const [amount,setAmount] = useState()
    const [error,setError] = useState()

    const [idEntry,setIDEntry] = useState()
    const [nameEntry,setNameEntry] = useState()
    const [batchEntry,setBatchEntry] = useState()
    const [showForm,setShowForm] = useState(false)

    const FilterObjects = (Filter)=>{
        return equipments.filter((obj)=>{
            for(const key in Filter){
                // console.log(key)
                if(Filter[key] && !obj[key].toString().includes(Filter[key])) return false
            }
            return true
        })
    }

    const handleIDChange = (e)=>{
        // console.log(e.target.value)
        const tempEquip = equip
        tempEquip["equipID"] = e.target.value
        // console.log(tempEquip)
        setEquip(tempEquip)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempEquip)
        setShow(tempList)
    }

    const handleNameChange = (e)=>{
        // console.log(e.target.value)
        const tempEquip = equip
        tempEquip["equipName"] = e.target.value
        setEquip(tempEquip)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempEquip)
        setShow(tempList)
    }

    const handleImpose = ()=>{
        if(!student || !amount || !date) setError("Enter all details")
        else{
            setImpose(-1)
        }
    }

    const handleEntry = ()=>{
        if(!idEntry || !nameEntry){
            setError("Enter all details")
        }
        else{
        const tempList = equipments
        tempList.push({equipID:idEntry,equipName:nameEntry})
        setEquipments(tempList)
        setShow(tempList)
        setShowForm(false)
        }
    }


    useEffect(()=>{
        setEquipments([
            {
                "equipID":"EQUIP001",
                "equipName":"Microscope"
            },
            {
                "equipID":"EQUIP002",
                "equipName":"Microscope"
            },
            {
                "equipID":"EQUIP003",
                "equipName":"Microscope"
            },
        ])
        setShow([
            {
                "equipID":"EQUIP001",
                "equipName":"Microscope"
            },
            {
                "equipID":"EQUIP002",
                "equipName":"Microscope"
            },
            {
                "equipID":"EQUIP003",
                "equipName":"Microscope"
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
                <label>Student ID:</label>
                <input className='w-full h-8 border-2 border-gray-300 px-2 rounded-md' onChange={(e)=>{setStudent(e.target.value);setError("")}}></input>
                <label>Due Date:</label>
                <input className='w-full h-8 border-2 border-gray-300 px-2 rounded-md' placeholder='DD/MM/YYYY' onChange={(e)=>{setDate(e.target.value);setError("")}}/>
                <label>Amount:</label>
                <input className='w-full h-8 border-2 border-gray-300 px-2 rounded-md' onChange={(e)=>{setAmount(e.target.value);setError("")}}/>
                <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleImpose}>Enter</button></div>
            </div>
        }
    <div className='grid grid-rows-1 grid-cols-2 p-2 border-2 border-gray-300 rounded-md gap-2'>
        <div className=''>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Equipment ID' onChange={handleIDChange}/>
        </div>
        <div className=''>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Equipment Name' onChange={handleNameChange}/>
        </div>
    </div>

    {showEquip && showEquip.map((equip,index)=>{
        return <div className='grid grid-cols-2 bg-white my-2 gap-2 rounded-md hover:cursor-pointer' onClick={()=>setImpose(index)} key={index}>
            <div className='px-2 py-1 rounded-md my-1 text-lg'>{equip.equipID}</div>
            <div className='px-2 py-1 rounded-md my-1 text-lg'>{equip.equipName}</div>
        </div>
    })}

<div className='absolute bottom-5 right-5'>
        <div className='h-14 w-14 rounded-full bg-sky-800 flex justify-center text-4xl text-white font-bold hover:cursor-pointer' onClick={()=>setShowForm(prev=>!prev)}>+</div>
        {showForm && 
        <div className='bg-white rounded-md p-3 w-72 absolute bottom-16 right-5'>
            <div className='text-xl font-bold'>Add a new student:</div>
            {error && <div className='text-red-800 text-sm '>{error}</div>}
            <label>Equipment ID:</label>
            <input className='w-full h-8 rounded-md border-2 border-gray-400 px-2' onChange={(e)=>{setIDEntry(e.target.value);setError("")}}/>
            <label>Equipment Name:</label>
            <input className='w-full h-8 rounded-md border-2 border-gray-400 px-2' onChange={(e)=>{setNameEntry(e.target.value);setError("")}}/>
            <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleEntry}>Enter</button></div>
        </div>}
    </div>
    </div>
  )
}
