// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from './Firebase';
// import Signin from './Signin';
import './table.css'
import { Link,useNavigate} from 'react-router-dom';

const auth = getAuth(app);
export default function Signup() {
  // let his=new useHistory();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [reg,setReg]=useState(false);
    const nav=useNavigate();
    function create()
    {
        
        createUserWithEmailAndPassword(auth,email,password).then((value)=>
        {
            alert("Sign-Up Sucess")
            nav('/')
           
        }
        );
        setReg(true);
    };
  return (
    <div className='fdiv'>
    <h1 className='head'>Welcome To Maintainace-App</h1>
    <div className='maindiv'>
      
       <h1 className='head3'>Sign-up</h1>
       <table className='tables'>
       <tr>
       <td>Email</td><td><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td></tr>
       <tr>
       <td>Password</td><td><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></td>
       </tr>
       </table>
       <button onClick={create}>Signup</button>
        <p className='LinkR'>Already have an Account?<Link className='link' to='/'>SignIn</Link></p> 
      
    </div>
    </div>
  )
}
