import React, { useState } from "react";
import QuizData from "./quizData";
import "./quiz.css";

const Quiz = () => {
  console.log("-->>", QuizData);
  return (
    <>
      <div className="header">
        <div className="Number-of-question-container">
          {QuizData.map((question, i) => {
            return (
              <div key={i} className="question-circle">
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
                {" "}
                <div key={i} className="question-header">
                  <h3>Question {element.id}</h3>
                </div>
                <div className="question-body"><h4>{element.question}</h4></div>
                <div className="options">
                  <div className="single-option">option 1</div>
                  <div className="single-option">option 2</div>
                  <div className="single-option">option 3</div>
                  <div className="single-option">option 4</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <button className="prev-button">Previous</button>
        <button className="next-button">Next</button>
        <button className="final-button">final</button>
      </div>
    </>
  );
};

export default Quiz;
