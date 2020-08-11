import React from 'react';
import logo from './img/g1.png';

function Header() {
    return (
        <header className="header" id="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="menu">
                <li className="item">
                    <a className="link" id="menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
                            <path fill="#ffffff" fill-rule="evenodd" d="M0 0h12v2H0V0zm0 6h10v2H0V6zm0 6h8v2H0v-2z" />
                        </svg> &nbsp;menu
                    </a>
                </li>
                <li className="item" id="escolherOpcao"></li>
                <li className="item"><a className="link href" href="#todos">Todos</a></li>
                <li className="item"><a className="link href" href="#top">Top Headlines por pais</a></li>
                <li className="item"><a className="link href" href="#favoritos">Favoritas</a></li>
            </ul>
        </header>
    );
}

export default Header;