import cls from './SellerDetails.module.scss'
import { useState } from "react";
import { Link } from "react-router-dom";

const SellerDetails = () => {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [inn, setInn] = useState("");
  const [cname, setCName] = useState("");
  const [cposition, setCPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SurName:", surname);
    console.log("Name:", name);
    console.log("INN:", inn);
    console.log("CompanyName:", cname);
    console.log("CompanyPosition:", cposition);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className={cls.container}>
      <div className={cls.form}>
        <form onSubmit={handleSubmit}>
          <h1>Данные продавца</h1>
          <label>
            <p>Фамилия</p>
            <input
              type="text"
              placeholder="Фамилия"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </label>
          <label>
            <p>Имя</p>
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <p>ИНН</p>
            <input
              type="email"
              placeholder="ИНН"
              value={inn}
              onChange={(e) => setInn(e.target.value)}
            />
          </label>
          <label>
            <p>Название компании / магазина</p>
            <input
              type="text"
              placeholder="Название компании / магазина"
              value={cname}
              onChange={(e) => setCName(e.target.value)}
            />
          </label>
          <label>
            <p>Должность в компании</p>
            <input
              type="text"
              placeholder="Должность в компании"
              value={cposition}
              onChange={(e) => setCPosition(e.target.value)}
            />
          </label>
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
export default SellerDetails;
