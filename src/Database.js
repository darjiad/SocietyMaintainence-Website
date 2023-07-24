import axios from "axios";

export default axios.create({
    baseURL:'https://maintaineneceapp-default-rtdb.firebaseio.com/'
})