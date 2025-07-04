import axios from "axios";

console.log("=== API.JS LOADED, ENV:", process.env.REACT_APP_API_URL);
console.log("Frontend API baseURL is:", process.env.REACT_APP_API_URL);
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
console.log("Frontend API baseURL is:", process.env.REACT_APP_API_URL);
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

export default api;
