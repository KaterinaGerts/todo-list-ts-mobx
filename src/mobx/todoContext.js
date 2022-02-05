import { createContext, useContext } from 'react';
import { createTodoStore } from 'mobx/store';
import { useLocalObservable } from 'mobx-react-lite';

export const TodoContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const todosStore = useLocalObservable(createTodoStore);
  console.log(todosStore);

  return (
    <TodoContext.Provider value={todosStore}>{children}</TodoContext.Provider>
  );
};

export const useTodoStore = () => useContext(TodoContext);
