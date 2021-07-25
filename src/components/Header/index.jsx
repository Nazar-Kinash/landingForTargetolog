import React, { useState } from "react";

import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { PhoneIcon } from "../../images/headerIcons";
import MenuIcon from "@material-ui/icons/Menu";

import styles from "./header.module.scss";
import { isMobile } from "react-device-detect";
import Menu from "../Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.HeaderWrapper}>
      {isMobile ? (
        <>
          <MenuIcon className={styles.MenuIcon} onClick={() => setIsMenuOpen(true)} />
          {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
        </>
      ) : (
        <>
          <a className={styles.HeaderPhoneButton} href='tel:+380508829603'>
            <PhoneIcon />
            <p>+380 (50) 882-96-03</p>
          </a>
          {/* <h1 className={styles.HeaderTitle}>Христина Стецик</h1> */}
          <div className={styles.Navigation}>
            <a href='#mainPage'>головна</a>
            <a href='#services'>Послуги</a>
            <a href='#contacts'>Контакти</a>
            <div className={styles.IconsContainer}>
              <a href='https://www.instagram.com/krystyna_stetsyk/'>
                <InstagramIcon />
              </a>
              <a href='tg://resolve?domain=krystyna_stetsyk'>
                <TelegramIcon />
              </a>
              <a href='https://www.linkedin.com/in/%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BD%D0%B0-%D1%81%D1%82%D0%B5%D1%86%D0%B8%D0%BA-567438211/'>
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
