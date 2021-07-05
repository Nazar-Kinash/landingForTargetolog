import React from "react";

import styles from "./servicesComponent.module.scss";

const ServicesComponent = () => {
  return (
    <div className={styles.ComponentWrapper}>
      <h2>Послуги</h2>
      <div className={styles.ContentContainer}>
        <div className={`${styles.ItemWrapper} ${styles.Service3}`}>
          <h3>Особиста консультація</h3>
          <ul>
            <li> Брифінг для виявлення основних проблем і питань</li>
            <li>аналіз запитів і підбір шляхів вирішення</li>
            <li>дзвінок на платформі Zoom 1,5-2 год</li>
          </ul>
          <p>Вартість: 35$</p>
          <button>Замовити</button>
        </div>
        <div className={`${styles.ItemWrapper} ${styles.Service1}`}>
          <h3>Таргетована реклама (2 тижня)</h3>
          <ul>
            <li> Аудит профілю</li>
            <li>Налаштування рекламного кабінету</li>
            <li>Аналіз ринку, конкурентів, ЦА</li>
            <li>Сегментування ЦА</li>
            <li>Створення пікселя (при необхідності)</li>
            <li>Підготовка креативів і оферів</li>
            <li>Запуск РК</li>
            <li>Оптимізація, пониження вартості кліку</li>
          </ul>
          <p>Вартість: 80$</p>
          <button>Замовити</button>
        </div>
        <div className={`${styles.ItemWrapper} ${styles.Service2}`}>
          <h3>Таргетована реклама (30 днів)</h3>
          <ul>
            <li> Аудит профілю</li>
            <li>Налаштування рекламного кабінету</li>
            <li>Аналіз ринку, конкурентів, ЦА</li>
            <li>Сегментування ЦА</li>
            <li>Створення пікселя (при необхідності)</li>
            <li>Підготовка креативів і оферів</li>
            <li>Запуск РК</li>
            <li>Оптимізація, пониження вартості кліку</li>
          </ul>
          <p>Вартість: 150$</p>
          <button>Замовити</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
