import React, { useState } from 'react';

const QuestionForm = () => {

  const [ enterdQuestion, setEnteredQuestion ] = useState('');

  const questionChangeHandler = (event) => {
    setEnteredQuestion(event.target.value);
  }

  return (
    <form>
      <div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control form-control-lg" onChange={questionChangeHandler}/>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-lg">Add Question</button>
      </div>
    </form>
  )
}

export default QuestionForm;
