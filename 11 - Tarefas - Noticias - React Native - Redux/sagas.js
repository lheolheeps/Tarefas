import { call, put, takeLatest } from 'redux-saga/effects';
import NewsApi from './src/services/NewsApi';
import Helper from './src/services/helper';
import Noticia from './src/services/Noticia';

function* obterNoticias(action) {
    let noticias = [];
    let vazio = false;
    if (action.tipo === "favoritos") {
        noticias = action.favoritos;
        noticias.sort((a, b) => Helper.sortAscending(a, b, "data"));
    } else {
        let json = [];
        json = (action.tipo === "pais") ? yield call(NewsApi.getHeadlines, { country: action.busca })
                                        : yield call(NewsApi.getEverything, { q: action.busca });
        json.articles.forEach(article => {
            let favorito = false;
            action.favoritos.forEach(noticia => {
                if (article.url === noticia.url)
                    favorito = true;
            })
            let noticia = new Noticia(article.author, article.title, article.description, article.url, article.urlToImage, Helper.retiraLetrasDataHora(article.publishedAt), article.content, article.source.name, favorito);
            noticias.push(noticia);
        });
    }
    if (noticias.length === 0)
        vazio = true;
    yield put({ type: 'noticias/Atualizar', noticias: noticias, vazio: vazio, busca: action.busca, tipo: action.tipo, primeira: false });
}

function* saga() {
    yield takeLatest("noticias/Obter", obterNoticias);
}

export default saga;