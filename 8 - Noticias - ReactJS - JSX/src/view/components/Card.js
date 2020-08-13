import React from 'react';
import imgBlank from "../../img/blank.png";
import Acoes from "./Acoes";

class Card extends React.Component {
    render() {
        return (
            <div className="noticia" >
                <img src={this.props.noticia.urlImg !== null ? this.props.noticia.urlImg : imgBlank}
                    onError={(e) => { e.target.src = imgBlank; }} alt={this.props.noticia.titulo} />
                <div className="corpo">
                    <span>Publicado em {this.props.noticia.dataFormatada()}</span><br />
                    <span>{this.props.noticia.autorMaisCanal()}</span>
                    <h3>{this.props.noticia.titulo}</h3>
                    <p>{this.props.noticia.descricao}</p>
                </div>
                <hr />
                <Acoes favoritos={this.props.favoritos} removeNoticia = {this.props.removeNoticia} noticia={this.props.noticia} controller={this.props.controller} />
            </div>
        );
    }
}

export default Card;