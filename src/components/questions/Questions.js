import React, { useState } from 'react';
import QuestionItem from './QuestionItem';
import QuestionFilter from './Filters/QuestionFilter';
import NoQuestion from './NoQuestion/NoQuestion';

function Questions(props) {

  const [filteredCategory, setFilteredCategory] = useState('all');

  const filterChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory)
  }

  const filteredQuestions = props.items.filter((question) => {
    if (filteredCategory === "all") {
      return question;
    } else {
      return question.category === filteredCategory;
    }
  })

  let questionContent = <NoQuestion />;

  if(filteredQuestions.length > 0) {
    questionContent = filteredQuestions.map((question) => (
      <QuestionItem 
        key={question.id}
        title={question.title}
        answer={question.answer}
        category={question.category} />
    ))
  }

  return (
    <div>
      <QuestionFilter selected={filteredCategory} onChangeSelected={filterChangeHandler}/>
      {questionContent}
    </div>
  )
}

export default Questions;
