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
        </>
      )}
    </div>
  );
};

export default Header;
