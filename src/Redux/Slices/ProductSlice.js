import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../Actions/ProductAction";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
