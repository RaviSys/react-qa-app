import React from 'react';

import QuestionForm from './QuestionForm';
const NewQuestion = (props) => {

  const saveQuestionDataHandler = (enteredQuestionData) => {
    const questionData = {
      ...enteredQuestionData,
      id: Math.random().toString()
    }

    props.onAddQuestion(questionData);
  }

  return (
    <div className="card shadow rounded-0 mb-5 mt-3">
      <div className="card-body">
        <QuestionForm onSaveQuestionData={saveQuestionDataHandler} />
      </div>
    </div>
  )
}

export default NewQuestion;
