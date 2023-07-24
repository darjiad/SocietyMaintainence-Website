import React from 'react'
import { useLocation } from 'react-router-dom'

function Receive() {
    const lg=useLocation();
    const rec=lg.state.receive;
  return (
    <div>
        {
            rec.map((val)=>{
                return(
                    <h1>{val}</h1>
                );
            })
        }
    </div>
  )
}

export default Receive