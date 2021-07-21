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
          головна
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
          <a href=''>
            <InstagramIcon />
          </a>
          <a href=''>
            <TelegramIcon />
          </a>
          <a href=''>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
