import React, { useState } from 'react';

import Layout from './components/UI/Layout';
import Questions from './components/questions/Questions';
import NewQuestion from './components/questions/NewQuestion/NewQuestion';

const DUMMY_QUESTIONS = [
  {
    id: 'q1',
    title: 'How to create a new react application?',
    category: 'React Js'
  },
  {
    id: 'q2',
    title: 'What are components in React?',
    category: 'React Js'
  },
  {
    id: 'q3',
    title: 'What are the main aspects of components?',
    category: 'React Js'
  },
  {
    id: 'q4',
    title: 'What are props in React?',
    category: 'React Js'
  },
  {
    id: 'q5',
    title: 'What is State in ReactJs?',
    category: 'React Js'
  },
  {
    id: 'q6',
    title: 'What is the difference between state and props in ReactJs?',
    category: 'React Js'
  },
  {
    id: 'q7',
    title: 'What is the difference between stateful and stateless components in ReactJs?',
    category: 'React Js'
  },
  {
    id: 'q8',
    title: 'What are keys in React and why are they important?',
    category: 'React Js'
  },
  {
    id: 'q9',
    title: 'What are class and objects in Ruby?',
    category: 'Ruby'
  }, 
  {
    id: 'q10',
    title: 'What are singleton classes in Ruby?',
    category: 'Ruby'
  },
  {
    id: 'q11',
    title: 'What are modules and mixins in Ruby?',
    category: 'Ruby'
  }
];
function App() {

  const [questions, setQuestions] = useState(DUMMY_QUESTIONS);

  const addQuestionHandler = (question) => {
    setQuestions((prevQuestions) => {
      // Use this for displaying your latest added question to top of list
      return [question, ...prevQuestions]
      // Use this for displaying your latest added question to bottom of list
      // return [...prevQuestions, question]
    });
  }

  return (
    <Layout>
      <header className="App-header mb-4">
        <h1 className="heading-text">Welcome to AppsImpact Academy</h1>
      </header>
      <NewQuestion onAddQuestion={addQuestionHandler} />
      <Questions items={questions} />
    </Layout>
  );
}

export default App;
