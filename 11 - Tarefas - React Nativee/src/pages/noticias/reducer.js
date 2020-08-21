const inicial = {
    noticias: [],
    favoritos: [],
    vazio: false,
    busca: undefined,
    tipo: undefined
}

const reducer = (state = inicial, action) => {
    switch (action.type) {
        case "noticias/GerenciarFavoritos":
            let noticias = [...state.noticias];
            if (state.tipo === "favoritos") {
                noticias.splice(action.index, 1);
            } else {
                noticias[action.index].favorito = (noticias[action.index].favorito) ? false : true;
            }
            return {
                ...state,
                noticias: noticias
            }
        case "noticias/Atualizar":
            let novasNoticias = [...action.noticias];
            return {
                ...state,
                noticias: novasNoticias,
                vazio: action.vazio,
                busca: action.busca,
                tipo: action.tipo
            }
        default:
            return state;
    }
}
export default reducer;