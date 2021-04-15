import React from 'react';

import Layout from './components/UI/Layout';
import Questions from './components/questions/Questions';
import NewQuestion from './components/questions/NewQuestion/NewQuestion';

function App() {
  const questions = [
    {title: 'How to create a new react application?'},
    {title: 'What are components in React?'},
    {title: 'What are the main aspects of components?'},
    {title: 'What are props in React?'},
    {title: 'What is State in ReactJs?'},
    {title: 'What is the difference between state and props in ReactJs?'}
  ];

  return (
    <Layout>
      <header className="App-header mb-4">
        <h1 className="heading-text">Welcome to AppsImpact Academy</h1>
      </header>
      <NewQuestion />
      <Questions items={questions} />
    </Layout>
  );
}

export default App;
