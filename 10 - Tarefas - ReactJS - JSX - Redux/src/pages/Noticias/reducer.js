import ObjNoticia from "../../services/Noticia";
import NoticiaDAO from '../../services/NoticiaDAO';

const inicial = {
    noticias: [],
    vazio: false,
    busca: undefined,
}

const reducer = (state = inicial, action) => {
    switch (action.type) {
        case "noticias/GerenciarFavoritos":
            return {
                ...state,
                // noticias: noticias
            }
        default:
            return state;
    }
}
export default reducer;