import React from "react";

import styles from "./aboutSocial.module.scss";

const AboutSocial = () => {
  const factList = [
    {
      markText: "+8",
      markColor: "#ff380b",
      text: "нових користувачів в соцмережах за секунду",
    },
    {
      markText: "80%",
      markColor: "#008000",
      text: 'людей довіряють думці своїм "онлайн-друзям" більше, ніж реальним',
    },
    {
      markText: "1млн",
      markColor: "#28a9ff",
      text: "силок в секунду розповсюджується!",
    },
    {
      markText: "2",
      markColor: "#dbd10a",
      text: "рази в день заходить користувач в акаунт в середньому",
    },
    {
      markText: "+25%",
      markColor: "#f608b0",
      text: "збільшилась аудиторія в соцмережах в Україні",
    },
  ];

  return (
    <div className={styles.ComponentWrapper}>
      <h3>Кілька фактів про соціальні мережі:</h3>
      <div className={styles.MainContentContainer}>
        <div className={styles.FactList}>
          {factList.map((fact, index) => (
            <div key={"fact" + index} className={styles.Fact}>
              <p className={styles.FactMarker} style={{ color: fact.markColor }}>
                {fact.markText}
              </p>
              <p className={styles.FactText}>{fact.text}</p>
            </div>
          ))}
        </div>
        <div>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  );
};

export default AboutSocial;
