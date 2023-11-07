import React from "react";
import cls from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section>
      <div className={cls.contacts}>
        {/* <a class="dg-widget-link" href="http://2gis.kg/osh/firm/70000001045321732/center/72.79725551605226,40.529099176672275/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Оша</a><div class="dg-widget-link"><a href="http://2gis.kg/osh/firm/70000001045321732/photos/70000001045321732/center/72.79725551605226,40.529099176672275/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">Фотографии компании</a></div><div class="dg-widget-link"><a href="http://2gis.kg/osh/center/72.797245,40.52907/zoom/16/routeTab/rsType/bus/to/72.797245,40.52907╎Банк Компаньон, сберегательная касса Ош-Центр?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до Банк Компаньон, сберегательная касса Ош-Центр</a></div><script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script><script charset="utf-8">new DGWidgetLoader({"width":'100%',"height":600,"borderColor":"#a3a3a3","pos":{"lat":40.529099176672275,"lon":72.79725551605226,"zoom":16},"opt":{"city":"osh"},"org":[{"id":"70000001045321732"}]});</script><noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.831314419359!2d72.79985205603217!3d40.52755482045337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdad12f404472f%3A0x7a5dcf3fc3370c2b!2sololoOsh!5e0!3m2!1sru!2skg!4v1675769038916!5m2!1sru!2skg"
          width="100%"
          height="500"
          loading="lazy"
        />

        <div className={cls.textOfContacts}>
          <ol>
            <ul>
              <li>Контакты</li>
              <li>
                <i className="fa-brands fa-whatsapp"></i>
                +996 000 000 000
              </li>
              <li>
                <i className="fa-brands fa-whatsapp"></i>
                +996 000 000 000
              </li>
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
        </div>
      </div>
    </section>
  );
};

export default Contacts;
