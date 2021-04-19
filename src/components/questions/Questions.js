import React, { useState } from 'react';
import QuestionItem from './QuestionItem';
import QuestionFilter from './Filters/QuestionFilter';

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

  return (
    <div>
      <QuestionFilter selected={filteredCategory} onChangeSelected={filterChangeHandler}/>
      {filteredQuestions.map((question) => (
        <QuestionItem 
          key={question.id}
          title={question.title}
          category={question.category} />
      ))}
    </div>
  )
}

export default Questions;
