import { useState } from 'react';
import cn from 'classnames';
import './TodoList.scss';

const STATUS = {
  ALL: 'all',
  COMPLETED: 'completed',
  NOT_COMPLETED: 'not completed',
};

const TodoList = ({ todos = [], onToggleCompleted, onDeleteTodo }) => {
  const [filterStatus, setFilterStatus] = useState(STATUS.ALL);

  return (
    <>
      <div className="filterContainer">
        <button type="button" onClick={() => setFilterStatus(STATUS.ALL)}>
          Все заметки
        </button>
        <button type="button" onClick={() => setFilterStatus(STATUS.COMPLETED)}>
          Выполненные заметки
        </button>
        <button
          type="button"
          onClick={() => setFilterStatus(STATUS.NOT_COMPLETED)}
        >
          Невыполненные заметки
        </button>
      </div>
      <ul className="listContainer">
        {todos &&
          todos
            .filter(task => {
              if (filterStatus === STATUS.COMPLETED) {
                return task.completed;
              }
              if (filterStatus === STATUS.NOT_COMPLETED) {
                return !task.completed;
              }
              return true;
            })
            .map(({ id, text, completed }) => (
              <li key={id} className="list">
                <input
                  type="checkbox"
                  className="TodoListCheckbox"
                  checked={completed}
                  onChange={() => onToggleCompleted(id)}
                />
                <p className={cn('text', { isDone: completed })}>{text}</p>
                <button
                  type="button"
                  className="button"
                  onClick={() => onDeleteTodo(id)}
                >
                  Удалить
                </button>
              </li>
            ))}
      </ul>
    </>
  );
};

export default TodoList;
