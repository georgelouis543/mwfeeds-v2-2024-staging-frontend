import axios from 'axios';
const BASE_URL = 'https://backend.mwfeedsv2-staging.com/'
// const BASE_URL = "http://localhost:8000/"

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({ 
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
});