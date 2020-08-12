import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

function Acoes(props) {
    return (
        <div className="acoes">
            <a href={props.noticia.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPlusSquare} />
                &nbsp;Ver Mais
            </a>
            <hr />
            <span id={props.noticia.url} className="favorito" onClick={() => { props.controller.alteraFavorito(props.noticia); alterarFavorito(props.noticia.url) }}>
                <FontAwesomeIcon icon={faHeart} color={(props.noticia.favorito) ? "red" : "black"} />
                &nbsp;
                {(props.noticia.favorito) ? "Desfavoritar" : "Favoritar"}
            </span>
        </div>
    );
}

/**
 * Altera a cor do icone de favorito para melhor visualização do usuario
 * 
 * @param {String} url 
 */
function alterarFavorito(url) {
    let favoritar = document.getElementById(url);
    let iconFavorito = favoritar.children[0];
    let favorito = (iconFavorito.getAttribute('color') === "black");
    if (!favorito && window.location.hash === "#favoritos") {
        let noticia = favoritar.parentNode.parentNode;
        noticia.remove();
    } else {
        iconFavorito.setAttribute('color', favorito ? "red" : "black");
        favoritar.textContent = "";
        favoritar.append(iconFavorito);
        favoritar.append(favorito ? "Desfavoritar" : "Favoritar");
    }
}

export default Acoes;