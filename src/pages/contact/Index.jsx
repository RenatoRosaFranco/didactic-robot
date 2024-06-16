import React from 'react';
import './style.scss';

import ContactForm from '../../components/contactForm/Index';

const ContactPage = () => {
    return (
        <section id="contactPage">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="bold text-center">Contato</h1>
                        <p className='text-center'>Entre em contato conosco através do formulário abaixo</p>
                        <br />

                        <div className='col-md-6 col-md-offset-3'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;