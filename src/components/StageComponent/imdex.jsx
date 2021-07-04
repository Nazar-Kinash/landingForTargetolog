import React from "react";
import styles from "./stageComponent.module.scss";

const StageComponent = ({ items, title }) => {
  return (
    <div className={styles.ComponentWrapper}>
      <h4 className={styles.Title}>{title}</h4>
      <div className={styles.ItemList}>
        {items.map((el, i) => (
          <div className={styles.Item} key={"item" + i}>
            <div className={styles.ItemText} />
            <div className={styles.ItemLine}>
              <div className={styles.ItemDot}></div>
            </div>
            <div className={styles.ItemText}>
              <p>{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StageComponent;
