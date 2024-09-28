import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { MdOutlineModeEdit } from 'react-icons/md';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div className='todo-text'>
        {todo.text}
      </div>
      <div className='icons'>
        <MdOutlineDeleteForever 
          onClick={() => !todo.isComplete && removeTodo(todo.id)}
          className='delete-icon'
          style={{ cursor: todo.isComplete ? 'not-allowed' : 'pointer', opacity: todo.isComplete ? 0.5 : 1 }}
        />
        <MdOutlineModeEdit 
          onClick={() => !todo.isComplete && setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
          style={{ cursor: todo.isComplete ? 'not-allowed' : 'pointer', opacity: todo.isComplete ? 0.5 : 1 }}
        />
      <div className='checkbox' onClick={() => completeTodo(todo.id)}>
        {todo.isComplete ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      </div>
    </div>
  ));
};

export default Todo;
