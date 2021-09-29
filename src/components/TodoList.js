import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const agregarTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return alert('No ha agregado ninguna tarea');
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const actualizarTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removerTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <TodoForm onSubmit={agregarTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removerTodo={removerTodo}
        actualizarTodo={actualizarTodo}
      />
    </>
  );
}

export default TodoList;
