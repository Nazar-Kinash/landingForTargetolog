import { useFormik } from "formik";
import React from "react";
import { Instagram, Telegram, Linkedin } from "../../images/icons";

import styles from "./contactsComponents.module.scss";

const ContactsComponents = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <div id={"contacts"} className={styles.ComponentWrapper}>
      <div className={styles.InfoContainer}>
        <h3>Мої контакти</h3>
        <div className={styles.ContactsWrapper}>
          <div className={styles.ContactList}>
            <a href='tel:+380508829603'>
              <label htmlFor=''>Телефон</label> <p>{"+38 (050)882-96-03"}</p>
            </a>
            <a href='mailto:stecikh@gmail.com'>
              <label htmlFor=''>E-mail</label> <p>{"stecikh@gmail.com"}</p>
            </a>
          </div>
          <div className={styles.SocialIconsContainer}>
            <a href='https://www.instagram.com/krystyna_stetsyk/'>
              <Instagram />
            </a>
            <a href='tg://resolve?domain=krystyna_stetsyk'>
              <Telegram />
            </a>
            <a href='https://www.linkedin.com/in/%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BD%D0%B0-%D1%81%D1%82%D0%B5%D1%86%D0%B8%D0%BA-567438211/'>
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
      {/* <div className={styles.ContactFormWrapper}>
        <h3>Залишити контакт</h3>
        <form className={styles.ContactForm} onSubmit={formik.handleSubmit}>
          <label className={styles.FormLabel} htmlFor='name'>
            Ваше ім'я
          </label>
          <input
            className={styles.FormInput}
            value={formik.values.name}
            onChange={formik.handleChange}
            name='name'
            type='text'
          />
          <label className={styles.FormLabel} htmlFor='phone'>
            {"Контактний телефон*"}
          </label>
          <input
            className={styles.FormInput}
            value={formik.values.phone}
            onChange={formik.handleChange}
            name='phone'
            type='text'
          />
          <label className={styles.FormLabel} htmlFor='message'>
            Ваше запитання
          </label>
          <textarea
            className={styles.FormInput}
            value={formik.values.message}
            onChange={formik.handleChange}
            name='message'
            id=''
            rows='4'></textarea>
          <button className={styles.FormButton} type='submit'>
            Відправити
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default ContactsComponents;
