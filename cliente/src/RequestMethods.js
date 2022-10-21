import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTE3NTFmODdhZDhiOTNkMzIyOGJjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjMwMjM2MSwiZXhwIjoxNjY2NTYxNTYxfQ.yfJ-Xydq8qLm3X9uigZVvCgWEPNJ6tAkX9hGW146-Ik"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL:BASE_URL,
  headers:{
    token:`Bearer ${TOKEN}`
  }
});

