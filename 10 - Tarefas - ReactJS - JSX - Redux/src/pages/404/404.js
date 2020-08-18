import React from 'react';
import "./style.css";

class Erro404 extends React.Component {
    render() {
        return (
            <main className="container">
                <div className="erro">
                    <h1 className="titulo">ERRO 404</h1>
                    <h1 className="titulo">Pagina Não Encontrada</h1>
                </div>
            </main>
        );
    }
}

export default Erro404;