import axios from "axios";

const API = axios.create({ baseURL: "https://chat-server-jin3.onrender.com" });

export const userChats = (id) => API.get(`/chat/${id}`);
