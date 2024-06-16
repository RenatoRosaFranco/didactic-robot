import React from 'react';
import './style.scss';

const Footer = () => {
    return(
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <h3 className="bold">Siga nossas redes sociais</h3>
                            <ul className="list-unstyled list-inline social">
                                <li>
                                    <a href="https://www.facebook.com/thunderbot">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                <a href="https://www.instagram.com/thunderbot">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/thunderbot">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/thunderbot">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul className="list-unstyled links">
                                <li><a href='https://thunderbot.org/files/policy-privacy.pdf'>Política de
                                    Privacidade</a></li>
                                <li><a href='https://thunderbot.org/files/terms-of-use.pdf'>Termos de Uso</a></li>
                                <li><a href='https://thunderbot.org/files/security.pdf'>Segurança</a></li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5 className='bold'>
                                <i className="fa-regular fa-envelope" style={{ marginRight: 5 }}></i>
                                contato@thunderbot.org
                            </h5>
                            <h5 className='bold'>
                                <i className="fa-solid fa-phone" style={{ marginRight: 5 }}></i>
                                +55 (55) 99627-6161
                            </h5>
                            <br/>

                            <div className="location">
                                <h4 className="bold">
                                    <i className="fa-solid fa-location-dot" style={{ marginRight: 5}}></i>
                                    Localização
                                </h4>
                                <p>São Borja, RS</p>
                                <p>R. Candido Falcão, 1155</p>
                                <p>CEP: 97670-000</p>
                            </div>
                            <br/>

                            <p>&copy; 2024 -
                                <span className='bold'>
                                    ThunderBot
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;