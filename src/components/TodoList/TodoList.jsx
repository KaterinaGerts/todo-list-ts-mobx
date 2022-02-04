import React from 'react';
import cn from 'classnames';
import './TodoList.scss';

const TodoList = ({
  todos = [],
  onToggleCompleted,
  onDeleteTodo,
  onfilteredTodo,
}) => {
  console.log(todos);
  return (
    <>
      <div className="filterContainer">
        <button type="button" onClick={() => onfilteredTodo('all')}>
          Все задачи
        </button>
        <button type="button" onClick={() => onfilteredTodo(true)}>
          Выполненные заметки
        </button>
        <button type="button" onClick={() => onfilteredTodo(false)}>
          Невыполненные заметки
        </button>
      </div>
      <ul className="listContainer">
        {todos &&
          todos.map(({ id, text, completed }) => (
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
