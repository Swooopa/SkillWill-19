// features/todo/todoThunk.js

import { addTodo, deleteTodo, toggleTodo } from './todoSlice';

export const addTodoAsync = (text) => (dispatch) => {
  setTimeout(() => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  }, 1000);
};

export const deleteTodoAsync = (id) => (dispatch) => {
  setTimeout(() => {
    dispatch(deleteTodo(id));
  }, 1000);
};

export const toggleTodoAsync = (id) => (dispatch) => {
  setTimeout(() => {
    dispatch(toggleTodo(id));
  }, 1000);
};
