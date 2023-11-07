import cls from "./ChangePsw.module.scss";
import { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("password:", password);
  };
  return (
    <div className={cls.container}>
      <div className={cls.form}>
        <form onSubmit={handleSubmit}>
          <h1>Изменить пароль</h1>
          <label>
            <p>Новый пароль</p>
            <input
              type="password"
              placeholder="Новый пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <p>Повторить пароль</p>
            <input
              type="password"
              placeholder="Повторите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={cls.btnOrange}>Сохранить</button>
        </form>
      </div>
    </div>
  );
};
export default ChangePassword;
