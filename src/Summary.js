import React from 'react'
import Get from './Get'

import { Link,useLocation } from 'react-router-dom'
function Summary() {
  const lg=useLocation();
  const month=lg.state.month;
  const year=lg.state.year;
  return (
    <div>
     <Link to='/tableview' state={{month:month,year:year}} className="icon2" >
   <button className='btn1'>Back</button>
    </Link>
        <Get/>
        </div>
    
  )
}

export default Summary