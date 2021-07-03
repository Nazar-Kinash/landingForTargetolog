import React from "react";
import photo from "../../images/photo.png";
import styles from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.MainPageWrapper}>
      <div className={styles.ContentContainer}>
        <h4>Таргетолог</h4>
        <h2>Христина Стецик</h2>
        <p>Налаштування таргетованої реклами в Instagram & Facebook</p>
        <button>Обговорити проект</button>
      </div>
      <div className={styles.ImageContainer}></div>
    </div>
  );
};

export default MainPage;
