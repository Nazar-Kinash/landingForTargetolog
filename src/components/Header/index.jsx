import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <h1 className={styles.HeaderTitle}>Христина Стецик</h1>
      <div className={styles.Navigation}>
        <a href="">головна</a>
        <a href="">Послуги</a>
        <a href="">Контакти</a>
      </div>
    </div>
  );
};

export default Header;
