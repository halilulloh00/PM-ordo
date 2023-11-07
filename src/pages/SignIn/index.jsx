import { useState } from "react";
import cls from "./SignIn.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Actions/LoginAction";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className={cls.container}>
      <div className={cls.form}>
        <form onSubmit={handleSubmit}>
          <h1>Авторизоваться</h1>
          <label>
            <p>E-mail</p>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <p>Пароль</p>
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/forgotyoupassword" className={cls.btnFYP}>
              Забыли пароль?
            </Link>
          </label>
          <button className={cls.btnOrange}>Войти</button>
          <button className={cls.btnGoogle}>Войти через Google</button>
          <p className={cls.linkSignUp}>
            Ещё нет аккаунта? <Link to="/signup"> Создать аккаунт</Link>
          </p>
          <p className={cls.agreement}>
            Продолжая, вы соглашаетесь с <span>Условиями обслуживания</span> и{" "}
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
export default SignIn;
