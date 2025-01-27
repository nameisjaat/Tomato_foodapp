import React, { useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowlogin}) => {

    const [currState,setCurrstate]=useState("Sign up")

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowlogin(false)} src={assets.cross_icon}/>
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type='text' placeholder='Your name' required/>}
            <input type='email' placeholder='Your email' required/>
            <input type='password' placeholder='Password' required/>
        </div>
        <button>{currState==="Sign up"?"Create account":"Login"}</button>
        {currState==="Login"?<p>Create a new account<span onClick={()=>setCurrstate("Sign up")}>?Click here</span></p>:<p>Already have an account<span onClick={()=>setCurrstate("Login")}>?Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopup
