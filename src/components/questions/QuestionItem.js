import React, { useState } from 'react';

function QuestionItem(props) {

  const [displayAnswer, setDisplayAnswer] = useState(false);

  const displayQuestionTitle = () => {
    console.log(props.title);
  }

  const startDisplayAnswerHandler = () => {
    setDisplayAnswer(true)
  }

  const stopDisplayAnswerHandler = () => {
    setDisplayAnswer(false)
  }

  return (
    <div className="card shadow rounded mb-4 mt-3">
      <div className="card-body">
        <p className="lead font-weight-bold">{props.title}</p>
        <span className="badge badge-primary mr-4">{props.category}</span>
        <br />
        {!displayAnswer && <button onClick={startDisplayAnswerHandler} className="btn btn-primary"> View Answer</button>}
        {displayAnswer && 
          <div>
            <button onClick={stopDisplayAnswerHandler} className="btn btn-danger"> Hide Answer</button>
            <p>{props.answer}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default QuestionItem;
