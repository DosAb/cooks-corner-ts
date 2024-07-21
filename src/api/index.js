import axios from "axios";

const instance = axios.create({
  baseURL: "http://marina-backender.org.kg/cookscorner/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postRegister = (data) => instance.post(`users/signup/`, data);
export const postLogin = (data) => instance.post(`users/login/`, data);
export const getCategory = (token, category, page) => instance.get(`recipes/by-category/?category=${category}&page=${page}&limit=10`,{
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export const postRefreshToken = (refreshToken) => instance.post(`uesrs/login/refresh/`, refreshToken)
