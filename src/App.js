// App.js

import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>TODO აპლიკაცია</h1>
      <TodoForm />
      <h2>არსებული დასავლეთი:</h2>
      <TodoList />
    </div>
  );
};

export default App;
