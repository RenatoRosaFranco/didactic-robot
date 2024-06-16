import React from 'react';
import './style.scss';

const Header = () => {
    return (
        <section id='header'>
            <nav className="navbar navbar-default">
                <div className="container container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand bold" href="/">ThunderBot</a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="/">Início</a></li>
                            <li><a href="/about">Quem Somos</a></li>
                            <li><a href="/partnership">Parcerias</a></li>
                            <li><a href="/contact">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;