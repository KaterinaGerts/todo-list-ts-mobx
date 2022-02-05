import TodoPage from 'pages/TodoPage';
import { Observer } from 'mobx-react-lite';
import { useTodoStore } from 'mobx/todoContext';

function App() {
  const todoStore = useTodoStore();
  return (
    <Observer>
      {() => {
        return <TodoPage todoStore={todoStore} />;
      }}
    </Observer>
  );
}

export default App;
