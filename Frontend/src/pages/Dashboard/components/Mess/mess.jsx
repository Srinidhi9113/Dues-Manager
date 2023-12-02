import React,{useState, useEffect} from 'react'
import FeeCard from './feecard'
import Modal from '../paymentModal'

export default function Mess() {
  const [fees,setFees] = useState([])
  const [modal,setModal] = useState(-1)
  const [txnID,setTxn] = useState("")
  const [amt,setAmt] = useState("")
  const [txnError,setTxnError] = useState(false)
  const enterTransaction = (event)=>{
    setTxn(event.target.value)
  }
  const enterAmt = (event)=>{
    setAmt(event.target.value)
  }
  const handleSubmit = (event)=>{
    if(txnID!=="" && amt!=="" && parseInt(amt)<=fees[modal]["pending"]){
      // send request to our server

      const tempFees = fees
      tempFees[modal]["pending"] -= parseInt(amt)
      if(tempFees[modal]["pending"]==0) tempFees.splice(modal,1)
      setFees(tempFees)


      setTxn("")
      setTxnError(false)
      setModal(-1)
    }
    else if(txnID==="" || amt===""){
      setTxnError("* Enter details")
    }
    else{
      setTxnError("* Enter a valid amount")
    }
  }
  const handleExit = ()=>{
    setTxn("")
    setTxnError(false)
    setModal(-1)
  }
  useEffect(()=>{
    setFees([
        {
            mess_id:"PESMESS21",
            mess_name:"PES Boys Mess",
            fee:100,
            pending:50,
            due_date:(new Date()).toLocaleDateString('en-GB')
        }
    ])
  },[])
  return (
    <div className='w-full relative'>
      {
        modal!==-1 && 
        <Modal handleExit={handleExit} handleSubmit={handleSubmit} txnError={txnError} enterTransaction={enterTransaction} enterAmt={enterAmt}/>
      }
      {fees.length===0 && 
        <div className='m-3 rounded-lg bg-white px-5 py-10 h-fit text-lg'>
          No Fees Pending
        </div>
      }

      {
        fees.length!==0 &&
        fees.map((fee,index)=>{
          return <div className='hover:cursor-pointer'
          style={{
            filter:modal===-1?'none':'blur(1px)'
          }} onClick={()=>setModal(index)} key={index}>
            <FeeCard fee={fee}/>
            </div>
        })
        
      }
    
  </div>
  )
}
