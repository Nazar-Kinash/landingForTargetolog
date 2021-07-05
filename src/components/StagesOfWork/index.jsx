import React from "react";
import StageComponent from "../StageComponent/imdex";
import styles from "./stagesOfWork.module.scss";
import { itemsForFirstStage, itemsStage_2, itemsStage_3 } from "./AllStageDescription";

const StagesOfWork = () => {
  return (
    <div className={styles.ComponentWrapper}>
      <h3>Етапи роботи</h3>
      <StageComponent items={itemsForFirstStage} title={"Підготовчий"} />
      <StageComponent items={itemsStage_2} title={"Формування звіту за тестовий період"} />
      <StageComponent items={itemsStage_3} title={"Докрутка і масштабування"} />
    </div>
  );
};

export default StagesOfWork;
