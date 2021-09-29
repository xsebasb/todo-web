import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { AiFillDelete } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';

const Todo = ({ todos, completeTodo, removerTodo, actualizarTodo }) => {
  const [editar, setEditar] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    actualizarTodo(editar.id, value);
    setEditar({
      id: null,
      value: ''
    });
  };

  if (editar.id) {
    return <TodoForm editar={editar} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='iconos'>
        <AiFillDelete
          onClick={() => removerTodo(todo.id)}
          className='remover-icono'
        />
        <FaUserEdit
          onClick={() => setEditar({ id: todo.id, value: todo.text })}
          className='editar-icono'
        />
      </div>
    </div>
  ));
};

export default Todo;
