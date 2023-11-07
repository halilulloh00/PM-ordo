import { useState } from "react";
import cls from "./Role.module.scss";
import { Link } from "react-router-dom";

const Role = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className={cls.container}>
      <div className={cls.form}>
        <form onSubmit={handleSubmit}>
          <h1>Выберите роль</h1>
          <div className={cls.inputs}>
            <input
              type="text"
              value={`Покупатель`}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
            <input
              type="text"
              value={`Продавец`}
              onChange={(e) => setPassword(e.target.value)}
              disabled
            />
          </div>
          <button className={cls.btnOrange}>Продолжить</button>
          <button className={cls.btnGoogle}>Войти через Google</button>
          <p className={cls.linkSignUp}>
            Ещё нет аккаунта? <Link to="/signup"> Создать аккаунт</Link>
          </p>
          <p className={cls.agreement}>
            Продолжая, вы соглашаетесь с <span>Условиями обслуживания</span> и
            <br />
            <Link to="/signin">
              Политикой конфиденциальности Ordo marketplace
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Role;
