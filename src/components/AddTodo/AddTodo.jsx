import { useState } from 'react';
import { useTodoStore } from 'mobx/todoContext';
import { Observer } from 'mobx-react-lite';
import './AddTodo.scss';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const todoStore = useTodoStore();

  const handleChange = e => {
    setTask(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!task) return alert('Напишите заметку!');
    setTask('');
    if (todoStore.todos && todoStore.todos.some(todo => todo.text === task))
      return alert('Такая задача уже есть в списке!');
    todoStore.addTodo(task);
    setTask('');
  };

  return (
    <Observer>
      {() => {
        return (
          <form className="TodoEditor" onSubmit={handleSubmit}>
            <textarea
              className="TodoEditorTextarea"
              value={task}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="TodoEditorButton">
              Сохранить
            </button>
          </form>
        );
      }}
    </Observer>
  );
};

export default AddTodo;
