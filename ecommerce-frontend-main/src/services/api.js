import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommercebackend-production-8218.up.railway.app//api"
});

export default API;
