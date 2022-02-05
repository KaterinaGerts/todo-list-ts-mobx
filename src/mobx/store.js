import shortid from 'shortid';

export function createTodoStore() {
  return {
    todos: [],
    addTodo(text) {
      this.todos.push({
        id: shortid.generate(),
        text,
        completed: false,
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(task => task.id !== id);
    },
    toggleCompleted(id) {
      this.todos = this.todos.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      );
    },
  };
}
