import React from 'react';
import activitiesData from '../../data/activities.json';
import './style.scss';

const AboutPage = () => {
    let activities = activitiesData;

    return (
        <section id="aboutPage">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="bold text-center">Quem Somos</h1>
                        <p className='text-center'>Conheça um pouco de nossa história.</p>
                        <br />

                        <div className="row">
                            <div className="col-md-6"><br />
                                <h3 className="bold">Pioneiros na Área</h3>
                                <p>O ThunderBot é o primeiro grupo de Robótica de São Borja.</p>
                                <br />

                                <p className='formatted'>
                                    O objetivo principal do grupo é a pesquisa e o desenvolvimento
                                    de tecnologias associadas à robótica e a aplicação nos complexos
                                    ambientes de robótica de competição.
                                </p>
                            </div>

                            <div className="col-md-6">
                                <div className="well"></div>
                                <h4 className="bold text-center">ThunderBot</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 text-center">
                                <a href='https://instagram.com/thunderbot' className='btn btn-primary btn-lg'>
                                    Saiba mais
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row what-we-do">
                    <div className="col-md-12">
                        <h1 className="bold text-center">O que fazemos</h1>
                        <p className='text-center'>Conheça as atividades as quais nos dedicamos.</p>
                        <br />

                        <div className='row'>
                            <div className="col-md-12">
                                <div className="row">
                                    {activities.map((activity) => (
                                        <div className='col-md-2 text-center' key={activity.id}>
                                            <div className='panel panel-default'>
                                                <div className="panel-body">
                                                    <h2 className="bold"><i className={activity.icon}/></h2>
                                                    <h4 className="bold">{activity.name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;