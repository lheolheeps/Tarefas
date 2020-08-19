import React from 'react';
import logo from '../../img/keep.png';
import './style.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    abreFechaMenu() {
        let header = document.getElementById('header');
        if (header.style.height === "auto") {
            header.removeAttribute("style");
        } else {
            header.style.height = "auto";
        }
    }

    render() {
        return (
            <header className="header" id="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="menu">
                    <li className="item">
                        <span className="link" id="menu" onClick={() => this.abreFechaMenu()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
                                <path fill="#ffffff" fillRule="evenodd" d="M0 0h12v2H0V0zm0 6h10v2H0V6zm0 6h8v2H0v-2z" />
                            </svg> &nbsp;menu
                    </span>
                    </li>
                    <li className="item">
                        <Link className="link href" to="/tarefas">Tarefas</Link>
                    </li>
                    <li className="item">
                        <Link className="link href" to="/calculadora">Calculadora</Link>
                    </li>
                    <li className="item">
                        <Link className="link href" to="/noticias">Noticias</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;