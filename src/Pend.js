import React from 'react'
import { useLocation } from 'react-router-dom'

function Pend() {
    const lg=useLocation();
    const pend=lg.state.data;
  return (
    <div>
    
        {
            pend.map((val)=>{
                return(
                <h1>{val.BlockName}</h1>);
            })
        }
    </div>
  )
}

export default Pend