import React from "react";
import cls from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu as Menu,
  FiSearch as Search,
  FiShoppingBag as Basket,
} from "react-icons/fi";
// import Logo from "../../assets/logo.svg";
import Logo from "../../assets/Logo.svg";
import FlagRU from "../../assets/flagRU.svg";

const navs = [
  {
    title: "Главная",
    to: "/",
    id: 1,
  },
  {
    title: "Продукция",
    to: "/products",
    id: 2,
  },
  {
    title: "О нас",
    to: "/about",
    id: 3,
  },
  {
    title: "Контакты",
    to: "/contacts",
    id: 4,
  },
];

const Navbar = () => {
  return (
    <header className={cls.navbar}>
      <div className={cls.container}>
        <div className={cls.menu}>
          <Menu />
        </div>
        <div className={cls.logo}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <nav className={cls.navigation}>
        {navs.map(({ id, title, to }) => (
          <NavLink key={id} to={to}>
            {title}
          </NavLink>
        ))}
      </nav>
      <div className={cls.header}>
        <div className={cls.search}>
          <Search className={cls.searchIcon} />
          <input className={cls.searchInput} type="text" placeholder="Поиск" />
        </div>
        <Link to="/signin" className={cls.loginBtn}>
          Войти
        </Link>
        <Basket className={cls.btnBasket} />
        <button className={cls.flags}>
          <img src={FlagRU} alt="ru" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
