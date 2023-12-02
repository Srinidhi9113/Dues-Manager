import React,{useState,useEffect} from 'react'

export default function BorrowerEntry() {
    const [Book,setBook] = useState({
        bookID:"",
        bookName:"",
        studentID:"",
        studentName:"",
        fine:"",
        dueDate:""
    })
    const [books,setBooks] = useState()
    const [showbooks,setShow] = useState()

    const [Return,setReturn] = useState(-1)


    const FilterObjects = (Filter)=>{
        return books.filter((obj)=>{
            for(const key in Filter){
                if(Filter[key] && !obj[key].toString().includes(Filter[key])) return false
            }
            return true
        })
    }

    const handleBookIDChange = (e)=>{
            // console.log(e.target.value)
            const tempBook = Book
            tempBook["bookID"] = e.target.value
            setBook(tempBook)
            // console.log(FilterObjects({id,name,author,pub}))
            const tempList = FilterObjects(tempBook)
            setShow(tempList)
    }

    const handleBookNameChange = (e)=>{
        // console.log(e.target.value)
        const tempBook = Book
        tempBook["bookName"] = e.target.value
        setBook(tempBook)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempBook)
        setShow(tempList)
    }

    const handleStudentIDChange = (e)=>{
        // console.log(e.target.value)
        const tempBook = Book
        tempBook["studentID"] = e.target.value
        setBook(tempBook)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempBook)
        setShow(tempList)
    }

    const handlestudentNameChange = (e)=>{
        // console.log(e.target.value)
        const tempBook = Book
        tempBook["studentName"] = e.target.value
        setBook(tempBook)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempBook)
        setShow(tempList)
    }

    const handlefineChange = (e)=>{
        // console.log(e.target.value)
        const tempBook = Book
        tempBook["fine"] = e.target.value
        setBook(tempBook)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempBook)
        setShow(tempList)
    }

    const handledueDateChange = (e)=>{
        // console.log(e.target.value)
        const tempBook = Book
        tempBook["dueDate"] = e.target.value
        setBook(tempBook)
        // console.log(FilterObjects({id,name,author,pub}))
        const tempList = FilterObjects(tempBook)
        setShow(tempList)
    }

    const handleReturn = ()=>{
        const tempList = books
        tempList.splice(Return,1)
        setBooks(tempList)
        setShow(tempList)
        setReturn(-1)
    }


    useEffect(()=>{
        setBooks(
            [
                {
                    bookID:"BOOK001",
                    bookName:"Modern Physics - 1",
                    studentID:"PES1UG21CS622",
                    studentName:"Srinidhi P",
                    fine:0,
                    dueDate:(new Date()).toLocaleDateString('en-GB')
                },
                {
                    bookID:"BOOK002",
                    bookName:"Modern Physics - 2",
                    studentID:"PES1UG21CS622",
                    studentName:"Srinidhi P",
                    fine:0,
                    dueDate:(new Date()).toLocaleDateString('en-GB')
                },
                {
                    bookID:"BOOK003",
                    bookName:"Applied Chemistry",
                    studentID:"PES1UG21CS622",
                    studentName:"Srinidhi P",
                    fine:0,
                    dueDate:(new Date()).toLocaleDateString('en-GB')
                },
            ]
            )
           setShow([
            {
            bookID:"BOOK001",
            bookName:"Modern Physics - 1",
            studentID:"PES1UG21CS622",
            studentName:"Srinidhi P",
            fine:0,
            dueDate:(new Date()).toLocaleDateString('en-GB')
        },
        {
            bookID:"BOOK002",
            bookName:"Modern Physics - 2",
            studentID:"PES1UG21CS622",
            studentName:"Srinidhi P",
            fine:0,
            dueDate:(new Date()).toLocaleDateString('en-GB')
        },
        {
            bookID:"BOOK003",
            bookName:"Applied Chemistry",
            studentID:"PES1UG21CS622",
            studentName:"Srinidhi P",
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
                <div className='text-3xl font-semibold'>Are you sure this book is returned???</div>
                <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleReturn}>Confirm</button></div>
            </div>
        }
        <div className='grid grid-rows-1 grid-cols-12 p-2 border-2 border-gray-300 rounded-md gap-2'>
            <div className='col-span-1'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Book ID' onChange={handleBookIDChange}/>
            </div>
            <div className='col-span-3'>
                <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Book Name' onChange={handleBookNameChange}/>
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

        {showbooks && showbooks.map((book,index)=>{
            return <div className='grid grid-cols-12 bg-white my-2 gap-2 rounded-md hover:cursor-pointer' key={index} onClick={()=>setReturn(index)}>
            <div className='col-span-1 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.bookID}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.bookName}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.studentID}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.studentName}
              </div>
              <div className='col-span-1 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.fine}
              </div>
              <div className='col-span-1 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.dueDate}
              </div>
            </div>
    })}
    </div>
  )
}
