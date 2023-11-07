import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../consts";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    const response = await axios.post(`${API}/accounts/register/`, userData);
    return response.data;
  }
);
