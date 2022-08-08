import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./menu.module.scss";
// import { PhoneIcon } from "../../images/headerIcons";

const Menu = ({ onClose }) => {
  return (
    <div className={styles.MenuWrapper}>
      <CloseIcon onClick={onClose} className={styles.CloseButton} />
      <div className={styles.Navigation}>
        <a onClick={onClose} href='#mainPage'>
          Головна
        </a>
        <a onClick={onClose} href='#services'>
          Послуги
        </a>
        <a onClick={onClose} href='#faq'>
          FAQ
        </a>
        <a onClick={onClose} href='#contacts'>
          Контакти
        </a>
        {/* <a className={styles.HeaderPhoneButton} href='tel:+380508829603'>
          <PhoneIcon />
          <p>+380 (50) 882-96-03</p>
        </a> */}
        <div className={styles.IconsContainer}>
          <a href='https://www.instagram.com/krystyna_stetsyk/'>
            <InstagramIcon />
          </a>
          <a href='tg://resolve?domain=krystyna_stetsyk'>
            <TelegramIcon />
          </a>
          <a href='https://www.linkedin.com/in/%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BD%D0%B0-%D1%81%D1%82%D0%B5%D1%86%D0%B8%D0%BA-567438211/?originalSubdomain=ua'>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
