import FormData from "form-data";
import axios from "axios";
import React from "react";

import styles from "./banner.module.scss";

const Banner = () => {
  const formData = new FormData();
  formData.append("phone", "380999999999");

  const sendREquest = async () => {
    const addedClient = await axios.post("http://localhost:3001/clients/add_client", formData);
    console.log(addedClient);
  };

  return (
    <div className={styles.BannerWrapper}>
      <div className={styles.TextContainer}>
        <h4>Залишились запитання?</h4>
        <p>Я готова на них відповісти!</p>
      </div>
      <div className={styles.ButtonContainer}>
        <a href='tg://resolve?domain=krystyna_stetsyk'>Обговорити проект</a>
      </div>

      <button onClick={sendREquest}>Send</button>
    </div>
  );
};

export default Banner;
