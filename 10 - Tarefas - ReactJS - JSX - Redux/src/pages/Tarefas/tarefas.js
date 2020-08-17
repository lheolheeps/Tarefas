import React from 'react';
import './style.css';
import Tarefa from './tarefa';
import { connect } from 'react-redux';

const Tarefas = (props) => {
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
                            return <Tarefa key={tarefa.id} tarefa={tarefa} index={index} />
                        })}
                    </tbody>
                    <tfoot>
                        <tr id="formulario">
                            <td><input type="text" id="novo" value={props.novo} onChange={(e) => {
                                props.dispatch({type: 'novo', novo: e.target.value})
                            }} /></td>
                            <td><input type="date" id="data" value={props.data} onChange={(e) => {
                                props.dispatch({type: 'data', data: e.target.value})
                            }} /></td>
                            <td><input type="submit" id="adicionar" value="Adicionar" onClick={ () => {
                                props.dispatch({type: 'Adicionar'})
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
        tarefas: state.tarefas,
        novo: state.novo,
        data: state.data
    }
};

export default connect(mapStateToProps)(Tarefas);