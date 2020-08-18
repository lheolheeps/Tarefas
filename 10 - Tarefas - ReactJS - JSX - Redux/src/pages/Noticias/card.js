import React from 'react';
import imgBlank from "../../img/blank.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const Card = (props) => {
    return (
        <div className="noticia">
            <img src={props.noticia.urlImg !== null ? props.noticia.urlImg : imgBlank}
                onError={(e) => { e.target.src = imgBlank; }} alt={props.noticia.titulo} />
            <div className="corpo">
                <span>Publicado em {props.noticia.dataFormatada()}</span><br />
                <span>{props.noticia.autorMaisCanal()}</span>
                <h3>{props.noticia.titulo}</h3>
                <p>{props.noticia.descricao}</p>
            </div>
            <hr />
            <div className="acoes" >
                <a href={props.noticia.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPlusSquare} />
                        &nbsp; Ver Mais
                    </a>
                <hr />
                <span className="favorito"
                    onClick={() => {
                        if (window.confirm("Deseja Desfavoritar esta Noticia?"))
                            props.dispatch({type: "noticias/GerenciarFavoritos", noticia: props.noticia, index: props.index});
                    }}>
                    {(props.noticia.favorito) ? "Desfavoritar" : "Favoritar"} &nbsp;
                        <FontAwesomeIcon icon={faHeart} color={(props.noticia.favorito) ? "red" : "black"} />
                </span>
            </div>
        </div>
    );
}

export default connect()(Card);