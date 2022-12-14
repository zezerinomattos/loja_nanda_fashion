import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';

import visa from '../../assets/visa-icon.png';
import master from '../../assets/master-icon.png';
import amex from '../../assets/amex-icon.png';
import elo from '../../assets/elo.png';
import hipper from '../../assets/hipper.png';
import pix from '../../assets/pix.png';
import samsung from '../../assets/samsungplay.png';

function Footer(){

    const [mediaTela, setMediaTela] = useState();

    useEffect(() => {
        //window.innerWidth > 800 ? <TelaGrande /> : <TelaPequena /> 
        window.innerWidth > 800 ? setMediaTela('grande') : setMediaTela('pequena');
    }, []);

    const TelaGrande = () => {

        return(
            <footer class="footer container-fluid">
                <div className='container my-3 footer-mestre'>
                    <div className='flex-columm footer-mestre-nav'>
                        <h1 className='h5 mt-3'>NAVEGAÇÃO</h1>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/produtos">Produtos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-mestre-cartoes'>
                        <h1 className='h5 mt-3'>NAVEGAÇÃO</h1>
                        <ul className='d-flex nav mt-2 cartoes-credito'>
                            <li className='mx-2 my-2 '><img src={visa} alt="imagem de cartão de credito" /></li>
                            <li><img src={master} alt="imagem de cartão de credito" /></li>
                            <li><img src={amex} alt="imagem de cartão de credito" /></li>
                            <li><img src={elo} alt="imagem de cartão de credito" /></li>
                            <li><img src={hipper} alt="imagem de cartão de credito" /></li>
                            <li><img src={pix} alt="imagem de cartão de credito" /></li>
                            <li><img src={samsung} alt="imagem de cartão de credito" /></li>
                        </ul>
                    </div>

                    <div className='flex-columm footer-mestre-nav'>
                        <h1 className='h5 mt-3'>CONTATO</h1>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <i class="fa-brands fa-whatsapp"></i> 48991589625
                            </li>
                            <br/>
                            <li class="nav-item">
                                <i class="fa-brands fa-instagram"></i> @nanda_fashion_roupas
                            </li>
                            <br/>
                            <li class="nav-item">
                                <i class="fa-solid fa-envelope"></i> nanda.buenop@homail.com
                            </li>
                            <br/>
                            <li class="nav-item">
                                <i class="fa-solid fa-location-dot"></i> Rua 4 quadra E Lote 5 Araranguá-SC Brasil
                            </li>
                        </ul>
                    </div>

                </div>
                <p className='mt-5 text-center'><a class="nav-link" href="https://zezerino.com.br/">Copyright ©2022 Zezerino Dev</a></p>
            </footer>
        );

    }

    const TelaPequena = () =>{
        return(
            <footer class="pequeno footer navbar-fixed-bottom container-fluid">
                <div className='container my-3 footer-mestre-pequeno'>
                    <div className='flex-columm footer-mestre-nav mt-3'>
                        <h1 className='h5 my-3'>NAVEGAÇÃO</h1>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/produtos">Produtos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-mestre-cartoes-pequeno mt-5'>
                        <h1 className='h5 my-3'>FORMAS DE PAGAMENTO</h1>
                        <ul className='d-flex nav mt-2 cartoes-credito-pequeno'>
                            <li className='mx-2 my-2 '><img src={visa} alt="imagem de cartão de credito" /></li>
                            <li><img src={master} alt="imagem de cartão de credito" /></li>
                            <li><img src={amex} alt="imagem de cartão de credito" /></li>
                            <li><img src={elo} alt="imagem de cartão de credito" /></li>
                            <li><img src={hipper} alt="imagem de cartão de credito" /></li>
                            <li><img src={pix} alt="imagem de cartão de credito" /></li>
                            <li><img src={samsung} alt="imagem de cartão de credito" /></li>
                        </ul>
                    </div>

                    <div className='flex-columm footer-mestre-nav mt-5'>
                        <h1 className='h5 my-3'>CONTATO</h1>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <i class="fa-brands fa-whatsapp"></i> 48991589625
                            </li>
                            <br/>
                            <li class="nav-item">
                                <i class="fa-brands fa-instagram"></i> @nanda_fashion_roupas
                            </li>
                            <br/>
                            <li class="nav-item">
                                <i class="fa-solid fa-envelope"></i> nanda.buenop@homail.com
                            </li>
                            <br/>
                            <li class="nav-item">
                                <i class="fa-solid fa-location-dot"></i> Rua 4 quadra E Lote 5 Araranguá-SC Brasil
                            </li>
                        </ul>
                    </div>

                </div>
                <p className='mt-5'><a class="nav-link" href="https://zezerino.com.br/">Copyright ©2022 Zezerino Dev</a></p>
            </footer>
        );
    }


    return(
        <>
            {mediaTela === 'grande' && <TelaGrande /> }
            {mediaTela === 'pequena' && <TelaPequena /> }
        </>
        
    );
}

export default Footer;