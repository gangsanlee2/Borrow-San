import axios from "axios";
const server = `http://localhost:8000`
export const main = req => axios.get(`${server}/user/main`, req)
