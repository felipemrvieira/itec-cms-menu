import React, { Component } from 'react';
import './Menu.scss';


class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" id="nav-principal">
                <div className="container">

                <button id="hamburger-nav-principal" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Início</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Institucional</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Fotos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Vídeos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Downloads</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contato</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Integra</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Expresso</a>
                    </li>
                    </ul>
                
                    <div id="nav-social">
                    <div className="nav-social-icon" id="nav-facebook"></div>
                    <div className="nav-social-icon" id="nav-youtube"></div>
                    <div className="nav-social-icon" id="nav-twitter"></div>
                    <div className="nav-social-icon" id="nav-info"></div>
                    <div className="nav-social-icon" id="nav-eouv"></div>
                    </div>
                </div>
                </div>
            </nav>
        );
    }
}

export default Menu;
