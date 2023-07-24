import React from 'react'
import Tableview from './Tableview';
import {app} from './Firebase'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Summary from './Summary';
import HomePage from './HomePage';
import Pend from './Pend';
import Receive from './Receive';
import Signin from './Signin';
import Signup from './Signup';



function Frontpage() {
  
  return (
    <div>
    <Router>
      <Routes>
         <Route path='/summary' element={<Summary/>}></Route>
         {/* <Route path='/' element={<Signin/>}></Route> */}
         {/* <Route path='/signup'  element={<Signup/>}></Route> */}
         <Route path='/' element={<HomePage/>}></Route>
         <Route path='/tableview' element={<Tableview/>}></Route>
         <Route path='/pend' element={<Pend/>}></Route>
         <Route path='/rec' element={<Receive/>}></Route>
         
      </Routes>
    </Router>
        
    </div>
    

  )
}

export default Frontpage;