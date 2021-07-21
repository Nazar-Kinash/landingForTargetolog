import React from "react";
import photo from "../../images/photo.png";
import styles from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div id={"mainPage"} className={styles.MainPageWrapper}>
      <div className={styles.ContentContainer}>
        <h4>Таргетолог</h4>
        <h2>Христина Стецик</h2>
        <p>Налаштування таргетованої реклами в Instagram & Facebook</p>
        {/* <span>Генерую потік клієнтів із соцмереж та збільшую прибуток Вашого бізнесу</span> */}
        <a href='tg://resolve?domain=krystyna_stetsyk'>Обговорити проект</a>
      </div>
      <div className={styles.ImageContainer}></div>
    </div>
  );
};

export default MainPage;
