import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Ax from "./Ax";
// import {app} from './Firebase'
// import axios from "axios";
import Blockdata from "./Blockdata";
// import { getAuth } from "firebase/auth";
import {app} from './Firebase'
import { getDatabase, ref, set,push } from 'firebase/database';

import "./table.css";
const database = getDatabase(app);
const dataRef = ref(database, 'data');


// Get the current user's authentication token

// import Database from "./Database";


function Tableview() {
  
  const lg = useLocation();

  const [month,setMonth] = useState(lg.state.month);
  const [year,setYear]= useState(lg.state.year);
  const [Blockdata1,setBlockData1]=useState(Blockdata)
  
  const [Amount, setAmount] = useState(0);
  const [pend, setPend] = useState(Blockdata1);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(0);
  const [recb, setRecb] = useState("");
  const [show, setShow] = useState([]);
  const [bN, setBN] = useState(false);
  const [all, setAll] = useState(false);
  const [receive, setReceive] = useState([{
    bn:'',
    date:'',
    amount:'',
  }]);
  const [pend1, setPend1] = useState(false);
  const [rec1, setRec1] = useState(false);
  const [home, setHome] = useState(true);
 const [color,setColor]=useState("black");
 const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
//  const[date,setDate]=useState('');
 const [PendingAmount,setPendingAmount]=useState(2600);
 const[check,setCheck]=useState(false);
 const [checkstate,setCheckstate]=useState(new Array(12).fill(false));

  

  function extra() {
    setUpdate(true);
    setHome(false);
    setRec1(false);
    setPend1(false);
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(true);
  }

  function updateAmount() {
    var data1 = Number(data);
    setAmount(Amount - data1);
  }
  
  let newb;
  function Addition(newAmount, e, bn,pos) {
    // console.log(pos);
    // console.log(date);
    const updatecheckstate=checkstate.map((item,index)=>
      index===pos ? !item : item
    );
    setCheckstate(updatecheckstate);
    
    
    if (e.target.checked) {
      newAmount = Number(newAmount);
      setAmount(Amount + newAmount);
     setPendingAmount(PendingAmount-newAmount);
      
      // setReceive([...receive, {bn:bn,amount:newAmount}]);
      newb = pend.filter((val) => {
        if (val.BlockName === bn) {
          return false;
        } else {
          return true;
        }
      });
      setPend(newb);
      // console.log(bn);
    } else {
      newAmount = Number(newAmount);
      setAmount(Amount - newAmount);
    }
  }
  function Subtraction(newAmount, e) {
    if (e.target.checked) {
      newAmount = Number(newAmount);
      setAmount(Amount - newAmount);
    
      console.log(Amount - newAmount);
    } else {
      newAmount = Number(newAmount);
      setAmount(Amount + newAmount);
      console.log(Amount + newAmount);
    }
  }

  function reset() {
    setAmount(0);
    setUpdate(false);
    setBN(false);
  }

  function SendData(e) {
    e.preventDefault();
   
    const data = {
      month: month,
      year: year,
      amount: Amount,
    };
    const newDataRef = push(dataRef);
    set(newDataRef, data)
.then(() => {
console.log('Data added successfully');
})
.catch((error) => {
console.error('Error adding data:', error);
});
    }
  

  function received() {
    setRec1(true);
    setHome(false);
    setPend1(false);
    setUpdate(false);
    setClick1(false);
    setClick2(true);
    setClick3(false);
    setClick4(false);
  }
  function home1() {
    setHome(true);
    setRec1(false);
    setPend1(false);
    setUpdate(false);
    setClick1(true);
    setClick2(false);
    setClick3(false);
    setClick4(false);
  }
  function pending1() {
    setHome(false);
    setPend1(true);
    setRec1(false);
    setUpdate(false);
    setClick1(false);
    setClick2(false);
    setClick3(true);
    setClick4(false);
  }
  function SetDate(e, id,newAmount,bn) {
    console.log(newAmount);
    console.log(bn);
    setBlockData1((prevBlockData1) => {
      const updatedBlockdata = prevBlockData1.map((val) => {
        if (val.id === id) {
          setReceive([...receive, {bn:bn,amount:newAmount,date:e}]);
          return { ...val, date: e };
        }
        return val;
      });
      console.log(Blockdata1);
      return updatedBlockdata;
    });
  }
  return (
    <div>
      <div className="flex3">
      
        <p>Month:{month}</p>
        <p>Year:{year}</p>
      </div>
      <div className="flex4">
        <div className="flex2">
          <Link to="/">
          <button >Back</button>
          </Link>
          <button className={click1 ?"button1" :""}  onClick={home1}>Home</button>
          <button className={click2 ?"button1" :""} onClick={received}>Recieved</button>
          <div>
            <button className={click3 ?"button1" :""} onClick={pending1}>Pending</button>
          </div>

          <button className={click4 ?"button1" :""} onClick={extra}>Expenses</button>
          
         
          <Link to="/summary" state={{month:month,year:year}}>
            <button>Summary</button>
          </Link>
        </div>
        <div className="table"></div>
        <div>
          <form method="post" onSubmit={SendData}>
            <div className="main">
              {home && (
                <div>
                <table>

                  <thead>
                    <tr>
                      <th>Block_No</th>
                      <th>Date</th>
                      <th>Maintainace_Amount</th>
                    </tr>
                  </thead>

                  {Blockdata1.map((value,index) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{value.BlockName}</td>
                          <td>
                            <input type="date" name="date"  onChange={(e)=>SetDate(e.target.value,value.id,value.Amount,value.BlockName)} />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              className="add"
                              autoComplete="off"
                              key={value.id}
                              value={value.Amount}
                              checked={checkstate[index]}
                              onChange={(e) =>
                                Addition(e.target.value, e, value.BlockName,index)
                              }
                            />
                            {value.Amount}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <div className="flex">
              <p className="totalamount">Total Amount:</p>
              <p className="amount" name="amount" value={Amount}>
                {Amount}
              </p>
              <input className="btn1" type="reset" onClick={reset} />
              <input className="btn1" type="submit" value="Submit" />
            </div> </div>)}
              
        

            {rec1 && (
              <div >
                <h1 className="head2">Recieved List</h1>
                <table>
                  <thead>
                    <tr>
                      <th>BlockName</th>
                      <th>Date</th>
                      <th>Received_Amount</th>
                    </tr>
                  </thead>

                  {receive.slice(1).map((val) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{val.bn}</td>
                          <td>{val.date}</td>
                          <td>{val.amount}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <div className="flex">
              <p className="totalamount">Received Amount:</p>
              <p className="amount" name="amount" value={Amount}>
                {Amount}
              </p>
             
            </div>
              </div>
              
            )}
            {pend1 && (
              <div>
                <h1 className="head2">Pending List</h1>
                <table>
                <thead>
                  <tr>
                    <th>BlockName</th>
                    <th>Pending_Amount</th>
                    <th>Mobile_No</th>
                  </tr>
                </thead>
                
                {pend.map((val) => {
                  return (
                    <>
                  <tbody>
                    <tr>
                      <td>{val.BlockName}</td>
                      <td>{val.Amount}</td>
                      <td>9879515001</td>
                    </tr>
                  </tbody>
                  </>
                  )
                })}
                </table>
                <div className="flex">
              <p className="totalamount">Total Pending Amount:</p>
              <p className="amount" name="amount" value={Amount}>
                {PendingAmount}
              </p>
              
            </div>
              </div>
            )}
            </div>
          </form>
          
          <div>
          <div >
           
           {update && (
             <div className="expence">
                <p className='p'>
                <span> PramodDada
                 <input
                   type="checkbox"
                   value="400"
                   onChange={(e) => Subtraction(e.target.value, e)}
                 /></span>
                 <span className="span2">
              ShantaBen
              <input
                   type="checkbox"
                   autoComplete="off"
                   value={500}
                   onChange={(e) => Subtraction(e.target.value, e)}
                 /></span> </p>
             <table>
              
            <tr>
               <td>
               <p className="p">
                 Enter Description:</p>
                 </td>
                 <td>
                 <textarea className="extraam"  placeholder="Description" ></textarea></td>
               </tr>
               <tr>
               <td>
               <p className='p'>
                 Enter Amount:</p>
                 </td>
                 <td>
                 <input
                 className="extraam"
                   type="text"
                   placeholder="Enter the Extra amount"
                   onChange={(e) => setData(e.target.value)}
                 />
                 </td>
               </tr>
               
               </table>
               <button className="update" onClick={updateAmount}>update</button>
             </div>
           )}
         </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Tableview;