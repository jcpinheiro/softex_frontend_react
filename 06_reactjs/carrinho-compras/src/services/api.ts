import axios from 'axios'

// json-server --watch db.json
export const api = axios.create({
  baseURL: "http://localhost:3000"
})
