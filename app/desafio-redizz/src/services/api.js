import axios from 'axios'

const token = localStorage.getItem('token');

const api_url = "http://localhost:3000/"

export const api = axios.create({
    baseURL: api_url,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
});