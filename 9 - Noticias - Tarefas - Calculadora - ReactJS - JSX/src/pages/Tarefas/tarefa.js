import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Tarefa extends React.Component {

    render() {
        return (
            <tr id={this.props.tarefa.id} className={(this.props.tarefa.situacao) ? "concluida" : "afazer"}>
                <td>{this.props.tarefa.descricao}</td>
                <td>{this.props.tarefa.dataFormatada()}</td>
                <td>
                    <input type="checkbox" className="check" defaultChecked={this.props.tarefa.situacao} onClick={(e) => this.props.alterarSituacao(e.target.parentNode.parentNode.id)} />
                    <span className="excluir" onClick={(e) => this.props.remover(e.target.parentNode.parentNode.parentNode.parentNode.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                </td>
            </tr>
        );
    }
}

export default Tarefa;