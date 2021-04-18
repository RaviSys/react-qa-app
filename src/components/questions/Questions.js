import QuestionItem from './QuestionItem';

function Questions(props) {
  return (
    <div>
      {props.items.map((question) => (
        <QuestionItem title={question.title} />
      ))}
    </div>
  )
}

export default Questions;
