import React from "react";
import componentImage from "../../images/benefit-component-image.jpg";
import { Support24HoursIcon, Instagram, CoinIcon, WritingIcon, TrophyIcon, ChecklistIcon } from "../../images/icons";

import styles from "./benefitsComponent.module.scss";

const BenefitsComponent = () => {
  const benefitsList = [
    { icon: Instagram, text: "Безкоштовний аудит сторінки" },
    {
      icon: WritingIcon,
      text: "Тестовий період (7 днів) проводжу безкоштовно, якщо не приводжу клієнтів у Ваш бізнес",
    },
    { icon: TrophyIcon, text: "Орієнтуюсь не на ціну заявки, а на результат - замовлення" },
    {
      icon: CoinIcon,
      text: "Собівартість моєї роботи нижча порівняно з агенством за рахунок відсутності орендної плати за офіс (так як працюю дистанційно)",
    },
    { icon: ChecklistIcon, text: "Створюю продаючі скрипти, які підійдуть під Ваш бізнес" },
    { icon: Support24HoursIcon, text: "На зв’язку з Вами 24/7" },
  ];

  return (
    <div className={styles.ComponentWrapper}>
      <h3>Чому вигідно працювати саме зі мною?</h3>
      <div className={styles.ContentWrapper}>
        <div className={styles.TextContainer}>
          {benefitsList.map((el, i) => (
            <div key={"item" + i}>
              {el.icon && <el.icon />}
              <p>{el.text}</p>
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
