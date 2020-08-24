import ObjTarefa from "../../services/Tarefa";

const mock = [
    {
        id: 1,
        descricao: 'Tarefa Mockada Numero 1',
        data: "20/08/2020",
        situacao: false,
    },
    {
        id: 2,
        descricao: 'Tarefa Mockada Numero 2',
        data: "20/08/2020",
        situacao: false,
    },
    {
        id: 3,
        descricao: 'Tarefa Mockada Numero 3',
        data: "20/08/2020",
        situacao: false,
    },
    {
        id: 4,
        descricao: 'Tarefa Mockada Numero 4',
        data: "20/08/2020",
        situacao: true,
    },
];

const inicial = {
    tarefas: [],
    inicio: false,
    novo: "",
    data: "",
}

const reducer = (state = inicial, action) => {
    let tarefas = [...state.tarefas];
    switch (action.type) {
        case 'tarefas/AlterarSituacao':
            let tarefa = tarefas[action.index];
            tarefa.situacao = (tarefa.situacao) ? false : true;
            return {
                ...state,
                tarefas: tarefas
            }
        case 'tarefas/Remover':
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
                let tarefa = new ObjTarefa(tarefas.length + 1, state.novo, state.data, false);
                tarefas.push(tarefa);
                return {
                    ...state,
                    tarefas: tarefas,
                    novo: "",
                    data: "",
                }
            } else {
                alert('Preencha a Descrição e a Data');
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