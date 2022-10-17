import React, {useEffect, useState} from 'react';

// MEUS IMPORTS
import './style.css';
import imgCapaHeader from '../../assets/img-nanda-fashion003.jpg';
import Navbar from '../../components/navbar';

function Home(){
    

    return(
        <>
            <header >
                <Navbar />
                <div className='container-fluid p-0 banner-principal'>
                    <img src={imgCapaHeader} class="img-fluid banner-principal-img " alt="Imagem Capa" />
                    {
                        window.innerWidth > 800 ? <div class="banner-principal-saiba-mais-grende">
                                <a className="grande" href="">Saiba Mais</a>
                            </div>
                        :
                        null
                    }
                </div>
            </header>
        </>
    );
}

export default Home;