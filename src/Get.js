import React, { useEffect, useState } from 'react'
// import Ax from './Ax';
import {app} from './Firebase'
// const app=getAuth(app);

import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

import { getDatabase,ref,get } from 'firebase/database';
const database=getDatabase(app);
const dataref=ref(database,'data')

function Get() {
  const [result,setResult]=useState([]);
  const [show1,setShow1]=useState(false);
  useEffect(()=>{

    get(dataref).then((val)=>{
      if(val.exists())
      {
        const data=val.val();

        console.log("data retrived")
        const dataArray = Object.values(data);
        console.log(dataArray)
        setResult(dataArray)
      }
    })
   
  },[])
  return (
    <div>
   
     {/* <button className='show' onClick={show}>show</button> */}
     <div className='showdata main'>
     
     <table>
     <thead>
     <tr className='heading'>
      <td className='maintd'>Month</td>
      <td  className='maintd'>Year</td>
      <td  className='maintd'>Available Amount</td>
     </tr>
     </thead>

      {
        result.map((results)=>{
          return(
            
           <tbody>
            <tr>
          <td>{results.month}</td>
          <td>{results.year}</td> 
          <td>{results.amount}</td>
          </tr>
          </tbody>
          
          )
        })
      }  
          </table>
     
          </div>
    </div>
  )
}

export default Get