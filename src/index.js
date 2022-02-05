import React from 'react';
import ReactDOM from 'react-dom';
import { TodosProvider } from 'mobx/todoContext';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
