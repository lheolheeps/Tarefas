import ObjTarefa from "../../services/Tarefa";
import TarefaDAO from '../../services/TarefaDAO';

const reducer = (state = { tarefas: [], novo: "", data: "" }, action) => {
    let tarefaDAO = new TarefaDAO();
    let tarefas = state.tarefas;
    switch (action.type) {
        case 'AlterarSituacao':
            let tarefa = tarefas[action.index];
            tarefa.situacao = (tarefa.situacao) ? false : true;
            tarefaDAO.alterar(tarefa);
            tarefas[action.index].situacao = (tarefas[action.index].situacao) ? false : true;
            return {
                ...state,
                tarefas: tarefas
            }
        case 'Remover':
            tarefaDAO.excluir(action.id);
            tarefas.splice(action.index, 1);
            return {
                ...state,
                tarefas: tarefas
            }
        case 'novo':
            return {
                ...state,
                novo: action.novo
            }
        case 'data':
            return {
                ...state,
                data: action.data
            }
        case 'Adicionar':
            if (state.novo !== "" && state.data !== "") {
                let objTarefa = new ObjTarefa(null, state.novo, state.data, false);
                tarefaDAO.inserir(objTarefa);
                let tarefas = state.tarefas;
                tarefas.push(objTarefa);
                return {
                    ...state,
                    tarefas: tarefas,
                    novo: "",
                    data: "",
                }
            }
            return state;
        default:
            return state;
    }
}

export default reducer;