// components/TodoForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../features/todo/todoThunk';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodoAsync(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleInputChange} />
      <button type="submit">დამატება</button>
    </form>
  );
};

export default TodoForm;
