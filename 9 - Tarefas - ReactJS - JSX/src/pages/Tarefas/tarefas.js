import React from 'react';
import './style.css';
import Tarefa from './tarefa';
import ObjTarefa from "../../services/Tarefa";
import TarefaDAO from '../../services/TarefaDAO';

class Tarefas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tarefas: props.tarefas,
            novo: "",
            data: "",
        }
    }

    adicionar() {
        let objTarefa = new ObjTarefa(null, this.state.novo, this.state.data, false);
        let tarefaDAO = new TarefaDAO();
        tarefaDAO.inserir(objTarefa);
        let tarefas = this.state.tarefas;
        tarefas.push(objTarefa);
        this.setState({
            tarefas: tarefas,
            novo: "",
            data: "",
        })
    }

    remover() {
        let objTarefa = new ObjTarefa(null, this.state.novo, this.state.data, false);
        let tarefaDAO = new TarefaDAO();
        tarefaDAO.inserir(objTarefa);
        let tarefas = this.state.tarefas;
        tarefas.push(objTarefa);
        this.setState({
            tarefas: tarefas,
            novo: "",
            data: "",
        })
    }

    render() {
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
                            {this.state.tarefas.map((tarefa) => {
                                return <Tarefa key={tarefa.id} tarefa={tarefa} />
                            })}
                        </tbody>
                        <tfoot>
                            <tr id="formulario">
                                <td><input type="text" id="novo" onChange={(e) => {
                                    this.setState({ data: e.target.value })
                                }} /></td>
                                <td><input type="date" id="data" onChange={(e) => {
                                    this.setState({ novo: e.target.value })
                                }} /></td>
                                <td><input type="submit" id="adicionar" value="Adicionar" onClick={() => {
                                    this.adicionar();
                                }} /></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            </main>
        );
    }
}

export default Tarefas;