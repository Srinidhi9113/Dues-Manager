import React,{useState, useEffect} from 'react'
import FineCard from './finecard'
import Modal from './paymentModal'

export default function Laboratory() {
  const [fines,setFines] = useState([])
  const [modal,setModal] = useState(-1)
  const [txnID,setTxn] = useState("")
  const [txnError,setTxnError] = useState(false)
  const enterTransaction = (event)=>{
    setTxn(event.target.value)
  }
  const handleSubmit = (event)=>{
    if(txnID!==""){
      setTxn("")
      setTxnError(false)
      setModal(-1)
    }
    else{
      setTxnError(true)
    }
  }
  const handleExit = ()=>{
    setTxn("")
    setTxnError(false)
    setModal(-1)
  }
  useEffect(()=>{
    setFines([
    {
      libID:"PESLABCS234",
      libName:"PES Laboratory - 1",
      bookID:"EQUIP001",
      bookName:"Test Tube",
      fine:100,
      pending:50,
      dueDate:(new Date()).toLocaleDateString('en-GB')
    },
    {
      libID:"PESLABCS234",
      libName:"PES Laboratory - 1",
      bookID:"EQUIP001",
      bookName:"Test Tube",
      fine:100,
      pending:50,
      dueDate:(new Date()).toLocaleDateString('en-GB')
    }
  ])
  },[])
  return (
    <div className='w-full relative'>
      {
        modal!==-1 && 
        <Modal handleExit={handleExit} handleSubmit={handleSubmit} txnError={txnError} enterTransaction={enterTransaction}/>
      }
      {fines.length===0 && 
        <div className='m-3 rounded-lg bg-white px-5 py-10 h-fit text-lg'>
          No Fines to Show...
        </div>
      }

      {
        fines.length!==0 &&
        fines.map((fine,index)=>{
          return <div className='hover:cursor-pointer'
          style={{
            filter:modal===-1?'none':'blur(1px)'
          }} onClick={()=>setModal(index)} key={index}>
            <FineCard fine={fine}/>
            </div>
        })
        
      }
    
  </div>
  )
}
