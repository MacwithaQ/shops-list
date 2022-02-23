import axios from "axios";

export const baseURL = "http://10.14.0.113:8000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
