import React from 'react';
import Helper from "../../helper/helper";
import imgBlank from "../../img/blank.png";
import Acoes from "./Acoes";

function Card(props) {
    let autor = (props.noticia.autor) ? props.noticia.autor + " - " + props.noticia.canal : props.noticia.canal;
    props.noticia.data = Helper.formataDataHoraTela(props.noticia.data);
    return (
        <div className="noticia">
            <img src={props.noticia.urlImg !== null ? props.noticia.urlImg : imgBlank} 
            onError = {(e) => { e.target.src = imgBlank; }} alt={props.noticia.titulo} />
            <div className="corpo">
                <span>Publicado em {props.noticia.data}</span><br />
                <span>{autor}</span>
                <h3>{props.noticia.titulo}</h3>
                <p>{props.noticia.descricao}</p>
            </div>
            <hr />
            <Acoes noticia={props.noticia} controller={props.controller} />
        </div>
    );
}

export default Card;