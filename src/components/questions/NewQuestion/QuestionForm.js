import React, { useState } from 'react';

const QuestionForm = (props) => {

  const [ enterdQuestion, setEnteredQuestion ] = useState('');

  const questionChangeHandler = (event) => {
    setEnteredQuestion(event.target.value);
  }

  // Submit handler for question form
  const submitHandler = (event) => {
    event.preventDefault();

    const questionData = {
      title: enterdQuestion
    }

    props.onSaveQuestionData(questionData);
    // console.log(questionData);
    setEnteredQuestion('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            className="form-control form-control-lg"
            value={enterdQuestion}
            onChange={questionChangeHandler}/>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-lg">Add Question</button>
      </div>
    </form>
  )
}

export default QuestionForm;
