import React, {useState, useMemo } from 'react'



const Memo = () => {
    const [plus,setplus] = useState(0);
    const [minus,setMinus] = useState(100)
       const multipication = useMemo (function multiply(){
    
            return plus*10;
        },[plus])
  return (
    <div>
        <h1 className='text-center'>Demo useMemo</h1>
       <h3 className='text-center'>{multipication}</h3> 
        <button className='text' onClick={()=>setplus(plus + 1)}>Add</button> 
         <span>{plus}</span><br/>

        <button className='text'  onClick={()=>setMinus(minus - 1)}> Subtraction </button> 
        <span>{minus}</span>
    </div>
  )
}

export default Memo


