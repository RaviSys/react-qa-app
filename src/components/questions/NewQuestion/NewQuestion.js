import React from 'react';

import QuestionForm from './QuestionForm';
const NewQuestion = () => {
  return (
    <div className="card shadow rounded-0 mb-5 mt-3">
      <div className="card-body">
        <QuestionForm />
      </div>
    </div>
  )
}

export default NewQuestion;
