import React from "react";
import cls from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={cls.footer}>
      <section className={cls.links}>
        <ul>
          <li>Меню</li>
          <li>Главная</li>
          <li>Все продукты</li>
          <li>Профиль</li>
          <li>Корзина</li>
          <li>Настройки</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
        <ul>
          <li>Поиск</li>
          <li>Акция</li>
          <li>Отзывы</li>
          <li>Статьи</li>
          <li>Новости</li>
          <li>Доставка и оплата</li>
          <li>Язык</li>
        </ul>
        <ul>
          <li>Социальная сеть</li>
          <li>
            <i className="fa-brands fa-square-instagram"></i> instagram
          </li>
          <li>
            <i className="fa-brands fa-square-facebook"></i> facebook
          </li>
          <li>
            <i className="fa-brands fa-square-twitter"></i> twitter
          </li>
          <li>
            <i className="fa-brands fa-square-youtube"></i> youtube
          </li>
        </ul>
        <ol className={cls.contacts}>
          <ul>
            <li>Контакты</li>
            <li>+996 000 000 000</li>
            <li>+996 000 000 000</li>
          </ul>
          <ul>
            <li>Адресс</li>
            <li>
              <p>
                <i className="fa-solid fa-location-dot"></i>
                Кыргызская Республика
              </p>
              <p>г. Бишкек ул. Раззакова 1</p>
            </li>
          </ul>
        </ol>
      </section>
      <p className={cls.copyright}>© 2023 Makers All rights reserved</p>
    </div>
  );
};

export default Footer;
