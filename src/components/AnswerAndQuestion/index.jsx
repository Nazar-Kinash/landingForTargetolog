import React, { useState } from "react";
import { QAList } from "./helper";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./AnswerAndQuestion.module.scss";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const fadeInDownAnimation = keyframes`${fadeInDown}`;

const FadeInDownDiv = styled.div`
  animation: 1s ${fadeInDownAnimation};
`;

const AnswerAndQuestion = () => {
  const [openedQuestions, setOpenedQuestions] = useState([]);

  console.log(openedQuestions);

  return (
    <div id='faq' className={styles.ComponentWrapper}>
      <h2>FAQ</h2>
      <div className={styles.QAList}>
        {QAList.map((el) => (
          <div key={el.id} className={styles.QA}>
            <div
              className={styles.Question}
              onClick={() => {
                openedQuestions.includes(el.id)
                  ? setOpenedQuestions(openedQuestions.filter((item) => item !== el.id))
                  : setOpenedQuestions([...openedQuestions, el.id]);
              }}>
              <p>{el.question}</p>
              <IconButton className={styles.IconButton}>
                {!openedQuestions.includes(el.id) ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
            </div>
            {openedQuestions.includes(el.id) && (
              <FadeInDownDiv className={styles.Answer}>
                <p>{el.answer}</p>
              </FadeInDownDiv>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerAndQuestion;
