import axios from "axios";

// axios global access defaults
const instance = axios.create({
    baseURL: 'https://react-course-dbeae-default-rtdb.europe-west1.firebasedatabase.app',
    timeout: 5000
})

instance.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    // handle error
    return Promise.reject(err)
})

instance.interceptors.response.use(function (response) {
    return response;
}, function (err) {
    // handle error
    console.log(err);
    return Promise.reject(err)
})

export default instance;