import React, { useEffect } from 'react';
import './style.css';
import Card from './card';
import NewsApi from "../../services/NewsApi";
import Noticia from "../../services/Noticia";
import NoticiaDAO from "../../services/NoticiaDAO";
import Helper from "../../services/helper";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

async function obterNoticias(props, busca = undefined) {
    let noticiaDAO = new NoticiaDAO();
    let noticias = [];
    let vazio = false;
    if (props.tipo === "favoritos") {
        noticiaDAO.listar((lista) => {
            lista.sort((a, b) => Helper.sortAscending(a, b, "data"));
            noticias = lista;
            if (noticias.length === 0)
                vazio = true;
            props.dispatch({ type: 'noticias/Atualizar', noticias: noticias, vazio: vazio, busca: undefined, tipo: props.tipo });
        });
    } else {
        noticiaDAO.listar(async (favoritos) => {
            let newsApi = new NewsApi();
            let json = [];
            if (props.tipo === "pais") {
                json = await newsApi.getHeadlines({ country: busca });
            } else {
                json = await newsApi.getEverything({ q: busca });
            }
            json.articles.forEach(article => {
                let favorito = false;
                favoritos.forEach(noticia => {
                    if (article.url === noticia.url)
                        favorito = true;
                })
                let noticia = new Noticia(article.author, article.title, article.description, article.url, article.urlToImage, Helper.retiraLetrasDataHora(article.publishedAt), article.content, article.source.name, favorito);
                noticias.push(noticia);
            });
            if (noticias.length === 0)
                vazio = true;
            props.dispatch({ type: 'noticias/Atualizar', noticias: noticias, vazio: vazio, busca: busca, tipo: props.tipo });
        });
    }
}

function buscar(props, busca){
    obterNoticias(props, busca);
}

const Noticias = (props) => {

    useEffect(() => {
        if (props.mudou) {
            obterNoticias(props);
        }
    })

    return (
        <main className="container container-noticias">
            <h1 className="titulo">{(props.tipo === "favoritos") ? "Noticias Favoritas" : "Ultimas Noticias"}</h1>
            <div className="opcoes">
                <Link className="linkOpcoes" to="/noticias/pais" >Pais</Link>
                -
                <Link className="linkOpcoes" to="/noticias/pesquisa" >Pesquisa</Link>
                -
                <Link className="linkOpcoes" to="/noticias/favoritos" >Favoritas</Link>
            </div>
            <div className="opcoes">
                {(props.tipo === "pesquisa") ?
                    (<input type="text"
                        onKeyUp={(e) => {
                            if (e.keyCode === 13)
                                buscar(props, e.target.value)
                        }}
                    />)
                : (props.tipo === "pais") ?
                    (<select onChange={(e) => { buscar(props, e.target.value) }}>
                        <option value="br">Brásil</option>
                        <option value="us">Estados Unidos</option>
                    </select>)
                : ""}
            </div>
            <div className="opcoes">
                {(props.noticias.length === 0) ? (props.vazio) ? "Nenhuma Noticia Encontrada" : "Buscando Noticias" : ""}
            </div>
            <section className="noticias" id="noticias">
                {props.noticias.map((noticia, index) => {
                    return <Card key={noticia.url + noticia.favorito} tipo={props.tipo} noticia={noticia} index={index} />
                })}
            </section>
        </main>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        noticias: state.NoticiasReducer.noticias,
        vazio: state.NoticiasReducer.vazio,
        busca: state.NoticiasReducer.busca,
        mudou: (state.NoticiasReducer.tipo !== ownProps.tipo) ? true : false
    }
}

export default connect(mapStateToProps)(Noticias);
// export default Noticiass;