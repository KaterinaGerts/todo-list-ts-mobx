import { useState, useEffect } from 'react';
import Header from 'components/Header';
import TodoList from 'components/TodoList';
import todos from '../../todos';

const TodoPage = () => {
  const [taskList, setTaskList] = useState(null);

  useEffect(() => {
    const data = todos;

    setTaskList([...data]);
  }, []);

  return (
    <div>
      <Header title="Список заметок" />
      <TodoList todos={taskList} />
    </div>
  );
};

export default TodoPage;
