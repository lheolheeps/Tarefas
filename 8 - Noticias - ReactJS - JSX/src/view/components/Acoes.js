import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class Acoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorito: this.props.noticia.favorito,
            textoFavorito: (this.props.noticia.favorito) ? "Desfavoritar" : "Favoritar",
            corFavorito: (this.props.noticia.favorito) ? "red" : "black"
        }
    }

    desfavoritar() {
        this.setState((prevState) => {
            return {
                favorito: (prevState.favorito) ? false : true,
                textoFavorito: (prevState.textoFavorito === "Favoritar") ? "Desfavoritar" : "Favoritar",
                corFavorito: (prevState.corFavorito === "black") ? "red" : "black"
            }
        })
    }

    render() {
        return (
            <div className="acoes" >
                <a href={this.props.noticia.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPlusSquare} />
                &nbsp;Ver Mais
            </a>
                <hr />
                <span id={this.props.noticia.url} className="favorito"
                    onClick={() => {
                        this.props.controller.alteraFavorito(this.props.noticia);
                        this.desfavoritar();
                        console.log(this.state.favorito)
                        if (this.props.favoritos)
                            this.props.removeNoticia()
                    }}>
                    <FontAwesomeIcon icon={faHeart} color={this.state.corFavorito} />
                &nbsp;
                {this.state.textoFavorito}
                </span>
            </div>
        );
    }
}

export default Acoes;