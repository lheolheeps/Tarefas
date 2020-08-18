import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const Tarefa = (props) => {
    return (
        <tr id={props.tarefa.id} className={(props.tarefa.situacao) ? "concluida" : "afazer"}>
            <td>{props.tarefa.descricao}</td>
            <td>{props.tarefa.dataFormatada()}</td>
            <td>
                {/* <input type="checkbox" className="check" defaultChecked={props.tarefa.situacao} onClick={(e) => props.alterarSituacao(e.target.parentNode.parentNode.id)} /> */}
                <input type="checkbox" className="check"
                    defaultChecked={props.tarefa.situacao}
                    onClick={() => props.dispatch({ type: 'tarefas/AlterarSituacao', index: props.index })} />
                {/* <span className="excluir" onClick={(e) => props.remover(e.target.parentNode.parentNode.parentNode.parentNode.id)}> */}
                <span className="excluir"
                    onClick={() => props.dispatch({ type: 'tarefas/Remover', id: props.tarefa.id, index: props.index })}>
                    <FontAwesomeIcon icon={faTrash} />
                </span>
            </td>
        </tr>
    );
}

export default connect()(Tarefa);