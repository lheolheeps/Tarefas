import mock from './mock';
import Helper from './helper';

const inicial = {
    usuario: undefined,
    transacoes: [],
    pessoas: [],
    falha: false,
    id: '9',
}

const reducer = (state = inicial, action) => {
    let transacoes = [...state.transacoes];
    let usuario = state.usuario;
    let novaTransacao = {};
    let date = new Date();
    let dataAtual = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    switch (action.type) {
        case 'login/Logar':
            if (action.login === "(47) 99269-1973" && action.senha === "proway") {
                return {
                    ...state,
                    usuario: mock.usuario,
                    transacoes: mock.transacoes,
                    pessoas: mock.pessoas,
                }
            } else {
                return {
                    ...state,
                    falha: true,
                }
            }
        case 'login/Reset':
            return {
                ...state,
                falha: false,
            }
        case 'deposito/Depositar':
            novaTransacao = {
                id: ++state.id,
                tipo: 1,
                nome: "Deposito por boleto",
                origem: "",
                valor: Helper.retiraR$(action.valor),
                data: dataAtual
            }
            transacoes.unshift(novaTransacao);
            usuario.saldo = Helper.calculaBR(usuario.saldo, '+', Helper.retiraR$(action.valor));
            return {
                ...state,
                transacoes: transacoes,
                usuario: usuario,
                id: novaTransacao.id
            }
        case 'transferencia/Transferir':
            novaTransacao = {
                id: ++state.id,
                tipo: 4,
                nome: "Transferencia Enviada",
                origem: action.nome,
                valor: Helper.retiraR$(action.valor),
                data: dataAtual
            }
            transacoes.unshift(novaTransacao);
            usuario.saldo = Helper.calculaBR(usuario.saldo, '-', Helper.retiraR$(action.valor));
            return {
                ...state,
                transacoes: transacoes,
                usuario: usuario,
                id: novaTransacao.id
            }
        case 'boleto/Pagar':
            novaTransacao = {
                id: ++state.id,
                tipo: 2,
                nome: "Pagamento de Boletos",
                origem: action.nome,
                valor: Helper.retiraR$(action.valor),
                data: dataAtual
            }
            transacoes.unshift(novaTransacao);
            usuario.saldo = Helper.calculaBR(usuario.saldo, '-', Helper.retiraR$(action.valor));
            return {
                ...state,
                transacoes: transacoes,
                usuario: usuario,
                id: novaTransacao.id
            }
        case 'perfil/Deslogar':
            return {
                ...state,
                usuario: undefined,
                transacoes: []
            }
        default:
            return state;
    }
}

export default reducer;