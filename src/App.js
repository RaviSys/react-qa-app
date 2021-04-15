import Questions from './components/questions/Questions';

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
    <div className="App">
      <header className="App-header">
        <h1 className="heading-text">Welcome to AppsImpact Academy</h1>
      </header>
      <Questions items={questions} />
    </div>
  );
}

export default App;
