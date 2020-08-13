import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Tarefa extends React.Component {

    render() {
        return (
            <tr id={this.props.tarefa.id}>
                <td>{this.props.tarefa.data}</td>
                <td>{this.props.tarefa.descricao}</td>
                <td>
                    {/* <input type="checkbox" className="check" id="situacao-1" /> */}
                    <span className="excluir" id="excluir-1">
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                </td>
            </tr>
        );
    }
}

export default Tarefa;