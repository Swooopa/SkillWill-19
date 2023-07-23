// components/TodoList.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAsync, toggleTodoAsync } from '../features/todo/todoThunk';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodoAsync(id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => handleDelete(todo.id)}>წაშლა</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
