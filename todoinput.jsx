import React, { useState } from 'react'
import './todoinput.css'
function Todoinput(props) {

  const [inputtext,setinputtext] =useState (' ');
  return (
    <div className='input-container'>
      <input type= "text" className='input-box-todo' 
      value={inputtext}
      placeholder=' Enter Task' 
      onChange={e=>{setinputtext(e.target.value)}}></input>


      <button className='add-butn' onClick={()=> { props.addList(inputtext)
      setinputtext(" ")} }>+</button>
    
    </div>
  )
}

export default Todoinput
