import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../consts";

// export const createProduct = createAsyncThunk(
//   "product/createProduct",
//   async ({ productData, token }) => {
//     try {
//       const response = await axios.post(`${API}/products/`, productData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Добавляем заголовок Authorization с токеном
//         },
//       });
//       return response.data;
//     } catch (error) {
//       // Обрабатываем ошибку при создании продукта
//       throw new Error("Failed to create product");
//     }
//   }
// );

// export const getProduct = createAsyncThunk(
//   "product/getProduct",
//   async (token) => {
//     try {
//       const response = await axios.get(`${API}/products/`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Добавляем заголовок Authorization с токеном
//         },
//       });
//       return response.data;
//     } catch (error) {
//       // Обрабатываем ошибку при получении продуктов
//       throw new Error("Failed to fetch products");
//     }
//   }
// );

// извлечение токена из localStorage
// const token = localStorage.getItem("token");

// // создание createProduct с использованием извлеченного токена
// export const createProduct = createAsyncThunk(
//   "product/createProduct",
//   async (productData) => {
//     try {
//       const response = await axios.post(`${API}/products/`, productData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Добавляем заголовок Authorization с токеном
//         },
//       });

//       return response.data;
//     } catch (error) {
//       throw new Error("Failed to create product");
//     }
//   }
// );

// // создание getProduct с использованием извлеченного токена
export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const response = await axios.get(`${API}/products/`);
    //  {
    //   headers: {
    //     Authorization: `Bearer ${token}`, // Добавляем заголовок Authorization с токеном
    //   },
    // });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
});
// извлечение токена из localStorage
// const token = localStorage.getItem("token");

// console.log("Токен из localStorage:", token);

// export const createProduct = createAsyncThunk(

//   "product/createProduct",
//   async ({ productData, token }) => {
//     try {
//       console.log("Токен для запроса создания продукта:", token);
//       const response = await axios.post(`${API}/products/`, productData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("Ответ сервера на запрос создания продукта:", response);
//       return response.data;
//     } catch (error) {
//       throw new Error("Failed to create product");
//     }
//   }
// );

// export const createProduct = createAsyncThunk(
//   "product/createProduct",
//   async ({ productData, token }) => {
//     try {
//       console.log("Токен для запроса создания продукта:", token);
//       const response = await axios.post(`${API}/products/`, productData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("Ответ сервера на запрос создания продукта:", response);
//       return response.data;
//     } catch (error) {
//       throw new Error("Failed to create product");
//     }
//   }
// );

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async ({ productData, token }) => {
    try {
      console.log("Токен для запроса создания продукта:", token);
      const response = await axios.post(
        `${API}/products/`,
        JSON.stringify(productData),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Установка заголовка Content-Type для указания формата данных
          },
        }
      );

      console.log("Ответ сервера на запрос создания продукта:", response);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create product");
    }
  }
);

// export const getProduct = createAsyncThunk("product/getProduct", async () => {
//   try {
//     console.log("Токен для запроса получения продуктов:", token);
//     const response = await axios.get(`${API}/products/`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     console.log("Ответ сервера на запрос получения продуктов:", response);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch products");
//   }
// });
