import ObjTarefa from "../../services/Tarefa";
import TarefaDAO from '../../services/TarefaDAO';

const inicial = {
    tarefas: [], 
    inicio: false, 
    novo: "", 
    data: ""
}

const reducer = (state = inicial, action) => {
    let tarefaDAO = new TarefaDAO();
    let tarefas = [...state.tarefas];
    switch (action.type) {
        case 'tarefas/AlterarSituacao':
            let tarefa = tarefas[action.index];
            tarefa.situacao = (tarefa.situacao) ? false : true;
            tarefaDAO.alterar(tarefa);           
            return {
                ...state,
                tarefas: tarefas
            }
        case 'tarefas/Remover':
            tarefaDAO.excluir(action.id);
            tarefas.splice(action.index, 1);
            return {
                ...state,
                tarefas: tarefas
            }
        case 'tarefas/GuardarTitulo':
            return {
                ...state,
                novo: action.novo
            }
        case 'tarefas/GuardarData':
            return {
                ...state,
                data: action.data
            }
        case 'tarefas/Adicionar':
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
        case 'tarefas/ListaInicial':
            return {
                ...state,
                inicio: true,
                tarefas: action.tarefas
            }
        default:
            return state;
    }
}

export default reducer;