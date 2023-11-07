import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../consts";

// export const login = createAsyncThunk("auth/login", async (userData) => {
//   const { data } = await axios.post(`${API}/accounts/login/`, userData);
//   console.log(data);
//   localStorage.setItem("token", data);
//   return data;
// });

export const login = createAsyncThunk("auth/login", async (userData) => {
  const { data } = await axios.post(`${API}/accounts/login/`, userData);
  const accessToken = data.access; // Получение токена доступа из объекта data
  console.log(accessToken); // Печать токена доступа в консоль для проверки
  localStorage.setItem("accessToken", accessToken); // Сохранение токена доступа в localStorage
  return data;
});
