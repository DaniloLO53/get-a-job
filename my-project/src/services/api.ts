import axios from "axios";

console.log('baseurl', process.env.NEXT_PUBLIC_SERVER_ENDPOINT)

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_ENDPOINT
})

export default instance;
