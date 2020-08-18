import React, { useEffect } from 'react';
import './style.css';
import Card from './card';
import NewsApi from "../../services/NewsApi";
import Noticia from "../../services/Noticia";
import NoticiaDAO from "../../services/NoticiaDAO";
import Helper from "../../services/helper";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Noticiass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: [],
            vazio: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.obterNoticias();
        }, '1500');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tipo !== this.props.tipo) {
            this.setState({
                noticias: [],
                vazio: false
            });
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
        let vazio = false;
        if (this.props.tipo === "favoritos") {
            noticiaDAO.listar((lista) => {
                lista.sort((a, b) => Helper.sortAscending(a, b, "data"));
                noticias = lista;
                if (noticias.length === 0)
                    vazio = true;
                this.setState({
                    noticias: noticias,
                    vazio: vazio,
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
                if (noticias.length === 0)
                    vazio = true;
                this.setState({
                    noticias: noticias,
                    vazio: vazio
                })
            });
        }
    }

    buscar(value) {
        this.setState({
            noticias: [],
            vazio: false,
            busca: value
        });
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
                <div className="opcoes">
                    {(this.state.noticias.length === 0) ? (this.state.vazio) ? "Nenhuma Noticia Encontrada" : "Buscando Noticias" : ""}
                </div>
                <section className="noticias" id="noticias">
                    {this.state.noticias.map((noticia, index) => {
                        return <Card key={noticia.url} noticia={noticia} gerenciarFavoritos={(noticia) => { this.gerenciarFavoritos(noticia, index) }} />
                    })}
                </section>
            </main>
        );
    }
}

async function obterNoticias(tipo, busca, callback) {
    let noticiaDAO = new NoticiaDAO();
    let noticias = [];
    let vazio = false;
    if (tipo === "favoritos") {
        noticiaDAO.listar((lista) => {
            lista.sort((a, b) => Helper.sortAscending(a, b, "data"));
            noticias = lista;
            if (noticias.length === 0)
                vazio = true;
            return {
                noticias: noticias,
                vazio: vazio,
                busca: undefined
            }
        });
    } else {
        noticiaDAO.listar(async (favoritos) => {
            let newsApi = new NewsApi();
            let json = [];
            if (tipo === "pais") {
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
            let array = {
                noticias: noticias,
                vazio: vazio
            }
        });
    }
}

const Noticias = (props) => {

    useEffect(() => {
        setTimeout(async () => {
            let dados = await obterNoticias(props.tipo, props.busca);
            console.log(dados)
            // props.dispatch({ type: 'noticias/Atualizar', noticias: dados.noticias, vazio: dados.vazio });
        }, '1500');
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
                                props.dispatch({ type: "noticias/Buscar" })
                        }}
                    />)
                    : (props.tipo === "pais") ?
                        (<select onChange={(e) => { props.dispatch({ type: "noticias/Buscar" }) }}>
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
                    return <Card key={noticia.url} noticia={noticia} index={index} />
                })}
            </section>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        noticias: state.NoticiasReducer.noticias
    }
}

export default connect(mapStateToProps)(Noticias);
// export default Noticiass;