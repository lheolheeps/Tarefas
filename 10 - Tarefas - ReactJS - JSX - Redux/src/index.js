import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Routes from './routes';
import TarefasReducer from './pages/Tarefas/reducer';
import NoticiasReducer from './pages/Noticias/reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore(
  combineReducers({
    TarefasReducer,
    NoticiasReducer
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


