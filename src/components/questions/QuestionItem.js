function QuestionItem(props) {

  const displayQuestionTitle = () => {
    console.log(props.title);
  }

  return (
    <div className="question-item">
      <p>{props.title}</p>
      <button onClick={displayQuestionTitle}> View Answer</button>
    </div>
  )
}

export default QuestionItem;
