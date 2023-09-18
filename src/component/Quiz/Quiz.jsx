import React, { useState } from "react";
import QuizData from "../Quiz/quizData.js";
import "../Quiz/quiz.css";

const Quiz = () => {
  console.log("-->>", QuizData);
  const length = QuizData.length
  const [questionNumber, setQuestionNumber] = useState(1);
  const handleClick = (e) => {
    console.log(e.target.id);
    const clicked =Number(e.target.id)
    console.log("clicked",clicked);
    setQuestionNumber(clicked);
  };
  const clickToPrevious = () => {
    questionNumber === 1
      ? setQuestionNumber(1)
      : setQuestionNumber(questionNumber - 1);
   
  };
  const clickToNext = () => {
   
   console.log("len", length);
    questionNumber === length
      ? setQuestionNumber(length)
      : setQuestionNumber(questionNumber + 1);

  };
  const clickToFinal = () => {};
  console.log("question number", questionNumber);
  return (
    <>
      <div className="header">
        <div className="Number-of-question-container">
          {QuizData.map((question, i) => {
            return (
              <div
                key={i}
                id={question.id}
                className={
                  question.id == questionNumber
                    ? "question-circle-active"
                    : "question-circle"
                }
                onClick={(e) => handleClick(e)}
              >
                {question.id}
              </div>
            );
          })}
        </div>
      </div>
      <div className="body">
        <div className="question-count">
          <div className="total-questions">
            <span>Total Questions: 11</span>
          </div>
          <div className="answered-questions">Answered: 2</div>
          <div className="unanswered-questions">Unanswered: 9</div>
        </div>
        <div className="question-detail-container">
          {QuizData.map((element, i) => {
            return (
              <div key={i} className="">
                {element.id == questionNumber && (
                  <div className="question-container">
                    <div className="question-header">
                      <h3>Question {element.id}</h3>
                    </div>

                    <div className="question-body">
                      <h4>{element.question}</h4>
                    </div>
                    <div className="options">
                      <div className="single-option">option 1</div>
                      <div className="single-option">option 2</div>
                      <div className="single-option">option 3</div>
                      <div className="single-option">option 4</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <button
          className={questionNumber === 1?"disabled":"prev-button"}
          disabled={questionNumber === 1 ? true : false}
          onClick={() => clickToPrevious()}
        >
          Previous
        </button>
        <button className={questionNumber === length?"disabled":"next-button"} onClick={() => clickToNext()}  disabled={questionNumber === length ? true : false} >
          Next
        </button>
        <button className="final-button" onClick={() => clickToFinal()}>
          final
        </button>
      </div>
    </>
  );
};

export default Quiz;
