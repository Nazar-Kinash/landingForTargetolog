import React from "react";
import componentImage from "../../images/benefit-component-image.jpg";
import { Support24HoursIcon, Instagram, CoinIcon, WritingIcon, TrophyIcon, ChecklistIcon } from "../../images/icons";

import styles from "./benefitsComponent.module.scss";

const BenefitsComponent = () => {
  const benefitsList = [
    {
      icon: Instagram,
      title: "Швидкий старт",
      text: "Hе затягую терміни, починаю роботу одразу після узгодження всіх деталей",
    },
    {
      icon: Instagram,
      title: "Безкоштовний аудит сторінки",

      text: "Aналізую вашу посадкову сторінку та даю рекомендації для її вдосконалення",
    },
    {
      icon: WritingIcon,
      title: "",

      text: "Тестовий період (7 днів) проводжу безкоштовно, якщо не приводжу клієнтів у Ваш бізнес",
    },
    { icon: TrophyIcon, text: "Орієнтуюсь не на ціну заявки, а на результат - замовлення" },
    {
      icon: CoinIcon,
      title: "Ви платите дешевше",

      text: "Cобівартість моєї роботи нижча порівняно з агенством за рахунок відсутності орендної плати за офіс (так як працюю дистанційно)",
    },
    { icon: ChecklistIcon, title: "", text: "Створюю продаючі скрипти для обробки лідів під Ваш бізнес." },
    { icon: ChecklistIcon, title: "", text: "Зацікавлкна в результаті кожного мого клієнта" },
    {
      icon: Support24HoursIcon,
      title: "На зв’язку з Вами 24/7 ",

      text: "Bідповідаю на Ваші запитання в будь який період доби.",
    },
  ];

  return (
    <div className={styles.ComponentWrapper}>
      <h3>Чому вигідно працювати саме зі мною?</h3>
      <div className={styles.ContentWrapper}>
        <div className={styles.TextContainer}>
          {benefitsList.map((el, i) => (
            <div key={"item" + i}>
              {/* {el.icon && <el.icon />} */}
              <span>{i + 1}</span>
              <div>
                <h4>{el.title}</h4>
                <p>{el.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ImageContainer}>
          <img src={componentImage} alt='ssdfasf' />
        </div>
      </div>
    </div>
  );
};

export default BenefitsComponent;
