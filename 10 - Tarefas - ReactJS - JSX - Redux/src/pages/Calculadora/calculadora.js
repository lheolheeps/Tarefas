import React from 'react';
import './style.css';
import { connect } from 'react-redux';

const Calculadora = (props) => {
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
                            <td style={{ textAlign: "right", borderBottom: "none", borderRight: "none" }} colSpan="3">{props.salvo}</td>
                            <td style={{ borderLeft: "none", borderBottom: "none" }}>{props.operacao}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "right", borderTop: "none" }} colSpan="4">{props.visor}</td>
                        </tr>
                        <tr>
                            <td onClick={() => props.dispatch({ type: "calculadora/Limpar" })}>c</td>
                            <td onClick={() => props.dispatch({ type: "calculadora/Deletar" })}>del</td>
                            <td className="operacoes" onClick={() => props.dispatch({ type: "calculadora/ImprimirResultado", operacao: "/" })}>/</td>
                            <td className="operacoes" onClick={() => props.dispatch({ type: "calculadora/ImprimirResultado", operacao: "*" })}>*</td>
                        </tr>
                        <tr>
                            <td className="numeros" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "7" })}>7</td>
                            <td className="numeros" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "8" })}>8</td>
                            <td className="numeros" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "9" })}>9</td>
                            <td className="operacoes" onClick={() => props.dispatch({ type: "calculadora/ImprimirResultado", operacao: "-" })}>-</td>
                        </tr>
                        <tr>
                            <td className="numeros" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "4" })}>4</td>
                            <td className="numeros" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "5" })}>5</td>
                            <td className="numeros" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "6" })}>6</td>
                            <td className="operacoes" onClick={() => props.dispatch({ type: "calculadora/ImprimirResultado", operacao: "+" })}>+</td>
                        </tr>
                        <tr>
                            <td className="numeros" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "1" })}>1</td>
                            <td className="numeros" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "2" })}>2</td>
                            <td className="numeros" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "3" })}>3</td>
                            <td className="operacoes" style={{ padding: 0, verticalAlign: "top" }} rowSpan="2" onClick={() => props.dispatch({ type: "calculadora/ImprimirResultado", operacao: "E" })}>enter</td>
                        </tr>
                        <tr>
                            <td className="numeros" colSpan="2" onClick={() => props.dispatch({ type: "calculadora/ImprimirNumero", numero: "0" })}>0</td>
                            <td id=".">.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        visor: state.CalculadoraReducer.visor,
        operacao: state.CalculadoraReducer.operacao,
        salvo: state.CalculadoraReducer.salvo
    }
};

export default connect(mapStateToProps)(Calculadora);