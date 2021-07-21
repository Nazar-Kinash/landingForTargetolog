import { Button } from "@material-ui/core";
import React from "react";

import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.BannerWrapper}>
      <div className={styles.TextContainer}>
        <h4>Залишились запитання?</h4>
        <p>Я готова на них відповісти!</p>
      </div>
      <div className={styles.ButtonContainer}>
        <a href='tg://resolve?domain=krystyna_stetsyk'>Обговорити проект</a>
      </div>
    </div>
  );
};

export default Banner;
