import React, { useState } from "react";
import { QAList } from "./helper";

import styles from "./AnswerAndQuestion.module.scss";

const AnswerAndQuestion = () => {
  const [openedQuestions, setOpenedQuestions] = useState([]);

  console.log(openedQuestions);

  return (
    <div className={styles.ComponentWrapper}>
      <h2>Клієнти часто мене запитують...</h2>
      <div className={styles.QAList}>
        {QAList.map((el) => (
          <div key={el.id} className={styles.QA}>
            <div className={styles.Question}>
              <p>{el.question}</p>
              <button
                onClick={() => {
                  openedQuestions.includes(el.id)
                    ? setOpenedQuestions(openedQuestions.filter((item) => item !== el.id))
                    : setOpenedQuestions([...openedQuestions, el.id]);
                }}>
                X
              </button>
            </div>
            {openedQuestions.includes(el.id) && (
              <div className={styles.Answer}>
                <p>{el.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerAndQuestion;
