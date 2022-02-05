import Header from 'components/Header';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';

const TodoPage = () => {
  return (
    <div>
      <Header title="Список заметок" />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoPage;
