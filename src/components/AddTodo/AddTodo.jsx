import { useState } from 'react';
import shortid from 'shortid';
import './AddTodo.scss';

const AddTodo = ({ todos, setTaskList }) => {
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!task) return alert('Напишите заметку!');
    setTask('');
    if (todos && todos.some(todo => todo.text === task))
      return alert('Такая задача уже есть в списке!');
    setTaskList(prevState => [
      ...prevState,
      { id: shortid.generate(), text: task, completed: false },
    ]);
    setTask('');
  };

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
};

export default AddTodo;
