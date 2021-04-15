import QuestionItem from './QuestionItem';
import './Questions.css';

function Questions(props) {
  return (
    <div className="question-list">
      <QuestionItem title={props.items[0].title} />
      <QuestionItem title={props.items[1].title} />
      <QuestionItem title={props.items[2].title} />
      <QuestionItem title={props.items[3].title} />
      <QuestionItem title={props.items[4].title} />
      <QuestionItem title={props.items[5].title} />
    </div>
  )
}

export default Questions;
