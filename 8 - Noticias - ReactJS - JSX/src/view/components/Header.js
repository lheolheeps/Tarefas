import React from 'react';
import logo from '../../img/g1.png';

function Header(props) {
    return (
        <header className="header" id="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="menu">
                <li className="item">
                    <span className="link" id="menu" onClick={() => abreFechaMenu()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
                            <path fill="#ffffff" fillRule="evenodd" d="M0 0h12v2H0V0zm0 6h10v2H0V6zm0 6h8v2H0v-2z" />
                        </svg> &nbsp;menu
                    </span>
                </li>
                <li className="item" id="escolherOpcao"></li>
                <li className="item"><a className="link href" href="#todos" onClick={() => setTimeout(() => {props.controller.render()}, 100)}>Todos</a></li>
                <li className="item"><a className="link href" href="#top" onClick={() => setTimeout(() => {props.controller.render()}, 100)}>Top Headlines por pais</a></li>
                <li className="item"><a className="link href" href="#favoritos" onClick={() => setTimeout(() => {props.controller.render()}, 100)}>Favoritas</a></li>
            </ul>
        </header>
    );
}

function abreFechaMenu() {
    let header = document.getElementById('header');
    if (header.style.height === "auto") {
        header.removeAttribute("style");
    } else {
        header.style.height = "auto";
    }
}

export default Header;