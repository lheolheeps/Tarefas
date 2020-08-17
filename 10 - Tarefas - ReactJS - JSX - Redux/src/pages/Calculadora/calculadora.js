import React from 'react';
import './style.css';

class Tarefas extends React.Component {

    render() {
        return (
            <main className="container">
                <section className="calculadora">
                    <table id="calculadora" cellSpacing="0">
                        <thead>
                            <tr>
                                <th colSpan="4"> Calculadora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontSize: "1rem" }}>
                                <td id="salvo" style={{ textAlign: "right", borderBottom: "none", borderRight: "none" }} colSpan="3"></td>
                                <td id="operacao" style={{ borderLeft: "none", borderBottom: "none" }}></td>
                            </tr>
                            <tr>
                                <td id="visor" style={{ textAlign: "right", borderTop: "none" }} colSpan="4">0</td>
                            </tr>
                            <tr>
                                <td id="C">c</td>
                                <td id="D">del</td>
                                <td className="operacoes" id="/">/</td>
                                <td className="operacoes" id="*">*</td>
                            </tr>
                            <tr>
                                <td className="numeros" id="7">7</td>
                                <td className="numeros" id="8">8</td>
                                <td className="numeros" id="9">9</td>
                                <td className="operacoes" id="-">-</td>
                            </tr>
                            <tr>
                                <td className="numeros" id="4">4</td>
                                <td className="numeros" id="5">5</td>
                                <td className="numeros" id="6">6</td>
                                <td className="operacoes" id="+">+</td>
                            </tr>
                            <tr>
                                <td className="numeros" id="1">1</td>
                                <td className="numeros" id="2">2</td>
                                <td className="numeros" id="3">3</td>
                                <td className="operacoes" style={{ padding: 0, verticalAlign: "top" }} id="E" rowSpan="2">enter</td>
                            </tr>
                            <tr>
                                <td className="numeros" id="0" colSpan="2">0</td>
                                <td id=".">.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        );
    }
}

export default Tarefas;