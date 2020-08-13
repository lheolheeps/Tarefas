import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Routes from './routes';
import TarefaDAO from './services/TarefaDAO';

let tarefaDAO = new TarefaDAO();
tarefaDAO.listar().then((lista) => {
  ReactDOM.render(
    <React.StrictMode>
      <Routes tarefas = {lista}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
})


