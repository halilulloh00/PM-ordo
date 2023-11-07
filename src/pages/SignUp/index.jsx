import { useState } from "react";
import cls from "./SignUp.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Actions/RegisterAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });

  const handleInputChange = (e, field) => {
    setUserData({ ...userData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData)); // Отправка данных на сервер
    setUserData({
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div className={cls.container}>
      <div className={cls.form}>
        <form onSubmit={handleSubmit}>
          <h1>Зарегистрироваться</h1>
          <label>
            <p>E-mail</p>
            <input
              type="text"
              placeholder="email"
              value={userData.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
          </label>
          <label>
            <p>ФАМИЛИЯ</p>
            <input
              type="text"
              placeholder="Фамилия"
              value={userData.last_name}
              onChange={(e) => handleInputChange(e, "last_name")}
            />
          </label>
          <label>
            <p>Имя</p>
            <input
              type="text"
              placeholder="Имя"
              value={userData.first_name}
              onChange={(e) => handleInputChange(e, "first_name")}
            />
          </label>

          <label>
            <p>Пароль</p>
            <input
              type="password"
              placeholder="Пароль"
              value={userData.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
          </label>
          <label>
            <p>Повторите пароль</p>
            <input
              type="password"
              placeholder="Пароль"
              value={userData.password2}
              onChange={(e) => handleInputChange(e, "password2")}
            />
            <Link to="/forgotyoupassword" className={cls.btnFYP}>
              Забыли пароль?
            </Link>
          </label>
          <button type="submit" className={cls.btnOrange}>
            Продолжить
          </button>
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
export default SignUp;
