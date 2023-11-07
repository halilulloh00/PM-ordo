import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../Redux/Actions/ProductAction";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    type: "",
    country_of_origin: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const token = localStorage.getItem("token");
  //   // console.log(token);
  //   dispatch(
  //     createProduct(
  //       productData
  //       // token
  //     )
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    dispatch(createProduct({ productData, token }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название продукта"
          value={productData.title}
          onChange={(e) =>
            setProductData({ ...productData, title: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Описание продукта"
          value={productData.description}
          onChange={(e) =>
            setProductData({ ...productData, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Категория"
          value={productData.category}
          onChange={(e) =>
            setProductData({ ...productData, category: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Цена продукта"
          value={productData.price}
          onChange={(e) =>
            setProductData({ ...productData, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="type"
          value={productData.type}
          onChange={(e) =>
            setProductData({ ...productData, type: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="country_of_origin"
          value={productData.country_of_origin}
          onChange={(e) =>
            setProductData({
              ...productData,
              country_of_origin: e.target.value,
            })
          }
        />

        <button type="submit">Добавить курс</button>
      </form>
    </div>
  );
};

export default CreateProduct;
