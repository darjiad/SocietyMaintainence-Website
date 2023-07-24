import axios from 'axios'
import React from 'react'

export default axios.create(
    {
        baseURL:'https://maintaineneceapp-default-rtdb.firebaseio.com/'
    }
)