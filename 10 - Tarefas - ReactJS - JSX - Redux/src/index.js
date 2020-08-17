import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Routes from './routes';
import reducer from './pages/Tarefas/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TarefaDAO from './services/TarefaDAO';

const store = createStore(reducer)


let tarefaDAO = new TarefaDAO();
tarefaDAO.listar().then((lista) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Routes tarefas = {lista}/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
})


