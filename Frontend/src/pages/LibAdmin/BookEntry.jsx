import React,{useState,useEffect} from 'react'

export default function BookEntry() {
    const [books,setBooks] = useState()
    const [showbooks,setShow] = useState()
    const [id,setID] = useState()
    const [name,setName] = useState()
    const [author_name,setAuthor] = useState()
    const [pub,setPub] = useState()
    const [showForm,setShowForm] = useState(false)
    const [showLend,setShowLend] = useState(-1)
    const [studentID,setStudent] = useState()
    const [date,setDate] = useState()

    const [error,setError] = useState()
    const [idEntry,setIDEntry] = useState()
    const [nameEntry,setNameEntry] = useState()
    const [authorEntry,setAuthorEntry] = useState()
    const [pubEntry,setPubEntry] = useState()

    const FilterObjects = ({idFilter,nameFilter,authorFilter,pubFilter})=>{
        return books.filter((obj)=>{
            const {bookID,bookName,author,publication} = obj
            let [idCheck,nameCheck,authorCheck,pubCheck] = [true,true,true,true]
            if(idFilter && !bookID.toString().includes(idFilter)) idCheck = false
            if(nameFilter && !bookName.toString().includes(nameFilter)) nameCheck = false
            if(authorFilter && !author.toString().includes(authorFilter)) authorCheck = false
            if(pubFilter && !publication.toString().includes(pubFilter)) pubCheck = false
            return (idCheck && nameCheck && authorCheck && pubCheck)
        })
    }

    const handleIDChange = (e)=>{
        // console.log(e.target.value)
        setID(e.target.value)
        // console.log(FilterObjects({id,name,author,pub}))
        const newId = e.target.value
        const tempList = FilterObjects({idFilter:newId,nameFilter:name,authorFilter:author_name,pubFilter:pub})
        setShow(tempList)

    }

    const handleNameChange = (e)=>{
        setName(e.target.value)
        // console.log(FilterObjects({id,name,author,pub}))
        const newName = e.target.value
        const tempList = FilterObjects({idFilter:id,nameFilter:newName,authorFilter:author_name,pubFilter:pub})
        setShow(tempList)
    }

    const handleAuthorChange = (e)=>{
        setAuthor(e.target.value)
        // console.log(FilterObjects({id,name,author,pub}))
        const newName = e.target.value
        const tempList = FilterObjects({idFilter:id,nameFilter:name,authorFilter:newName,pubFilter:pub})
        setShow(tempList)
    }

    const handlePublicationChange = (e)=>{
        setPub(e.target.value)
        // console.log(FilterObjects({id,name,author,pub}))
        const newName = e.target.value
        const tempList = FilterObjects({idFilter:id,nameFilter:name,authorFilter:author_name,pubFilter:newName})
        setShow(tempList)
    }

    const handleEntry = ()=>{
        if(!idEntry || !nameEntry || !authorEntry || !pubEntry){
            setError("Enter all details")
        }
        else{
        const tempList = books
        tempList.push({bookID:idEntry,bookName:nameEntry,author:authorEntry,publication:pubEntry})
        setBooks(tempList)
        setShow(tempList)
        setShowForm(false)
        }
    }

    const handleLend = ()=>{
        if(!studentID || !date){
            setError("Enter Student Details")
        }
        else{
            const tempList = books
            tempList.splice(showLend,1)
            setBooks(tempList)
            setShow(tempList)
            setShowLend(-1)
        }
    }

    useEffect(()=>{
        setBooks(
            [
                {
                    bookID:"BOOK001",
                    bookName:"Modern Physics - 1",
                    author:"K V Narayan",
                    publication:"Sun Publications"
                },
                {
                    bookID:"BOOK002",
                    bookName:"Modern Physics - 2",
                    author:"K V Narayan",
                    publication:"Sun Publications"
                },
                {
                    bookID:"BOOK003",
                    bookName:"Applied Chemistry",
                    author:"K C Das",
                    publication:"Moon Publications"
                },
            ]
            )
           setShow([
            {
            bookID:"BOOK001",
            bookName:"Modern Physics - 1",
            author:"K V Narayan",
            publication:"Sun Publications"
        },
        {
            bookID:"BOOK002",
            bookName:"Modern Physics - 2",
            author:"K V Narayan",
            publication:"Sun Publications"
        },
        {
            bookID:"BOOK003",
            bookName:"Applied Chemistry",
            author:"K C Das",
            publication:"Moon Publications"
        },
    ])
    },[])
  return (
    <div className='w-full p-2 relative'>
        {
            showLend!==-1 && 
            <div className='bg-white rounded-md border-2 border-gray-400 p-3'>
                <div className='absolute top-3 right-5 hover:cursor-pointer hover:bg-gray-200 p-2 rounded-full' onClick={()=>setShowLend(-1)}>X</div>
                <div className='text-2xl font-semibold'>Lend this Book:</div>
                {error && <div className='text-red-800 text-sm '>{error}</div>}
                <label>Student ID:</label>
                <input className='w-full h-8 border-2 border-gray-300 px-2 rounded-md' onChange={(e)=>{setStudent(e.target.value);setError("")}}></input>
                <label>Due Date:</label>
                <input className='w-full h-8 border-2 border-gray-300 px-2 rounded-md' placeholder='DD/MM/YYYY' onChange={(e)=>{setDate(e.target.value);setError("")}}/>
                <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleLend}>Enter</button></div>
            </div>
        }
      <div className='grid grid-rows-1 grid-cols-12 p-2 border-2 border-gray-300 rounded-md gap-2'>
        <div className='col-span-2'>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Book ID' onChange={handleIDChange}/>
        </div>
        <div className='col-span-4'>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Book Name' onChange={handleNameChange}/>
        </div>
        <div className='col-span-3'>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Author Name' onChange={handleAuthorChange}/>
        </div>
        <div className='col-span-3'>
            <input className='w-full h-10 rounded-md px-2 py-1' placeholder='Publication' onChange={handlePublicationChange}/>
        </div>
      </div>
      
    {showbooks && showbooks.map((book,index)=>{
            return <div className='grid grid-cols-12 bg-white my-2 gap-2 rounded-md hover:cursor-pointer' key={index} onClick={()=>setShowLend(index)}>
            <div className='col-span-2 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.bookID}
              </div>
              <div className='col-span-4 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.bookName}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.author}
              </div>
              <div className='col-span-3 px-2 py-1 rounded-md my-1 text-lg'>
                  {book.publication}
              </div>
            </div>
    })}
    <div className='absolute bottom-5 right-5'>
        <div className='h-14 w-14 rounded-full bg-sky-800 flex justify-center text-4xl text-white font-bold hover:cursor-pointer' onClick={()=>setShowForm(prev=>!prev)}>+</div>
        {showForm && 
        <div className='bg-white rounded-md p-3 w-72 absolute bottom-16 right-5'>
            <div className='text-xl font-bold'>Add a new book:</div>
            {error && <div className='text-red-800 text-sm '>{error}</div>}
            <label>Book ID:</label>
            <input className='w-full h-8 rounded-md border-2 border-gray-400 px-2' onChange={(e)=>{setIDEntry(e.target.value);setError("")}}/>
            <label>Book Name:</label>
            <input className='w-full h-8 rounded-md border-2 border-gray-400 px-2' onChange={(e)=>{setNameEntry(e.target.value);setError("")}}/>
            <label>Author:</label>
            <input className='w-full h-8 rounded-md border-2 border-gray-400 px-2' onChange={(e)=>{setAuthorEntry(e.target.value);setError("")}}/>
            <label>Publication:</label>
            <input className='w-full h-8 rounded-md border-2 border-gray-400 px-2' onChange={(e)=>{setPubEntry(e.target.value);setError("")}}/>
            <div className='flex justify-center items-center pt-3'><button className='bg-sky-800 py-1 px-2 rounded-md text-2xl font-semibold text-white' onClick={handleEntry}>Enter</button></div>
        </div>}
    </div>
    </div>
  )
}
