import React, { useState } from 'react'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {app} from './Firebase'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const auth=getAuth(app);
export default function Signin() {
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const nav=useNavigate();
    function check()
    {
        signInWithEmailAndPassword(auth,email,pass).then((value)=>{

            alert("Signin Success")
            nav('/home')
            }).catch((err)=>{
                console.log(err)
                alert("You are not registered user!!!Please Register Yourself");
            })
    }
  return(
    <div className='fdiv'>
    <h1 className='head'>Welcome To Maintainace-App</h1>
   
    <div className='maindiv'>
        <h1 className='head3'>SignIn</h1>
        <table className='tables'>
        <tr>
        <td>Email</td><td><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td></tr>
        <tr> <td>Password</td><td><input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/></td></tr>
        </table>
        <button onClick={check}>SignIn</button>
        <p className='LinkR'>Not have an Account? <Link className='link' to='/signup'>Register</Link></p>
    </div>
    </div>
  )
}