import React, { use, useState } from 'react'
import './LoginForm.css'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const LoginForm = () => {

    const [action, setAction] = useState("Sign Up")


  return (
    <div className='box'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>

        <div className='inputs'>
            {action === "Login" ? <div></div>: <div className='input'>
                <CgProfile style={{margin: '0 30px', width: '25px', height: '25px'}}/>
                <input type='text' placeholder='Name' />
            </div>}
            <div className='input'>
                <MdOutlineMailOutline style={{margin: '0 30px', width: '25px', height: '25px'}}/>
                <input type='email' placeholder='Email' />
            </div>
            <div className='input'>
                <RiLockPasswordLine style={{margin: '0 30px', width: '25px', height: '25px'}}/>
                <input type='password' placeholder='Password' />
            </div>
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div> }
        <div className="submit-container">
            <div 
                className={action === 'Login' ? 'submit gray' : 'submit' }
                onClick={() => setAction('SignUp')}
            >Sign Up
            </div>
            <div 
                className={action === 'Sign Up' ? 'submit gray' : 'submit' }
                onClick={() => setAction("Login")}
            >Log In
            </div>
        </div>
        
      
    </div>
  )
}

export default LoginForm
