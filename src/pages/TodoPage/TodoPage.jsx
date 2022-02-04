import { useState, useEffect } from 'react';
import Header from 'components/Header';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import todos from '../../todos';

const TodoPage = () => {
  const [taskList, setTaskList] = useState(todos);
  // const [filter, setFilter] = useState([]);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('task'));
      if (!data) {
        setTaskList([]);
        return;
      }
      setTaskList([...data]);
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskList));
  }, [taskList]);

  const deleteTodo = taskId => {
    setTaskList(taskList => taskList.filter(task => task.id !== taskId));
  };

  const toggleCompleted = taskId => {
    setTaskList(taskList =>
      taskList.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const filteredTodo = status => {
    if (status === 'all') {
      setTaskList(taskList);
    }
    const filteredTasks = taskList.filter(task => task.completed === status);
    setTaskList(filteredTasks);
  };

  return (
    <div>
      <Header title="Список заметок" />
      <AddTodo setTaskList={setTaskList} todos={taskList} />
      <TodoList
        todos={taskList}
        onToggleCompleted={toggleCompleted}
        onDeleteTodo={deleteTodo}
        onfilteredTodo={filteredTodo}
      />
    </div>
  );
};

export default TodoPage;
