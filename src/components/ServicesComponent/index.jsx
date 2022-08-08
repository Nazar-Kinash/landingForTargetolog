import React from "react";

import styles from "./servicesComponent.module.scss";

const ServicesComponent = () => {
  return (
    <div id='services' className={styles.ComponentWrapper}>
      <h2>Послуги</h2>
      <div className={styles.ContentContainer}>
        <div className={`${styles.ItemWrapper} ${styles.Service3}`}>
          <h3>Особиста консультація</h3>
          <ul>
            <li>Аудит профілю </li>
            <li>Розбір попередніх рекламних кампаній</li>
            <li>Розробка стратегії запуску реклами</li>
            <li>Аналіз запитів і підбір шляхів вирішення</li>
            <li>Дзвінок на платформі Zoom 1,5-2 год</li>
          </ul>
          {/* <p>Вартість: 35$</p> */}
          <a href='tg://resolve?domain=krystyna_stetsyk'>Замовити</a>{" "}
        </div>
        <div className={`${styles.ItemWrapper} ${styles.Service1}`}>
          <h3>Таргетована реклама (1 місяць)</h3>
          <ul>
            <li>Аудит профілю</li>
            <li>Налаштування рекламного кабінету</li>
            <li>Аналіз ринку, конкурентів, ЦА</li>
            <li>Сегментування ЦА</li>
            <li>Створення пікселя (при необхідності)</li>
            <li>Підготовка креативів і оферів</li>
            <li>Запуск РК</li>
            <li>Оптимізація, пониження вартості кліку</li>
            <li>Звітність</li>
          </ul>
          {/* <p>Вартість: 80$</p> */}
          <a href='tg://resolve?domain=krystyna_stetsyk'>Замовити</a>{" "}
        </div>
        <div className={`${styles.ItemWrapper} ${styles.Service2}`}>
          <h3>МЕНТОРСТВО (1 місяць)</h3>
          <ul>
            <li>Zoom-дзвінки 2 рази на тиждень.</li>
            <li>Щоденні плани/звіти по задачах.</li>
            <li>Зв’язок зі мною 24/7</li>
            <li>доступ до Телеграм-чату (доступ залишається назавжди)</li>
            <li>Д/З, чек-листи, таблиці, договір на співпрацю та ін. документи</li>
          </ul>
          <p className={styles.Bonus}>
            БОНУС🎁 Додатково всі матеріали, таблиці, бриф, звіти на англійській мові (перевірені викладачем), які
            потрібні для таргетолога.
          </p>
          <a href='tg://resolve?domain=krystyna_stetsyk'>Замовити</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
