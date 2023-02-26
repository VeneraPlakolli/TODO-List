import React, { useState } from 'react';

import TodoForm from './components/UI/TodoForm';
import Todo from './components/TODO/Todo';
import TodoComment from './components/UI/TodoComment';
import './App.css';

const TODO_LIST = [
  {
    id: 1,
    text: 'Do daily exercises'
  },
  {
    id: 2,
    text: 'Watch a React tutorial'
  },
  {
    id: 3,
    text: 'Create a portfolio site'
  },
  {
    id: 4,
    text: 'Go to lectures'
  },
  {
    id: 5,
    text: 'Go out with friends'
  }
];

function App() {

  const [todos, setTodo] = useState(TODO_LIST);

  const addTodoHandler = enteredTodo => {
    setTodo(prevTodo => {
      const typeTodo = [...prevTodo];
      typeTodo.unshift({id: Math.random(), text: enteredTodo});
      return typeTodo;
    });
  };

  const deleteTodoHandler = (todoId) => {
    setTodo(items => {
      const updatedTodo = items.filter(todo => todo.id !== todoId);
      return updatedTodo;
    })
  }

  const deleteAllTodosHandler = () => {
    setTodo([]);
  }

  return (
    <div className="App">
      <TodoForm onAddTodo={addTodoHandler} />
      <Todo todo={todos} onDeleteTodo={deleteTodoHandler} />
      <TodoComment onDeleteAll={deleteAllTodosHandler} />
    </div>
  );
}

export default App;
