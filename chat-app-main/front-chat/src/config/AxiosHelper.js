import axios from "axios";
export const baseURL = "https://spring-chat-app-production.up.railway.app";
export const httpClient = axios.create({
  baseURL: baseURL,
});
