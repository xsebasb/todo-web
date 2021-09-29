import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.editar ? props.editar.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.editar ? (
        <>
          <input
            placeholder='Actualiza tu tarea'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input editar'
          />
          <button onClick={handleSubmit} className='todo-button editar'>
            Actualizar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Agregar tarea'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Agregar
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
