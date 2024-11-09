import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.61.242:3001"
});

export default api;
