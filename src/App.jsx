import React, { useState } from 'react'
import './App.css'
import { RiDeleteBin5Line } from "react-icons/ri";
function App() {
  const[initial,setInitial]=useState()
  const [data,setData]=useState([])
  const getInput =(event)=>{
console.log(event.target.value)
setInitial(event.target.value)
  }
  const getData = ()=>{
    console.log(initial)
    let store = [...data,initial]
    setData(store)
    setInitial("")
    
  }
  const deleteTask = (index)=>{
    console.log(index)
    let filterData = data.filter((curElem,id)=>{
      return id !=index
    })
setData(filterData)
  }
  return (
    <>
    <div className='container'>
      <div className='inputTask'>
        <input type='text' placeholder='Enter Your Task' value={initial} onChange={getInput}/>
        <button onClick={getData}>Add</button>

      </div>
    {data.map((curVAlue,index)=>{
return(
  <>
  <div className='taskData'>
    <p>{curVAlue}</p>
    <i onClick={()=>deleteTask(index)}><RiDeleteBin5Line /></i>

  </div>
  </>
)
    })}
    </div></>
  )
}

export default App
