import React from 'react';
import Card from './Card';

function Container(props) {
    return (
        <main className="container">
            <h1 className="titulo">Noticias do Brasil <span id="favorito"><br />Favoritos</span></h1>
            <section className="noticias" id="noticias">
                {props.noticias.map((noticia, index) => {
                    return <Card key={index} noticia={noticia} controller={props.controller} />
                })}
            </section>
        </main>
    );
}

export default Container;