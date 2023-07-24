import { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
function ButtonIncrement(props) {
  
   return (
     <button style={{ marginLeft: '.5rem' , border:'none', background:'white'}} onClick={props.onClickFunc}>
     <AiOutlineHeart/> 
     </button>
   )
}

function Display(props) {
  return (
    <label style={{ marginLeft: '.5rem'}} >{props.message}</label>
  )
}
function Add() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

 
  return (
    <div> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
      <Display message={counter}/> 
      </div>
    
  );
}
export default Add;
