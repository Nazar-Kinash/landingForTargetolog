import React, { useState } from "react";
import { QAList } from "./helper";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
              <IconButton
                className={styles.IconButton}
                onClick={() => {
                  openedQuestions.includes(el.id)
                    ? setOpenedQuestions(openedQuestions.filter((item) => item !== el.id))
                    : setOpenedQuestions([...openedQuestions, el.id]);
                }}>
                {!openedQuestions.includes(el.id) ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
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
