import { createSlice } from "@reduxjs/toolkit";
import { login } from "../Actions/LoginAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
