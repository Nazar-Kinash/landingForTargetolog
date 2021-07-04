import { useFormik } from "formik";
import React from "react";

import styles from "./contactsComponents.module.scss";

const ContactsComponents = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      message: "",
    },
  });
  const contactList = [];
  return (
    <div className={styles.ComponentWrapper}>
      <div className={styles.InfoContainer}>
        <h3>Мої контакти</h3>
        <div className={styles.ContactList}>
          {!!contactList.length &&
            contactList.map((el, i) => (
              <a href={el.link}>
                <el.icon />
                <p>{el.text}</p>
              </a>
            ))}
        </div>
      </div>
      <div className={styles.ContactFormWrapper}>
        <h3>Залишити контакт</h3>
        <form className={styles.ContactForm}>
          <label className={styles.FormLabel} htmlFor='name'>
            Ваше ім'я
          </label>
          <input className={styles.FormInput} name='name' type='text' />
          <label className={styles.FormLabel} htmlFor='phone'>
            {"Контактний телефон*"}
          </label>
          <input className={styles.FormInput} name='phone' type='text' />
          <label className={styles.FormLabel} htmlFor='message'>
            Ваше запитання
          </label>
          <textarea className={styles.FormInput} name='message' id='' rows='4'></textarea>
          <button className={styles.FormButton} type='submit'>
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactsComponents;
