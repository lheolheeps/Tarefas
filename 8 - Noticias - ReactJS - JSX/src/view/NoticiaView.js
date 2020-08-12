/** 
 * View das Noticias
 * 
 * Adiciona os metodos de interação dos botões
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Container from './components/Container';

class NoticiaView {

    constructor(controller) {
        this.section = document.getElementById('noticias');
        this.controller = controller;
    }

    /**
     * Responsavel por renderizar as noticias na tela
     * 
     * @param {Array} noticias
     */
    render(noticias, favoritos) {
        ReactDOM.render(
            <React.StrictMode>
                <Header controller={this.controller}/>
                <Container noticias={noticias} controller={this.controller}/>
            </React.StrictMode>,
            document.getElementById('body')
        );
    }

}

export default NoticiaView;