import QuestionItem from './QuestionItem';

function Questions(props) {
  return (
    <div>
      {props.items.map((question) => (
        <QuestionItem 
          key={question.id}
          title={question.title} />
      ))}
    </div>
  )
}

export default Questions;
