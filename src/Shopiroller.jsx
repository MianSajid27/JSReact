import React from 'react'
import Shpir from "./images/Shpir.jpg"; 
import Pin from "./images/Pin.png"; 
const Shopiroller = () => {
  return (
    <div>
        <div className=''>
            <div className='d-flex'>
                <div className='col-6 '>
<img className='shpir' src={Shpir}/>
                </div>
            
                <div className='col-3'>
                <div className=''>
<h3 className='mt'>Welcome Back!</h3>
<p className='display-7 '>Need a Shopiroller account? <span className='Create'>Create an Account</span></p>
<label className='diplay-7'>Email</label><br></br>
<input className='place' placeholder='' ></input><br></br><br></br>
<label className='diplay-7' >Password <button className='for'>Forgotten Password?</button></label><br></br>
<input  className='place' placeholder=''></input>
<br/>
<br/>
<br/>
<button className='In'>Sign In</button>
{/* <button className='got'>Got Feedback</button> */}

<img className='pin' src={Pin}/>
                </div>
                </div>
             
               

            </div>

        </div>
      
    </div>
  )
}

export default Shopiroller
