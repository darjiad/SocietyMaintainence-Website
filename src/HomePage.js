import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import './table.css'

function HomePage() {
  // useEffect(()=>{
  //   alert("Welcome");
  // },[]);
    const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  return (
    <div>
    <h1 className='head'>Welcome To Maintainace-App</h1>
    <div className='maindiv'>
    
       
      <p className='p'> Select Month:
       <select onChange={(e) => setMonth(e.target.value)}>
         <option value="">--select Month--</option>
         <option value="January">January</option>
         <option value="February">February</option>
         <option value="March">March</option>
         <option value="April">April</option>
         <option value="May">May</option>
         <option value="June">June</option>
         <option value="July">July</option>
         <option value="August">August</option>
         <option value="September">September</option>
         <option value="October">October</option>
         <option value="November">November</option>
         <option value="December">December</option>
       </select></p> 
       <p className='p'>Select Year:
       <select name="sel" onChange={(e) => setYear(e.target.value)}>
         <option value="">--select Year--</option>
         <option value="2022">2022</option>
         <option value="2023">2023</option>
         <option value="2024">2024</option>
         <option value="2025">2025</option>
         <option value="2026">2026</option>
       </select></p>
       <Link to='/tableview' state={{month:month,year:year}}> <button >Get Started</button></Link>
     </div>
    
    </div>
  )
}

export default HomePage