import React, { useEffect, useState } from "react";
import styles from "./stageComponent.module.scss";

const StageComponent = ({ items, title }) => {
  return (
    <div className={styles.ComponentWrapper}>
      <h4>{title}</h4>
      <div className={styles.ItemList}>
        {items.map((el, i) => (
          <div className={styles.Item} key={"item" + i}>
            <div className={styles.ItemText} />
            <div className={styles.ItemLine}>
              <div className={styles.ItemDot}></div>
            </div>
            <div className={styles.ItemText}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga debitis officiis molestias
                doloribus? Accusamus ea asperiores doloribus beatae suscipit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StageComponent;
