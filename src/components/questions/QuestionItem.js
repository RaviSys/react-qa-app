function QuestionItem(props) {

  const displayQuestionTitle = () => {
    console.log(props.title);
  }

  return (
    <div className="card shadow rounded mb-4 mt-3">
      <div className="card-body">
        <p className="lead font-weight-bold">{props.title}</p>
        <span className="badge badge-primary mr-4">{props.category}</span>
        <button onClick={displayQuestionTitle} className="btn btn-primary"> View Answer</button>
      </div>
    </div>
  )
}

export default QuestionItem;
