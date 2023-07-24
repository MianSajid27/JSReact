
import React,{useState} from 'react'
import { FaRegCommentDots } from "react-icons/fa";
 function Comment() {
   
    const [data, setData] = useState()
    const [show, setshow] = useState(false);
    const [state, setState] = useState([]);
    const Data = (props) => {
return( 
<div>
 
 
 <p className='test'>  {props.data}</p>

</div>
) 
    };

    const add = () => {
        setState(state.concat(<Data  key={state.length}  data={data}  />))
        setData("")
        ;
    
    
       };
  return (
    <>
    <div>
    <button style={{border:'none', background:'White'}}  onClick={() => setshow(!show  )} >  < FaRegCommentDots/>comment</button> <br/>
    {show ? (
        <div> 

    <input style={{marginRight:'150px',marginTop:'20px',border:'none',marginBottom:'10px'}}  value={data} onChange={(e)=>{setData(e.target.value)}}  placeholder='Enter your Comment'/>
    <button style={{border:'none', background:'#8eb2f7',color:'white'}} onClick={add}  >  send</button> <br/> {state}
   
              
    </div>  
          ) : null }       
            
           
    </div>
    </>
  )
}
export default Comment;



   
          
          
         
         
         
          
           
            





