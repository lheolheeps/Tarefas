const inicial = {
    visor: "0",
    salvo: "",
    operacao: ""
}

function calcula(a, operacao, b) {
    switch (operacao) {
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '-':
            return a - b;
        case '+':
            return a + b;
        default:
            return 0;
    }
}

const reducer = (state = inicial, action) => {
    switch (action.type) {
        case "calculadora/ImprimirResultado":
            let salvo = state.salvo;
            let operacao = state.operacao;
            let visor = state.visor;
            if (salvo === "") {
                if (action.operacao !== "E") {
                    operacao = action.operacao;
                    salvo = visor;
                    visor = "0";
                }
            } else {
                let resultado = calcula(+salvo, operacao, +visor);
                if (action.operacao === "E") {
                    visor = resultado;
                    salvo = "";
                    operacao = "";
                } else {
                    salvo = resultado;
                    operacao = action.operacao;
                    visor = "0";
                }
            }
            return {
                ...state,
                visor: visor,
                salvo: salvo,
                operacao: operacao
            }
        case "calculadora/ImprimirNumero":
            return {
                ...state,
                visor: (state.visor === "0") ? action.numero : state.visor + action.numero
            }
        case "calculadora/Atualizar":
            return {
                ...state,
                visor: action.visor,
                salvo: action.salvo,
                operacao: action.operacao
            }
        case "calculadora/Deletar":
            let visormenos = state.visor.substring(0, state.visor.length - 1);
            visormenos = (visormenos === "") ? "0" : visormenos;
            return {
                ...state,
                visor: visormenos,
            }
        case "calculadora/Limpar":
            return inicial
        default:
            return state;
    }
}
export default reducer;