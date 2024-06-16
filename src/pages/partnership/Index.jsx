import React from 'react';
import {Link } from "react-router-dom";
import './style.scss';

const PartnershipPage = () => {
    return(
        <section id="partnershipPage">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="bold text-center">Nossos Parceiros</h1>
                        <p className='text-center'>Conheça nossos parceiros nesta jornada.</p>
                        <br />

                        <div className='col-md-8 col-md-offset-2'>
                            <p className='well text-center'>
                                Ainda não possuimos parceiros,
                                <Link to='/contact'
                                      className='bold' style={{ marginLeft: 4}}>
                                    Deseja nos ajudar?</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnershipPage;