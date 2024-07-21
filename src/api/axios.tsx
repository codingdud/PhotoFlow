import axios, { AxiosInstance } from 'axios';

// Create a new Axios instance

const BASE_URL = 'https://loginapi.sysopengineer.tech/';
//const BASE_URL = 'http://localhost:8080/';

export default axios.create({
    baseURL: BASE_URL,
    
});

export const axiosPrivate=axios.create({
    baseURL: BASE_URL,
})
