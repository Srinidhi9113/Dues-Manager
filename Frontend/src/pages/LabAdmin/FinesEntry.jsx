import React,{useState,useEffect} from 'react'

export default function FinesEntry() {
  const [equipments,setEquipments] = useState()
  const [showEquip,setShow] = useState()
  const [Equip,setEquip] = useState({
    equipID:"",
    equipName:"",
    studentID:"",
    studentName:"",
    fine:"",
    dueDate:""
})

const [Return,setReturn] = useState(-1)

const handleReturn = ()=>{
  const tempList = equipments
  tempList.splice(Return,1)
  setEquipments(tempList)
  setShow(tempList)
  setReturn(-1)
}


const FilterObjects = (Filter)=>{
  return equipments.filter((obj)=>{
      for(const key in Filter){
          if(Filter[key] && !obj[key].toString().includes(Filter[key])) return false
      }
      return true
  })
}

const handleEquipIDChange = (e)=>{
      // console.log(e.target.value)
      const tempBook = Equip
      tempBook["equipID"] = e.target.value
      setEquip(tempBook)
      // console.log(FilterObjects({id,name,author,pub}))
      const tempList = FilterObjects(tempBook)
      setShow(tempList)
}

const handleEquipNameChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Equip
  tempBook["equipName"] = e.target.value
  setEquip(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handleStudentIDChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Equip
  tempBook["studentID"] = e.target.value
  setEquip(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handlestudentNameChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Equip
  tempBook["studentName"] = e.target.value
  setEquip(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handlefineChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Equip
  tempBook["fine"] = e.target.value
  setEquip(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

const handledueDateChange = (e)=>{
  // console.log(e.target.value)
  const tempBook = Equip
  tempBook["dueDate"] = e.target.value
  setEquip(tempBook)
  // console.log(FilterObjects({id,name,author,pub}))
  const tempList = FilterObjects(tempBook)
  setShow(tempList)
}

useEffect(()=>{
  setEquipments([
      {
          "equipID":"EQUIP001",
          "equipName":"Microscope",
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
      {
          "equipID":"EQUIP002",
          "equipName":"Microscope",
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
      {
          "equipID":"EQUIP003",
          "equipName":"Microscope",
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
  ])
  setShow([
      {
          "equipID":"EQUIP001",
          "equipName":"Microscope",
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
      {
          "equipID":"EQUIP002",
          "equipName":"Microscope",
          "studentID":"PES1UG21CS622",
          "studentName":"Srinidhi P",                    
          fine:0,
          dueDate:(new Date()).toLocaleDateString('en-GB')
      },
      {
          "equipID":"EQUIP003",
          "equipName":"Microscope",
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
            <div className='col-span-1'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Equip ID' onChange={handleEquipIDChange}/>
            </div>
            <div className='col-span-3'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Equip Name' onChange={handleEquipNameChange}/>
            </div>
            <div className='col-span-3'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student ID' onChange={handleStudentIDChange}/>
            </div>
            <div className='col-span-3'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Student Name' onChange={handlestudentNameChange}/>
            </div>
            <div className='col-span-1'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Fine Amount' onChange={handlefineChange}/>
            </div>
            <div className='col-span-1'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Due Date' onChange={handledueDateChange}/>
            </div>
        </div>

            {showEquip && showEquip.map((equip,index)=>{
            return <div className='grid grid-cols-12 bg-white my-2 gap-2 rounded-md hover:cursor-pointer' key={index} onClick={()=>setReturn(index)}>
            <div className='col-span-1 px-2 py-1 rounded-md my-1 text-lg'>
                  {equip.equipID}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {equip.equipName}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {equip.studentID}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {equip.studentName}
              </div>
              <div className='col-span-1 px-2 py-1 rounded-md my-1 text-lg'>
                  {equip.fine}
              </div>
              <div className='col-span-1 px-2 py-1 rounded-md my-1 text-lg'>
                  {equip.dueDate}
              </div>
            </div>
    })}
    </div>
  )
}
