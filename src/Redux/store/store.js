import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import LoginSlice from "../Slices/LoginSlice";
import ProductSlice from "../Slices/ProductSlice";

// const initialState = {
//   isLoggedIn: false,
// };

// // Создайте редуктор для обработки изменений состояния
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOG_IN":
//       return { ...state, isLoggedIn: true };
//     case "LOG_OUT":
//       return { ...state, isLoggedIn: false };
//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: {
    products: ProductSlice,
    register: AuthSlice,
    login: LoginSlice,
    // reducer: reducer,
  },
});
export default store;
