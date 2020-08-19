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
        if (this.state.novo !== "" && this.state.data !== "") {
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
    }

    remover(id, index) {
        let tarefaDAO = new TarefaDAO();
        tarefaDAO.excluir(id);
        let tarefas = this.state.tarefas;
        tarefas.splice(index, 1);
        this.setState({
            tarefas: tarefas
        })
    }

    alterarSituacao(id, index) {
        let tarefaDAO = new TarefaDAO()
        tarefaDAO.obter(id, (tarefa) => {
            tarefa.situacao = (tarefa.situacao) ? false : true;
            tarefaDAO.alterar(tarefa);
            let tarefas = this.state.tarefas;
            tarefas[index].situacao = (tarefas[index].situacao) ? false : true;
            this.setState({
                tarefas: tarefas,
            })
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
                            {this.state.tarefas.map((tarefa, index) => {
                                return <Tarefa key={tarefa.id} tarefa={tarefa} remover={(id) => this.remover(id, index)} alterarSituacao={(id) => this.alterarSituacao(id, index)} />
                            })}
                        </tbody>
                        <tfoot>
                            <tr id="formulario">
                                <td><input type="text" id="novo" value={this.state.novo} onChange={(e) => {
                                    this.setState({ novo: e.target.value })
                                }} /></td>
                                <td><input type="date" id="data" value={this.state.data} onChange={(e) => {
                                    this.setState({ data: e.target.value })
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