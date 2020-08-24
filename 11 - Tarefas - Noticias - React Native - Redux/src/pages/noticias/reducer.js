import Noticia from "../../services/Noticia";
const mock = [{autor: "Tom McKay",canal: "Uol.com.br",conteudo: "Donald Trump — que certa vez exigiu que o ex-funcionário da NSA Edward Snowden fosse executado por vazar informações confidenciais sobre o sistema distópico de vigilância de cidadãos norte-americanos… [+4243 chars]",data: "2020-08-1613:56:10",descricao: "Donald Trump disse ter pensado que Snowden 'não foi tratado com justiça' após um pedido do parlamentar republicano Thomas Massie para finalmente perdoá-lo.↵The post Trump dá a entender que pode conceder perdão a Snowden appeared first on Gizmodo Brasil.",favorito: true,titulo: "Trump dá a entender que pode conceder perdão a Snowden",url: "https://gizmodo.uol.com.br/trump-da-a-entender-perdao-snowden/",urlImg: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/08/edward-snowden-livro-permanent-record-Justin-Sullivan-Getty-Images1-1000x563.jpg",},{autor: "Lucas Ferraz",canal: "The Intercept",conteudo: "De Roma a Washington, de Moscou a Paris, de Budapeste a Brasília, a geografia política e religiosa da extrema direita que ascendeu nos últimos anos contém um particular denominador comum: a instrum…[+18405 chars]",data: "2020-07-2704:02:02",descricao: "Em livro recém-publicado, vaticanista Iacopo Scaramuzzi mostra como a religião católica fundamenta e orienta a direita global↵The post Entrevista: como a religião católica fundamenta e orienta a direita global appeared first on The Intercept.",favorito: true,titulo: "Entrevista: como a religião católica fundamenta e orienta a direita global",url: "https://theintercept.com/2020/07/27/entrevista-direita-populista-usa-cristianismo-para-criar-sentido-comum-e-respeitabilidade/",urlImg: "https://theintercept.com/wp-uploads/sites/1/2020/07/GettyImages-1227692780-redes.jpg",}];
const fav = []
mock.forEach(element => {
    let noticia = new Noticia(element.autor, element.titulo, element.descricao, element.url, element.urlImg, element.data, element.conteudo, element.canal, element.favorito);
    fav.push(noticia);
});

const inicial = {
    noticias: [],
    favoritos: [],
    vazio: false,
    busca: undefined,
    tipo: "pais",
    primeira: true
}

const reducer = (state = inicial, action) => {
    switch (action.type) {
        case "noticias/GerenciarFavoritos":
            let noticias = [...state.noticias];
            let favoritos = [...state.favoritos];
            if (state.tipo === "favoritos") {
                noticias.splice(action.index, 1);
                favoritos.splice(action.index, 1);
            } else {
                noticias[action.index].favorito = (noticias[action.index].favorito) ? false : true;
                favoritos.push(noticias[action.index]);
            }
            return {
                ...state,
                noticias: noticias,
                favoritos: favoritos
            }
        case "noticias/Atualizar":
            let novasNoticias = [...action.noticias];
            return {
                ...state,
                noticias: novasNoticias,
                vazio: action.vazio,
                busca: action.busca,
                tipo: action.tipo,
                primeira: action.primeira
            }
        default:
            return state;
    }
}
export default reducer;