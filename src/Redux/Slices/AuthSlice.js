import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../Actions/RegisterAction";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default AuthSlice;
