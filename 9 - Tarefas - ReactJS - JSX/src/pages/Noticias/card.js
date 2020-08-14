import React from 'react';
import imgBlank from "../../img/blank.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faHeart } from '@fortawesome/free-solid-svg-icons';

class Card extends React.Component {
    render() {
        return (
            <div className="noticia">
                <img src={this.props.noticia.urlImg !== null ? this.props.noticia.urlImg : imgBlank}
                    onError={(e) => { e.target.src = imgBlank; }} alt={this.props.noticia.titulo} />
                <div className="corpo">
                    <span>Publicado em {this.props.noticia.dataFormatada()}</span><br />
                    <span>{this.props.noticia.autorMaisCanal()}</span>
                    <h3>{this.props.noticia.titulo}</h3>
                    <p>{this.props.noticia.descricao}</p>
                </div>
                <hr />
                <div className="acoes" >
                    <a href={this.props.noticia.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPlusSquare} />
                        &nbsp; Ver Mais
                    </a>
                    <hr />
                    <span className="favorito" onClick={() => this.props.gerenciarFavoritos(this.props.noticia) }>
                        {(this.props.noticia.favorito) ? "Desfavoritar" : "Favoritar"} &nbsp;
                        <FontAwesomeIcon icon={faHeart} color={(this.props.noticia.favorito) ? "red" : "black"} />
                    </span>
                </div>
            </div>
        );
    }
}

export default Card;