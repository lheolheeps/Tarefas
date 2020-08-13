import React from 'react';
import Card from './Card';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: props.noticias,
        };
    }

    removeNoticia(index) {
        let noticias = this.state.noticias;
        noticias.splice(index, 1);
        this.setState({
            noticias: noticias
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.noticias !== prevProps.noticias) {
            this.setState({
                noticias: this.props.noticias,
            });
        }
    }

    render() {
        return (
            <main className="container">
                <h1 className="titulo">Noticias do Brasil <span id="favorito"><br />Favoritos</span></h1>
                <section className="noticias" id="noticias">
                    {this.state.noticias.map((noticia, index) => {
                        return <Card key={noticia.url} favoritos={this.props.favoritos} removeNoticia={() => { this.removeNoticia(index) }} noticia={noticia} controller={this.props.controller} />
                    })}
                </section>
            </main>
        );
    }
}

export default Container;