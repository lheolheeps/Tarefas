import React, { useEffect } from 'react';
import './style.css';
import Tarefa from './tarefa';
import { connect } from 'react-redux';
import TarefaDAO from '../../services/TarefaDAO';

const Tarefas = (props) => {
    useEffect(() => {
        if (!props.inicio) {
            let tarefaDAO = new TarefaDAO();
            tarefaDAO.listar().then((lista) => {
                props.dispatch({ type: 'tarefas/ListaInicial', tarefas: lista});
            });
        }
    });

    return (
        <main className="container">
            <h1>Lista de Tarefas</h1>
            <section className="lista">
                <table className="tabelaLista" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Entrega</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="tarefas">
                        {props.tarefas.map((tarefa, index) => {
                            return <Tarefa key={tarefa.id+tarefa.situacao} tarefa={tarefa} index={index} />
                        })}
                    </tbody>
                    <tfoot>
                        <tr id="formulario">
                            <td><input type="text" id="novo" value={props.novo} onChange={(e) => {
                                props.dispatch({ type: 'tarefas/GuardarTitulo', novo: e.target.value })
                            }} /></td>
                            <td><input type="date" id="data" value={props.data} onChange={(e) => {
                                props.dispatch({ type: 'tarefas/GuardarData', data: e.target.value })
                            }} /></td>
                            <td><input type="submit" id="adicionar" value="Adicionar" onClick={() => {
                                props.dispatch({ type: 'tarefas/Adicionar' });
                            }} /></td>
                        </tr>
                    </tfoot>
                </table>
            </section>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        tarefas: state.TarefasReducer.tarefas,
        inicio: state.TarefasReducer.inicio,
        novo: state.TarefasReducer.novo,
        data: state.TarefasReducer.data
    }
};

export default connect(mapStateToProps)(Tarefas);