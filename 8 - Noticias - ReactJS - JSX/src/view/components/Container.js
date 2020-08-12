import React from 'react';
import Card from './Card';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: props.noticias,
        };
        this.removeNoticia = this.removeNoticia.bind(this);
    }

    removeNoticia(index) {
        console.log(index);
        this.setState((prevState) => {
            let noticias = prevState.noticias;
            noticias.splice(index, 1);
            return {
                noticias: noticias,
            }
        })
    }

    render() {
        return (
            <main className="container">
                <h1 className="titulo">Noticias do Brasil <span id="favorito"><br />Favoritos</span></h1>
                <section className="noticias" id="noticias">
                    {this.state.noticias.map((noticia, index) => {
                        return <Card key={index} favoritos={this.props.favoritos} removeNoticia = {() => {this.removeNoticia(index)}} noticia={noticia} controller={this.props.controller} />
                    })}
                </section>
            </main>
        );
    }
}

export default Container;