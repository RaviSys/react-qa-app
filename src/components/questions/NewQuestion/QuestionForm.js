import React from 'react';

const QuestionForm = () => {
  return (
    <form>
      <div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control form-control-lg"/>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-lg">Add Question</button>
      </div>
    </form>
  )
}

export default QuestionForm;
