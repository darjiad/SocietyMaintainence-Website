import React from 'react'
import axios from 'axios';
import {app} from './Firebase'
import { getDatabase, ref, set } from 'firebase/database';

const database = getDatabase(app);
const dataRef = ref(database, 'data');

function Data() {
    function sendDataToFirebase(month, year, amount) {
        // const auth = getAuth();
        // const user = auth.currentUser;
      
        // if (user) {
        //   user.getIdToken()
        //     .then((token) => {
              const data = {
                month: month,
                year: year,
                amount: amount,
              };
      
              set(dataRef, data)
  .then(() => {
    console.log('Data added successfully');
  })
  .catch((error) => {
    console.error('Error adding data:', error);
  });
            // .catch((error) => {
            //   console.error('Error getting authentication token:', error);
            // });
        }
      
      
  return(
  
   sendDataToFirebase('June', 2023, 100)
  )
    
}
export default Data;