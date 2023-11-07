import React, { useState } from "react";
import cls from "./ForgotYourPsw.module.scss";
import { Link } from "react-router-dom";

const ForgotYourPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };
  return (
    <div className={cls.container}>
      <div className={cls.form}>
        <form onSubmit={handleSubmit}>
          <h1>Забыли пароль?</h1>
          <label>
            <p>E-mail</p>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <p>
            Вам на почту будет отправлена ссылка для изменения пароля
          </p>
          <button className={cls.btnOrange}>Отправить</button>
        </form>
      </div>
    </div>
  );
};
export default ForgotYourPassword;
