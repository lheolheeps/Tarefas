import React from 'react';
import './style.css';
import Card from './card';
import NewsApi from "../../services/NewsApi";
import Noticia from "../../services/Noticia";
import NoticiaDAO from "../../services/NoticiaDAO";
import Helper from "../../services/helper";
import { Link } from 'react-router-dom';

class Noticias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: [],
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.obterNoticias();
        }, '1500');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tipo !== this.props.tipo) {
            this.state.noticias = [];
            this.setState({});
            setTimeout(() => {
                this.obterNoticias();
            }, '1500');
        }
    }

    gerenciarFavoritos(noticia, index) {
        let noticiaDAO = new NoticiaDAO();
        if (noticia.favorito) {
            noticiaDAO.excluir(noticia.url);
        } else {
            noticiaDAO.inserir(noticia);
        }
        let noticias = this.state.noticias;
        if (this.props.tipo === "favoritos") {
            noticias.splice(index, 1);
        } else {
            noticias[index].favorito = (noticias[index].favorito) ? false : true;
        }
        this.setState({
            noticias: noticias
        })
    }

    async obterNoticias() {
        let noticiaDAO = new NoticiaDAO();
        let noticias = [];
        if (this.props.tipo === "favoritos") {
            noticiaDAO.listar((lista) => {
                lista.sort((a, b) => Helper.sortAscending(a, b, "data"));
                noticias = lista;
                this.setState({
                    noticias: noticias,
                    busca: undefined
                })
            });
        } else {
            noticiaDAO.listar(async (favoritos) => {
                let newsApi = new NewsApi();
                let json = [];
                if (this.props.tipo === "pais") {
                    json = await newsApi.getHeadlines({ country: this.state.busca });
                } else {
                    json = await newsApi.getEverything({ q: this.state.busca });
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
                this.setState({
                    noticias: noticias
                })
            });
        }
    }

    buscar(value) {
        this.state.noticias = [];
        this.setState({});
        this.state.busca = value
        setTimeout(() => {
            this.obterNoticias();
        }, '1500');
    }

    render() {
        return (
            <main className="container container-noticias">
                <h1 className="titulo">{(this.props.tipo === "favoritos") ? "Noticias Favoritas" : "Ultimas Noticias"}</h1>
                <div className="opcoes">
                    <Link className="linkOpcoes" to="/noticias/pais" >Pais</Link>
                    -
                    <Link className="linkOpcoes" to="/noticias/pesquisa" >Pesquisa</Link>
                    -
                    <Link className="linkOpcoes" to="/noticias/favoritos" >Favoritas</Link>
                </div>
                <div className="opcoes">
                    {(this.props.tipo === "pesquisa") ?
                        (<input type="text" onKeyUp={(e) => { if (e.keyCode === 13) this.buscar(e.target.value) }} />)
                    : (this.props.tipo === "pais") ?
                        (<select onChange={(e) => { this.buscar(e.target.value) }}>
                            <option value="br">Brásil</option>
                            <option value="us">Estados Unidos</option>
                        </select>)
                    : ""}
                </div>
                <section className="noticias" id="noticias">
                    {(this.state.noticias.length === 0) ? "Buscando Noticias..." :
                        this.state.noticias.map((noticia, index) => {
                            return <Card key={noticia.url} noticia={noticia} gerenciarFavoritos={(noticia) => { this.gerenciarFavoritos(noticia, index) }} />
                        })}
                </section>
            </main>
        );
    }
}

export default Noticias;