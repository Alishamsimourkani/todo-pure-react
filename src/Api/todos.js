import axios from "axios";

// axios global access defaults
const instance = axios.create({
    baseURL: 'https://react-course-dbeae-default-rtdb.europe-west1.firebasedatabase.app',
    timeout: 5000
})

export default instance;