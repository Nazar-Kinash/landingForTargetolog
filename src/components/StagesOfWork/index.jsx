import React from "react";
import StageComponent from "../StageComponent/imdex";
import styles from "./stagesOfWork.module.scss";

const StagesOfWork = () => {
  return (
    <div className={styles.ComponentWrapper}>
      <h3>Етфпи роботи:</h3>
      <StageComponent items={[1, 2, 3, 4, 5, 6, 7, 8, 9]} title={"Підготовчий"} />
    </div>
  );
};

export default StagesOfWork;
